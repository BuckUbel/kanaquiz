import {AnyObject} from "@/types/default.ts";
import {prepareKanaSelection} from "@/helper/prepareKanaSelection.ts";

export type MODAL_KEYS =
  'view-settings'
  | 'data-settings'
  | 'kana-selection'
  | 'development';

const KanaSelectionMap = prepareKanaSelection()

export class LocalStorageKeys {
  APPLICATION: any;
  KANA_SELECTION: AnyObject<boolean> = KanaSelectionMap;
  CHARSET_SELECTION: AnyObject<boolean> = {
    charsetHiragana:true,
    charsetKatakana:false,
    charsetRomaji:true,
    charsetKanji:false,
  };
}
