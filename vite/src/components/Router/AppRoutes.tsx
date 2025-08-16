import {Route, Routes} from "react-router";
import App from "../../App.tsx";
import ErrorPage from "../../pages/ErrorPage.tsx";
import IndexPage from "../../pages/IndexPage.tsx";
import QuizPage from "../../pages/QuizPage.tsx";
import DEVPage from "@/pages/Dev/DEVPage.tsx";
import {ROUTES} from "./Routes.ts";
import ChangelogPage from "../../pages/ChangelogPage.tsx";
import ContactPage from "../../pages/ContactPage.tsx";
import ImpressumPage from "../../pages/ImpressumPage.tsx";
import DataSecurityPage from "../../pages/DateSecurityPage.tsx";
import DictionaryPage from "../../pages/DictionaryPage/DictionaryPage.tsx";
import DictionaryIndexPage from "../../pages/DictionaryPage/DictionaryIndexPage.tsx";
import DictionaryVocabularyPage from "../../pages/DictionaryPage/DictionaryVocabularyPage.tsx";
import DictionaryGrammarPage from "../../pages/DictionaryPage/DictionaryGrammarPage.tsx";
import DictionaryCharTablePage from "../../pages/DictionaryPage/DictionaryCharTable/DictionaryCharTablePage.tsx";
import DictionaryGamesPage from "../../pages/DictionaryPage/DictionaryGames/DictionaryGamesPage.tsx";
import DictionaryGameCrosswordPage from "@/pages/DictionaryPage/DictionaryGames/DictionaryGameCrosswordPage.tsx";
import DictionaryGameKanaAnimationSearchPage
  from "@/pages/DictionaryPage/DictionaryGames/DictionaryGameKanaAnimationSearchPage.tsx";
import DictionaryGameKanaDrawingsPage from "@/pages/DictionaryPage/DictionaryGames/DictionaryGameKanaDrawingsPage.tsx";
import QuizIndexPage from "@/pages/QuizPage/QuizIndexPage.tsx";
import QuizGamePage from "@/pages/QuizPage/QuizGamePage.tsx";
import SettingsPage from "@/pages/SettingsPage.tsx";
import DictionaryGameKanaWordlePage from "@/pages/DictionaryPage/DictionaryGames/DictionaryGameKanaWordlePage.tsx";
import DictionaryGameKanaSudokuPage from "@/pages/DictionaryPage/DictionaryGames/DictionaryGameKanaSudokuPage.tsx";
import DictionaryGameKanaKanaaclePage from "@/pages/DictionaryPage/DictionaryGames/DictionaryGameKanaKanaaclePage.tsx";
import ProfilePage from "@/pages/ProfilePage.tsx";

export function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.INDEX} element={<App/>} errorElement={<ErrorPage/>}>
          <Route index path={ROUTES.INDEX} element={<IndexPage/>}/>
          <Route path={ROUTES.QUIZ} element={<QuizPage/>}>
            <Route index element={<QuizIndexPage/>}/>
            <Route path={ROUTES.QUIZ_START} element={<QuizGamePage/>}/>
          </Route>
          <Route path={ROUTES.DICTIONARY} element={<DictionaryPage/>}>
            <Route index element={<DictionaryIndexPage/>}/>
            <Route path={ROUTES.DICTIONARY_VOCABULARY} element={<DictionaryVocabularyPage/>}/>
            <Route path={ROUTES.DICTIONARY_GRAMMAR} element={<DictionaryGrammarPage/>}/>
            <Route path={ROUTES.DICTIONARY_CHARTABLE} element={<DictionaryCharTablePage/>}/>
            <Route path={ROUTES.DICTIONARY_GAMES} element={<DictionaryGamesPage/>}/>
            <Route path={ROUTES.DICTIONARY_GAMES_CROSSWORD} element={<DictionaryGameCrosswordPage/>}/>
            <Route path={ROUTES.DICTIONARY_GAMES_ANIMATION_SEARCH} element={<DictionaryGameKanaAnimationSearchPage/>}/>
            <Route path={ROUTES.DICTIONARY_GAMES_DRAWING} element={<DictionaryGameKanaDrawingsPage/>}/>
            <Route path={ROUTES.DICTIONARY_GAMES_WORDLE} element={<DictionaryGameKanaWordlePage/>}/>
            <Route path={ROUTES.DICTIONARY_GAMES_SUDOKU} element={<DictionaryGameKanaSudokuPage/>}/>
            <Route path={ROUTES.DICTIONARY_GAMES_KANAACLE} element={<DictionaryGameKanaKanaaclePage/>}/>
          </Route>
          <Route path={ROUTES.PROFILE} element={<ProfilePage/>}/>
          <Route path={ROUTES.CONTACT} element={<ContactPage/>}/>
          <Route path={ROUTES.CHANGELOG} element={<ChangelogPage/>}/>
          <Route path={ROUTES.IMPRESSUM} element={<ImpressumPage/>}/>
          <Route path={ROUTES.DATASECURITY} element={<DataSecurityPage/>}/>
          <Route path={ROUTES.SETTINGS} element={<SettingsPage/>}/>
          <Route path={ROUTES.DEV} element={<DEVPage/>}/>
          <Route path={"*"} element={<ErrorPage/>}/>
        </Route>
      </Routes>
    </>
  )
}
