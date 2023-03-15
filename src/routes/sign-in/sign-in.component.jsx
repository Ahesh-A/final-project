import "./sign-in.styles.scss";
import Logo from "../../components/logo/logo.component";
import { useNavigate } from "react-router-dom";
import SigninEmailPhone from "../../components/sign-in-email-phone/sign-in-email-phone.component.jsx";
import SigninPassword from "../../components/sign-in-password/sign-in-password.component";
import { useSelector } from "react-redux";
import { selectEmail } from "../../store/sign-in/sign-in.selector";
const SignIn = () => {
  const email = useSelector(selectEmail);
  console.log(email);
  const navigate = useNavigate();
  
  const handleCreateAccount = () => {
    navigate("/sign-up");
  };
  return (
    <div>
      <div className="sign-in-container">
        <div className="sign-in-logo-container">
          <Logo />
        </div>
        <div className="sign-in-form-container">
          <form className="sign-in-form">
            <h2 className="sign-in-form-title">Sign in</h2>
            {email ? <SigninPassword /> : <SigninEmailPhone />}
          </form>
        </div>
        <div className="sign-in-divider">
          <h5 className="sign-in-divider-content">New to a&a apprales?</h5>
        </div>
        <div className="create-account">
          <button className="sign-in-button" onClick={handleCreateAccount}>
            Create your a&a-apprales account
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
