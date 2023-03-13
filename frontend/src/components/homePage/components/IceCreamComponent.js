import iceCream from "../../../assets/images/iceCream.jpg";
import { Link } from "react-router-dom";

const IceCreamComponent = () => {
  return (
    <div className="iceCreamContainer">
      <div className="wrapper">
        <div className="purple"></div>
        <div className="img">
          <img src={iceCream} alt="" />
        </div>
        <div className="content">
          <div className="white">
            <h3>Delivery</h3>
            <p>
              Ice cream delivery in specialized freezers is a convenient way to
              enjoy your favorite frozen treats without having to leave the
              comfort of your home. These specialized freezers are designed to
              keep your ice cream at the perfect temperature, ensuring that it
              stays fresh and delicious.
            </p>
          </div>
          <div className="pink">
            <h3>online shop</h3>
            <p>Ice cream delivery to all parts of city</p>
            <Link to="/iceCream" className="iceCreamLink">
              See offer
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IceCreamComponent;
