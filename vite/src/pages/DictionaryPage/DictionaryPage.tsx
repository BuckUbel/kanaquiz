import {Icon} from "@iconify/react";
import Card from "../../elements/Card/Card.tsx";
import TagsContainer from "../../elements/Tag/TagsContainer.tsx";
import Tag from "../../elements/Tag/Tag.tsx";
import {Outlet} from "react-router";
import {useAppState} from "@/state/useAppState.ts";

function DictionaryPage() {
  // const tag1State = useAppState("dev", "tag1");
  const withHiragana = useAppState("dict", "charsetHiragana");
  const withKatakana = useAppState("dict", "charsetKatakana");
  const withRomaji = useAppState("dict", "charsetRomaji");
  const withKanji = useAppState("dict", "charsetKanji");

  return (
    <>
      <h2>Dictionary</h2>
      <div className={"container-col"}>
        <div className={"container-row"}>
          <Card headline={<h3>Charset</h3>}>
            <TagsContainer className={"with-border"}>
              <Tag category={"primary"} state={withHiragana}>あ Hiragana</Tag>
              <Tag category={"secondary"} state={withKatakana}>ア Katakana</Tag>
              <Tag category={"tertiary"} state={withKanji}><Icon icon={"kanji-tree"} width={24} height={24}/>&nbsp; Kanji</Tag>
              <Tag category={"tertiary"} state={withRomaji}><Icon icon={"kana-romaji-a"}/>&nbsp;Romaji</Tag>
            </TagsContainer>
          </Card>
        </div>
        <Outlet/>
      </div>
    </>
  )
}

export default DictionaryPage
