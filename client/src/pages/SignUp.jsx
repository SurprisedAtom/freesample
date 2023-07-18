import { React } from "react";
import Logo from "../assets/freesample-logo.svg";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

//possible regex for validation.
// const user_regex = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
// const pass_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

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

function SignUp() {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      }}
      // prettier-ignore
      validationSchema={ Yup.object({
      firstName: Yup.string().max(15, "Must be 15 characters or less").required("Required"),
      lastName: Yup.string().max(20, "Must be 20 characters or less").required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().min(8, "Must be 8 characters or more").required("Required"),
    })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {(formik) => (
        <section className=" bg-circles bg-contain bg-no-repeat bg-fs-dark h-screen flex px-40 py-28 text-fs-text">
          <div className="flex flex-col w-1/2 items-center justify-center">
            <img src={Logo} width={220} alt="logo" />
            <p className="mb-4">Your free sample community</p>
            <p className=" text-sm font-extralight mb-2">
              Share your ideas with the world and get inspired by others.
            </p>
            <p className=" text-sm font-extralight">
              All samples downloaded & uploaded are 100% royalty free.
            </p>
          </div>
          <div className="w-1/2 ">
            <div
              className="border border-fs-gold border-opacity-40 rounded-md min-h-full flex flex-col px-10 justify-center bg-fs-dark/80 "
              id="sign-up"
            >
              <p className=" text-sm font-light mb-2">
                Want to join the community?
              </p>
              <h3 className=" text-2xl font-medium mb-14">Let's sign you up</h3>

              {/* Form starts */}
              <Form onSubmit={formik.handleSubmit} className="flex flex-col">
                <div className="flex">
                  <div className="flex flex-col w-1/2 pr-2">
                    <TextInput
                      label="Firstname"
                      name="firstName"
                      type="text"
                      placeholder="Firstname"
                    />
                  </div>
                  <div className="flex flex-col w-1/2">
                    <TextInput
                      label="Lastname"
                      name="lastName"
                      type="text"
                      placeholder="Lastname"
                    />
                  </div>
                </div>
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
                  <button className=" btn-primary" type="submit">
                    Sign up
                  </button>
                  <button className=" text-sm ">
                    Already have an account?
                    <span className="underline ml-3">Sign in</span>
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </section>
      )}
    </Formik>
  );
}

export default SignUp;
