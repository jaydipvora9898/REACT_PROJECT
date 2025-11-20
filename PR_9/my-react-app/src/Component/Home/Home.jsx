import Header from './Header/Header'
import Coupon from './Coupon-code/Coupon';
import Slider1 from './Slider/Slider-1';
import Slider2 from './Slider/Slider-2';
import Slider3 from './Slider/Slider-3';
import Slider4 from './Slider/Slider-4';
import Slider5 from './Slider/Slider-5';
import Shop from './Shop/Shop';

const Home = () => {
  return (
    <>
      <Coupon />
      <Slider1 />
      <Slider2 />
      <Slider3 />
      <Slider4 />
      <Slider5 />
      <Shop />
    </>
  )
}

export default Home