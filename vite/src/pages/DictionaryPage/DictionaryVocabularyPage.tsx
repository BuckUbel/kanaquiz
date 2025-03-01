import {Icon} from "@iconify/react";
import Card from "@/elements/Card/Card.tsx";

function DictionaryVocabularyPage() {

  return (
    <>
      <h3>Vocabulary</h3>
      <div className={"container-row"}>
        <div className={"container-col"}>
          <Card headline={<h3>Listen</h3>}>
            <div className={"container-col"}>
              <Card headline={<h4>Level 0: Newbies</h4>}>

              </Card>
              <Card headline={<h4>Level 1: Beginners</h4>}>

              </Card>
              <Card headline={<h4>→ Level 2: Intermediate</h4>}>
              </Card>
            </div>

          </Card>
        </div>
        <div className={"container-col"}>
          <Card headline={<h3>Deine Listen</h3>}>
            <div className={"container-row"}>

              <button className={"icon-button"}><Icon icon={"material-symbols:library-add-outline-rounded"} width="50"
                                                      height="30"/> Add list
              </button>
              <button className={"icon-button"}><Icon icon={"material-symbols:note-add-outline-rounded"} width="50"
                                                      height="30"/> Add word
              </button>
            </div>

          </Card>

        </div>
      </div>
    </>
  )
}

export default DictionaryVocabularyPage
