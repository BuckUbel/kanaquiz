import {useAppState} from "@/state/useAppState.ts";
import NumberField from "@/elements/Input/NumberField.tsx";
import Card from "@/elements/Card/Card.tsx";
import Modal from "@/elements/Modal/Modal.tsx";

function SettingsPage() {

  const startLevelState = useAppState("quiz", "defaultStartLevel");
  const endLevelState = useAppState("quiz", "defaultEndLevel");
  const [openModal, setOpenModal] = useAppState("app", "openModal");
  return (
    <>
      <h2>App Settings</h2>
      <p style={{color: "red", fontSize: "36px"}}>It's in development!</p>
      <div className={"container-row"}>
        <div className={"container-col"}>
          <Card>
            {startLevelState[0] !== undefined &&
              <NumberField state={startLevelState} label={"Start Level for Quiz Mode"} min={1} max={4} info={"1-4"}/>}
            {endLevelState[0] !== undefined &&
              <NumberField state={endLevelState} label={"End Level for Quiz Mode"} min={1} max={4} info={"1-4"}/>}
          </Card>
        </div>
        <div className={"container-col"}></div>
      </div>
      <div className={"container-row"}>
        <div className={"container-col"}>
          <Card buttonCard>
            <p>If something going wrong or u want delete ur data u can do it here:</p>
            <button className={"warning"} onClick={() => setOpenModal("delete-data")}>
              Delete ALL DATA
            </button>
          </Card>
        </div>
      </div>
      <Modal variant={"delete-data"} headline={"DELETE ALL DATA"}
             content={<>
               <p>Are u sure u want delete all your data?</p>
                 <div className={"container-col button-col"}>
                   <button className={"warning"} onClick={() => {localStorage.clear(); location.reload()}}>YES</button>
                   <button className={"warning"} onClick={() => {setOpenModal(undefined)}}>NO</button>
                 </div>
             </>}/>
    </>
  )
}

export default SettingsPage
