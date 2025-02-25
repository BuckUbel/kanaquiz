import {PropsWithChildren} from "react";
import './tag.scss'

interface TagsContainerProps {
  inline?: boolean;
}

function TagsContainer(props: PropsWithChildren<TagsContainerProps>) {

  return <div className={`tags-container${props.inline ? " inline-tags" : ""}`}>
    {props.children}
  </div>
}

export default TagsContainer;
