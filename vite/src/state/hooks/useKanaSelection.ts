import {useAppState} from "@/state/useAppState.ts";
import {AnyObject} from "@/types/default.ts";
import {SimpleKanaDictionary} from "@/data/SimpleKanaDictionary.ts";

const hiraganaDict = SimpleKanaDictionary["hiragana"];
const hiraganaGroups = Object.keys(hiraganaDict)
const hiraganaChars = Object.values(hiraganaDict).map((groupObj) => Object.keys(groupObj));
const hiraganaRomaji = Object.values(hiraganaDict).map((groupObj) => Object.values(groupObj).map(romajiGroup => romajiGroup.join(" / ")));

const katakanaDict = {...SimpleKanaDictionary["katakana"], ...SimpleKanaDictionary["katakana_ext"]};
const katakanaGroups = Object.keys(katakanaDict)
const katakanaChars = Object.values(katakanaDict).map((groupObj) => Object.keys(groupObj));
const katakanaRomaji = Object.values(katakanaDict).map((groupObj) => Object.values(groupObj).map(romajiGroup => romajiGroup.join(" / ")));


export const useKanaSelection = () => {
  const [charsetBoolean, setCharsetBoolean] = useAppState("dict", "charsetBoolean");
  const toggleVocal = (
    colIndex: number,
    charset: "hiragana" | "katakana" | "both" = "hiragana",
    defaultValue: boolean | null = null,
    charSetSelection: AnyObject<boolean> = charsetBoolean,
  ) => {

    let romaji: string[][] = [];
    let chars: string[][] = [];
    if (charset === "hiragana") {
      romaji = hiraganaRomaji;
      chars = hiraganaChars;
    }
    if (charset === "katakana") {
      romaji = katakanaRomaji;
      chars = katakanaChars;
    }
    const searchEnding = romaji[0][colIndex];
    const enableKeys = [] as string[];
    romaji.forEach((romajiGroup, groupIndex) => {
      romajiGroup.forEach((romaji, charIndex) => {
        const newChar = chars[groupIndex][charIndex];
        if (romaji.endsWith(searchEnding) || colIndex === -1) enableKeys.push(newChar)
      })
    })
    // const charCol = chars.map((charGroup: string[]) => charGroup?.[colIndex] ?? "");
    const newSelection: AnyObject<boolean> = {...charSetSelection};
    let newValue = false;
    if (defaultValue !== null) newValue = defaultValue;
    if (defaultValue === null) newValue = !enableKeys.every(element => charsetBoolean[element]);
    enableKeys.forEach(key => {newSelection[key] = newValue});
    return newSelection;
  };

  const toggleGroup = (
    searchCharGroups: string[],
    charset: "hiragana" | "katakana" | "both" = "hiragana",
    defaultValue: boolean | null = null,
    charSetSelection: AnyObject<boolean> = charsetBoolean,
  ) => {

    let groups: string[] = [];
    let chars: string[][] = [];
    if (charset === "hiragana") {
      groups = hiraganaGroups;
      chars = hiraganaChars;
    }
    if (charset === "katakana") {
      groups = katakanaGroups;
      chars = katakanaChars;
    }

    const enableKeys: string[] = [];
    groups.forEach((charGroup: string, groupIndex) => {

        const a = searchCharGroups.includes(charGroup)
        if (a) {
          enableKeys.push(...chars[groupIndex])
        }
      }
    );
    // const enableKeys = chars[groupId];
    const newSelection: AnyObject<boolean> = {...charSetSelection};
    let newValue = false;
    if (defaultValue !== null) newValue = defaultValue;
    if (defaultValue === undefined) !enableKeys.every(element => charsetBoolean[element]);
    enableKeys.forEach(key => {newSelection[key] = newValue});
    return newSelection;
  };
  const toggleChar = (
    searchChar: string,
    defaultValue: boolean | null = null,
    charSetSelection: AnyObject<boolean> = charsetBoolean,
  ) => {
    const newSelection: AnyObject<boolean> = {...charSetSelection};
    newSelection[searchChar] = defaultValue !== null ? defaultValue : !newSelection[searchChar]
    return newSelection;
  };

  const setSelection = (selection: AnyObject<boolean>) => {
    setCharsetBoolean(selection)
  }

  const getSelectedChars = ()=>{
    const chars = Object.keys(charsetBoolean).filter(key => charsetBoolean[key]);
    return chars;
  }

  return {
    toggleVocal,
    toggleGroup,
    toggleChar,
    setSelection,
    getSelectedChars
  }
}
