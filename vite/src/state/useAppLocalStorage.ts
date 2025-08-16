import {useLocalStorage} from "@/state/useLocalStorage.ts";
import {useCallback, useEffect} from "react";
import {buildAppState} from "@/state/useAppState.ts";
import {AppState} from "@/state/AppState.ts";
import {AnyObject} from "@/types/default.ts";
import {AppStateSetter} from "@/state/AppContext.tsx";

let isFirstStart = false;

export function useAppLocalStorage([state, setState]: [AppState, AppStateSetter]) {

  const {getData: getKanaSelection, setData: setKanaSelection} = useLocalStorage("KANA_SELECTION");
  const {getData: getCharsetSelection, setData: setCharsetSelection} = useLocalStorage("CHARSET_SELECTION");
  const {getData: getSettings, setData: setSettings} = useLocalStorage("SETTINGS");
  const loadedSettings = getSettings();

  if (!isFirstStart) isFirstStart = loadedSettings.firstStart === null;

  // Automatic LocalStorage Loading
  useEffect(() => {
    const charSelection = getCharsetSelection();
    let newState = {...state};

    const loadedSettings = getSettings();
    newState = buildAppState("settings", "firstStart", newState, loadedSettings.firstStart)
    newState = buildAppState("settings", "isFirstStart", newState, isFirstStart)
    if (isFirstStart) newState = buildAppState("app", "openModal", newState, "introduction")
    newState = buildAppState("dict", "charsetBoolean", newState, getKanaSelection())

    newState = buildAppState("dict", "charsetHiragana", newState, charSelection["charsetHiragana"])
    newState = buildAppState("dict", "charsetKatakana", newState, charSelection["charsetKatakana"])
    newState = buildAppState("dict", "charsetRomaji", newState, charSelection["charsetRomaji"])
    newState = buildAppState("dict", "charsetKanji", newState, charSelection["charsetKanji"])

    newState = buildAppState("quiz", "defaultStartLevel", newState, loadedSettings.defaultStartLevel)
    newState = buildAppState("quiz", "defaultEndLevel", newState, loadedSettings.defaultEndLevel)

    setState(newState)
  }, []);


  // Automatic LocalStorage Setting
  const setEffect = useCallback(
    <StateKey extends keyof AppState, Key extends keyof AppState[StateKey]>
    (nextState: AppState, stateKey: StateKey, key: Key & string) => {

      type ValueType = AppState[StateKey][Key];
      const newValue: AppState[StateKey][Key] = nextState[stateKey][key];

      if (stateKey === "settings") {
        switch (key) {
          case "firstStart":
            const settings = getSettings();
            settings["firstStart"] = nextState["settings"]["firstStart"]
            setSettings(settings)
        }
      }

      if (stateKey === "quiz") {
        const settings = getSettings();
        switch (key) {
          case "defaultStartLevel":
            settings["defaultStartLevel"] = nextState["quiz"]["defaultStartLevel"]
            break;
          case "defaultEndLevel":
            settings["defaultEndLevel"] = nextState["quiz"]["defaultEndLevel"]
            break;
        }
        setSettings(settings)
      }

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
