import { HeroList } from "../components";

export const MarvelPage = () => {
  return (
    <>
      <h1 className="text-center mt-5">Marvel Comics</h1>
      <hr />
      <HeroList publisher="Marvel Comics" />
    </>
  );
};
