import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselComponent from "../src/Component/Carousel/Carousel";
import FeaturedProducts from "../src/Component/Products/Product";
import Offer from "../src/Component/Offer/Offre";
import "./Component/Offer/Offre.css";
import ServicesComponent from "../src/Component/Services/Services";
import SeenComponent from "../src/Component/Seen/Seen";
import "./Component/Seen/Seen.css";
import Customer from "./Component/Customer/Customer";
import More from "./Component/More/More";
import "./Component/More/More.css";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";

function App() {
  return (
    <>
      <Header />
      <CarouselComponent />
      <FeaturedProducts />
      <Offer />
      <ServicesComponent />
      <SeenComponent />
      <Customer />
      <More />
      <Footer />
    </>
  );
}

export default App;
