import {Outlet} from "react-router";
import CharsetSelector from "@/components/application/CharsetSelector.tsx";
import {ROUTES} from "@/components/Router/Routes.ts";
import Breadcrumbs from "@/elements/Breadcrumbs.tsx";

function DictionaryPage() {
  return (
    <>
      <h2>Dictionary</h2>
      <div className={"container-col"}>
        <div className={"container-row"}>
          <CharsetSelector/>
        </div>
        <Breadcrumbs basePath={ROUTES.DICTIONARY}/>
        <Outlet/>
      </div>
    </>
  )
}

export default DictionaryPage
