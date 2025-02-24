import React, {PropsWithChildren, useState} from "react";
import {StateSetter} from "../types/default";
import {defaultAppState} from "./defaultAppState.ts";
import {AppState} from "./AppState";

type AppStateSetter = StateSetter<AppState>;
type ContextProps = [AppState, AppStateSetter];

const stateSetter: AppStateSetter = () => {
};

const AppContext = React.createContext<ContextProps>([
  defaultAppState,
  stateSetter,
]);

const AppProvider = ({children}: PropsWithChildren) => {
  const [state, setState] = useState(defaultAppState);


  return (
    <AppContext.Provider value={[state, setState]}>
      {children}
    </AppContext.Provider>
  );
};

export {AppContext, AppProvider};
