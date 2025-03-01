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
}

function CharTableCell({
  hideRomaji, alternativeChar, showAlternative, japChar, romajiChar, category, alternativeCategory
}: CharTableProps) {

  const [displayStatus, setDisplayStatus] = useState(0);
  let maxStatus = 1;
  if (!!hideRomaji) maxStatus += 1;
  if (!!alternativeChar) maxStatus += 2;

  useEffect(() => {
    if (!!alternativeChar) setDisplayStatus(0);
    if (!!hideRomaji) setDisplayStatus(0);
  }, [alternativeChar,hideRomaji]);

  let showRomaji = false;
  if (hideRomaji && displayStatus === 3) showRomaji= true
  if (hideRomaji && !alternativeChar && displayStatus === 1) showRomaji= true

  return (
    <>
      <div className={"container-col char-element"} onClick={() => setDisplayStatus(v => (v + 1) % maxStatus)}>
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
      </div>
    </>
  )
}

export default CharTableCell
