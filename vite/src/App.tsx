import './scss/app.scss'
import Navigation from "./components/Navigation/Navigation.tsx";
import {addCustomIcons} from "./helper/customIcons.ts";
import {Outlet} from "react-router";
import Footer from "./components/Footer/Footer.tsx";

addCustomIcons()

function App() {

  return (
    <>
      <Navigation/>
      <div className={"app-container"}>
        <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default App
