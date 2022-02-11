import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

const CheckoutForm = ({ title, amount, name }) => {
  const stripe = useStripe();
  const elements = useElements();

  const userId = Cookies.get("userId");

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
        name: userId,
      });

      const stripeToken = stripeResponse.token.id;

      // API Le Réacteur : https://lereacteur-vinted-api.herokuapp.com/payment
      // API Manon : http://localhost:4000/pay

      // Send to server: token received by Stripe, offer's title & offer's price (in cents)
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        {
          token: stripeToken,
          title: title,
          amount: amount,
        }
      );

      if (response.status === 200) {
        setSuccessMessage("Paiement validé 🥳");
        setIsPay(true);
      }
    } catch (error) {
      console.log(error.message);
      alert(
        "Nous sommes désolés, une erreur est survenue. Ré-essayez plus tard."
      );
    }
  };

  return (
    <div className="form-pay">
      <p>Résumé de votre commande</p>
      <div className="detail-pay">
        <div>
          <span>Commande</span>
          <span>{amount} €</span>
        </div>
        <div>
          <span>Frais protection acheteur</span>
          <span>0.40 €</span>
        </div>
        <div>
          <span>Frais de port</span>
          <span>0.80 €</span>
        </div>
        <div>
          <span>Total</span>
          <span>{(amount + 0.4 + 0.8).toFixed(2)} €</span>
        </div>
      </div>

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
