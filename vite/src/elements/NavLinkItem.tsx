import {NavLink, NavLinkProps} from "react-router";
import * as React from "react";
import {HTMLAttributes, PropsWithChildren} from "react";
import {ROUTES} from "../components/Router/Routes.ts";

export interface NavLinkOptBaseProps extends HTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}


export type NavLinkOptProps<T> = PropsWithChildren<T & ({ to?: never } | (NavLinkProps & {
  to: ROUTES | string;
}))>;

export function NavLinkItem(props: NavLinkOptProps<NavLinkOptBaseProps>) {
  const {active, onClick, ...otherProps} = props;
  if (otherProps.to) {
    return <NavLink
      {...otherProps}
      onClick={onClick}
      className={({isActive}) =>
        ((active || isActive) ? "active " : "") + (otherProps.className ?? "")
      }
    />
  }

  const onClickHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    onClick?.(event);
  }
  const className = (active ? "active " : "") + (otherProps.className ?? "");
  return <a
    href="#"
    {...otherProps}
    onClick={onClickHandler}
    className={className}
  />
}
