import {Icon, IconifyIcon} from "@iconify/react";
import {NavLinkItem, NavLinkOptBaseProps, NavLinkOptProps} from "../../elements/NavLinkItem.tsx";


interface NavLinkListItemProps extends NavLinkOptBaseProps {
  icon?: IconifyIcon | string;
  iconSize?: number;
}

export function NavLinkListItem(props: NavLinkOptProps<NavLinkListItemProps>) {
  return <li><NavLinkItem {...props}>
    {!!props.icon && <Icon icon={props.icon} width={props.iconSize??"50"} height={props.iconSize??"50"}/>}
    {props.children}
  </NavLinkItem></li>;
}
