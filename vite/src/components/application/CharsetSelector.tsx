import {Icon} from "@iconify/react";
import Card from "../../elements/Card/Card.tsx";
import TagsContainer from "../../elements/Tag/TagsContainer.tsx";
import Tag from "../../elements/Tag/Tag.tsx";
import {useAppState} from "@/state/useAppState.ts";
import Modal from "@/elements/Modal/Modal.tsx";
import DictionaryCharTablePage from "@/pages/DictionaryPage/DictionaryCharTable/DictionaryCharTablePage.tsx";
import {useState} from "react";
import SwitchButton from "@/elements/Button/SwitchButton.tsx";

function CharsetSelector() {
  // const tag1State = useAppState("dev", "tag1");
  const withHiragana = useAppState("dict", "charsetHiragana");
  const withKatakana = useAppState("dict", "charsetKatakana");
  const withRomaji = useAppState("dict", "charsetRomaji");
  const withKanji = useAppState("dict", "charsetKanji");
  const [openModal, setOpenModal] = useAppState("app", "openModal");

  const showHiraganaState = useState(true);
  const [showHiragana] = showHiraganaState;

  return (
    <>
      <Card headline={<div className={"container-row"}>
        <h3 style={{flex: "1"}}>
          Charset
        </h3>
        <button className={"icon-button inline"} onClick={() => setOpenModal("kana-selection")}>
          <Icon icon={"material-symbols:edit-rounded"} width="50" height="50"/>
          Edit
        </button>
        <Modal
          variant={"kana-selection"}
          headline={"Kana Selection"}
          content={<div className={"container-col"} style={{padding: "0 2rem", flexWrap:"nowrap"}}>
            <SwitchButton state={showHiraganaState} onLabel={"Hiragana"} offLabel={"Katagana"}/>
            {showHiragana && <DictionaryCharTablePage selectable={true} hiragana={true} katakana={false}/>}
            {!showHiragana && <DictionaryCharTablePage selectable={true} hiragana={false} katakana={true}/>}
          </div>}
        />
      </div>}>

        <TagsContainer className={"with-border"}>
          <Tag category={"primary"} state={withHiragana}>あ Hiragana</Tag>
          <Tag category={"secondary"} state={withKatakana}>ア Katakana</Tag>
          <Tag category={"tertiary"} disabled state={withKanji}><Icon icon={"kanji-tree"} width={24}
                                                             height={24}/>&nbsp; Kanji</Tag>
          <Tag category={"tertiary"} state={withRomaji}><Icon icon={"kana-romaji-a"}/>&nbsp;Romaji</Tag>
        </TagsContainer>
      </Card>
    </>
  )
}

export default CharsetSelector
