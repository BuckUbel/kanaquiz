import {useAppState} from "../../state/useAppState.ts";
import DEVPageTags from "./DEVPageTags.tsx";

function DEVPage() {

  return (
    <>
      <h2>DEV Page</h2>
      <div className={"container-row"}>
        <DEVPageTags/>
      </div>
    </>
  )
}

export default DEVPage
