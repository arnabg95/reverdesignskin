import { createSearchParams,useNavigate,useLocation } from "react-router-dom"
import useAuthContext from "../../Hook/useAuthContext";
export default function Test() {
    const naviagte = useNavigate();
    const authCtx = useAuthContext();
    const location = useLocation();
    const handleClick = () => {
        authCtx.isLoggedIn ? alert("logged in") : naviagte({
            pathname:"/login",
            search:createSearchParams({"path":location.pathname}).toString()
        })
    }
  return (
    <div>
        <center>
            <h1>test page </h1>
            <p>
                <button className="btn btn-success" onClick={handleClick}>click me</button>
            </p>
        </center>
    </div>
  )
}
