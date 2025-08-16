import { ChangeEvent, useCallback } from "react";
import {SimpleState, UseAppStateType} from "@/types/default.ts";

export interface TextFieldProps<T = HTMLInputElement> extends React.DetailedHTMLProps<React.InputHTMLAttributes<T>, T> {
  id?: string;
  label?: string
  labelAsPlaceholder?: boolean;
  state: UseAppStateType<string> | SimpleState<string>;
  info?: string
  withoutBorder?: boolean;
}

function TextField(props: TextFieldProps) {

  const {id = "", label = "", state, labelAsPlaceholder, info, withoutBorder, ...inputProps} = props;
  const [value, onChange] = state;
  const saveValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }, [onChange]);

  return (<div className={"input-field-container input-field-container-text" + (withoutBorder?" without-border":"")}>
      {label && <label htmlFor={label}>{label}</label>}
      <input id={id ? id: label} name={id ? id: label}  type={"text"} onChange={saveValue} value={value} autoComplete={"off"}
             placeholder={labelAsPlaceholder ? label : inputProps.placeholder} {...inputProps}/>
      <span className={"info-text" + (!!info?" visible":"")}>{info}</span>
    </div>
  )
}

export default TextField
