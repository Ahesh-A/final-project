import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { insertItemsToDeliver } from "../../utils/firebase.utils.js";
import {
  PaymentFormContainer,
  FormContainer,
  PaymentsButton,
} from "./payment-form.styles.jsx";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  selectCartTotal,
  selectCartItems,
} from "../../store/cart/cart.selector.js";
import { selectCurrentUser } from "../../store/user/user.selector.js";

const PaymentForm = ({ user }) => {
  const stripe = useStripe();
  const elements = useElements();
  const cartTotal = useSelector(selectCartTotal);
  const cartItems = useSelector(selectCartItems);
  const [userInfo, setUserInfo] = useState({});
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  console.log("user is: ", { user, cartItems });
  
  useEffect(() => {
    const setUser = async () => {

      await setUserInfo(currentUser);
    };
    setUser();
  }, [currentUser]);



  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    if (!currentUser) alert("please login before payment");
    setIsProcessingPayment(true);
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: cartTotal * 100 }),
    }).then((res) => res.json());
    const {
      paymentIntent: { client_secret },
    } = response;

    console.log(client_secret);

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: userInfo.first_name + userInfo.last_name,
          address: {
            line1: userInfo.address_line1 + userInfo.address_line2,
            postal_code: userInfo.postal_code,
            city: "",
            state: userInfo.state,
            country: userInfo.country,
          },
        },
      },
    });

    setIsProcessingPayment(false);
    if (paymentResult.error) {
      alert('invalid card number');
      console.log(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successful");
        insertItemsToDeliver({ user, cartItems });
      }
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <CardElement />
        <PaymentsButton disabled={isProcessingPayment} type="submit">
          Pay now
        </PaymentsButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
