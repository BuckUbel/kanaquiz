import {AnyObject} from "@/types/default.ts";
import {SimpleKanaDictionary} from "@/data/SimpleKanaDictionary.ts";

export const KanaExtraKeys = ["g", "z", "d", "b", "p", "ky", "sh", "ch", "ny", "hy", "my", "ry", "gy", "j", "by", "py"];
export const KanaSimKeys = ["SIM 1", "SIM 2", "SIM 3"];

export function prepareKanaSelection() :[AnyObject<boolean>, string[], string[]]{
  const newBooleanMap: AnyObject<boolean> = {};
  const hiraganaChars = Object.values(SimpleKanaDictionary["hiragana"]).map((groupObj) => Object.keys(groupObj));
  const katakanaChars = Object.values(SimpleKanaDictionary["katakana"]).map((groupObj) => Object.keys(groupObj));
  const hiraganaCharsArray: string[] = [];
  const katakanaCharsArray: string[] = [];
  hiraganaChars.flat().forEach((hiragana: string) => {
    newBooleanMap[hiragana] = true;
    hiraganaCharsArray.push(hiragana);
  })
  katakanaChars.flat().forEach((katakana: string) => {
    newBooleanMap[katakana] = false;
    katakanaCharsArray.push(katakana);
  })
  return [newBooleanMap, hiraganaCharsArray, katakanaCharsArray];
}
