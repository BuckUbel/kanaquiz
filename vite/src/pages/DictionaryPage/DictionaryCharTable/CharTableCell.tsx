import "./CharTable.scss";
import {useEffect, useState} from "react";

interface CharTableProps {
  japChar: string;
  romajiChar?: string;
  alternativeChar?: string;
  hideRomaji?: boolean;
  showAlternative?: boolean;
  category?: 'primary' | 'secondary' | 'tertiary';
  alternativeCategory?: 'primary' | 'secondary' | 'tertiary';
  onClick?: (char: string) => void;
  selected?: boolean;
  selectedAlternative?: boolean;
}

function CharTableCell({
  hideRomaji, alternativeChar, showAlternative, japChar, romajiChar, category, alternativeCategory,onClick,
  selected, selectedAlternative
}: CharTableProps) {

  const [displayStatus, setDisplayStatus] = useState(0);
  let maxStatus = 1;
  if (!!hideRomaji && !onClick) maxStatus += 1;
  if (!!alternativeChar) maxStatus += 2;

  useEffect(() => {
    if (!!alternativeChar) setDisplayStatus(0);
    if (!!hideRomaji) setDisplayStatus(0);
  }, [alternativeChar, hideRomaji]);

  let showRomaji = false;
  if (hideRomaji && displayStatus === 3) showRomaji = true
  if (hideRomaji && !alternativeChar && displayStatus === 1) showRomaji = true

  const clickHandler = ()=>{
    setDisplayStatus(v => (v + 1) % maxStatus);
    if(!!onClick) onClick(japChar)
  }

  return (
    <>
      <div className={"container-col char-element"} onClick={clickHandler}>
        <p className={"japanese-char"}>
          {displayStatus === 0 && <>
            {alternativeChar && showAlternative && <span className={alternativeCategory}>{alternativeChar}</span>}
            <span className={category}>{japChar}</span>
          </>}

          {(displayStatus === 1 && !!alternativeChar) && <span className={alternativeCategory}>{alternativeChar}</span>}

          {displayStatus === 2 && <span className={category}>{japChar}</span>}

          {showRomaji && <span className={"tertiary"}>{romajiChar}</span>}
        </p>
        {!hideRomaji && !!romajiChar && <span className={"romaji-char tertiary"}>{romajiChar}</span>}

        {selected===true && selectedAlternative===false && alternativeChar && showAlternative && displayStatus === 0 &&<div className={"non-selected left"}/>}
        {selected===false && selectedAlternative===true && alternativeChar && showAlternative && displayStatus === 0 &&<div className={"non-selected right"}/>}
        {selected===false && selectedAlternative===false && <div className={"non-selected"}/>}
        {selectedAlternative===false && displayStatus===1 && <div className={"non-selected"}/>}
        {selected===false && displayStatus === 2 && <div className={"non-selected"}/>}
      </div>
    </>
  )
}

export default CharTableCell
