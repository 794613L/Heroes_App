import { HeroList } from "../components";

export const DcPage = () => {
  return (
    <>
      <h1 className="text-center mt-5">Dc Comics</h1>
      <hr />

      <HeroList publisher="DC Comics" />
    </>
  );
};
