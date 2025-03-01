import {SimpleKanaDictionary} from "@/data/SimpleKanaDictionary.ts";
import "./CharTable.scss";
import CharTable from "@/pages/DictionaryPage/DictionaryCharTable/CharTable.tsx";
import {useAppState} from "@/state/useAppState.ts";
import {useState} from "react";

function DictionaryCharTablePage() {

  const [withHiragana] = useAppState("dict", "charsetHiragana");
  const [withKatakana] = useAppState("dict", "charsetKatakana");
  const [withRomaji] = useAppState("dict", "charsetRomaji");
  const [withKanji] = useAppState("dict", "charsetKanji");
  const [displayStatus, setDisplayStatus] = useState<number>(0);


  const hiragana = SimpleKanaDictionary["hiragana"];
  const hiraganaGroups = Object.keys(hiragana)
  const hiraganaChars = Object.values(SimpleKanaDictionary["hiragana"]).map((groupObj) => Object.keys(groupObj));
  const hiraganaRomaji = Object.values(SimpleKanaDictionary["hiragana"]).map((groupObj) => Object.values(groupObj).map(romajiGroup => romajiGroup.join(" / ")));

  const katakana = SimpleKanaDictionary["katakana"];
  const katakanaGroups = Object.keys(katakana)
  const katakanaChars = Object.values(SimpleKanaDictionary["katakana"]).map((groupObj) => Object.keys(groupObj));
  const katakanaRomaji = Object.values(SimpleKanaDictionary["katakana"]).map((groupObj) => Object.values(groupObj).map(romajiGroup => romajiGroup.join(" / ")));

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


  // if(withRomaji) romaji = [...romaji, ...hiraganaRomaji, ...katakanaRomaji];
  // if(withHiragana && withKatakana) alternativeChars = [...alternativeChars, ...katakanaChars];
  // if(withKanji) withAlternative = [...withAlternative, ...katakanaGroups];

  return (
    <>
      <h3>CharTable</h3>
      <div className={"container-row"}>
        {withHiragana && withKatakana &&
          <button className={displayStatus === 0 ? "tertiary" : displayStatus === 1 ? "primary" : "secondary"}
                  onClick={() => setDisplayStatus(v => (v + 1) % 3)}>
            Anzeige umschalten
          </button>}
        <p>{groups.length} aktivierte Zeichengruppen.</p>
      </div>
      <CharTable
        groups={groups}
        chars={chars}
        romaji={romaji}
        alternativeChars={alternativeChars}
        showAlternative={withAlternative}
        category={category}
        alternativeCategory={"primary"}
        hideRomaji={!withRomaji}
      />

    </>
  )
}

export default DictionaryCharTablePage
