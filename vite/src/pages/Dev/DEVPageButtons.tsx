import Card from "../../elements/Card/Card.tsx";
import {Icon} from "@iconify/react";
import SwitchButton from "@/elements/Button/SwitchButton.tsx";
import {useAppState} from "@/state/useAppState.ts";

function DEVPageButtons() {

  const onOffState1 = useAppState("dev","onOff1")
  const onOffState2 = useAppState("dev","onOff2")
  const onOffState3 = useAppState("dev","onOff3")

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
              <SwitchButton state={onOffState1} onLabel={"On"} offLabel={"Off"} />
              <SwitchButton state={onOffState2} onLabel={"On"} offLabel={"Off"} />
              <SwitchButton state={onOffState3} onLabel={"Hiragana"} offLabel={"Katagana"} />
              <SwitchButton state={onOffState3} onLabel={"Hiragana/Katakana"} offLabel={"Off"} />
            </div>
            <div className={"container-row zero-flex button-container"}>
              <button className={"icon-button greyful"}>
                <Icon icon={"material-symbols:charger-outline-rounded"}
                      className={"pulsing-animation"}
                      width={50}
                      height={50}/>
                Click me 1
              </button>
              <button className={"icon-button colorful"}>
                <Icon icon={"material-symbols:adb"}
                      className={"pulsing-animation"}
                      width={50}
                      height={50}/>
                Click me more 2
              </button>
              <button className={"icon-button colorful2"}>
                <Icon icon={"material-symbols:ar-stickers-outline"}
                      className={"bouncing-animation"}
                      width={50}
                      height={50}/>
                Click me 3
              </button>
              <button className={"icon-button colorful2"}>
                <Icon icon={"material-symbols:deceased-outline-sharp"}
                      className={"shake-animation"}
                      width={50}
                      height={50}/>
                Click me 4
              </button>

              <button className={"icon-button colorful2"}>
                <Icon icon={"material-symbols:diamond-outline"}
                      className={"wobble-animation"}
                      width={50}
                      height={50}/>
                Click me 5
              </button>
              <button className={"icon-button colorful2"}>
                <Icon icon={"material-symbols:helicopter-outline-sharp"}
                      className={"jump-animation"}
                      width={50}
                      height={50}/>
                Click me 6
              </button>
              <button className={"icon-button colorful3"}>
                <Icon icon={"material-symbols:attractions-outline-rounded"}
                      width={50}
                      height={50}/>
                Click me 7
              </button>

            </div>
            <div className={"container-row zero-flex button-container"}>
              <button className={"greyful"}> Click me 8</button>
              <button className={"colorful"}> Click me 9</button>
              <button className={"colorful2"}> Click me 10</button>
              <button className={"colorful3"}> Click me 11</button>
            </div>
          </div>
        </Card>
      </div>
    </>
  )
}

export default DEVPageButtons
