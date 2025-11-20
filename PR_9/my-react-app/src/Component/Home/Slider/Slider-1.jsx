import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderImg1 from "../../../assets/Img/slider-1.webp";
import sliderImg2 from "../../../assets/Img/slider-2.webp";
import sliderImg3 from "../../../assets/Img/slider-3.webp";
import sliderImg4 from "../../../assets/Img/slider-4.webp";
import sliderImg5 from "../../../assets/Img/slider-5.webp";

const sliderData = [
  {
    id: 1,
    link: "/#",
    img: sliderImg1,
  },
  {
    id: 2,
    link: "/#",
    img: sliderImg2,
  },
  {
    id: 3,
    link: "/#",
    img: sliderImg3,
  },
  {
    id: 4,
    link: "/#",
    img: sliderImg4,
  },
  {
    id: 5,
    link: "/#",
    img: sliderImg5,
  },
];
const Slider1 = () => {
  const slideIntervalMs = 500;

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: slideIntervalMs,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: false,
    arrows: true,
  };
  return (
    <>
      <div className="">
        <Slider {...settings}>
          {sliderData.map((item) => (
            <div key={item.id}>
              <a href={item.link}>
                <img src={item.img} alt="" className="w-full" />
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Slider1;
