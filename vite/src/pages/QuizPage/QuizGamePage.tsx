import {useKanaSelection} from "@/state/hooks/useKanaSelection.ts";
import TextField from "@/elements/Input/TextField.tsx";
import {useEffect, useMemo, useState} from "react";
import Card from "@/elements/Card/Card.tsx";
import ProgressRow from "@/pages/QuizPage/ProgressRow.tsx";
import {toHiragana, toKatakana, toRomaji} from "@/helper/kanaChanger.ts";
import "./QuizGamePage.scss";
import {Icon} from "@iconify/react";
import {useNavigate} from "react-router";
import {ROUTES} from "@/components/Router/Routes.ts";
import {useAppState} from "@/state/useAppState.ts";
import {AnyObject} from "@/types/default.ts";


function formatNumber(num: number, precision: number, integerDigits?: number): string {
  const fixedNum = num.toFixed(precision);
  const [integerPart, decimalPart] = fixedNum.split('.');
  if (integerDigits !== undefined) {
    const paddedIntegerPart = integerPart.padStart(integerDigits, '0');
    if (!!decimalPart) return `${paddedIntegerPart}.${decimalPart}`;
    return `${paddedIntegerPart}`;
  }
  return fixedNum;
}

function getRandomNumbers(min: number, max: number, count = 1): number[] {
  min = Math.ceil(min);
  max = Math.max(min, Math.floor(max));


  const result = [];
  for (let i = 0; i < count; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    result.push(randomNumber);
  }

  return result;
}

function getUniqueRandomNumbers(min: number, max: number, count = 1, excludeNumber?: number): number[] {
  min = Math.ceil(min);
  max = Math.max(min, Math.floor(max));

  if (count <= 0) return [];

  const totalRangeSize = max - min + 1;
  const hasExclude =
    typeof excludeNumber === "number" &&
    excludeNumber >= min &&
    excludeNumber <= max;


  const availableUnique = totalRangeSize - (hasExclude ? 1 : 0);
  if (availableUnique <= 0) {
    return getRandomNumbers(min, max, count);
  }

  const pool: number[] = [];
  for (let i = min; i <= max; i++) {
    if (!hasExclude || i !== excludeNumber) pool.push(i);
  }

  const result: number[] = [];
  const uniqueToTake = Math.min(count, pool.length);
  while (result.length < uniqueToTake && pool.length > 0) {
    const idx = getRandomNumbers(0, pool.length - 1, 1)[0];
    const [picked] = pool.splice(idx, 1);
    result.push(picked);
  }

  const remaining = count - result.length;
  if (remaining > 0) {
    const extras = getRandomNumbers(min, max, remaining);
    result.push(...extras);
  }

  return result;

}

function shuffleArray<T>(arr: T[]): T[] {
  const copy = arr.slice(); // Original nicht verändern
  for (let i = copy.length - 1; i > 0; i--) {
    const j = getRandomNumbers(0, i, 1)[0]; // zufälliger Index zwischen 0 und i
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}


const EXP_FOR_LVL_UP = 16;
const EXP_FOR_CORRECT_ANSWER = 2;
const EXP_FOR_WRONG_ANSWER = -1;


function QuizGamePage() {

  const navigate = useNavigate();

  const {
    getSelectedChars
  } = useKanaSelection()
  const kanas = getSelectedChars();
  const [charIds, setCharIds] = useState<number[]>([]);
  const inputState = useState("");
  const [inputValue, setInputValue] = inputState

  const [startLevel, setStartLevel] = useAppState("quiz", "startLevel");
  const [endLevel, setEndLevel] = useAppState("quiz", "endLevel");

  const searchedValue = charIds.map((charId) => kanas[charId]).join("");

  const [levelState, setLevelState] = useState(startLevel);
  const [answerValue, setAnswerValue] = useState("");
  const [lastAnswerResult, setLastAnswerResult] = useState<"" | "success" | "failure" | "info">("");
  const [xpState, setXpState] = useState(0);

  const [statsState, setStatsState] = useState<AnyObject<number>>({});
  const [rightStatsState, setRightStatsState] = useState<AnyObject<number>>({});
  const [wrongStatsState, setWrongStatsState] = useState<AnyObject<number>>({});

  const newTask = (newKanaCount: number = 1) => {
    const randomIds = getUniqueRandomNumbers(0, kanas.length - 1, newKanaCount);
    setCharIds(randomIds);
  }

  const checkAnswer = (newInputValue?: string) => {
    const thisInputValue = newInputValue ?? inputValue;
    setStatsState((oldStats) => ({...oldStats, [searchedValue]: (oldStats[searchedValue] ?? 0) + 1}))
    if (thisInputValue === toRomaji(searchedValue)) {
      const newXP = (EXP_FOR_CORRECT_ANSWER);
      const nextXP = xpState + newXP;
      if (nextXP >= EXP_FOR_LVL_UP) {
        setLevelState(levelState + 1);
        setXpState(0);
        setAnswerValue("New Level!");
        setInputValue("")
        setLastAnswerResult("success");

        newTask(levelState + 1 >= 4 ? 3 : 1);
      } else {
        setXpState(xpState + newXP);
        setAnswerValue("Correct! " + newXP + " XP added!");
        setInputValue("")
        setLastAnswerResult("success");
        newTask(levelState >= 4 ? 3 : 1);
      }
      setRightStatsState((oldStats) => ({...oldStats, [searchedValue]: (oldStats[searchedValue] ?? 0) + 1}))
    } else {
      setXpState(Math.max(0, xpState + EXP_FOR_WRONG_ANSWER));
      setAnswerValue("Wrong! '" + searchedValue + "' is " + toRomaji(searchedValue) + "" +
        " but you typed '" + thisInputValue + "'!");
      setLastAnswerResult("failure");
      setInputValue("")
      newTask(levelState >= 4 ? 3 : 1);
      setWrongStatsState((oldStats) => ({...oldStats, [searchedValue]: (oldStats[searchedValue] ?? 0) + 1}))
    }
  }

  useEffect(() => {
    newTask(levelState >= 4 ? 3 : 1);
  }, [kanas.length, xpState, levelState])


  const level1Letters = useMemo(() => {
    const level1Randoms = getUniqueRandomNumbers(0, kanas.length - 1, 2, charIds[0]);
    return shuffleArray([
      searchedValue,
      kanas[level1Randoms[0] ?? 0],
      kanas[level1Randoms[1] ?? 0]
    ])
  }, [searchedValue, levelState, kanas.length]);

  const level1Buttons = level1Letters.map((letter, index) => {
    if (!letter) return null;
    return <button className={"button"} key={letter + index} onClick={() => checkAnswer(toRomaji(letter))}>
      {toRomaji(letter)}
    </button>
  })

  const level2Buttons = level1Letters.map((letter, index) => {
    return <button className={"button"} key={letter + index} onClick={() => checkAnswer(letter)}>
      {letter}
    </button>
  })


  const finished = levelState === endLevel + 1;

  return (
    <>
      <div className={"container-col"}>
        <Card>
          <ProgressRow levelState={levelState} maxLevel={endLevel}/>
        </Card>
        {!!finished && <><Card buttonCard className={"level-end-card"}>
          <button className={"button colorful2 half-width icon-button"} onClick={() => {
            setLevelState(startLevel);
            setXpState(0);
            setAnswerValue("Good luck this time!");
            setInputValue("")
            newTask(startLevel >= 4 ? 3 : 1);
          }}>
            <Icon icon={"stash:arrow-retry"}/>
            Retry
          </button>
          <button className={"button colorful3 half-width icon-button" + (endLevel + 1 > 4 ? " disabled" : "")}
                  onClick={() => {
                    setLevelState(startLevel + 1);
                    setStartLevel(startLevel + 1);
                    setEndLevel(endLevel + 1);
                    setXpState(0);
                    setAnswerValue("Good luck this time!");
                    setInputValue("")
                  }}>
            <Icon icon={"arcticons:schildinext"}/>
            Next Level
          </button>
          <button className={"button tertiary full-width icon-button"} onClick={() => navigate(ROUTES.QUIZ)}>
            <Icon icon={"qlementine-icons:page-setup-2-16"}/>
            Setup new kanas
          </button>
          <button className={"button tertiary full-width icon-button"} onClick={() => navigate(ROUTES.PROFILE)}>
            <Icon icon={"iconamoon:profile-thin"}/>
            View Profile
          </button>
        </Card>
          <Card headline={<h3>Stats</h3>} className={"stats-card"}>
            <div className={"container-col"}>
              {Object.keys(statsState).map((key) => {
                return <div className={"container-row container-row-mini"} key={key}>
                  <span>{key}</span>
                  <span>{formatNumber(statsState[key] ?? 0, 0, 3)}</span>
                  {!!statsState[key] && <>
                    <span>{formatNumber((Number(((rightStatsState[key] ?? 0) / statsState[key])) * 100), 1, 3)} %</span>
                    <span className={"success-count"}>{rightStatsState[key] ?? 0}</span>
                    <span className={"failure-count"}>{wrongStatsState[key] ?? 0}</span>
                  </>}
                </div>;
              })}
            </div>
          </Card>
        </>}
        {!finished && <>
          <Card>
            <div className={"big-kana-view"}>
              {levelState === 1 && <>{charIds.map((charId) => <span key={charId}>{kanas[charId]}</span>)}</>}
              {levelState === 2 && <>{charIds.map((charId) => <span key={charId}>{toRomaji(kanas[charId])}</span>)}</>}
              {levelState === 3 && <>{charIds.map((charId) => <span key={charId}>{kanas[charId]}</span>)}</>}
              {levelState === 4 && <>{charIds.map((charId) => <span key={charId}>{kanas[charId]}</span>)}</>}
              {levelState === 5 && <>{charIds.map((charId) => <span key={charId}>{kanas[charId]}</span>)}</>}
              {levelState === 6 && <>{charIds.map((charId) => <span key={charId}>{kanas[charId]}</span>)}</>}
            </div>
          </Card>

          {levelState === 1 &&
            <Card>
              <div className={"container-row answer-input-container"}>
                {level1Buttons}
              </div>
            </Card>
          }
          {levelState === 2 &&
            <Card>
              <div className={"container-row answer-input-container"}>
                {level2Buttons}
              </div>
            </Card>
          }
          {levelState === 3 &&
            <Card>
              <div className={"container-row answer-input-container"}>
                <TextField state={inputState}
                           withoutBorder
                           autoFocus
                           onKeyDown={(keyEv) => {
                             if (keyEv.key === "Enter") checkAnswer()
                           }}/>
                <button className={"button"} onClick={() => checkAnswer()}>Check</button>
              </div>
            </Card>
          }
          {levelState === 4 &&
            <Card>
              <div className={"container-row answer-input-container"}>
                <TextField state={inputState}
                           withoutBorder
                           autoFocus
                           onKeyDown={(keyEv) => {
                             if (keyEv.key === "Enter") checkAnswer()
                           }}/>
                <button className={"button"} onClick={() => checkAnswer()}>Check</button>
              </div>
            </Card>
          }
          {levelState === 5 &&
            <Card>
              <div className={"container-row answer-input-container"}>
                <TextField state={inputState}
                           withoutBorder
                           autoFocus
                           onKeyDown={(keyEv) => {
                             if (keyEv.key === "Enter") checkAnswer()
                           }}/>
                <button className={"button"} onClick={() => checkAnswer()}>Check</button>
              </div>
            </Card>
          }
          {levelState === 6 &&
            <Card>
              <div className={"container-row answer-input-container"}>
                <TextField state={inputState}
                           withoutBorder
                           autoFocus
                           onKeyDown={(keyEv) => {
                             if (keyEv.key === "Enter") checkAnswer()
                           }}/>
                <button className={"button"} onClick={() => checkAnswer()}>Check</button>
              </div>
            </Card>
          }

          <div className={"container-row"}>
            <Card className={"info-card " + (lastAnswerResult ?? "")}>
              <p>{answerValue}</p>
            </Card>
            <Card className={"info-card"}>
              <p>{xpState} XP / {EXP_FOR_LVL_UP} XP</p>
            </Card>
          </div>
        </>}
      </div>
    </>
  )
}

export default QuizGamePage;
