import "./Slot.css";

export default function Slot(props) {
  const { val1, val2, val3 } = props;
  const isWin = val1 === val2 && val2 === val3;

  return (
    <div>
      {isWin ? (
        <h1>
          {val1} {val2} {val3}
        </h1>
      ) : (
        <h2>
          {val1} {val2} {val3}
        </h2>
      )}
      {isWin ? (
        <h2 className="win">You Win!</h2>
      ) : (
        <h2 className="loser">You Lose</h2>
      )}
      {isWin && <h3 className="greet">Congrats!!!!!</h3>}
    </div>
  );
}
