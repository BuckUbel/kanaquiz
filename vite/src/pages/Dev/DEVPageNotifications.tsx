import Card from "../../elements/Card/Card.tsx";
import {useAppState} from "../../state/useAppState.ts";
import Notification from "../../elements/Notification/Notification.tsx";
import {Icon} from "@iconify/react";

function DEVPageNotifications() {

  const [notificationReload, , setNotificationReload] = useAppState("dev", "notificationReload");

  return (
    <>
      <div className={"container-col"}>
        <Card headline={<h3>Notifications</h3>} small>
          <div className={"container-col with-border"}>
            <Notification status={"info"} notificationTime={0} notCloseable>Info Benachrichtigung</Notification>
            <Notification status={"success"} notificationTime={0} notCloseable>Erfolgs Benachrichtigung</Notification>
            <Notification status={"failure"} notificationTime={0} notCloseable>Fehler Benachrichtigung</Notification>
          </div>
        </Card>
      </div>
      <div className={"container-row"}>
        <Card headline={<h3>Moving Notifications</h3>} small>
          <div className={"container-row"}>
            <div className={"container-col zero-flex"}>
            <button onClick={() => {
              setNotificationReload(v => !v);
              setTimeout(() => setNotificationReload(v => !v), 1);
            }}>
              <Icon icon={"material-symbols:sync-rounded"} className={"spin-animation"} width={50} height={50}/>
            </button>
            </div>
            {!notificationReload && <div className={"container-col with-border"}>
              <Notification status={"info"}> Info Benachrichtigung</Notification>
              <Notification status={"success"}> Erfolgs Benachrichtigung </Notification>
              <Notification status={"failure"}>Fehler Benachrichtigung </Notification>
            </div>}
          </div>
        </Card>
      </div>
    </>
  )
}

export default DEVPageNotifications
