import {SimpleState, UseAppStateType} from "@/types/default.ts";

interface SwitchButtonProps {
  state: UseAppStateType<boolean> | SimpleState<boolean>;
  onLabel: string;
  offLabel: string;
}

function SwitchButton(props: SwitchButtonProps) {
  const [value, setValue] = props.state;
  return <button className={`switch-button ${value ? "on primary" : "off secondary"}`}
                 onClick={() => {
                   setValue(!value);
                 }}
  >
    <span className={"hidden-label"}>{props.onLabel}{props.offLabel}</span>
    <span className={"on-label"}>{props.onLabel}</span>
    <span className={"off-label"}>{props.offLabel}</span>
    <span className={"switch-label-active-background"}/>
  </button>
}

export default SwitchButton;
