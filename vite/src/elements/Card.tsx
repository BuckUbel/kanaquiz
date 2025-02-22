import * as React from "react";
import {PropsWithChildren} from "react";

interface CardProps {
  headline?: React.ReactNode;
  buttonCard?: boolean;
}

function Card(props: PropsWithChildren<CardProps>) {
  let className: string = "card";
  let headerClassName: string = "card-header";
  let bodyClassName: string = "card-body";
  if (!!props.buttonCard) bodyClassName += " button-list";

  return (
    <div className={className}>
      {!!props.headline && <div className={headerClassName}>
        {props.headline}
      </div>}
      {!!props.children && <div className={bodyClassName}>
        {props.children}
      </div>}
    </div>
  )
}

export default Card
