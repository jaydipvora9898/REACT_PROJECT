import React from "react";
import shopImg1 from "../../../assets/Img/Shop/img-1.webp";
import shopImg2 from "../../../assets/Img/Shop/img-2.webp";
import shopImg3 from "../../../assets/Img/Shop/img-3.webp";
import shopImg4 from "../../../assets/Img/Shop/img-4.webp";
import shopImg5 from "../../../assets/Img/Shop/img-5.webp";
import shopImg6 from "../../../assets/Img/Shop/img-6.webp";
import shopImg7 from "../../../assets/Img/Shop/img-7.webp";
import shopImg8 from "../../../assets/Img/Shop/img-8.webp";
import shopImg9 from "../../../assets/Img/Shop/img-9.webp";
import shopImg10 from "../../../assets/Img/Shop/img-10.webp";
import shopImg11 from "../../../assets/Img/Shop/img-11.webp";
import shopImg12 from "../../../assets/Img/Shop/img-12.webp";
import shopImg13 from "../../../assets/Img/Shop/img-13.webp";
import shopImg14 from "../../../assets/Img/Shop/img-14.webp";
import shopImg15 from "../../../assets/Img/Shop/img-15.webp";
import shopImg16 from "../../../assets/Img/Shop/img-16.webp";
import shopImg17 from "../../../assets/Img/Shop/img-17.webp";
import shopImg18 from "../../../assets/Img/Shop/img-18.webp";
import shopImg19 from "../../../assets/Img/Shop/img-19.webp";
import shopImg20 from "../../../assets/Img/Shop/img-20.webp";
import shopImg21 from "../../../assets/Img/Shop/img-21.webp";
import shopImg22 from "../../../assets/Img/Shop/img-22.webp";
import shopImg23 from "../../../assets/Img/Shop/img-23.webp";
import shopImg24 from "../../../assets/Img/Shop/img-24.webp";
import shopImg25 from "../../../assets/Img/Shop/img-25.webp";
import shopImg26 from "../../../assets/Img/Shop/img-26.webp";
import shopImg27 from "../../../assets/Img/Shop/img-27.webp";
import shopImg28 from "../../../assets/Img/Shop/img-28.webp";
import shopImg29 from "../../../assets/Img/Shop/img-29.webp";
import shopImg30 from "../../../assets/Img/Shop/img-30.webp";
import shopImg31 from "../../../assets/Img/Shop/img-31.webp";
import shopImg32 from "../../../assets/Img/Shop/img-32.webp";
import shopImg33 from "../../../assets/Img/Shop/img-33.webp";

const shopData = [
  {
    id: 1,
    img: shopImg1,
    href: "/Women",
  },
  {
    id: 2,
    img: shopImg2,
    href: "/Men",
  },
  {
    id: 3,
    img: shopImg3,
    href: "/Women",
  },
  {
    id: 4,
    img: shopImg4,
    href: "/Men",
  },
  {
    id: 5,
    img: shopImg5,
    href: "/Women",
  },
  {
    id: 6,
    img: shopImg6,
    href: "/Men",
  },
  {
    id: 7,
    img: shopImg7,
    href: "/Women",
  },
  {
    id: 8,
    img: shopImg8,
    href: "/Men",
  },
  {
    id: 9,
    img: shopImg9,
    href: "/Women",
  },
  {
    id: 10,
    img: shopImg10,
    href: "/Men",
  },
  {
    id: 11,
    img: shopImg11,
    href: "/Men",
  },
  {
    id: 12,
    img: shopImg12,
    href: "/Women",
  },
  {
    id: 13,
    img: shopImg13,
    href: "/Kids",
  },
  {
    id: 14,
    img: shopImg14,
    href: "/Men",
  },
  {
    id: 15,
    img: shopImg15,
    href: "/Women",
  },
  {
    id: 16,
    img: shopImg16,
    href: "/Men",
  },
  {
    id: 17,
    img: shopImg17,
    href: "/Women",
  },
  {
    id: 18,
    img: shopImg18,
    href: "/Men",
  },
  {
    id: 19,
    img: shopImg19,
    href: "/Women",
  },
  {
    id: 20,
    img: shopImg20,
    href: "/Women",
  },
  {
    id: 21,
    img: shopImg21,
    href: "/Men",
  },
  {
    id: 22,
    img: shopImg22,
    href: "/Women",
  },
  {
    id: 23,
    img: shopImg23,
    href: "/Women",
  },
  {
    id: 24,
    img: shopImg24,
    href: "/Men",
  },
  {
    id: 25,
    img: shopImg25,
    href: "/Men",
  },
  {
    id: 26,
    img: shopImg26,
    href: "/Women",
  },
  {
    id: 27,
    img: shopImg27,
    href: "/Women",
  },
  {
    id: 28,
    img: shopImg28,
    href: "/Men",
  },
  {
    id: 29,
    img: shopImg29,
    href: "/Men",
  },
  {
    id: 30,
    img: shopImg30,
    href: "/Women",
  },
  {
    id: 31,
    img: shopImg31,
    href: "/Men",
  },
  {
    id: 32,
    img: shopImg32,
    href: "/Men",
  },
  {
    id: 33,
    img: shopImg33,
    href: "/Men",
  },
];
const Shop = () => {
  return (
    <>
      <section className="py-12 bg-white">
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-0 justify-items-center justify-center">
          {shopData.map((product) => (
            <div key={product.id} className="group relative overflow-hidden">
              <a href={product.href}>
                <img
                  alt={product.name}
                  src={product.img}
                  className="aspect-square w-full bg-gray-200 object-cover h-[335px] transition-transform duration-300"
                />
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Shop;
