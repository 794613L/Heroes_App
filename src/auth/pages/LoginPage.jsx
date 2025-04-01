import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = () => {
    const lastPath = localStorage.getItem("lastPath") || "/";

    login("Luis Fernandez");
    navigate(lastPath, {
      replace: true,
    });
  };
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4 rounded" style={{ width: "22rem" }}>
        <h1 className="text-center mb-3">LoginPage</h1>
        <hr />
        <button className="btn btn-primary btn-lg w-100" onClick={onLogin}>
          Login
        </button>
      </div>
    </div>
  );
};
