import "./CharTable.scss";
import CharTableCell from "@/pages/DictionaryPage/DictionaryCharTable/CharTableCell.tsx";
import {AnyObject} from "@/types/default.ts";

interface CharTableProps {
  groups: string[];
  chars: string[][];
  romaji?: string[][];
  alternativeChars?: string[][];
  showAlternative?: boolean
  hideRomaji?: boolean
  category?: 'primary' | 'secondary' | 'tertiary';
  alternativeCategory?: 'primary' | 'secondary' | 'tertiary';
  onGroupClick?: (charGroup: string) => void;
  onColClick?: (index: number) => void;
  onCharClick?: (char: string) => void;
  selectedChars?: AnyObject<boolean>;
  withoutHeader?: boolean;
}

function CharTable({
  groups, chars, romaji, hideRomaji, alternativeChars, showAlternative, category, onGroupClick, onCharClick, onColClick,
  alternativeCategory, selectedChars, withoutHeader
}: CharTableProps) {

  const maxSize = chars.reduce((sum, group, index) => {
    return Math.max(sum, group.length);
  }, 0);

  return (
    <>
      <div className={"char-table container-col"}>
        <div key={-1} className={"container-row group-row"}>
          <div className={"container-col group-header"}
               onClick={onColClick ? () => onColClick(-1) : undefined}>
            ALL
          </div>
          <div className={"container-col group-body"}>

            {new Array(maxSize).fill(0).map((_, index) => (
              <div className={"container-col group-header"}
                   onClick={onColClick ? () => onColClick(index) : undefined}>
                {chars?.[0]?.[index] ?? ""}
              </div>
            ))}
          </div>
        </div>
        {chars?.map((charGroup, groupIndex) => {
          const isRowSelected = selectedChars ? charGroup.every(element => selectedChars[element]) : undefined;
          return <div key={groupIndex} className={"container-row group-row"}>
            {!withoutHeader && <div className={"container-col group-header"}
                                    onClick={onGroupClick ? () => onGroupClick(groups[groupIndex]) : undefined}>
              {groups[groupIndex]}
              {isRowSelected === false && <div className={"non-selected"}/>}
            </div>}
            <div className={"container-col group-body"}>
              {charGroup.map((japChar, charIndex) => {
                return <CharTableCell key={charIndex} japChar={japChar}
                                      romajiChar={!!romaji ? romaji[groupIndex]?.[charIndex] : undefined}
                                      alternativeChar={!!alternativeChars ? alternativeChars[groupIndex]?.[charIndex] : undefined}
                                      showAlternative={alternativeChars && showAlternative && !!alternativeChars[groupIndex]?.[charIndex]}
                                      hideRomaji={hideRomaji}
                                      category={category} alternativeCategory={alternativeCategory}
                                      onClick={onCharClick}
                                      selected={selectedChars ? selectedChars[japChar] ?? false : undefined}
                                      selectedAlternative={selectedChars && !!alternativeChars ?
                                        selectedChars[alternativeChars[groupIndex]?.[charIndex]] ?? false : undefined}
                />
              })}
            </div>
          </div>
        })}

      </div>

    </>
  )
}

export default CharTable
