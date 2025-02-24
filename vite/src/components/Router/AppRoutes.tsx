import {Route, Routes} from "react-router";
import App from "../../App.tsx";
import ErrorPage from "../../pages/ErrorPage.tsx";
import IndexPage from "../../pages/IndexPage.tsx";
import QuizPage from "../../pages/GamePage.tsx";
import {ROUTES} from "./Routes.ts";

export function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.INDEX} element={<App/>} errorElement={<ErrorPage/>}>
          <Route index path={ROUTES.INDEX} element={<IndexPage/>}/>
          <Route path={ROUTES.QUIZ} element={<QuizPage/>}/>
        </Route>
      </Routes>
    </>
  )
}
