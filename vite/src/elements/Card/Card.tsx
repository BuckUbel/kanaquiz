import * as React from "react";
import {CSSProperties, PropsWithChildren} from "react";
import "./card.scss";
import {Icon, IconifyIcon} from "@iconify/react";

interface CardProps {
  className?: string;
  headline?: React.ReactNode;
  headlineIcon?: IconifyIcon | string
  buttonCard?: boolean;
  small?: boolean;
  onClick?: () => void;
  category?: "primary" | "secondary" | "tertiary" | "rainbow" | "disabled";
  style?: CSSProperties;
}

function Card(props: PropsWithChildren<CardProps>) {
  const {buttonCard, small, category, headline, headlineIcon, children} = props;
  let className: string = "card";
  if (category) className += ` card-${category}`;
  let headerClassName: string = "card-header";
  let bodyClassName: string = "card-body";
  if (!!buttonCard) bodyClassName += " button-list";

  return (
    <div className={`${className}${small ? " card-small" : ""}${props.onClick ? " clickable" : ""} ${props.className ?? ""}`}
         style={props.style}
         onClick={props.onClick}>
      {!!headline && <div className={headerClassName}>
        {!!headlineIcon ? <><Icon icon={headlineIcon} className={"headline-icon"}/></> : ""}
        {headline}
      </div>}
      {!!children && <div className={bodyClassName}>
        {children}
      </div>}
    </div>
  )
}

export default Card
