import {MODAL_KEYS} from "./constants.ts";

export interface AppState {
  app: {
    infoMessage: string;
    infoMessageState: 'success' | 'failure' | 'info' | '';
    openModal: undefined | MODAL_KEYS
  }
  dev:{
    tag1: boolean;
    tag2: boolean;
    tag3: boolean;
    tag4: boolean;
  }
}
