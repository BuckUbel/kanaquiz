import {useKanaSelection} from "@/state/hooks/useKanaSelection.ts";
import Card from "@/elements/Card/Card.tsx";
import {KanaExtraKeys, KanaSimKeys} from "@/helper/prepareKanaSelection.ts";

interface KanaListButtonCardProps {
  kanaKey: "hiragana" | "katakana";
}

function KanaListButtonCard({kanaKey}: KanaListButtonCardProps) {
  const {
    toggleVocal,
    toggleGroup,
    setSelection,
  } = useKanaSelection()

  return <Card buttonCard small>
    <div className={"container-col"}>

      <button className={"active"} onClick={() => {
        setSelection(toggleVocal(-1, kanaKey));
      }}>All
      </button>

      <button onClick={() => {
        const sel1 = toggleVocal(-1, kanaKey, false);
        const sel2 = toggleGroup(KanaExtraKeys, kanaKey, true, sel1);
        setSelection(sel2);
      }}>
        Only extras
      </button>
      <button onClick={() => {
        const sel1 = toggleVocal(-1, kanaKey, true);
        const sel2 = toggleGroup(KanaExtraKeys, kanaKey, false, sel1);
        setSelection(sel2);
      }}>
        All without extras
      </button>
    </div>

    {kanaKey === "katakana" &&
      <div className={"container-col"}>
        <button onClick={() => {
          const sel1 = toggleVocal(-1, kanaKey, false);
          const sel2 = toggleGroup(KanaSimKeys, kanaKey, true, sel1);
          setSelection(sel2);
        }}>
          Only look-alike
        </button>
        <button onClick={() => {
          const sel1 = toggleVocal(-1, kanaKey, true);
          const sel2 = toggleGroup(KanaSimKeys, kanaKey, false, sel1);
          setSelection(sel2);
        }}>
          All without look-alike
        </button>
      </div>}

  </Card>
}

export default KanaListButtonCard;
