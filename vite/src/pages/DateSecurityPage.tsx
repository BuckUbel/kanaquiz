import Card from "@/elements/Card/Card.tsx";
import {Icon} from "@iconify/react";

function DataSecurityPage() {

  return (
    <>
      <h2>Data Security</h2>
      <div className={"container-col"}>
        <Card headline={<h3>Your data is secure!</h3>}>
          All your data is stored on your device. <br/>
          Everything here is open source. <br/>
          So feel free to check the code and do whatever u want with it.
          <ul>
            <li>
              <Icon icon={"material-symbols:cookie-off-outline-rounded"} width="50" height="30"/>
              No cookies!
            </li>
            <li>
              <Icon icon={"material-symbols:compare-arrows-rounded"} width="50" height="30"/>
              No api requests!
            </li>
            <li>
              <Icon icon={"nrk:offline"} width="50" height="30"/>
              Offline usable!
            </li>
            <li>
              <Icon icon={"ooui:link-secure"} width="50" height="30"/>
              No data infections!
            </li>
          </ul>
        </Card>
      </div>
    </>
  )
}

export default DataSecurityPage
