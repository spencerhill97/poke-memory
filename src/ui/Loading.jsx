import Pokeball from "./Pokeball";

const Loading = () => {
  return (
    <div className="loader flex gap-x-8 mt-[50px]">
      <Pokeball props={"spinner"} />
      <Pokeball props={"spinner"} />
      <Pokeball props={"spinner"} />
    </div>
  );
};

export default Loading;
