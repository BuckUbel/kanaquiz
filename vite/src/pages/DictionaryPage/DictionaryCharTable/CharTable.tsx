import "./CharTable.scss";
import CharTableCell from "@/pages/DictionaryPage/DictionaryCharTable/CharTableCell.tsx";

interface CharTableProps {
  groups: string[];
  chars: string[][];
  romaji?: string[][];
  alternativeChars?: string[][];
  showAlternative?: boolean
  hideRomaji?: boolean
  category?: 'primary' | 'secondary' | 'tertiary';
  alternativeCategory?: 'primary' | 'secondary' | 'tertiary';
}

function CharTable({
  groups, chars, romaji, hideRomaji, alternativeChars, showAlternative, category,
  alternativeCategory
}: CharTableProps) {

  return (
    <>
      <div className={"char-table container-col"}>
        {chars.map((charGroup, groupIndex) => {

          return <div key={groupIndex} className={"container-row group-row"}>
            <div className={"container-col group-header"}>
              {groups[groupIndex]}
            </div>
            <div className={"container-col group-body"}>
              {charGroup.map((japChar, charIndex) => {
                return <CharTableCell key={charIndex} japChar={japChar}
                                      romajiChar={!!romaji ? romaji[groupIndex]?.[charIndex] : undefined}
                                      alternativeChar={!!alternativeChars ? alternativeChars[groupIndex]?.[charIndex] : undefined}
                                      showAlternative={alternativeChars && showAlternative && !!alternativeChars[groupIndex]?.[charIndex]}
                                      hideRomaji={hideRomaji}
                                      category={category} alternativeCategory={alternativeCategory}/>

              })}
            </div>
          </div>
        })}

      </div>

    </>
  )
}

export default CharTable
