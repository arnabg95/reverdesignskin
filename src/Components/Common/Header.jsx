import { NavLink } from "react-router-dom";
import useAuthContext from "../../Hook/useAuthContext";

export default function Header() {
  const authCtx = useAuthContext();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:"#c8373b"}}>
      <div className="container">
        <NavLink className="navbar-brand" to={"/home"}>
          Rever Design
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? "active nav-link" : "nav-link" } aria-current="page" to={"/home"}>
                <i className="fas fa-home"></i> Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? "active nav-link" : "nav-link" } aria-current="page" to={"/shop"}>
              <i className="fa-solid fa-shop"></i> Shop
              </NavLink>
            </li>
            { authCtx.isLoggedIn ? null:  (
              <>  
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? "active nav-link" : "nav-link" } aria-current="page" to={"/login"}>
              <i className="fa-solid fa-right-to-bracket"></i> Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? "active nav-link" : "nav-link" } aria-current="page" to={"/register"}>
              <i className="fa-solid fa-user-plus"></i> Register
              </NavLink>
            </li>
            </>)  }
            <li className="nav-item">
              <NavLink className="nav-link btn-success" aria-current="page" to={"/selfdesign"}>
                 Make Your Own Design
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
