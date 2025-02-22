import './scss/app.scss'
import Router from "./components/routing/Router.tsx";
import Navigation from "./components/routing/Navigation.tsx";
import {addCustomIcons} from "./helper/customIcons.ts";

addCustomIcons()

function App() {

  return (
    <>
      <Navigation/>
      <div className={"app-container"}>
        <Router/>
      </div>
    </>
  )
}

export default App
