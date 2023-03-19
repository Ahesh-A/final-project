import "./sign-in-password.styles.scss";
import { Fragment } from "react";
import { useState } from "react";
import { setPassword, setEmail } from "../../store/sign-in/sign-in.action";
import { useDispatch } from "react-redux";
import { selectEmail } from "../../store/sign-in/sign-in.selector";
import { useSelector } from "react-redux";

import { signInWithEmailAndPassStart } from "../../store/user/user.action";
import { useNavigate} from "react-router-dom";

const SigninPassword = () => {
  const email = useSelector(selectEmail);
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signInButtonClick = (event) => {
    event.preventDefault();
    dispatch(setPassword(password));
    dispatch(signInWithEmailAndPassStart(email, password));
    
    navigate("/");
  };
  const passwordChangeHandler = (event) => {
    const { value } = event.target;
    setpassword(value);
  };
  return (
    <Fragment>
      <p className="email-container">
        {email} <span onClick = {() => {dispatch(setEmail(null))}}>Change</span>
      </p>
      <div className="password-container">
        <div className="password-upper-container">
          <div className="passowrd-label-container">
            <label htmlFor="sign-in-password-input"> Password</label>
          </div>
          <div className="forgot-password-container">Forgot Password?</div>
        </div>
        <input
          type="password"
          className="sign-in-password-input"
          id="sign-in-password-input"
          onChange={passwordChangeHandler}
          value={password}
        />
        <div className="sign-in-button-container">
          <button
            className="sign-in-password-button"
            onClick={signInButtonClick}
          >
            Sign in
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default SigninPassword;
