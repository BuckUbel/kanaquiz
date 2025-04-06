import {AnyObject} from "@/types/default.ts";
import {SimpleKanaDictionary} from "@/data/SimpleKanaDictionary.ts";

export function prepareKanaSelection(){
  const newBooleanMap: AnyObject<boolean> = {};
  const hiraganaChars = Object.values(SimpleKanaDictionary["hiragana"]).map((groupObj) => Object.keys(groupObj));
  const katakanaChars = Object.values(SimpleKanaDictionary["katakana"]).map((groupObj) => Object.keys(groupObj));
  hiraganaChars.flat().forEach((hiragana: string) => {
    newBooleanMap[hiragana] = false;
  })
  katakanaChars.flat().forEach((katakana: string) => {
    newBooleanMap[katakana] = false;
  })
  return newBooleanMap;
}
