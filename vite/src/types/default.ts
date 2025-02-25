import React, {FormEvent} from "react";

export type Status = 'success' | 'failure' | 'info';

export type StateSetter<T> = React.Dispatch<React.SetStateAction<T>>;
export type UseState<T> = [T, StateSetter<T>];
export type SimpleState<T> = [T, (newValue: T) => void];
export type SimpleSetState<T> = (newValue: T) => void;
export type UseAppStateType<T> = [T, (newValue: T) => void, (prevFunction: (prevValue: T) => T) => void];
export type UseAppStateTypeProps<T> = {
  state: T,
  setState?: (newValue: T) => void,
  setPrevState?: (prevFunction: (prevValue: T) => T) => void
};
export type UnsureSimpleState<T> = [T | undefined, (newValue: T) => void];

export type SimpleStateArray<T> = [T[], (value: T, index: number) => void];

export type AnyObject<T = any> = { [key: string]: T };

export interface ClassInterface<T, Prop extends any[] = any[]> {
  new(...arg: Prop): T;
}

export type ConstructorParam<T> = T extends new (...args: infer P) => any ? P : never;

export type SubmitFormEvent<T = HTMLFormElement> = FormEvent<T> & {
  target: {
    [formKey: string]: HTMLInputElement;
  }
}

export const emptyBooleanUseAppState: UseAppStateType<boolean> = [
  false,
  (_newValue) => {},
  (_prevFunction: (newValue: boolean) => {}) => {}
];
