import './signUpPage.styles.scss';
// import Logo from '../../Assets/icons8-open-source-250.png'
import Logo from '../../Assets/icons8-open-source-150.png'
import { useNavigate ,Link} from 'react-router-dom';

import Button from '../../Components/button/button.component';

const SignUpPage = () => {
   const navigate = useNavigate()
  return (
    <div className='signUpPage-container'>

        <div className='sign-up-logo'>
            <img src={Logo} alt="logo" />
        </div>
        <div className='text-body'>
            <div className='text-title'>Smart Farming</div>
            <div className="text-info">Lorem ipsum dolor sit amet consectetur adipisicing elit.  Commodi quasi atque itecto sit eos vero corporis numquam, voluptatum consectetur</div>
        </div>
            <Button type='button' buttonType='agino' onClick={()=>navigate('/signUp')} >Sign Up</Button>
            <div className='alredy-have'>
                Already have an acount?
                <Link to='/login'>login</Link>
            </div>

        </div>
  );
};

export default SignUpPage;