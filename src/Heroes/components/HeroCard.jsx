import { Link } from "react-router-dom";
import "/src/styles.css";

  


export const HeroCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <Link to={`/hero/${id}`} className="my-card animate__animated animate__pulse">
      <img
        src={`/heroes/${id}.jpg`}
        className="img img-responsive"
        alt={superhero}
      />
      <div className="profile-name">{superhero}</div>
      <div className="profile-position">{alter_ego}</div>
      <div className="profile-overview">
        <div className="profile-overview">
          <div className="row">
            <div className="col-ms-4">
              <p>
                Primera aparición: <br />
                {first_appearance}
              </p>
              {alter_ego !== characters && <p>{characters}</p>}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
