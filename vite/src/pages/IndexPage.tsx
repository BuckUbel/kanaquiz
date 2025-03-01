import Card from "../elements/Card/Card.tsx";
import {ROUTES} from "../components/Router/Routes.ts";
import {Icon} from "@iconify/react";
import {NavLinkItem} from "../elements/NavLinkItem.tsx";
import {SimpleKanaDictionary} from "../data/SimpleKanaDictionary.ts";

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
          <p> Please choose a quiz mode: </p>
        </Card>
      </div>

      <div className={"container-row"}>
        <div className={"container-col"}>
          <Card headline={<h3>Hiragana · ひらがな</h3>} small>
            <p>あ · い · う · え · お</p>
            {Object.values(SimpleKanaDictionary.hiragana).map((kanas, i) => {
              return <p key={i}>{Object.keys(kanas)}</p>;
            })}
          </Card>
          <Card buttonCard small>
            <button className={"active"}>All</button>
            <button>None</button>
            <button>All alternative</button>
            <button>No alternative</button>
          </Card>
        </div>
        <div className="container-col">
          <Card headline={<h3>Katakana · カタカナ</h3>} small>
            <p>ア · イ · ウ · エ · オ</p>
            {Object.values(SimpleKanaDictionary.katakana).map((kanas) => {
              return <p>{Object.keys(kanas)}</p>;
            })}
          </Card>
          <Card buttonCard small>
            <button>All</button>
            <button>None</button>
            <button>All alternative</button>
            <button>No alternative</button>
          </Card>
        </div>
      </div>
      <div className={"button-list main-button-list"}>
        <NavLinkItem to={ROUTES.QUIZ} className={"button primary full-width"}>Start the Quiz!</NavLinkItem>
        <NavLinkItem to={ROUTES.SETTINGS} className={"button secondary full-width"}>Configure Settings</NavLinkItem>
      </div>
    </>
  )
}

export default IndexPage
