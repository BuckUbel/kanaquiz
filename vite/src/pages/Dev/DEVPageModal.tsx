import Card from "../../elements/Card/Card.tsx";
import {useAppState} from "@/state/useAppState.ts";
import {Icon} from "@iconify/react";
import Modal from "@/elements/Modal/Modal.tsx";

function DEVPageModal() {

  const [openModal, setOpenModal] = useAppState("app", "openModal");

  return (
    <>
      <div className={"container-row"}>
        <Card headline={<h3>Modal</h3>} small>
          <div className={"container-row"}>
            <div className={"container-col zero-flex"}>
              <button className={"colorful"} onClick={() => setOpenModal('development')}>
                <Icon icon={"material-symbols:arrow-selector-tool-outline-rounded"}
                      className={"pulsing-animation"}
                      width={50}
                      height={50}
                />
                Open Modal
              </button>

              <Modal
                variant={"development"}
                headline={"Entwicklungs Modal"}
                content={<Card style={{flexGrow: 2, display:"flex"}}>
                  <p style={{width: "100%", textAlign: "center"}}>Teste auch verschiedene-Fenstergrößen aus!</p>
                  <div><p>Designs:</p><button>Test</button></div>
                </Card>}
              />
            </div>
            <div className={"container-col with-border"}>
              Modal
            </div>
          </div>
        </Card>
      </div>
    </>
  )
}

export default DEVPageModal
