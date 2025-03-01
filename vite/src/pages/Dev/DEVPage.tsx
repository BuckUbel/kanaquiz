import DEVPageTags from "./DEVPageTags.tsx";
import DEVPageNotifications from "./DEVPageNotifications.tsx";
import Card from "../../elements/Card/Card.tsx";
import DEVPageModal from "./DEVPageModal.tsx";
import DEVPageButtons from "./DEVPageButtons.tsx";

function DEVPage() {

  return (
    <>
      <div className={"container-row"}>
      <Card headline={<h2>DEV Page</h2>}/>
      </div>
        <div className={"container-row"}>
          <DEVPageTags/>
        </div>
        <div className={"container-row"}>
          <DEVPageNotifications/>
        </div>
        <div className={"container-row"}>
          <DEVPageButtons/>
          <DEVPageModal/>
        </div>
    </>
  )
}

export default DEVPage
