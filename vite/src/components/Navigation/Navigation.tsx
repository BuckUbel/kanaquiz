import {useState} from "react";
import {ROUTES} from "../Router/Routes.ts";
import {NavLinkListItem} from "./NavLinkListItem.tsx";
import './navigation.scss'

function Navigation() {

  const [showViewSettings, setShowViewSettings] = useState(false);
  const toggleViewSettings = () => {
    setShowViewSettings(v => !v);
  }

  return (
    <nav>
      <div className={"navigation-container"}>
        <ul id={"navigation-list"}>
          <NavLinkListItem to={ROUTES.INDEX} icon={"material-symbols:family-home-rounded"}>
            Kana Pro 2
          </NavLinkListItem>
          <NavLinkListItem to={ROUTES.QUIZ} icon={"kana-question"}>
            Quiz
          </NavLinkListItem>
          <div className={"spacer"}/>
          <NavLinkListItem active={showViewSettings} onClick={toggleViewSettings}
                           icon={"material-symbols:styler-outline"}/>
          <NavLinkListItem to={ROUTES.SETTINGS} icon={"material-symbols:settings-outline-rounded"}>
            Settings
          </NavLinkListItem>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
