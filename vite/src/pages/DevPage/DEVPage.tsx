import DEVPageTags from "./DEVPageTags.tsx";
import DEVPageNotifications from "./DEVPageNotifications.tsx";
import Card from "../../elements/Card/Card.tsx";

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
    </>
  )
}

export default DEVPage
