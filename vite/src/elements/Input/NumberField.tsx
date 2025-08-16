import {ChangeEvent, useCallback} from "react";
import {SimpleState, UseAppStateType} from "@/types/default.ts";

export interface TextFieldProps<T = HTMLInputElement> extends React.DetailedHTMLProps<React.InputHTMLAttributes<T>, T> {
  id?: string;
  label?: string
  labelAsPlaceholder?: boolean;
  state: UseAppStateType<number> | SimpleState<number>;
  info?: string
  withoutBorder?: boolean;
  min?: number
  max?: number
}

function NumberField(props: TextFieldProps) {

  const {
    id = "", label = "", state, labelAsPlaceholder, info, withoutBorder,
    min = 0, max = 99999,
    ...inputProps
  } = props;
  const [value, onChange] = state;

  const saveValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value.replace(/[^0-9]/g, '') || 0);

    let securedValue = 0;
    if (newValue !== undefined && !isNaN(newValue)) {
      securedValue = Math.min(Math.max(newValue, min), max)
    }
    console.log("securedValue", securedValue, newValue)
    onChange(securedValue)
  }, [onChange]);

  return (
    <div className={"input-field-container input-field-container-number" + (withoutBorder ? " without-border" : "")}>
      {label && <label htmlFor={label}>{label}</label>}
      <input id={id ? id : label} name={id ? id : label} type={"number"} onChange={saveValue} value={value}
             autoComplete={"off"}
             placeholder={labelAsPlaceholder ? label : inputProps.placeholder} {...inputProps}/>
      <span className={"info-text" + (!!info ? " visible" : "")}>{info}</span>
    </div>
  )
}

export default NumberField
