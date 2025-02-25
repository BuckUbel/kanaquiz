import {PropsWithChildren, useCallback, useEffect, useState} from "react";
import {Icon} from "@iconify/react";
import {Status} from "../../types/default.ts";
import "./notification.scss";

interface NotificationProps {
  status: Status
  delayTime?: number;
  isClosed?: boolean;
  notificationTime?: number;
  onClose?: () => void;
  notCloseable?: boolean;
}

function Notification(props: PropsWithChildren<NotificationProps>) {

  const {status, delayTime = 250, notificationTime = 2500, isClosed, notCloseable = false, onClose} = props;

  const [contentClassName, setContentClassName] = useState(delayTime === 0 ? "show-notification" : "");

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setContentClassName("show-notification");
    }, delayTime)
    return () => {
      clearTimeout(timeout);
    }
  }, [setContentClassName]);

  useEffect(() => {
    if (notificationTime > 0) {
      const timeout = window.setTimeout(() => {
        setContentClassName("hide-notification");
      }, notificationTime)
      return () => {
        clearTimeout(timeout);
      }
    }
  }, [setContentClassName, notificationTime]);

  const close = useCallback(() => {
    if (!!onClose) onClose();
    if (!notCloseable) setContentClassName("hide-notification");
  }, []);

  let className = contentClassName;
  if (isClosed === true) className = "hide-notification";
  if (isClosed === false) className = "show-notification";

  return <div className={`notification ${status} ${className}`} onClick={close}>
    <p>{props.children}</p>
    {!notCloseable && <span><Icon icon={"material-symbols:close-rounded"} width="25" height="20"/></span>}
  </div>;
}

export default Notification;
