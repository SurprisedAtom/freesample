import { React, useRef, useState, useEffect } from "react";
import Logo from "../assets/freesample-logo.svg";
import { useFormik } from "formik";

const user_regex = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const pass_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "Must be more than 8 characters";
  }

  return errors;
};

function SignUp() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <section className=" bg-circles bg-contain bg-no-repeat bg-fs-dark h-screen flex px-40 py-28 text-fs-text">
      {/* Form starts */}
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
          <form onSubmit={formik.handleSubmit} className="flex flex-col">
            <div className="flex">
              <div className="flex flex-col w-1/2 pr-2">
                <label className="text-sm font-light mb-2 " htmlFor="firstName">
                  Firstname
                </label>
                <input
                  className="mb-5 text-sm p-2 rounded-sm text-fs-dark font-medium focus:text-fs-dark"
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Firstname"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div>{formik.errors.firstName}</div>
                ) : null}
              </div>
              <div className="flex flex-col w-1/2">
                <label
                  className="text-sm font-light mb-2 text-fs-dark  focus:text-fs-dark"
                  htmlFor="lastName"
                >
                  lastName
                </label>
                <input
                  className="mb-5 text-sm p-2 rounded-sm text-fs-dark font-medium focus:text-fs-dark"
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="lastName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div>{formik.errors.lastName}</div>
                ) : null}
              </div>
            </div>
            <label className="text-sm font-light mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="mb-5 text-sm p-2 rounded-sm text-fs-dark font-medium focus:text-fs-dark"
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              autoComplete="off"
              required
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
            <label className="text-sm font-light mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="mb-14 text-sm p-2 rounded-sm text-fs-dark font-medium focus:text-fs-dark"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
            <div>
              <button className=" btn-primary" type="submit">
                Sign up
              </button>
              <button className=" text-sm ">
                Already have an account?
                <span className="underline">Sign in</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
