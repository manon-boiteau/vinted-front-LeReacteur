/* react-stripe-js - import */
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

/* Hooks - import from React */
import { useState } from "react";

/* Import react-router-dom */
import { useHistory } from "react-router-dom";

/* Axios - import */
import axios from "axios";

const CheckoutForm = ({ title, amount, name }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [successMessage, setSuccessMessage] = useState("");
  const [isPay, setIsPay] = useState(false);

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // get user's card elements
      const cardElements = elements.getElement(CardElement);

      // send to Stripe user's elements and ask for answer with the token of the user
      const stripeResponse = await stripe.createToken(cardElements, {
        name: name,
      });

      const stripeToken = stripeResponse.token.id;

      // API Le Réacteur : https://lereacteur-vinted-api.herokuapp.com/payment
      // API Manon : http://localhost:4000/pay

      // Send to server: token received by Stripe, offer's title & offer's price (in cents)
      const response = await axios.post("http://localhost:4000/pay", {
        token: stripeToken,
        title: title,
        amount: amount * 100,
      });

      if (response.status === 200) {
        setSuccessMessage("Paiement validé 🥳");
        setIsPay(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="form-pay">
      <form onSubmit={handleSubmit}>
        <CardElement />
        <input type="submit" />
      </form>
      <div className="pay-ok">
        {successMessage}
        {isPay ? (
          <button
            onClick={() => {
              history.push("/");
            }}
          >
            Retour vers la page d'accueil
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default CheckoutForm;
