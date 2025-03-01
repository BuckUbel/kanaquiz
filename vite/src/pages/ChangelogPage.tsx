import Card from "../elements/Card/Card.tsx";
import {Icon} from "@iconify/react";
import {useRef} from "react";

function ChangelogPage() {

  const technologyRef = useRef<HTMLUListElement>(null);

  const toggleMarquee = () => {
    if (technologyRef.current) {
      technologyRef.current.classList.toggle("marquee-animation");
    }
  }

  return (
    <>
      <h2>Changelog</h2>
      <div className={"container-col changelog-container"}>
        <Card headline={<div className={"container-row"}>
          <h2 style={{flex: "1"}}>
            Welcome to Kana Pro 2!
          </h2>
          <Icon icon={"kana-question"} width="50" height="50"/>
        </div>
        }>
          <div className={"container-row"}>
            <div className={"container-col"}>
              <p> There are some changes. Feel u invited to look at them! </p>
              <h3>This app is developed with these technologies:</h3>
            </div>
            <div className={"container-row"}>
              <div className={"spacer"}/>
              <div className={"container-row"}>
                <button className={"icon-button"} onClick={toggleMarquee}>
                  <Icon icon={"material-symbols:play-pause-rounded"} width="50" height="30"/>
                  Toggle Marquee
                </button>
              </div>
            </div>
          </div>

          <div className={"technology-icon-list"}>
            <ul ref={technologyRef} className={"container-row icon-list marquee-animation"}>
              <li id={"icon-list-vivaldi"}><Icon icon={"logos:vivaldi-icon"}/>Vivaldi</li>
              <li id={"icon-list-phpstorm"}><Icon icon={"logos:phpstorm"}/>phpStorm</li>
              <li id={"icon-list-typescript"}><Icon icon={"logos:typescript-icon"}/>Typescript</li>
              <li id={"icon-list-react"}><Icon icon={"logos:react"}/>React</li>
              <li id={"icon-list-vitejs"}><Icon icon={"logos:vitejs"}/>Vite</li>
              <li id={"icon-list-iconify"}><Icon icon={"line-md:iconify1"}/>Iconify</li>
            </ul>
          </div>
        </Card>
        <Card headline={<h3>V3.0.0-alpha-02</h3>}>
          <div className={"container-row"}>
            <p>Implement more components!</p>
            <div className={"spacer"}/>
            <i>xx.03.2025</i>
          </div>
          <ul>
            <li>Add some input fields</li>
            <li>Add new navigation</li>
            <li>Add modals</li>
            <li>Add selector</li>
            <li>Add table</li>
          </ul>
        </Card>
        <Card headline={<h3>V3.0.0-alpha-01</h3>}>
          <div className={"container-row"}>
            <p>Implement more components!</p>
            <div className={"spacer"}/>
            <i>01.03.2025</i>
          </div>
          <ul>
            <li>Implement dictionary site</li>
            <li>Add first implementation of char table</li>
            <li>→First usage of the origional data, the kana dictionary!</li>
            <li>Add a simple draft of vocabulary UI</li>
            <li>Add some simple ideas for minigames</li>
          </ul>
        </Card>
        <Card headline={<h3>V3.0.0-alpha-00</h3>}>
          <div className={"container-row"}>
            <p>Initializing the project</p>
            <div className={"spacer"}/>
            <i>25.02.2025</i>
          </div>
          <ul>
            <li>Start rewrite of old components</li>
            <li>Dev-Page created for testing components</li>
            <li>Main navigation structure implemented (Header, Footer)</li>
            <li>Page-wide state implemented</li>
          </ul>
        </Card>
      </div>
    </>
  )
}

export default ChangelogPage
