interface ProgressRowProps {
  levelState: number;
  levelIndex: number;
  levelName: string;
}

function ProgressRowItem({levelState, levelIndex, levelName}: ProgressRowProps) {

  return (
    <>
      <div
        className={"progress-item" + (levelState === levelIndex ? " active" : levelState > levelIndex ? " finished" : "")}>
        <span className={"progress-bubble"}>Level {levelIndex}</span>
        {levelName}
      </div>
    </>
  )
}

export default ProgressRowItem;
