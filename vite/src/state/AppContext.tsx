import React, {PropsWithChildren, useState} from "react";
import {StateSetter} from "../types/default";
import {defaultAppState} from "./defaultAppState.ts";
import {AppState} from "./AppState";
import {useAppLocalStorage} from "@/state/useAppLocalStorage.ts";

export type AppStateSetter = StateSetter<AppState>;
type ContextProps = [
  AppState,
  AppStateSetter,
  <StateKey extends keyof AppState, Key extends keyof AppState[StateKey]>(state: AppState, stateKey: StateKey, key: Key & string) => AppState
];

const stateSetter: AppStateSetter = () => {
};

const AppContext = React.createContext<ContextProps>([
  defaultAppState,
  stateSetter,
  (state: AppState) => state,
]);

const AppProvider = ({children}: PropsWithChildren) => {
  const appState = useState(defaultAppState);
  const setEffect = useAppLocalStorage(appState);

  return (
    <AppContext.Provider value={[...appState, setEffect]}>
      {children}
    </AppContext.Provider>
  );
};

export {AppContext, AppProvider};
