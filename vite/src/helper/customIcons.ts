import kanaQuestionSvg from "../assets/kanaQuestion.svg";
import {addIcon} from '@iconify/react';
import {extractBodyFromSvg} from "./extractBodyFromSvg.ts";

export function addCustomIcons() {
  addIcon('kana-question', {
    body: extractBodyFromSvg(kanaQuestionSvg),
    width: 24, // Breite des Icons
    height: 24 // Höhe des Icons
  });
}
