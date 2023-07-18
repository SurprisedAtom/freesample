import { React, useRef, useState, useEffect } from "react";
import Logo from "../assets/freesample-logo.svg";
import { useFormik } from "formik";

const user_regex = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const pass_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function SignUp() {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
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
          <form className="flex flex-col">
            <div className="flex">
              <div className="flex flex-col w-1/2 pr-2">
                <label className="text-sm font-light mb-2 " htmlFor="firstname">
                  Firstname
                </label>
                <input
                  className="mb-5 text-sm p-2 rounded-sm text-fs-dark font-medium focus:text-fs-dark"
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
                  onChange={formik.handleChange}
                  value={formik.values.firstname}
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label
                  className="text-sm font-light mb-2 text-fs-dark  focus:text-fs-dark"
                  htmlFor="lastname"
                >
                  Lastname
                </label>
                <input
                  className="mb-5 text-sm p-2 rounded-sm text-fs-dark font-medium focus:text-fs-dark"
                  type="text"
                  name="lastname"
                  placeholder="Lastname"
                  onChange={formik.handleChange}
                  value={formik.values.lastname}
                />
              </div>
            </div>
            <label className="text-sm font-light mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="mb-5 text-sm p-2 rounded-sm text-fs-dark font-medium focus:text-fs-dark"
              type="text"
              name="email"
              placeholder="Email"
              autoComplete="off"
              required
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <label className="text-sm font-light mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="mb-14 text-sm p-2 rounded-sm text-fs-dark font-medium focus:text-fs-dark"
              type="password"
              name="password"
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
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
