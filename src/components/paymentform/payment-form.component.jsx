import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { PaymentFormContainer, FormContainer } from "./payment-form.styles";
const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: 1000 }),
    }).then((res) => res.json());
    const {
      paymentIntent: { client_secret },
    } = response;

    console.log(client_secret);

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: "Ahesh A",
          address: {
            line1: '510 Townsend St',
            postal_code: '98140',
            city: 'San Francisco',
            state: 'CA',
            country: 'US',
          },
        },
      },
    });

    if (paymentResult.error) {
      alert(paymentResult.error);
      console.log(paymentResult.error)
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
        <button type="submit">Pay now</button>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
