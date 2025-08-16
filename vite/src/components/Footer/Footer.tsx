import {useEffect, useRef} from "react";
import {ROUTES} from "../Router/Routes.ts";
import {NavLinkListItem} from "../Navigation/NavLinkListItem.tsx";
import './footer.scss'
import {getRandomInt} from "../../util/math.ts";

const intervalTimer = 10000;

function Footer() {


  const quoteContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {

    if (!!quoteContainer.current) {
      const quotes = quoteContainer.current.querySelectorAll("p");
      let currentIndex = getRandomInt(0, quotes.length);
      let lastRightElement: HTMLParagraphElement | null = null;

      function updateQuote() {
        if (!!lastRightElement) lastRightElement.classList.remove("to-right");
        if (!!quotes[currentIndex]) {

          quotes[currentIndex].classList.add("to-right");
          lastRightElement = quotes[currentIndex];
          quotes[currentIndex].classList.remove("active");
          currentIndex = (currentIndex + 1) % quotes.length;

          quotes[currentIndex].classList.add("active");
        }
      }

      let intervalId = setInterval(updateQuote, intervalTimer);
      quoteContainer.current.onclick = () => {
        updateQuote();
        clearInterval(intervalId);
        intervalId = setInterval(updateQuote, intervalTimer);
      }
      return () => clearInterval(intervalId);
    }
  }, [quoteContainer])


  return (
    <footer>
      <div className={"footer-container"}>
        <span className={"spacer without-border"}/>
        <ul id={"footer-list-1"} className={"footer-list"}>
          <NavLinkListItem to={ROUTES.INDEX} icon={"material-symbols:family-home-rounded"}>
            Main Page
          </NavLinkListItem>
          <NavLinkListItem to={ROUTES.CHANGELOG} icon={"material-symbols:list-alt-add-outline-rounded"}>
            Changelog
          </NavLinkListItem>
          <NavLinkListItem to={"https://kana.pro"} icon={"material-symbols:bookmark-heart-outline-rounded"}>
            Kana Pro (Original)
          </NavLinkListItem>
        </ul>
        <div className={"quote"} ref={quoteContainer}>
          <p>„Life goes on, whether where you are, whether you like it or not.”</p>
          <p>„The greatest thing, of course, is to have confidence in yourself. But a little help from others can be a
            true blessing.”</p>
          <p>„There is nothing wrong with a life of peace and prosperity. I suggest you consider exactly what you want
            from life, and for what reason.”</p>
          <p>„Are you sure it is your true destiny? Or is it perhaps a destiny that someone else wants to impose on
            you?”</p>
          <p>„What could be better than finding something you were looking for? Finding something you were not looking
            for — and at an excellent price!”</p>
          {/*<p>*/}
          {/*  „Das Leben geht weiter, egal, wo du auch bist,*/}
          {/*  ob du es nun magst oder nicht.“*/}
          {/*</p>*/}
          {/*<p>*/}
          {/*  „Nun, das Schönste ist natürlich, wenn man von sich selbst überzeugt ist.*/}
          {/*  Doch ein klein wenig Hilfe von anderen Leuten kann ein großer Segen sein.“*/}
          {/*</p>*/}
          {/*<p>*/}
          {/*  „Es ist nichts auszusetzen an einem Leben voller Frieden und Wohlstand.*/}
          {/*  Ich schlage vor, Ihr überlegt Euch, was genau Ihr vom Leben erwartet, und aus welchem Grund.“*/}
          {/*</p>*/}
          {/*<p>*/}
          {/*  „Seid Ihr sicher, dass es Eure wahre Bestimmung ist?*/}
          {/*  Oder handelt es sich nicht vielleicht um eine Bestimmung, die Euch jemand aufzwingen will?“*/}
          {/*</p>*/}
          {/*<p>*/}
          {/*  „Was kann besser sein, als etwas zu finden,*/}
          {/*  was du gesucht hast? Etwas zu finden, was du nicht gesucht hast – und dann auch noch zu einem hervorragenden*/}
          {/*  Preis!“*/}
          {/*</p>*/}
        </div>
        <ul id={"footer-list-2"} className={"footer-list"}>
          <NavLinkListItem to={ROUTES.IMPRESSUM} icon={"material-symbols:ink-pen-outline"}>Impressum</NavLinkListItem>
          <NavLinkListItem to={ROUTES.DATASECURITY}
                           icon={"material-symbols:security-rounded"}>Data-Security</NavLinkListItem>
          <NavLinkListItem to={ROUTES.CONTACT} icon={"material-symbols:contact-mail-rounded"}>Contact</NavLinkListItem>
        </ul>
        <span className={"spacer without-border"}/>
      </div>
    </footer>
  )
}

export default Footer
