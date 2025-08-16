import Card from "../elements/Card/Card.tsx";
import {Icon} from "@iconify/react";
import {NavLinkItem} from "../elements/NavLinkItem.tsx";

function GamePage() {

  return (
    <>
      <h2>Kana Quiz</h2>
      <div className={"container-col changelog-container"}>
        <Card headline={<div className={"container-row"}>
          <h2 style={{flex: "1"}}>
            Contact Page
          </h2>
        </div>
        }>
          <p> Thank u for visit my page!</p>
          <p> Check out the original:
            <br/>
            <NavLinkItem to={"https://kana.pro"}>Kana Pro</NavLinkItem></p>
          <p> You can reach me under:
            <br/>
            <a href="mailto:buckubel@gmail.com">buckubel@gmail.com</a></p>
          <p> Or on twitter:
            <br/>
            <a href="https://twitter.com/buckubel">@buckubel</a></p>
          <p> Or on bluesky
            <br/>
            <a href="https://bsky.app/profile/buckubel.bsky.social">
              <Icon icon="meteor-icons:bluesky"/> buckubel.bsky.social</a></p>
          <p> This project is on github:
            <br/>
            <a href="https://github.com/buckubel/kanaquiz">
              <Icon icon="meteor-icons:github"/> https://github.com/buckubel/kanaquiz</a></p>
          <p> Have fun!</p>
        </Card>
        <Card headline={<h3> Development </h3>}>
          <p> This </p>
        </Card>
      </div>
    </>
  )
}

export default GamePage
