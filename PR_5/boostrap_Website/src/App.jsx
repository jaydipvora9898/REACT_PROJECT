
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselComponent from '../src/Component/Carousel/Carousel';
import FeaturedProducts from '../src/Component/Products/Product';
import Offer from '../src/Component/Offer/Offre';
import './Component/Offer/Offre.css'

function App() {

  return (
    <>
      <CarouselComponent />
      <FeaturedProducts  />
      <Offer />
    </>
  )
}

export default App
