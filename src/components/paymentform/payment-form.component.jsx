import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import {
  PaymentFormContainer,
  FormContainer,
  PaymentsButton,
} from "./payment-form.styles.jsx";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/cart.selector.js";
import { selectCurrentUser } from "../../store/user/user.selector.js";
const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const cartTotal = useSelector(selectCartTotal);
  const [userInfo, setUserInfo] = useState({});
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  useEffect(() => {
    const setUser = async () => {
      await setUserInfo(currentUser);
    };
    setUser();
  }, [currentUser]);

  // const {
  //   address_line1,
  //   address_line2,
  //   country,
  //   postal_code,
  //   state,
  //   first_name,
  //   last_name,
  // } = userInfo ;

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

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
      alert(paymentResult.error);
      console.log(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successful");
      }
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <CardElement />
        <PaymentsButton
          disabled={isProcessingPayment}
          type="submit"
        >
          Pay now
        </PaymentsButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
