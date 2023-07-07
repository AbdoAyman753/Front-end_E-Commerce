/* eslint-disable no-undef */
import axios from "axios";
const stripe = Stripe(
  "pk_test_51NPT70BJTe270Y27mGLAncj6wPmG167SnKqen3uaK028mgMk0hsXdNKks3kKl7XOb4HoRZPoi4iJsCv65i6Hf4ZA00dyO7gHYw"
);

export const order = async (cart, totalPrice, token) => {
  let session;
  try {
    session = await axios.post(
      "http://127.0.0.1:8000/create-checkout-session",
      { cart, totalPrice },
      {
        headers: {
          Authorization: token,
        },
      }
    );

    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (error) {
    console.log(error);
  }
};
