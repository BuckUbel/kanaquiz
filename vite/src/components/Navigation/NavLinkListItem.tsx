import {Icon, IconifyIcon} from "@iconify/react";
import {NavLinkItem, NavLinkOptBaseProps, NavLinkOptProps} from "../../elements/NavLinkItem.tsx";


interface NavLinkListItemProps extends NavLinkOptBaseProps {
  icon?: IconifyIcon | string;
  iconSize?: number;
  liClassName?: string;
}

export function NavLinkListItem({liClassName, ...linkItemProps}: NavLinkOptProps<NavLinkListItemProps>) {
  return <li className={liClassName}>
    <NavLinkItem {...linkItemProps}>
      {!!linkItemProps.icon && <Icon icon={linkItemProps.icon} width={linkItemProps.iconSize ?? "50"} height={linkItemProps.iconSize ?? "50"}/>}
      <span className={"nav-link-item-title"}>{linkItemProps.children}</span>
    </NavLinkItem>
  </li>;
}
