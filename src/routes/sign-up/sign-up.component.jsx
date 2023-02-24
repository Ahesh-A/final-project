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
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [phone_number, setPhoneNumber] = useState();
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
  const firstNameChangeHandler = (event) => {
    const { value } = event.target;
    setFirstName(value);
  };

  const lastNameChangeHandler = (event) => {
    const { value } = event.target;
    setLastName(value);
  };

  const phoneNumberChangeHandler = (event) => {
    const { value } = event.target;
    setPhoneNumber(value);
  };
  const googleButtonHandler = () => {
    googleSignIn().then(() => {
      navigate("/");
    });
  };

  const signInSubmitHandler = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passowrd and confirmpassword did not match");
      return;
    }

    if (Math.floor(Math.log10(phone_number)) + 1 !== 10) {
      alert("invalid phone number");
      return;
    }

    console.log("signInButton clicked");
    const res = await createUserWithGoogleEmailAndPassword(
      email,
      password,
      first_name,
      last_name,
      phone_number
    );
    // const { uid } = res;
    // console.log(res);
    // console.log(first_name, last_name, email, phone_number);

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
                <form onSubmit={signInSubmitHandler} action="submit">
                  <div className="form-elements-container">
                    <Form
                      type="text"
                      name="First Name"
                      id="First-Name"
                      value={first_name}
                      onChange={firstNameChangeHandler}
                      required
                    />
                    <Form
                      type="text"
                      name="Last Name"
                      onChange={lastNameChangeHandler}
                      value={last_name}
                      id="Last-Name"
                      required
                    />

                    <Form
                      type="text"
                      name="Email Address"
                      id="email-address"
                      required
                      value={email}
                      onChange={emailChangeHandler}
                    />
                    <Form
                      type="number"
                      name="Phone Number"
                      value={phone_number}
                      min="1"
                      id="phone-number"
                      onChange={phoneNumberChangeHandler}
                      required
                    />
                    <Form
                      type="password"
                      name="Password"
                      id="password"
                      required
                      value={password}
                      onChange={passowrdChangeHandler}
                    />
                    <Form
                      type="password"
                      name="Confirm Password"
                      id="confirm-password"
                      required
                      value={confirmPassword}
                      onChange={confirmPasswordchangeHandler}
                    />
                    <div className="button-container">
                      <button type="submit" className="sign-up-button">
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
