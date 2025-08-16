import {MODAL_KEYS} from "./constants.ts";
import {AnyObject} from "@/types/default.ts";

export interface AppState {
  app: {
    infoMessage: string;
    infoMessageState: 'success' | 'failure' | 'info' | '';
    openModal: undefined | MODAL_KEYS;
    openVerticalNav: boolean;
  }
  quiz: {
    startLevel: number,
    endLevel: number,
    defaultStartLevel: number,
    defaultEndLevel: number,
  }
  settings: {
    firstStart: Date | null;
    isFirstStart: boolean;
    setupLevel: 1 | 2 | 3 | null;
  }
  dev: {
    tag1: boolean;
    tag2: boolean;
    tag3: boolean;
    tag4: boolean;
    notificationReload: boolean;
    onOff1: boolean;
    onOff2: boolean;
    onOff3: boolean;
  }
  dict: {
    charsetRomaji: boolean;
    charsetHiragana: boolean;
    charsetKatakana: boolean;
    charsetKanji: boolean;
    charset: string[][];
    charsetBoolean: AnyObject<boolean>;
    charsetSelection: string[];
  }
}
