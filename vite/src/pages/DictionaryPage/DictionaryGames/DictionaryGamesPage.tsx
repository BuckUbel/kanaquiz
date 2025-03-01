import Card from "../../../elements/Card/Card.tsx";
import ImageBTX from "@/elements/Image/ImageBTX.tsx";
import {useNavigate} from "react-router";
import {ROUTES} from "@/components/Router/Routes.ts";

import "./DictionaryGamesPage.scss";

import crosswordKanaImage from "@/assets/images/crosswordKana-Hiragana.jpg";
import HiraganaA_Animation from "@/assets/images/HiraganaA_Animation.gif";
import KanaSearch_Animation from "@/assets/images/KanaAnimationSearch.gif";

function DictionaryGamesPage() {

  const navigate = useNavigate();

  return (
    <>
      <h4>In all games the charset is fully customizable on your needs of learning!</h4>
      <div className="game-page container-col">
        <div className="container-row">

          <Card headline={<h3>Crossword Kana</h3>} onClick={() => navigate(ROUTES.DICTIONARY_GAMES_CROSSWORD)}>
            <p className={"text-center"}>
              A random generated crossword puzzle!
              You can choose the size of the crossword and the number of words.
            </p>
            <ImageBTX src={crosswordKanaImage} alt="Crossword Kana"/>
            <p>
              <b>Also available in german or english!</b>
            </p>
          </Card>
          <Card headline={<h3>Kana Animation Search</h3>} onClick={() => navigate(ROUTES.DICTIONARY_GAMES_ANIMATION_SEARCH)}>
            <p className={"text-center"}>
              Some kanas flying around! And u have to find them!
              Sometimes there a chars, which u never seen before!
            </p>
            <ImageBTX src={KanaSearch_Animation} alt="Crossword Kana"/>
            <p>
              <b>Even the charset is customizable!</b>
            </p>
          </Card>
          <Card headline={<h3>Kana Drawings</h3>} onClick={() => navigate(ROUTES.DICTIONARY_GAMES_DRAWING)}>
            <p className={"text-center"}>
              Seeing the animation of the kanas!
              And draw them on your own!
            </p>
            <ImageBTX src={HiraganaA_Animation} alt="Crossword Kana"/>
            <p>
              <b>You can save it as pictures!</b>
            </p>
          </Card>
        </div>
      </div>
    </>
  )
}

export default DictionaryGamesPage
