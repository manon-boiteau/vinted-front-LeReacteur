/* react-stripe-js - import */
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";

/* react-router-dom - import */
import { useLocation } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const { title, amount, name } = location.state;
  const stripePromise = loadStripe(
    "pk_test_51IptRhFrdqHBPTfkIcBKfaiA63tewBYGm2narD3B3cN4sGAjggF2B78PhHMdLRki9kCg602zkbHZWout5xhPldsW00eANM8jsY"
  );

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm title={title} amount={amount} name={name} />
    </Elements>
  );
};

export default Payment;
