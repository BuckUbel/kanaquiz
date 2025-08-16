import {useEffect, useState} from "react";
import {UseAppStateType, UseState} from "../../types/default.ts";

export function getSecuredNumberValue(value: string, min = -9999, max = 9999): number {
  const newValue = Number(value);

  let securedValue = 0;
  if (newValue !== undefined && !isNaN(newValue)) {
    securedValue = Math.min(Math.max(newValue, min), max)
  }

  return securedValue;
}

export interface EditingInputProps<> {
  state: UseAppStateType<string> | UseState<string>;
  getSecuredValue: (value: string) => string;
  sideEffectOnChange?: (value: string) => void;
}

export function useEditingInput({state, getSecuredValue, sideEffectOnChange}: EditingInputProps) {

  const [value, setValue] = state;
  const isEditingState = useState(false);
  const [isEditing, setIsEditing] = isEditingState
  const editValueState = useState("");
  const [editValue, setEditValue] = editValueState

  useEffect(() => {
    setEditValue(value)
    if(!!sideEffectOnChange) sideEffectOnChange(value);
  }, [value]);

  const onChange = (value: string) => {
    if (isEditing) setEditValue(value);
    return getSecuredValue(value);
  }

  const onInputFocus = (_e?: React.ChangeEvent<HTMLInputElement>) => {
    setIsEditing(true);
  };
  const onInputLeave = (_e?: React.ChangeEvent<HTMLInputElement>) => {
    // reset
    setIsEditing(false);

    const newValue = onChange(getSecuredValue(editValue));
    setValue(newValue);
    setEditValue(newValue);
  };

  const formatValue = (v: string) => {
    if (isEditing) return editValue;
    return getSecuredValue(v)
  };

  return {
    onChange,
    onInputFocus,
    onInputLeave,
    formatValue,
    isEditingState,
    editValueState,
    editIsDifferent: editValue !== value,
  }

}
