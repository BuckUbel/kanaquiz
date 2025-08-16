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
        <Card headline={<h3>V3.0.0-beta-00</h3>}>
          <div className={"container-row"} style={{position: "relative"}}>
            <p>FIRST BETA RELEASE</p>
            <div className={"rainbow"} style={{position: "absolute"}}/>
            <div className={"spacer"}/>
            <i>16.08.2025</i>
          </div>
          <ul>
            <li>Bugfixing</li>
            <li>Setup the site under /kanaquiz</li>
            <li>Release on github-pages</li>
          </ul>
        </Card>
        <Card headline={<h3>V3.0.0-alpha-05</h3>}>
          <div className={"container-row"}>
            <p>Improve & Bugfixing</p>
            <div className={"spacer"}/>
            <i>16.08.2025</i>
          </div>
          <ul>
            <li>Add some game ideas</li>
            <li>Add breadcrumbs</li>
            <li>Extend quiz mode with useful level conditions</li>
            <li>Add the other level question possibilities</li>
            <li>Add settings page for adjust the start and end level</li>
          </ul>
        </Card>
        <Card headline={<h3>V3.0.0-alpha-04</h3>}>
          <div className={"container-row"}>
            <p>Quiz Mode!</p>
            <div className={"spacer"}/>
            <i>12.08.2025</i>
          </div>
          <ul>
            <li>Add draft main quiz mode</li>
            <li>Add xp & level system</li>
            <li>Add win animation</li>
            <li>Improved input field with key listener</li>
            <li>Improved mobile css</li>
            <li>Add Vertical navigation</li>
          </ul>
        </Card>
        <Card headline={<h3>V3.0.0-alpha-03</h3>}>
          <div className={"container-row"}>
            <p>Preparing & Fixing</p>
            <div className={"spacer"}/>
            <i>11.08.2025</i>
          </div>
          <ul>
            <li>Improve responsive behaviour</li>
            <li>Add start animation</li>
            <li>Reordered Main Page and Quiz Page</li>
            <li>Add char translator at dictionary page</li>
            <li>Add text input field component with edit-stated-value</li>
            <li>Finalized selection for quiz chars</li>
          </ul>
        </Card>
        <Card headline={<h3>V3.0.0-alpha-02</h3>}>
          <div className={"container-row"}>
            <p>Implement char selection!</p>
            <div className={"spacer"}/>
            <i>07.04.2025</i>
          </div>
          <ul>
            <li>Add modals</li>
            <li>Improve char table</li>
            <li><b>Add system-wide char-selection</b></li>
            <li>Improve local storage state handling</li>
            <li>Add first draft of switch button</li>
            <li>Improve CSS Design</li>
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
            <li>→First usage of the original data, the kana dictionary!</li>
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
