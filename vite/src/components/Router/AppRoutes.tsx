import {Route, Routes} from "react-router";
import App from "../../App.tsx";
import ErrorPage from "../../pages/ErrorPage.tsx";
import IndexPage from "../../pages/IndexPage.tsx";
import QuizPage from "../../pages/GamePage.tsx";
import DEVPage from "../../pages/DevPage/DEVPage.tsx";
import {ROUTES} from "./Routes.ts";
import ChangelogPage from "../../pages/ChangelogPage.tsx";
import ContactPage from "../../pages/ContactPage.tsx";
import ImpressumPage from "../../pages/ImpressumPage.tsx";
import DataSecurityPage from "../../pages/DateSecurityPage.tsx";

export function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.INDEX} element={<App/>} errorElement={<ErrorPage/>}>
          <Route index path={ROUTES.INDEX} element={<IndexPage/>}/>
          <Route path={ROUTES.QUIZ} element={<QuizPage/>}/>
          <Route path={ROUTES.CONTACT} element={<ContactPage/>}/>
          <Route path={ROUTES.CHANGELOG} element={<ChangelogPage/>}/>
          <Route path={ROUTES.IMPRESSUM} element={<ImpressumPage/>}/>
          <Route path={ROUTES.DATASECURITY} element={<DataSecurityPage/>}/>
          <Route path={ROUTES.DEV} element={<DEVPage/>}/>
        </Route>
      </Routes>
    </>
  )
}
