import IndexPage from "../../pages/IndexPage.tsx";
import QuizPage from "../../pages/GamePage.tsx";
import {Route, Routes} from "react-router";
// import Dashboard from "../Dashboard.tsx";

export enum ROUTES  {
  INDEX = "/",
  QUIZ = "/quiz",
  SETTINGS = "/settings"
}

function Router() {

  return (
    <>
      <Routes>
          <Route index path={ROUTES.INDEX} element={<IndexPage/>}/>
          <Route path={ROUTES.QUIZ} element={<QuizPage/>}/>
        {/*<Route path="games">*/}
        {/*  <Route index element={<ConcertsHome />} />*/}
        {/*  <Route path=":city" element={<City />} />*/}
        {/*  <Route path="trending" element={<Trending />} />*/}
        {/*</Route>*/}
      </Routes>
    </>
  )
}

export default Router
