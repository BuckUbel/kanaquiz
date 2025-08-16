import {useAppState} from "@/state/useAppState.ts";
import {useEffect, useState} from "react";
import Modal from "@/elements/Modal/Modal.tsx";
import Card from "@/elements/Card/Card.tsx";
import {Icon} from "@iconify/react";
import {useKanaSelection} from "@/state/hooks/useKanaSelection.ts";
import {KanaExtraKeys} from "@/helper/prepareKanaSelection.ts";

function IntroModal() {
  const [, setOpenModal] = useAppState("app", "openModal");
  const [, setFirstStart] = useAppState("settings", "firstStart");
  const [isFirstStart] = useAppState("settings", "isFirstStart");
  const [setupLevel, setSetupLevel] = useAppState("settings", "setupLevel");

  const [animationIsStarted, setAnimationIsStarted] = useState(false);
  const [animationIsFinished, setAnimationIsFinished] = useState(false);
  const animationIsRunning = animationIsStarted && !animationIsFinished;

  useEffect(() => {
    if (animationIsStarted && !animationIsFinished) {
      setTimeout(() => {
        setAnimationIsFinished(true);
      }, 7500)
    }
  }, [animationIsStarted]);

  useEffect(() => {
    if (animationIsFinished) {
      setFirstStart(new Date());
      setAnimationIsStarted(false);
      setAnimationIsFinished(false);
      setOpenModal(undefined)
    }
  }, [animationIsFinished])

  const startIntro = () => {
    setAnimationIsStarted(true);
  }
  const [, setWithHiragana] = useAppState("dict", "charsetHiragana");
  const [, setWithKatakana] = useAppState("dict", "charsetKatakana");
  const [, setWithRomaji] = useAppState("dict", "charsetRomaji");
  const [, setWithKanji] = useAppState("dict", "charsetKanji");
  const {
    toggleVocal,
    toggleGroup,
    setSelection,
  } = useKanaSelection()

  useEffect(() => {
    if (isFirstStart && setupLevel !== null) {
      switch (setupLevel) {
        case 1:
          setWithHiragana(true);
          setWithKatakana(false);
          setWithRomaji(true);
          setWithKatakana(false);

          const sel0 = toggleVocal(-1, "hiragana", false);
          const sel1 = toggleGroup(["vocals"], "hiragana", true, sel0);
          const sel2 = toggleGroup(KanaExtraKeys, "hiragana", false, sel1);
          const sel21 = toggleVocal(-1, "katakana", false, sel2);
          setSelection(sel21);
          break;
        case 2:
          setWithHiragana(true);
          setWithKatakana(true);
          setWithRomaji(false);
          setWithKanji(false);

          const sel3 = toggleVocal(-1, "hiragana", true);
          const sel4 = toggleGroup(KanaExtraKeys, "hiragana", false, sel3);
          const sel5 = toggleVocal(-1, "katakana", true, sel4);
          const sel6 = toggleGroup(KanaExtraKeys, "katakana", false, sel5);
          setSelection(sel6);
          break;
        case 3:
          setWithHiragana(true);
          setWithKatakana(true);
          setWithRomaji(false);
          setWithKanji(true);
          const sel7 = toggleVocal(-1, "hiragana", true);
          const sel8 = toggleVocal(-1, "katakana", true, sel7);
          setSelection(sel8);
          break;
      }
    }
  }, [isFirstStart, setupLevel]);


  return (
    <Modal variant={"introduction"} headline={"Welcome to KANA Pro 2!"} hideCloseButton content={<>
      <div className={"container-col"}>
        <div className={"container-row"}>
          <Card>
            <div className={"container-col"}>
              The Website, where u can learn all the cool japanese things!
              <br/>
              At first u can select on which level do u want to learn.
              <Icon width="50" height="50" icon={"mdi:arrow-right-bold"} className={"wobble-animation"}/>
            </div>
          </Card>
        </div>
        <div className={"container-row"}>
          <Card
            className={setupLevel === 1 ? "active" : ""}
            small headline={<h3>Beginner</h3>} category={"tertiary"}
            headlineIcon={"carbon:skill-level-basic"}
            onClick={() => setSetupLevel(1)}
          >
            <p>I heard Japanese is very cool!</p>
          </Card>
          <Card
            className={setupLevel === 2 ? "active" : ""}
            small headline={<h3>Intermediate</h3>} category={"primary"}
            headlineIcon={"carbon:skill-level-intermediate"}
            onClick={() => setSetupLevel(2)}
          >
            <p>こんにちわ わたし の ともだち!</p>
          </Card>
          <Card
            className={setupLevel === 3 ? "active" : ""}
            small headline={<h3>Professional</h3>} category={"secondary"}
            headlineIcon={"carbon:skill-level-advanced"}
            onClick={() => setSetupLevel(3)}
          >
            <p>
              私もまんがとアニメがすきです
            </p>
          </Card>
        </div>
        <Card
          className={"animated-action-icon-container" + (setupLevel !== null ? " animation-level-" + setupLevel : "")}
          headline={<h3 className={"inner-animation-container"}>
            Start into the adventure!
            <div className={"rocket-action-icon" + (animationIsRunning ? " animated-action-icon-start" : "")}>
              <div className={(animationIsRunning ? " rocket-background" : "")}/>
              <Icon className={"headline-icon"} icon={"fluent-mdl2:rocket"}/>
              <div className={(animationIsRunning ? " stars-background" : "")}/>
            </div>
          </h3>}
          category={setupLevel !== null ? "rainbow" : "disabled"}
          onClick={setupLevel !== null ? () => startIntro() : undefined}
        >
        </Card>
      </div>

    </>}/>
  )
}

export default IntroModal
