import {CSSProperties, PropsWithChildren} from "react";
import './tag.scss'

interface TagsContainerProps {
  inline?: boolean;
  className?: string;
  style?: CSSProperties;
}

function TagsContainer(props: PropsWithChildren<TagsContainerProps>) {

  return <div className={`tags-container${props.inline ? " inline-tags" : ""} ${props.className ?? ""}`}
              style={props.style}>
    {props.children}
  </div>
}

export default TagsContainer;
