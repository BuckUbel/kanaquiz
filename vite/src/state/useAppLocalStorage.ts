import {useLocalStorage} from "@/state/useLocalStorage.ts";
import {useCallback, useEffect} from "react";
import {buildAppState} from "@/state/useAppState.ts";
import {AppState} from "@/state/AppState.ts";
import {AnyObject} from "@/types/default.ts";
import {AppStateSetter} from "@/state/AppContext.tsx";

export function useAppLocalStorage([state, setState]: [AppState, AppStateSetter]) {

  const {getData: getKanaSelection, setData: setKanaSelection} = useLocalStorage("KANA_SELECTION");
  const {getData: getCharsetSelection, setData: setCharsetSelection} = useLocalStorage("CHARSET_SELECTION");

  // Automatic LocalStorage Loading
  useEffect(() => {
    const charSelection = getCharsetSelection();
    let newState = {...state};

    newState = buildAppState("dict", "charsetBoolean", newState, getKanaSelection())

    newState = buildAppState("dict", "charsetHiragana", newState, charSelection["charsetHiragana"])
    newState = buildAppState("dict", "charsetKatakana", newState, charSelection["charsetKatakana"])
    newState = buildAppState("dict", "charsetRomaji", newState, charSelection["charsetRomaji"])
    newState = buildAppState("dict", "charsetKanji", newState, charSelection["charsetKanji"])

    setState(newState)
  }, []);


  // Automatic LocalStorage Setting
  const setEffect = useCallback(
    <StateKey extends keyof AppState, Key extends keyof AppState[StateKey]>
    (nextState: AppState, stateKey: StateKey, key: Key & string) => {

      type ValueType = AppState[StateKey][Key];
      const newValue: AppState[StateKey][Key] = nextState[stateKey][key];

      if (stateKey === "dict") {
        switch (key) {
          case "charsetBoolean":
            setKanaSelection(nextState["dict"]["charsetBoolean"])
            break;
          case "charsetHiragana":
          case "charsetKatakana":
          case "charsetRomaji":
          case "charsetKanji":
            const charsetSelection: AnyObject<ValueType> = getCharsetSelection() as AnyObject<ValueType>;
            charsetSelection[key] = newValue;
            setCharsetSelection(charsetSelection as AnyObject<boolean>);
            break;
        }
      }

      return {...state, ...nextState};
    }, []);

  return setEffect;
}
