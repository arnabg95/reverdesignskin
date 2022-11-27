import * as yup from 'yup';

let schema = yup.object().shape({
  email: yup.string().email("Enter Valid Email").required("Email is required"),
  password: yup.string().min(8,"Password Must Be 8 Characters Long!").required("Password Is Required")
});


export default schema;
