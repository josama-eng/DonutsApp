import { Link } from "react-router-dom";
import About from "./components/About";
import TopProducts from "./components/TopProducts";

const HomePageComponent = () => {
  return (
    <>
      <div className="homePageComponent">
        <div className="contentWrapper">
          <h1>Sweet Delights: Donuts and Ice Cream Treats</h1>
          <p>
            Indulge in our delicious and decadent treats at our online shop! We
            offer a variety of mouthwatering donuts and creamy ice-creams to
            satisfy your sweet tooth. Our freshly made desserts are perfect for
            any occasion or simply for a sweet pick-me-up. Order now and treat
            yourself to a delightful experience!
          </p>
          <Link to="/shop" className="linkReset homeBtn">
            Get Started
          </Link>
        </div>
      </div>
      <About />
      <TopProducts />
    </>
  );
};

export default HomePageComponent;
