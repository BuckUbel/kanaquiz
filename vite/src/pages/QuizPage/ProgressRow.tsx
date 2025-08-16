import {useEffect} from "react";
import ProgressRowItem from "@/pages/QuizPage/ProgressRowItem.tsx";
import {useScrollableContainer} from "@/state/hooks/useScrollableContainer.ts";
import {Icon} from "@iconify/react";

interface ProgressRowProps {
  levelState: number;
  minLevel?: number;
  maxLevel?: number;
}

function ProgressRow({levelState, minLevel = 1, maxLevel = 6}: ProgressRowProps) {
  const {ref, scrollClassName} = useScrollableContainer()

  useEffect(() => {
    const progressRow = ref.current;
    if (!!progressRow) {
      const progressItems = progressRow.getElementsByClassName('progress-item');
      const itemIndex = levelState - (minLevel - 1) - 1;
      if (!!progressItems[itemIndex]) {
        const el = progressItems[itemIndex];
        const elRect = el.getBoundingClientRect();
        const el_1 = progressItems[0];
        const el_1Rect = el_1?.getBoundingClientRect() ?? elRect;
        const elParent = el.parentElement;
        const elParentRect = (el.parentElement as any).getBoundingClientRect();
        elParent?.scrollTo({
          behavior: 'smooth',
          left: (elParentRect.left - el_1Rect.left) - (elParentRect.left - elRect.left)
        })
      }
      if (levelState > 5) {
        progressRow.scrollTo(9999, 9999)
      }
    }
  }, [levelState, minLevel,  maxLevel]);


  return (
    <div className={"progress-row-container"}>
      {levelState < (maxLevel + 2) && <div className={"progress-row " + scrollClassName} ref={ref}>
        {minLevel <= 1 && maxLevel >= 1 &&
          <ProgressRowItem levelState={levelState} levelIndex={1} levelName={"Select one of 3 romaji"}/>}
        {minLevel <= 2 && maxLevel >= 2 &&
          <ProgressRowItem levelState={levelState} levelIndex={2} levelName={"Select one of 3 kana"}/>}
        {minLevel <= 3 && maxLevel >= 3 &&
          <ProgressRowItem levelState={levelState} levelIndex={3} levelName={"Input 1 romaji"}/>}
        {minLevel <= 4 && maxLevel >= 4 &&
          <ProgressRowItem levelState={levelState} levelIndex={4} levelName={"Input 3 romaji"}/>}
        {minLevel <= 5 && maxLevel >= 5 &&
          <ProgressRowItem levelState={levelState} levelIndex={5} levelName={"Input real words with english name"}/>}
        {minLevel <= 6 && maxLevel >= 6 &&
          <ProgressRowItem levelState={levelState} levelIndex={6} levelName={"Input real words"}/>}
      </div>}
      {levelState === (maxLevel + 1) && <div className={"progress-final"}>
        <div className={"rainbow"}/>
        <div className={"animated-action-icon-container"}>
          <div className={"inner-animation-container"}>
            <div className={"rocket-action-icon animated-action-icon-start"}>
              <Icon className={"headline-icon"} icon={"fluent-mdl2:rocket"}/>
              <div className={"stars-background"}/>
            </div>
          </div>
        </div>
        <div className={"rainbow"}/>

      </div>}
    </div>
  )
}

export default ProgressRow;
