/* react-stripe-js - import */
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

/* Hooks - import from React */
import { useState } from "react";

/* Axios - import */
import axios from "axios";

const CheckoutForm = ({ title, amount, name }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [successMessage, setSuccessMessage] = useState("");
  console.log("title ", title);
  console.log("amount ", amount);
  console.log(typeof amount);
  console.log(amount * 100);
  console.log("name ", name);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const cardElements = elements.getElement(CardElement); // get user's card elements

      const stripeResponse = await stripe.createToken(cardElements, {
        name: name,
      });
      console.log(stripeResponse);

      const stripeToken = stripeResponse.token.id;

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        {
          token: stripeToken,
          title: title,
          amount: amount * 100,
        }
      );
      console.log(response);
      if (response.status === 200) {
        setSuccessMessage("Paiement validé");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <input type="submit" />
      </form>
      <span>{successMessage}</span>
    </div>
  );
};

export default CheckoutForm;
