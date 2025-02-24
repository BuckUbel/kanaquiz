import {MODAL_KEYS} from "./constants.ts";

export interface AppState {
  app: {
    infoMessage: string;
    infoMessageState: 'success' | 'failure' | 'info' | '';
    openModal: undefined | MODAL_KEYS
  }
}
