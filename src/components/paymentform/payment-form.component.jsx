import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { PaymentFormContainer, FormContainer } from "./payment-form.styles";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/cart.selector.js";
import { selectCurrentUser } from "../../store/user/user.selector.js";
const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const cartTotal = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const {address_line1,address_line2, country, postal_code, state, first_name, last_name} = currentUser;
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
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
          name: first_name + last_name,
          address: {
            line1: address_line1 + address_line2,
            postal_code,
            city: '',
            state,
            country
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
        <h2>Credit Card Payment</h2>
        <CardElement />
        <button disabled = {isProcessingPayment} type="submit">Pay now</button>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
