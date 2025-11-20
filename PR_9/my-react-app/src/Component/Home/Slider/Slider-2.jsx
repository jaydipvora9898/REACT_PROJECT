import React from "react";
import sliderImg1 from "../../../assets/Img/Slider-2/img-1.webp";
import sliderImg2 from "../../../assets/Img/Slider-2/img-2.webp";
import sliderImg3 from "../../../assets/Img/Slider-2/img-3.webp";
import sliderImg4 from "../../../assets/Img/Slider-2/img-4.webp";
import sliderImg5 from "../../../assets/Img/Slider-2/img-5.webp";
import sliderImg6 from "../../../assets/Img/Slider-2/img-6.webp";
import sliderImg7 from "../../../assets/Img/Slider-2/img-7.webp";
import sliderImg8 from "../../../assets/Img/Slider-2/img-8.webp";
import sliderImg9 from "../../../assets/Img/Slider-2/img-9.webp";
import sliderImg10 from "../../../assets/Img/Slider-2/img-10.webp";
import sliderImg11 from "../../../assets/Img/Slider-2/img-11.webp";
import sliderImg12 from "../../../assets/Img/Slider-2/img-12.webp";
import sliderImg13 from "../../../assets/Img/Slider-2/img-13.webp";
import sliderImg14 from "../../../assets/Img/Slider-2/img-14.webp";
import sliderImg15 from "../../../assets/Img/Slider-2/img-15.webp";
import { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
const slider2img = [
  { id: 1, img: sliderImg1, href: "/men" },
  { id: 2, img: sliderImg2, href: "/women" },
  { id: 3, img: sliderImg3, href: "/women" },
  { id: 4, img: sliderImg4, href: "/men" },
  { id: 5, img: sliderImg5, href: "/women" },
  { id: 6, img: sliderImg6, href: "/men" },
  { id: 7, img: sliderImg7, href: "/men" },
  { id: 8, img: sliderImg8, href: "/men" },
  { id: 9, img: sliderImg9, href: "/women" },
  { id: 10, img: sliderImg10, href: "/women" },
  { id: 11, img: sliderImg11, href: "/kids" },
  { id: 12, img: sliderImg12, href: "/kids" },
  { id: 13, img: sliderImg13, href: "/men" },
  { id: 14, img: sliderImg14, href: "/women" },
  { id: 15, img: sliderImg15, href: "/men" },
];
const Slider2 = () => {
  const slides = useMemo(() => {
    const chunks = [];
    for (let i = 0; i < slider2img.length; i += 5) {
      chunks.push(slider2img.slice(i, i + 5));
    }
    return chunks.slice(0, 3);
  }, []);

  const [current, setCurrent] = useState(0);
  const total = slides.length;

  useEffect(() => {
    if (total <= 1) return;
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, 3000);
    return () => clearInterval(id);
  }, [total]);

  return (
    <>
      <section className="py-12">
        <div className="relative">
          <div className="slider2-title">
            <h2 className="text-3xl font-bold ms-12 mb-15 text-[#3e4152] tracking-[5px]">
              RISING STARS
            </h2>
          </div>
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {slides.map((slide, idx) => (
                <div key={idx} className="min-w-full cursor-pointer">
                  <div className="grid grid-cols-5 gap-0">
                    {slide.map((product) => (
                      <div
                        key={product.id}
                        className="group relative overflow-hidden"
                      >
                        <Link to={product.href}>
                          <img
                            alt={`slide-${idx}-product-${product.id}`}
                            src={product.img}
                            className="aspect-square w-full object-contain h-[400px] transition-transform duration-300 group-hover:scale-105"
                          />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setCurrent(i)}
                className={`p-1.5 rounded-full ${
                  current === i ? "bg-black" : "bg-gray-300"
                } transition-all cursor-pointer`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider2;
