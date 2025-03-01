import {useState} from "react";
import {ROUTES} from "../Router/Routes.ts";
import {NavLinkListItem} from "./NavLinkListItem.tsx";

function NavigationList() {

  const [showViewSettings, setShowViewSettings] = useState(false);
  const toggleViewSettings = () => {
    setShowViewSettings(v => !v);
  }

  return (
    <ul id={"navigation-list"}>
      <NavLinkListItem to={ROUTES.INDEX} icon={"material-symbols:family-home-rounded"}>
        Kana Pro 2
      </NavLinkListItem>

      <NavLinkListItem to={ROUTES.QUIZ} icon={"kana-question"}>
        Quiz
      </NavLinkListItem>
      <NavLinkListItem to={ROUTES.DICTIONARY} icon={"kana-dictionary"} >
        Dictionary
      </NavLinkListItem>


      <div className={"spacer without-border"}/>
      <div className={"spacer without-border"}/>
      <div className={"spacer"}/>
      <NavLinkListItem to={ROUTES.DEV} icon={"material-symbols:deployed-code-alert"}>
        DEV
      </NavLinkListItem>
      <div className={"spacer"}/>
      <NavLinkListItem active={showViewSettings} onClick={toggleViewSettings}
                       icon={"material-symbols:styler-outline"}/>
      <NavLinkListItem to={ROUTES.SETTINGS} icon={"material-symbols:settings-outline-rounded"}>
        Settings
      </NavLinkListItem>
    </ul>
  )
}

export default NavigationList
