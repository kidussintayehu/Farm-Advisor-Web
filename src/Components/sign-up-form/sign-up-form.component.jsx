import { useState } from "react";
import {Link } from "react-router-dom"

import FormInput from '../form-input/form-input.component';
import Button from "../Button/button.component";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../util/firebase/firebase.utils";


const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });

      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="md:container md:mx-auto bg-slate-50 h-screen">
      <div className="h-[36rem] flex flex-col justify-center items-center ">
        <div className="mt-2 flex flex-col m-auto pt-16 w-3/4">
          <div>
            Do you have an account?
            <Link to="/login" className="hover:text-emerald-900">
              {" "}
              Sign Up
            </Link>
          </div>
          <span className="Roboto text-[34px] pt-5 font-bold text-[#20382F]">
            Sign up with your email and password
          </span>
          <form onSubmit={handleSubmit}>
            <FormInput
              label="Display Name"
              type="text"
              required
              onChange={handleChange}
              name="displayName"
              value={displayName}
            />

            <FormInput
              label="Email"
              type="email"
              required
              onChange={handleChange}
              name="email"
              value={email}
            />

            <FormInput
              label="Password"
              type="password"
              required
              onChange={handleChange}
              name="password"
              value={password}
            />

            <FormInput
              label="Confirm Password"
              type="password"
              required
              onChange={handleChange}
              name="confirmPassword"
              value={confirmPassword}
            />
            <Button type="submit">Sign Up</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
