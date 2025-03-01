import kanaQuestionSvg from "../assets/svg/kanaQuestion.svg";
import kanaDictionarySvg from "../assets/svg/kanaDictionary.svg";
import kanaDictionaryOutlineSvg from "../assets/svg/kanaDictionaryOutline.svg";
import kanaHiraganaASvg from "../assets/svg/kanaHiraganaA.svg";
import kanaRomajiASvg from "../assets/svg/kanaRomajiA.svg";
import kanjiTreeSvg from "../assets/svg/kanjiTree.svg";
import {addIcon} from '@iconify/react';
import {extractBodyFromSvg} from "./extractBodyFromSvg.ts";

export function addCustomIcons() {
  console.log(kanaDictionarySvg);

  addIcon('kana-question', {body: extractBodyFromSvg(kanaQuestionSvg), width: 24, height: 24});
  addIcon('kana-dictionary', {body: extractBodyFromSvg(kanaDictionarySvg), width: 25, height: 25});
  addIcon('kana-dictionary-outline', {body: extractBodyFromSvg(kanaDictionaryOutlineSvg), width: 25, height: 25});
  addIcon('kana-hiragana-a', {body: extractBodyFromSvg(kanaHiraganaASvg), width: 24, height: 24});
  addIcon('kana-romaji-a', {body: extractBodyFromSvg(kanaRomajiASvg), width: 24, height: 24});
  addIcon('kanji-tree', {body: extractBodyFromSvg(kanjiTreeSvg), width: 48, height: 48});
}
