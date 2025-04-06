import {SimpleKanaDictionary} from "@/data/SimpleKanaDictionary.ts";
import "./CharTable.scss";
import CharTable from "@/pages/DictionaryPage/DictionaryCharTable/CharTable.tsx";
import {useAppState} from "@/state/useAppState.ts";
import {useEffect, useState} from "react";
import {AnyObject} from "@/types/default.ts";

interface DictionaryCharTablePageProps {
  selectable?: boolean;
  hiragana?: boolean;
  katakana?: boolean;
}

function DictionaryCharTablePage({selectable, hiragana, katakana}: DictionaryCharTablePageProps) {

  const [withHiraganaValue] = useAppState("dict", "charsetHiragana")
  const [withKatakanaValue] = useAppState("dict", "charsetKatakana")
  let withHiragana = withHiraganaValue;
  let withKatakana = withKatakanaValue;
  if (!!hiragana) {
    withHiragana = true;
    withKatakana = !!katakana;
  }
  if (!!katakana) {
    withKatakana = true;
    withHiragana = !!hiragana;
  }

  const [withRomaji] = useAppState("dict", "charsetRomaji");
  const [withKanji] = useAppState("dict", "charsetKanji");
  const [displayStatus, setDisplayStatus] = useState<number>(0);

  const [charset, setCharset] = useState<string[][]>([]);
  const [charsetBoolean, setCharsetBoolean] = useAppState("dict", "charsetBoolean");
  const [charsetSelection] = useAppState("dict", "charsetSelection");

  const hiraganaDict = SimpleKanaDictionary["hiragana"];
  const hiraganaGroups = Object.keys(hiraganaDict)
  const hiraganaChars = Object.values(hiraganaDict).map((groupObj) => Object.keys(groupObj));
  const hiraganaRomaji = Object.values(hiraganaDict).map((groupObj) => Object.values(groupObj).map(romajiGroup => romajiGroup.join(" / ")));

  const katakanaDict = {...SimpleKanaDictionary["katakana"], ...SimpleKanaDictionary["katakana_ext"]};
  const katakanaGroups = Object.keys(katakanaDict)
  const katakanaChars = Object.values(katakanaDict).map((groupObj) => Object.keys(groupObj));
  const katakanaRomaji = Object.values(katakanaDict).map((groupObj) => Object.values(groupObj).map(romajiGroup => romajiGroup.join(" / ")));

  let groups: string[] = [];
  let chars: string[][] = [];
  let romaji: string[][] = [];
  let alternativeChars: string[][] = [];
  let withAlternative = false;
  let category: "primary" | "secondary" | "tertiary" = "primary";


  if (withHiragana || displayStatus === 1) {
    groups = hiraganaGroups;
    chars = hiraganaChars;
    romaji = hiraganaRomaji;
  }
  if ((!withHiragana && withKatakana) || displayStatus === 2) {
    groups = katakanaGroups;
    chars = katakanaChars;
    romaji = katakanaRomaji;
    category = "secondary";
  }
  if (withHiragana && withKatakana && displayStatus === 0) {
    groups = katakanaGroups;
    chars = katakanaChars;
    romaji = katakanaRomaji;
    alternativeChars = hiraganaChars;
    category = "secondary";
    withAlternative = true;
  }

  useEffect(() => {
    setCharset(chars);
  }, [withHiragana, withKatakana, displayStatus]);

  const onColClick = (colIndex: number) => {
    const searchEnding = romaji[0][colIndex];
    const enableKeys = [] as string[];
    romaji.forEach((romajiGroup, groupIndex) => {
      romajiGroup.forEach((romaji, charIndex) => {
        const newChar = chars[groupIndex][charIndex];
        if (romaji.endsWith(searchEnding) || colIndex === -1) enableKeys.push(newChar)
      })
    })

    // const charCol = chars.map((charGroup: string[]) => charGroup?.[colIndex] ?? "");
    const newSelection: AnyObject<boolean> = {...charsetBoolean};
    const newValue = !enableKeys.every(element => charsetBoolean[element]);
    enableKeys.forEach(key => {newSelection[key] = newValue});
    setCharsetBoolean(newSelection)
  };
  const onGroupClick = (searchCharGroup: string) => {
    const groupId = groups.findIndex((charGroup: string) => searchCharGroup === charGroup);
    const enableKeys = charset[groupId];
    const newSelection: AnyObject<boolean> = {...charsetBoolean};
    const newValue = !enableKeys.every(element => charsetBoolean[element]);
    enableKeys.forEach(key => {newSelection[key] = newValue});
    setCharsetBoolean(newSelection)
  };
  const onCharClick = (searchChar: string) => {
    const newSelection: AnyObject<boolean> = {...charsetBoolean};
    newSelection[searchChar] = !newSelection[searchChar]
    setCharsetBoolean(newSelection)
  };

  return (
    <div className={"container-col"}>
      <h3>CharTable</h3>
      <div className={"container-row"}>
        {withHiragana && withKatakana &&
          <button className={displayStatus === 0 ? "tertiary" : displayStatus === 1 ? "primary" : "secondary"}
                  onClick={() => setDisplayStatus(v => (v + 1) % 3)}>
            Anzeige umschalten
          </button>}
        <p>{groups.length} sichtbare Zeichengruppen.</p>
        <p><b>{charsetSelection.length} aktivierte Zeichen.</b></p>
      </div>
      <CharTable
        groups={groups}
        chars={charset}
        romaji={romaji}
        alternativeChars={alternativeChars}
        showAlternative={withAlternative}
        category={category}
        alternativeCategory={"primary"}
        hideRomaji={!withRomaji}
        selectedChars={charsetBoolean}
        onColClick={selectable ? onColClick : undefined}
        onGroupClick={selectable ? onGroupClick : undefined}
        onCharClick={selectable ? onCharClick : undefined}
      />
    </div>
  )
}

export default DictionaryCharTablePage
