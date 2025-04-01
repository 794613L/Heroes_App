import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components";
import { getHeroesByName } from "../helpers";
export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);
  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroes.length === 0;
  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    // if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      {/* Fondo con gradiente */}
      <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center">
        <div className="container p-5 bg-white rounded shadow-lg">
          <h1 className="text-center text-primary fw-bold">Hero Search</h1>
          <hr />

          <div className="row">
            {/* Sección de búsqueda */}
            <div className="col-md-4">
              <div className="bg-light p-4 rounded shadow">
                <h4 className="text-center text-dark">Search a Hero</h4>
                <hr className="w-75 mx-auto" />
                <form onSubmit={onSearchSubmit} aria-label="form">
                  <input
                    type="text"
                    placeholder="Search a hero..."
                    className="form-control mb-3"
                    name="searchText"
                    autoComplete="off"
                    value={searchText}
                    onChange={onInputChange}
                  />
                  <button className="btn btn-primary w-100">🔍 Search</button>
                </form>
              </div>
            </div>

            {/* Sección de resultados */}
            <div className="col-md-8">
              <h4 className="text-dark">Results</h4>
              <hr />

              <div
                className="alert alert-primary animate__animated animate__pulse text-center fw-bold"
                style={{ display: showSearch ? "" : "none" }}
              >
                🧐 Search a hero to see results!
              </div>

              <div
                aria-label="alert-danger"
                className="alert alert-danger animate__animated animate__pulse text-center fw-bold"
                style={{ display: showError ? "" : "none" }}
              >
                ❌ No hero found with <b>{q}</b>
              </div>

              <div className="row row-cols-1 row-cols-md-2 g-3">
                {heroes.map((hero) => (
                  <div className="col" key={hero.id}>
                    <div className="card shadow-lg border-0 rounded">
                      <HeroCard {...hero} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
