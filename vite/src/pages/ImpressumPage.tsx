import Card from "@/elements/Card/Card.tsx";

function ImpressumPage() {

  return (
    <>
      <h2>Impressum</h2>
      <div className={"container-col"}>
        <Card headline={<h3><i>204 No Impressum Required!</i></h3>}>
          This website is not a business page.<br />
          All content is for informational purposes only.<br />
          Therefore, there is no legal obligation to provide an Impressum.<br />
          Additionally, this site does not produce or publish regular editorial content.
        </Card>
      </div>
    </>
  )
}

export default ImpressumPage
