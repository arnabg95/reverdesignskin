import { Link } from "react-router-dom";
import useAuthContext from "../../Hook/useAuthContext";
import { LoginSchema } from "../../validator";
import { LoginFormInitialValues } from "../../Model";
import { useFormik } from "formik";

export default function Login() {
  const authCtx = useAuthContext();

  const { values, errors, touched,handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: LoginFormInitialValues,
    validateOnChange:true,
    validationSchema: LoginSchema,
    onSubmit: (values,action) => {
      authCtx.login(values);
      action.resetForm();
    },
  });

  return (
    <div
      className="container d-flex align-items-center justify-content-center mb-5 mt-5"
      style={{ width: "100%", height: "90vh" }}
    >
      <form method="post" onSubmit={handleSubmit} className="form">
        <center>
          <h2>Login</h2>
        </center>
        <hr />
        <div className="mb-3">
          <input
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="form-control myInput"
            type="text"
            name="email"
            placeholder="Enter Email Address"
            id=""
          />
          { errors.email && touched.email ? (<span className="errors">{errors.email}</span>):null}
        </div>
        <div className="mb-3">
          <input
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className="form-control myInput"
            type="password"
            name="password"
            placeholder="Enter Password Address"
            id=""
          />
          { errors.password && touched.password ? (<span className="errors">{errors.password}</span>):null}
        </div>
        <div className="mb-3">
          <button className="btn btn-success w-100" type="submit">
            Login
          </button>
        </div>
        <div className="mb-3">
          <center>
            <h6>
              <Link to={"/"} className="nav-link">
                Forget Password?
              </Link>
            </h6>
          </center>
          <center>
            <h6>
              <Link to={"/"} className="nav-link">
                Don't Have Account? Register
              </Link>
            </h6>
          </center>
        </div>
      </form>
    </div>
  );
}
