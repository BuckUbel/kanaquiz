import Tag from "../../elements/Tag/Tag.tsx";
import TagsContainer from "../../elements/Tag/TagContainer.tsx";
import Card from "../../elements/Card/Card.tsx";
import {useAppState} from "../../state/useAppState.ts";

function DEVPageTags() {

  const tag1State = useAppState("dev", "tag1");
  const tag2State = useAppState("dev", "tag2");
  const tag3State = useAppState("dev", "tag3");
  const tag4State = useAppState("dev", "tag4");

  return (
    <>
      <div className={"container-col"}>
        <Card headline={<h3>Tags</h3>} small>
          <TagsContainer>
            <Tag active={false}>Off State</Tag>
            <Tag state={tag1State} active={true}>On State</Tag>
            <Tag state={tag2State} status={"info"}>Info Status</Tag>
            <Tag state={tag3State} status={"failure"}>Failure Status</Tag>
            <Tag state={tag4State} status={"success"}>Success Status</Tag>
          </TagsContainer>
        </Card>

      </div>
      <div className={"container-col"}>
        <Card headline={<h3>Inline Tags</h3>} small>
          <TagsContainer inline>
            <Tag active={false}>Off State</Tag>
            <Tag state={tag1State} active={true}>On State</Tag>
            <Tag state={tag2State} status={"info"}>Info Status</Tag>
            <Tag state={tag3State} status={"failure"}>Failure Status</Tag>
            <Tag state={tag4State} status={"success"}>Success Status</Tag>
            <Tag status={"success"}>Success Status</Tag>
            <Tag status={"success"}>Success Status</Tag>
            <Tag status={"success"}>Success Status</Tag>

          </TagsContainer>
        </Card>
      </div>
    </>
  )
}

export default DEVPageTags
