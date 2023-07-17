import { useGlobalContext } from "../context/GlobalContext";
import loser from "../assets/loser.png";

const LosingModal = () => {
  const { restartGame, level, total } = useGlobalContext();

  return (
    <section className="modal-wrapper">
      <article className="losing-modal">
        <h3 className="losing-modal__title">You lose!</h3>
        <img src={loser} alt="loser-icon" />
        <div>
          <p className="losing-modal__text">
            You made it to level{" "}
            <span className="losing-modal__text--number">{level}</span>
          </p>
          <p className="losing-modal__text">
            Your total streak was{" "}
            <span className="losing-modal__text--number">{total}</span>
          </p>
        </div>
        <button
          onClick={restartGame}
          type="button"
          className="btn losing-modal__btn"
        >
          restart <i className="fa-solid fa-arrow-right"></i>
        </button>
      </article>
    </section>
  );
};

export default LosingModal;
