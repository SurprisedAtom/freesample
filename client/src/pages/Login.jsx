import { React } from "react";
import Logo from "../assets/freesample-logo.svg";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

//Form components
// prettier-ignore
const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label className="text-sm font-light mb-2" htmlFor={props.id || props.name}>{label}{meta.touched && meta.error ? (
        <span className=" text-fs-yellow text-[10px] bord text-right border border-fs-gold border-opacity-40 rounded-[50px] px-2 py-[2px] ml-2  ">{meta.error}</span>
      ) : null}</label>
      <input className="mb-5 text-sm p-2 rounded-sm text-fs-dark font-medium focus:text-fs-dark" {...field} {...props} />
      
    </>
  );
};

function Login() {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      // prettier-ignore
      validationSchema={ Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().min(8, "Must be 8 characters or more").required("Required"),
    })}
      onSubmit={(values, { setSubmitting }) => {
        alert(JSON.stringify(values, null, 2));
        setTimeout(() => setSubmitting(false), 2000);
      }}
    >
      {(formik) => (
        <div className=" bg-circles bg-contain bg-no-repeat bg-fs-dark h-screen flex px-40 py-28 text-fs-text">
          <div className="flex flex-col w-1/2 items-center justify-center">
            <img src={Logo} width={220} alt="" />
            <p>Your free sample community</p>
          </div>
          <div className="w-1/2 ">
            <div
              className="border border-fs-gold border-opacity-40 rounded-md min-h-full flex flex-col px-10 justify-center bg-fs-dark/80 "
              id="sign-up"
            >
              <p className=" text-sm font-light mb-2  ">Welcome back!</p>
              <h3 className=" text-2xl font-medium mb-14">Sign in</h3>
              <Form className="flex flex-col" action="">
                <TextInput
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Email address"
                />
                <TextInput
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Password"
                />
                <div>
                  <button
                    className="btn-primary"
                    type="submit"
                    disabled={formik.isSubmitting}
                  >
                    Login
                  </button>
                  <button className=" text-sm ">
                    Don't have an account?{" "}
                    <span className="underline">Sign up</span>
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
}

export default Login;
