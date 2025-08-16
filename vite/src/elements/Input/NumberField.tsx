import {SimpleState, UseAppStateType} from "@/types/default.ts";
import {useEditingInput} from "@/state/hooks/useEditingInput.ts";
import {shadowUseAppState} from "@/state/useAppState.ts";

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
  const [value, setValue] = state;

  const setSecuredValue = (value: string) => {
    const newValue = Number(value.replace(/[^0-9,-]/g, '') || 0);

    let securedValue = 0;
    if (newValue !== undefined && !isNaN(newValue)) {
      securedValue = Math.min(Math.max(newValue, min), max)
    }
    return "" + securedValue;
  };


  const {
    onChange,
    onInputFocus,
    onInputLeave,
    formatValue,
  } = useEditingInput({
    state: shadowUseAppState({
      state: String(value),
      setState: (value) => setValue(Number(value))
    }),
    getSecuredValue: setSecuredValue,
  })

  return (
    <div className={"input-field-container input-field-container-number" + (withoutBorder ? " without-border" : "")}>
      {label && <label htmlFor={label}>{label}</label>}
      <input
        id={id ? id : label} name={id ? id : label}
        type={"number"}
        onChange={(e)=>onChange(e.target.value)}
        value={formatValue(""+value)}
        autoComplete={"off"}
        placeholder={labelAsPlaceholder ? label : inputProps.placeholder}
        onFocus={onInputFocus}
        onBlur={onInputLeave}
        onKeyDown={(keyEv) => {
          if (keyEv.key === "Enter") onInputLeave();
          onInputFocus();
        }}
        {...inputProps}
      />
      <span className={"info-text" + (!!info ? " visible" : "")}>{info}</span>
    </div>
  )
}

export default NumberField
