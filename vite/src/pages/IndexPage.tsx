import Card from "../elements/Card/Card.tsx";
import {ROUTES} from "../components/Router/Routes.ts";
import {Icon} from "@iconify/react";
import {NavLinkItem} from "../elements/NavLinkItem.tsx";

function IndexPage() {

  return (
    <>
      <div className={"container-row"}>
        <Card headline={<div className={"container-row"}>
          <h2 style={{flex: "1"}}>
            Welcome to Kana Pro 2!
          </h2>
          <Icon icon={"kana-question"} width="50" height="50"/>
        </div>
        }>
        </Card>
      </div>
      <Card>
        <p>Do u want learn Japanese chars? So this is the right site for u!</p>
        <p>We have a really cool quiz mode here. And some other games</p>
        <br/>
        <p>This site is on a beta state. Some functionality is not already available!</p>
      </Card>
      <div className={"button-list main-button-list"}>
        <NavLinkItem to={ROUTES.QUIZ} className={"button icon-button primary colorful3 pulsing-shadow-animation"}>
          <div className={"container-row"}>
            <Icon icon={"kana-question"} width="50" height="50"/>
            <Icon icon={"icon-park-solid:play"} width="50" height="50"/>
          </div>
          Start the Quiz!
        </NavLinkItem>
        <NavLinkItem to={ROUTES.SETTINGS} className={"button colorful2"}>Configure Settings</NavLinkItem>
      </div>
    </>
  )
}

export default IndexPage
