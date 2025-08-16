import CharsetSelector from "@/components/application/CharsetSelector.tsx";
import {Outlet} from "react-router";
import Card from "@/elements/Card/Card.tsx";
import Breadcrumbs from "@/elements/Breadcrumbs.tsx";
import {ROUTES} from "@/components/Router/Routes.ts";

function QuizPage() {

  return (
    <>
      <h2>Kana Quiz</h2>
      <div className={"container-col"}>
        <Breadcrumbs basePath={ROUTES.QUIZ}/>
        <Outlet/>
      </div>
    </>
  )
}

export default QuizPage
