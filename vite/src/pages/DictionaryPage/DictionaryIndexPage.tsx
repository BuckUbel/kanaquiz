import Card from "../../elements/Card/Card.tsx";
import {ROUTES} from "../../components/Router/Routes.ts";
import {useNavigate} from "react-router";

function DictionaryIndexPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className={"container-col"}>
        <div className={"container-row"}>
          <Card
            small headline={<h3>Char Table</h3>} category={"tertiary"}
            headlineIcon={"material-symbols:table-view-outline-rounded"}
            onClick={() => { navigate(ROUTES.DICTIONARY_CHARTABLE)}}
          >
          </Card>
          <Card
            small headline={<h3>Vocabulary</h3>} category={"primary"}
            headlineIcon={"material-symbols:collections-bookmark-outline-rounded"}
            onClick={() => { navigate(ROUTES.DICTIONARY_VOCABULARY)}}>
          </Card>
          <Card
            small headline={<h3>Grammar</h3>} category={"secondary"}
            headlineIcon={"material-symbols:match-word-rounded"}
            onClick={() => { navigate(ROUTES.DICTIONARY_GRAMMAR)}}
          >
          </Card>
        </div>
        <div className={"container-row"}>
          <Card headline={<h3>Games</h3>}
                headlineIcon={"fluent-emoji-high-contrast:game-die"}
                onClick={() => { navigate(ROUTES.DICTIONARY_GAMES)}}
          >
          </Card>
        </div>
      </div>
    </>
  )
}

export default DictionaryIndexPage
