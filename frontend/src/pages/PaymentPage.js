import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { initPayment } from "../services/products.service";
import { useSelector } from "react-redux";
import PaymentComponent from "../components/payment/PaymentComponent";

const pk =
  "pk_test_51MwNpgCaECfR0e6uSIMKQCJYLCGocCJjfuTZv4b2GHEtNyCdtBp9H82ymabXHZjEK5GrtdWAJuA5jb8pzR7ZGJuH009KU9Wf9Q";

const stripeObj = loadStripe(pk);

const PaymentPage = () => {
  const [ck, setCk] = useState("");

  const totalPrice = useSelector((store) => store.cart.totalPrice);

  useEffect(() => {
    totalPrice &&
      initPayment({ amount: totalPrice, currency: "eur" })
        .then((response) => {
          setCk(response.data);
        })
        .catch((err) => {
          console.log(err);
          //add toast
        });
  }, [totalPrice]);
  return (
    <div className="paymentWrapper">
      {ck && (
        <Elements stripe={stripeObj} options={{ clientSecret: ck }}>
          <PaymentComponent ck={ck} />
        </Elements>
      )}
    </div>
  );
};

export default PaymentPage;
