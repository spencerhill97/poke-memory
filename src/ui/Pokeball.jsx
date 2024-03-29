function Pokeball({ props }) {
  return (
    <div className={`pokeball ${props && "spinner"}`}>
      <div className="pokeball__top"></div>
      <div className="pokeball__bottom"></div>
      <span className="pokeball__line absolute-center"></span>
      <span className="pokeball__btn absolute-center"></span>
    </div>
  );
}

export default Pokeball;
