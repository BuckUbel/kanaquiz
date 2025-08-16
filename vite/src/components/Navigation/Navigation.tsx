import './navigation.scss'
import NavigationList from "./NavigationList.tsx";
import {useAppState} from "@/state/useAppState.ts";
import {Icon} from "@iconify/react";

interface NavigationProps {
}

function Navigation(props: NavigationProps) {

  const [openVerticalNav, , setOpenVerticalNav] = useAppState("app", "openVerticalNav");
  const [openedModal] = useAppState("app", "openModal");

  return (
    <>
      <div className={"navigation-vertical-opener-bubble"} onClick={() => setOpenVerticalNav(v => !v)}>
        <Icon icon={"duo-icons:menu"}/>
      </div>
      <nav className={(openVerticalNav ? "vertical-open" : "")}>

        <div className={"navigation-vertical-background-container" + (openVerticalNav ? " show" : "")}
             onClick={() => setOpenVerticalNav(v => !v)}/>
        <div className={"navigation-container" + (openedModal === "introduction" ? " disabled" : "")}>
          <NavigationList/>
        </div>
      </nav>
    </>
  )
}

export default Navigation
