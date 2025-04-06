import {AppState} from "./AppState.ts";

export const defaultAppState: AppState = {
  app: {
    infoMessage: "",
    infoMessageState: "",
    openModal: undefined,
  },
  dev:{
    tag1:false,
    tag2:false,
    tag3:false,
    tag4:false,
    notificationReload:false,
    onOff1:false,
    onOff2:false,
    onOff3:false,
  },
  dict:{
    charsetRomaji: true,
    charsetHiragana: true,
    charsetKatakana: false,
    charsetKanji: false,
    charset:[],
    charsetBoolean:{},
    charsetSelection:[],
  }
};

