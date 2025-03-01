import Card from "@/elements/Card/Card.tsx";

function ErrorPage() {
  return (
    <>
      <h2>An unexpexted error!</h2>
      <div className={"container-col"}>
        <Card headline={<h3><i>404</i> This site doesn't exist!</h3>}>
          Sorry poor user!<br />
          U find a page without content :(<br />
        </Card>
      </div>
    </>
  )
}

export default ErrorPage
