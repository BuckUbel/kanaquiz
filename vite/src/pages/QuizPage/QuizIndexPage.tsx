import {useAppState} from "@/state/useAppState.ts";
import {Icon} from "@iconify/react";
import KanaList from "@/pages/QuizPage/KanaList.tsx";
import KanaListButtonCard from "@/pages/QuizPage/KanaListButtonCard.tsx";
import CharsetSelector from "@/components/application/CharsetSelector.tsx";
import {ROUTES} from "@/components/Router/Routes.ts";
import {useNavigate} from "react-router";
import {defaultAppState} from "@/state/defaultAppState.ts";

function QuizIndexPage() {
  const [charsetBoolean] = useAppState("dict", "charsetBoolean");
  const [withHiragana] = useAppState("dict", "charsetHiragana");
  const [withKatakana] = useAppState("dict", "charsetKatakana");
  const navigate = useNavigate();
  const [defaultStartLevel] = useAppState("quiz", "defaultStartLevel");
  const [defaultEndLevel] = useAppState("quiz", "defaultEndLevel");
  const [, setStartLevel] = useAppState("quiz", "startLevel");
  const [, setEndLevel] = useAppState("quiz", "endLevel");
  const charSetCount = Number(withHiragana) + Number(withKatakana);

  return (
    <>
      <div className={"container-row"}>
        <CharsetSelector/>
      </div>
      <div className={"container-col"} style={{alignItems: "center"}}>
        <button className={"icon-button colorful3 pulsing-shadow-animation"}
                onClick={() => {
                  setStartLevel(defaultStartLevel);
                  setEndLevel(defaultEndLevel);
                  navigate(ROUTES.QUIZ_START);
                }}>
          <div className={"container-row"}>
            <Icon className={"jump-animation"} icon={"kana-question"} width="50" height="50"/>
            <Icon className={"wobble-animation"} icon={"icon-park-solid:play"} width="50" height="50"/>
          </div>
          <br/>
          Start the Quiz!
        </button>
      </div>

      <div className={"container-row kana-overview"}>
        {charSetCount === 2 && <>
          {withHiragana && <div className={"container-col"}>
            <KanaList kanaKey={"hiragana"} title={"Hiragana · ひらがな"} charsetBoolean={charsetBoolean}/>
            <KanaListButtonCard kanaKey={"hiragana"}/>
          </div>}

          {withKatakana && <div className="container-col">
            <KanaList kanaKey={"katakana"} title={"Katakana · カタカナ"} charsetBoolean={charsetBoolean}/>
            <KanaListButtonCard kanaKey={"katakana"}/>
          </div>}
        </>}
        {charSetCount === 1 && <>
          {withHiragana &&
            <>
            <KanaList kanaKey={"hiragana"} title={"Hiragana · ひらがな"} charsetBoolean={charsetBoolean}/>
            <KanaListButtonCard kanaKey={"hiragana"}/>
          </>}

          {withKatakana && <>
            <KanaList kanaKey={"katakana"} title={"Katakana · カタカナ"} charsetBoolean={charsetBoolean}/>
            <KanaListButtonCard kanaKey={"katakana"}/>
          </>}
        </>}

      </div>
    </>
  )
}

export default QuizIndexPage;
