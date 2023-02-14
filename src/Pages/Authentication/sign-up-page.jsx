import "./signUpPage.styles.scss";
import Logo from "../../Assets/icons8-open-source-150.png";
import { useNavigate, Link } from "react-router-dom";

import Button from '../../Components/button/button.component';

const SignUpPage = () => {
  const navigate = useNavigate();
  return (
    <div className="md:container md:mx-auto bg-slate-50 h-screen">
      <div className="h-[36rem] flex flex-col justify-center items-center ">
        <img className="w-28 h-28 rounded-full" src={Logo} alt="logo" />

        <h1 className="Roboto text-[34px] pt-5 font-bold text-[#20382F]">
          Smart Farming
        </h1>
        <p className="text-right md:text-center pt-2 pb-9 w-80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
        <Button
          type="button"
          buttonType="agino"
          onClick={() => navigate("/signUp")}
        >
          Sign Up
        </Button>
        <div>
          Already have an acount?
          <Link to="/login" className="hover:text-emerald-900"> login</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
