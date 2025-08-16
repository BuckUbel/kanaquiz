import {useState} from "react";
import {ROUTES} from "../Router/Routes.ts";
import {NavLinkListItem} from "./NavLinkListItem.tsx";
import {useAppState} from "@/state/useAppState.ts";

function NavigationList() {

  const [openVerticalNav, , setOpenVerticalNav] = useAppState("app", "openVerticalNav");
  const [showViewSettings, setShowViewSettings] = useState(false);
  const toggleVerticalNav = () => {
    setOpenVerticalNav(v => !v);
  }
  const toggleViewSettings = () => {
    setShowViewSettings(v => !v);
  }

  return (
    <ul id={"navigation-list"}>
      <NavLinkListItem liClassName={"navigation-vertical-opener"} active={openVerticalNav} onClick={toggleVerticalNav}
                       icon={"duo-icons:menu"}/>
      <NavLinkListItem to={ROUTES.INDEX} icon={"material-symbols:family-home-rounded"}>
        Kana Pro 2
      </NavLinkListItem>

      <NavLinkListItem to={ROUTES.QUIZ} icon={"kana-question"}>
        Quiz
      </NavLinkListItem>
      <NavLinkListItem to={ROUTES.DICTIONARY} icon={"kana-dictionary"}>
        Dictionary
      </NavLinkListItem>


      <div className={"spacer without-border"}/>
      <div className={"spacer without-border"}/>
      {/*<div className={"spacer"}/>*/}
      {/*<NavLinkListItem to={ROUTES.DEV} icon={"material-symbols:deployed-code-alert"}>*/}
      {/*  DEV*/}
      {/*</NavLinkListItem>*/}
      <div className={"spacer"}/>
      <NavLinkListItem
        liClassName={"disabled"}
        active={showViewSettings} onClick={toggleViewSettings}
        icon={"material-symbols:styler-outline"}>
        Designs

      </NavLinkListItem>
      <NavLinkListItem to={ROUTES.SETTINGS} icon={"material-symbols:settings-outline-rounded"}>
        Settings
      </NavLinkListItem>
    </ul>
  )
}

export default NavigationList
