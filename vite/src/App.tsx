import './scss/app.scss'
import Navigation from "./components/Navigation/Navigation.tsx";
import {addCustomIcons} from "./helper/customIcons.ts";
import {Outlet} from "react-router";

addCustomIcons()

function App() {

  return (
    <>
      <Navigation/>
      <div className={"app-container"}>
        <Outlet/>
      </div>
    </>
  )
}

export default App
