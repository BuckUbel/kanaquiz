import {AppState} from "./AppState.ts";

export const defaultAppState: AppState = {
  app: {
    infoMessage: "",
    infoMessageState: "",
    openModal: undefined,
    openVerticalNav: false,
  },
  quiz: {
    startLevel: 1,
    endLevel: 4,
    defaultStartLevel: 1,
    defaultEndLevel: 4,
  },
  settings: {
    firstStart: null,
    isFirstStart: true,
    setupLevel: null,
  },
  dev: {
    tag1: false,
    tag2: false,
    tag3: false,
    tag4: false,
    notificationReload: false,
    onOff1: false,
    onOff2: false,
    onOff3: false,
  },
  dict: {
    charsetRomaji: true,
    charsetHiragana: true,
    charsetKatakana: false,
    charsetKanji: false,
    charset: [],
    charsetBoolean: {},
    charsetSelection: [],
  }
};

