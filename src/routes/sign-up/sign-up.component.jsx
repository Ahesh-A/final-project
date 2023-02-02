import "./sign-up.styles.scss";
import { ReactComponent as Google } from "../../assets/sign-up/google.svg";
import { ReactComponent as Facebook } from "../../assets/sign-up/facebook-logo-2019.svg";
import Form from "../../components/form/form.component";
import { googleSignIn } from "../../utils/firebase.utils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithGoogleEmailAndPassword } from "../../utils/firebase.utils";
const SignUp = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const emailChangeHandler = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  const passowrdChangeHandler = (event) => {
    const { value } = event.target;
    setPassword(value);
  };

  const confirmPasswordchangeHandler = (event) => {
    const { value } = event.target;
    setConfirmPassword(value);
  };

  const googleButtonHandler = () => {
    googleSignIn().then(() => {
      navigate("/");
    });
  };

  const signInSubmitButtonHandler = (event) => {
    event.preventDefault();
    if (!email || !password || !confirmPassword) {
      alert("fileds missing ");
      return;
    }
    if (password !== confirmPassword) {
      alert("passowrd and confirmpassword did not match");
      return;
    }
    console.log("signInButton clicked");
    createUserWithGoogleEmailAndPassword(email, password);
    navigate("/");
  };
  return (
    <div>
      <div className="sign-up-container">
        <div className="sign-up-left-container">
          <div className="sign-up-left-container-upper">
            <h2 className="sign-up-left-container-heading">Sign up with</h2>
            <div className="sign-up-upper-left-buttons-container">
              <button className="google" onClick={googleButtonHandler}>
                <div>
                  <Google />
                </div>
                <span>google</span>
              </button>
              <button className="facebook">
                <div className="facebook-logo-container">
                  <Facebook />
                </div>
                <span>facebook</span>
              </button>
            </div>
            <div className="seperator">
              <span className="seperator-content"> or </span>
            </div>
          </div>
          <div className="sign-up-left-container-lower">
            <div className="checkout-container-signin">
              <div className="checkout-left-section">
                <form>
                  <div className="form-elements-container">
                    <Form
                      type="text"
                      name="First Name"
                      id="First-Name"
                      required={true}
                    />
                    <Form
                      type="text"
                      name="Last Name"
                      id="Last-Name"
                      required={true}
                    />

                    <Form
                      type="text"
                      name="Email Address"
                      id="email-address"
                      required={true}
                      value={email}
                      onChange={emailChangeHandler}
                    />
                    <Form
                      type="number"
                      name="Phone Number"
                      id="phone-number"
                      required={true}
                    />
                    <Form
                      type="password"
                      name="Password"
                      id="password"
                      required={true}
                      value={password}
                      onChange={passowrdChangeHandler}
                    />
                    <Form
                      type="password"
                      name="Confirm Password"
                      id="confirm-password"
                      required={true}
                      value={confirmPassword}
                      onChange={confirmPasswordchangeHandler}
                    />
                    <div className="button-container">
                      <button
                        className="sign-up-button"
                        onClick={signInSubmitButtonHandler}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="sign-up-right-container"></div>
      </div>
    </div>
  );
};

export default SignUp;
