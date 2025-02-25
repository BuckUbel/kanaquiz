import React, {PropsWithChildren, useState} from "react";
import {SimpleSetState, Status, UseAppStateType} from "../../types/default.ts";
import {Icon} from "@iconify/react";

interface TagProps {
  status?: Status
  active?: boolean;
  state?: UseAppStateType<boolean>
  onClick?: (newValue: boolean) => void;
}

function Tag(props: PropsWithChildren<TagProps>) {
  const {state, status, active = true, onClick} = props;
  const ownState = useState<boolean>(active)
  let isActive = ownState[0];
  let setIsActive: SimpleSetState<boolean> = ownState[1];
  if (state) {
    isActive = state[0];
    setIsActive = state[1];
  }

  return <div className={`tag ${status ?? ""}${isActive ? " active " : ""}`}
              onClick={() => {
                const newValue = !isActive;
                if (!!onClick) onClick(newValue);
                if (!!setIsActive) setIsActive(newValue);
              }}>
    {props.children}
    {isActive && !!setIsActive && <Icon icon={"material-symbols:close-small-rounded"} width="24" height="24"/>}
  </div>
}

export default Tag;
