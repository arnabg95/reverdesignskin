import { Link } from "react-router-dom"

export default function Login() {
  return (
    <div className="container d-flex align-items-center justify-content-center mb-5 mt-5" style={{width:"100%",height:"90vh"}}>
      <form  method="post" onSubmit={e => e.preventDefault()} className="form">
        <center><h2>Login</h2></center>
        <hr />
        <div className="mb-3">
          <input  className="form-control myInput" type="text" name="" placeholder="Enter Email Address" id="" />
        </div>
        <div className="mb-3">
          <input className="form-control myInput"  type="password" name="" placeholder="Enter Password Address" id="" />
        </div>
        <div className="mb-3">
          <button className="btn btn-success w-100" type="submit">Login</button>
        </div>
        <div className="mb-3">
          <center><h6><Link to={"/"} className="nav-link">Forget Password?</Link></h6></center>
          <center><h6><Link to={"/"} className="nav-link">Don't Have Account? Register</Link></h6></center>
        </div>
      </form>
    </div>
  )
}
