import Card from "@/elements/Card/Card.tsx";
import TextField from "@/elements/Input/TextField.tsx";
import {useState} from "react";
import {useEditingInput} from "@/state/hooks/useEditingInput.ts";
import {toHiragana, toKatakana} from "@/helper/kanaChanger.ts";
import {useAppState} from "@/state/useAppState.ts";

function CharTranslatorCard() {
  const [withRomaji] = useAppState("dict", "charsetRomaji");
  const [withHiragana] = useAppState("dict", "charsetHiragana");
  const [withKatakana] = useAppState("dict", "charsetKatakana");
  const [withKanji] = useAppState("dict", "charsetKanji");

  const aState = useState("");
  const bState = useState("");
  const cState = useState("");

  const {
    onChange,
    onInputFocus,
    onInputLeave,
    formatValue,
    editIsDifferent
  } = useEditingInput({
    state: aState,
    getSecuredValue: (value) => value.replace(/[^A-Za-zÄÖÜäöüß ]/g, ''),
    sideEffectOnChange: (value: string) => {
      // toRomaji
      bState[1](toHiragana(value));
      cState[1](toKatakana(value));
    }
  })

  return (
    <>
      <Card headline={<h3>Search</h3>}
            headlineIcon={"gis:search-coord"}
      >
        <TextField
          state={[formatValue(aState[0]), onChange]}
          onFocus={onInputFocus}
          onBlur={onInputLeave}
          onKeyDown={(keyEv)=>{
            if(keyEv.key==="Enter")onInputLeave();onInputFocus();
          }}
          label={"Romaji"}
          placeholder={""}
          info={editIsDifferent?"Enter":undefined}
        />

        <div className={"container-row"}>
          {withHiragana &&
            <TextField state={bState} label={"Hiragana"} className={"big"} placeholder={"まんが"} disabled/>}
          {withKatakana &&
            <TextField state={cState} label={"Katakana"} className={"big"} placeholder={"アニメ"} disabled/>}
        </div>

        {withKanji && <TextField state={["In development", () => ""]} className={"big"} label={"Kanji"} disabled/>}
      </Card>
    </>
  )
}

export default CharTranslatorCard;
