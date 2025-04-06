import React from "react";
import {useAppState} from "@/state/useAppState.ts";
import {Icon} from "@iconify/react";
import {MODAL_KEYS} from "@/state/constants.ts";
import './modal.scss'

interface ModalProps {
  variant: MODAL_KEYS;
  headline: React.ReactNode;
  content: React.ReactNode;
  hideCloseButton?: boolean;
  onClose?: () => void;
}

function Modal({variant, headline, content, hideCloseButton = false, onClose}: ModalProps) {

  const [openedModal, setOpenModal] = useAppState("app", "openModal");
  if (openedModal === variant) {
    return <div className={"modal-outer modal-class-" + variant}
                onClick={() => {
                  if (!!onClose) onClose();
                  if (!hideCloseButton) setOpenModal(undefined)
                }}>
      <div className={"modal-container"}
           onClick={(ev) => ev.stopPropagation()}>
        <h2>{headline}</h2>
        {!hideCloseButton && <button className={"close-button"} onClick={() => {
          if (!!onClose) onClose();
          setOpenModal(undefined)
        }}>
          <Icon icon={"material-symbols:close-rounded"} width="22" height="22"/>
        </button>}
        <div className={"modal-inner"}>
          {content}
        </div>
      </div>

    </div>
  }
  return null;
}

export default Modal;
