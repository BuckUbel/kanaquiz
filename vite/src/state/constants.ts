import {AnyObject} from "@/types/default.ts";
import {prepareKanaSelection} from "@/helper/prepareKanaSelection.ts";

export type MODAL_KEYS =
  'view-settings'
  | 'data-settings'
  | 'introduction'
  | 'kana-selection'
  | 'delete-data'
  | 'development';

const Kanas = prepareKanaSelection()
const [KanaSelectionMap, HiraganaChars, KatakanaChars] = Kanas
export {KanaSelectionMap, HiraganaChars, KatakanaChars};

export class LocalStorageKeys {
  APPLICATION: any;
  SETTINGS: {
    firstStart: Date | null;
    defaultStartLevel: number;
    defaultEndLevel: number;
  } = {firstStart: null, defaultStartLevel: 1, defaultEndLevel: 4};
  KANA_SELECTION: AnyObject<boolean> = KanaSelectionMap;
  CHARSET_SELECTION: AnyObject<boolean> = {
    charsetHiragana: true,
    charsetKatakana: false,
    charsetRomaji: true,
    charsetKanji: false,
  };
}
