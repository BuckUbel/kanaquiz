import Card from "../../elements/Card/Card.tsx";
import {Icon} from "@iconify/react";

function DEVPageButtons() {

  return (
    <>
      <div className={"container-row"}>
        <Card headline={<h3>Buttons</h3>} small>
          <div className={"container-col"}>
            <div className={"container-row zero-flex button-container"}>
              <button className={"active"}>Active</button>
              <button className={"primary"}>Primary</button>
              <button className={"secondary"}>Secondary</button>
              <button className={"tertiary"}>Tertiary</button>
            </div>
            <div className={"container-row zero-flex button-container"}>
              <button className={"icon-button greyful"}>
                <Icon icon={"material-symbols:charger-outline-rounded"}
                      className={"pulsing-animation"}
                      width={50}
                      height={50}/>
                Click me
              </button>
              <button className={"icon-button colorful"}>
                <Icon icon={"material-symbols:adb"}
                      className={"pulsing-animation"}
                      width={50}
                      height={50}/>
                Click me more
              </button>
              <button className={"icon-button colorful2"}>
                <Icon icon={"material-symbols:ar-stickers-outline"}
                      className={"bouncing-animation"}
                      width={50}
                      height={50}/>
                Click me
              </button>
              <button className={"icon-button colorful2"}>
                <Icon icon={"material-symbols:deceased-outline-sharp"}
                      className={"shake-animation"}
                      width={50}
                      height={50}/>
                Click me
              </button>

              <button className={"icon-button colorful2"}>
                <Icon icon={"material-symbols:diamond-outline"}
                      className={"wobble-animation"}
                      width={50}
                      height={50}/>
                Click me
              </button>
              <button className={"icon-button colorful2"}>
                <Icon icon={"material-symbols:helicopter-outline-sharp"}
                      className={"jump-animation"}
                      width={50}
                      height={50}/>
                Click me
              </button>
              <button className={"icon-button colorful3"}>
                <Icon icon={"material-symbols:attractions-outline-rounded"}
                      width={50}
                      height={50}/>
                Click me
              </button>

            </div>
            <div className={"container-row zero-flex button-container"}>
              <button className={"greyful"}> Click me</button>
              <button className={"colorful"}> Click me</button>
              <button className={"colorful2"}> Click me</button>
              <button className={"colorful3"}> Click me</button>
            </div>
          </div>
        </Card>
      </div>
    </>
  )
}

export default DEVPageButtons
