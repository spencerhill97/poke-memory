import { useEffect, useRef } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import confetti from "canvas-confetti";

const WinningModal = () => {
  const { level, incrementLevel } = useGlobalContext();
  const ref = useRef();

  useEffect(() => {
    async function handleConfetti() {
      try {
        const canvas = await ref.current;
        await confetti.create(canvas, {
          useWorker: true,
        });
        await confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (error) {
        throw error;
      }
    }

    handleConfetti();
    confetti.reset();
  }, []);

  return (
    <section className="modal-wrapper">
      <article ref={ref} className="winning-modal">
        <h3 className="winning-modal__title">Congratulations!</h3>
        <div className="winning-modal__trophy">
          <i className="fa-solid fa-trophy"></i>
          <span className="winning-modal__trophy--number">{level + 1}</span>
        </div>
        <p className="winning-modal__text">New level!</p>
        <button
          onClick={incrementLevel}
          type="button"
          className="btn winning-modal__btn"
        >
          next level <i className="fa-solid fa-arrow-right"></i>
        </button>
      </article>
    </section>
  );
};

export default WinningModal;
