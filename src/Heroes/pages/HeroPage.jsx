import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const hero = useMemo(() => getHeroById(id), [id]);
  const onNavigateBack = () => {
    navigate(-1);
  };

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  return (
    <div className="row mt-5 d-flex align-items-center">
      <div className="col-md-4 text-center">
        <img
          src={`/heroes/${id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft shadow-lg rounded"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>

      <div className="col-md-8">
        <h3 className="text-primary">{hero.superhero}</h3>
        <ul className="list-group list-group-flush border rounded shadow-sm">
          <li className="list-group-item">
            <b>Alter ego: </b> {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b> {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>First appearance: </b> {hero.first_appearance}
          </li>
        </ul>

        <h5 className="mt-3 text-secondary">Characters</h5>
        <p className="fst-italic">{hero.characters}</p>

        <button className="btn btn-primary px-4 mt-3 shadow-sm" onClick={onNavigateBack}>
          Regresar
        </button>
      </div>
    </div>
  );
};
