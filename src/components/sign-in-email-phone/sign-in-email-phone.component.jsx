import { Fragment } from "react";
import { useDispatch } from "react-redux";
import "./sign-in-email-phone.styles.scss";
import { setEmail } from "../../store/sign-in/sign-in.action";
import { useState } from "react";
const SigninEmailPhone = () => {
  const dispatch = useDispatch();

  const [email, setemail] = useState("");
  const signinChangeHandler = (event) => {
    const { value } = event.target;
    setemail(value);
  };

  const signInClickHandler = (event) => {
    event.preventDefault();
    dispatch(setEmail(email));
  };

  return (
    <Fragment>
      <label htmlFor="email-phone" className="sign-in-label">
        Email or mobile phone number
      </label>
      <input
        type="text"
        id="email-phone"
        name="email"
        value={email}
        onChange={signinChangeHandler}
        className="sign-in-input"
      />
      <button className="sign-in-button" onClick={signInClickHandler}>
        Continue
      </button>
      <p className="sign-in-para">
        By continuing, you agree to a&a appraels's
        <span className="sign-in-para-span"> Conditions of Use </span>and
        <span className="sign-in-para-span"> Privacy Notice.</span>
      </p>
    </Fragment>
  );
};

export default SigninEmailPhone;
