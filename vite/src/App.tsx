import './scss/app.scss'
import Navigation from "./components/Navigation/Navigation.tsx";
import {addCustomIcons} from "./helper/customIcons.ts";
import {Outlet} from "react-router";
import Footer from "./components/Footer/Footer.tsx";
import {useAppState} from "@/state/useAppState.ts";
import {useEffect} from "react";
import {prepareKanaSelection} from "@/helper/prepareKanaSelection.ts";

addCustomIcons()

function App() {

  const [charsetBoolean] = useAppState("dict", "charsetBoolean");
  const [, setCharsetSelection] = useAppState("dict", "charsetSelection");
  useEffect(() => {
    const kanas = Object.keys(charsetBoolean);
    const selection = Object.values(charsetBoolean);
    setCharsetSelection(kanas.filter((k, i) => selection[i]))
  }, [charsetBoolean]);

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
