import {Icon, IconifyIcon} from "@iconify/react";
import {NavLinkItem, NavLinkOptBaseProps, NavLinkOptProps} from "../../elements/NavLinkItem.tsx";


interface NavLinkListItemProps extends NavLinkOptBaseProps {
  icon?: IconifyIcon | string;
}

export function NavLinkListItem(props: NavLinkOptProps<NavLinkListItemProps>) {
  return <li><NavLinkItem {...props}>
    {!!props.icon && <Icon icon={props.icon} width="30" height="30"/>}
    {props.children}
  </NavLinkItem></li>;
}
