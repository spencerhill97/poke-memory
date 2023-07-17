import { useGlobalContext } from "../context/GlobalContext";

function Scoreboard() {
  const { score, level, total, cardCount } = useGlobalContext();
  return (
    <section className="scoreboard">
      <div className="scoreboard__item">
        level <span className="scoreboard__item--state">{level}</span>
      </div>
      <div className="scoreboard__item">
        remaining{" "}
        <span className="scoreboard__item--state">{cardCount - score}</span>
      </div>
      <div className="scoreboard__item">
        streak <span className="scoreboard__item--state">{total}</span>
      </div>
    </section>
  );
}

export default Scoreboard;
