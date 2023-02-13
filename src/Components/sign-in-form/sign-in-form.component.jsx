import { useState } from "react";
import { Link } from "react-router-dom";


import FormInput from '../form-input/form-input.component';
import Button from '../Button/button.component';

import {
  signInWithGooglePopup,
  // createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../util/firebase/firebase.utils";


const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // const user =
       await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
    
      
      resetFormFields();
      // handleRedirect(user)
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
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
            <Link to="/signUp" className="hover:text-emerald-900">
              {" "}
              Sign Up
            </Link>
          </div>
          <span className="Roboto text-[34px] pt-5 font-bold text-[#20382F]">
            Sign in with your email and password
          </span>
          <form onSubmit={handleSubmit}>
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
            <div className="flex justify-between">
              <Button type="submit">Sign In</Button>
              <Button
                type="button"
                buttonType="google"
                onClick={signInWithGoogle}
              >
                Google sign in
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
