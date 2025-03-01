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
  },
  dict:{
    charsetRomaji: true,
    charsetHiragana: true,
    charsetKatakana: false,
    charsetKanji: false,
  }
};

