import {AnyObject} from "@/types/default.ts";
import {SimpleKanaDictionary} from "@/data/SimpleKanaDictionary.ts";
import Card from "@/elements/Card/Card.tsx";

const KanaValues = {
  hiragana: Object.values(SimpleKanaDictionary.hiragana),
  katakana: Object.values(SimpleKanaDictionary.katakana)
}

interface KanaListProps {
  title: string;
  kanaKey: "hiragana" | "katakana";
  charsetBoolean: AnyObject<boolean>
}


function KanaList({title, kanaKey, charsetBoolean}: KanaListProps) {
  return <Card headline={<h3>{title}</h3>}>
    {KanaValues[kanaKey].map((kanas, i) => {
      const kanaKeys = Object.keys(kanas);
      return <p key={i}>{kanaKeys.map((char, index) =>
        <span
          key={char + index}
          className={`${charsetBoolean[char] ? "activated-char" : ""}`}
        >
                {char} {index !== kanaKeys.length - 1 ? "· " : ""}
              </span>)}</p>;
    })}
  </Card>
}


export default KanaList;
