import {AppContext} from "./AppContext.tsx";
import {UseAppStateType, UseAppStateTypeProps} from "../types/default.ts";
import {useContext} from "react";
import {AppState} from "./AppState";


export const buildAppState =
  <StateKey extends keyof AppState, Key extends keyof AppState[StateKey]>
  (stateKey: StateKey, key: Key, prev: AppState, value: AppState[StateKey][Key]) => {
    return {
      ...prev,
      [stateKey]: {
        ...prev[stateKey],
        [key]: value,
      },
    };
  }

/**
 * StateKey is property of AppState
 * AppState[StateKey] is type of the property of AppState
 * Key is property of AppState[StateKey]
 * AppState[StateKey][Key] is type of the property of AppState[StateKey]
 *
 * The param withChangeFct allows to change or
 * overwrite some specific values in the specific state.
 *
 * @param stateKey
 * @param key
 */
export const useAppState = <StateKey extends keyof AppState,
  Key extends keyof AppState[StateKey]>(
  stateKey: StateKey & string,
  key: Key & string,
): UseAppStateType<AppState[StateKey][Key]> => {
  //
  const [state, setState, setEffect] = useContext(AppContext);

  const setValue = (value: AppState[StateKey][Key]) => {
    setState((prev: AppState) => {
      return setEffect(buildAppState(stateKey, key, prev, value), stateKey, key);
    });
  };
  const setValueFromPrev = (prevFunction: (value: AppState[StateKey][Key]) => AppState[StateKey][Key]) => {
    setState((prev: AppState) => {
      const newValue = prevFunction(prev[stateKey][key]);
      return setEffect(buildAppState(stateKey, key, prev, newValue), stateKey, key);
      ;
    });
  };

  return [state[stateKey][key], setValue, setValueFromPrev];
};


type ShadowUseAppProps<T> = Pick<UseAppStateTypeProps<T>, "state"> & Partial<UseAppStateTypeProps<T>>;
export const shadowUseAppState = <T>(config: ShadowUseAppProps<T>): UseAppStateType<T> => {
  const {
    state,
    setState = (_newValue: T) => {},
    setPrevState = (_prevFunction: (newValue: T) => T) => {}
  } = config;

  return [state, setState, setPrevState];
}
