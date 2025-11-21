import logo from "../../../assets/Img/logo.png";
import { FaRegUser, FaSearch, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const navItems = [
  { id: 1, name: "MEN", link: "/men" },
  { id: 2, name: "WOMEN", link: "/women" },
  { id: 3, name: "KIDS", link: "/kids" },
  { id: 4, name: "HOME", link: "/home" },
  { id: 5, name: "BEAUTY", link: "/beauty" },
  { id: 6, name: "GENZ", link: "/genz" },
  { id: 7, name: "STUDIO", link: "/studio" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [menOpen, setMenOpen] = useState(false);

  const menMegaColumns = [
    {
      title: "Topwear",
      items: [
        "T-Shirts",
        "Casual Shirts",
        "Formal Shirts",
        "Sweatshirts",
        "Sweaters",
        "Jackets",
        "Blazers & Coats",
        "Suits",
        "Rain Jackets",
      ],
    },
    {
      title: "Indian & Festive Wear",
      items: ["Kurtas & Kurta Sets", "Sherwanis", "Nehru Jackets", "Dhotis"],
    },
    {
      title: "Bottomwear",
      items: [
        "Jeans",
        "Casual Trousers",
        "Formal Trousers",
        "Shorts",
        "Track Pants & Joggers",
      ],
    },
    {
      title: "Innerwear & Sleepwear",
      items: [
        "Briefs & Trunks",
        "Boxers",
        "Vests",
        "Sleepwear & Loungewear",
        "Thermals",
      ],
    },
    {
      title: "Plus Size",
      items: [],
    },
    {
      title: "Footwear",
      items: [
        "Casual Shoes",
        "Sports Shoes",
        "Formal Shoes",
        "Sneakers",
        "Sandals & Floaters",
        "Flip Flops",
        "Socks",
      ],
    },
    {
      title: "Personal Care & Grooming",
      items: [],
    },
    {
      title: "Sunglasses & Frames",
      items: [],
    },
    {
      title: "Watches",
      items: [],
    },
    {
      title: "Sports & Active Wear",
      items: [
        "Basketball Shoes",
        "Running Shoes",
        "Tennis Shoes",
        "Fitness Shoes",
        "Yoga Shoes",
        "Hiking Shoes",
        "Cricket Shoes",
      ],
    },
    {
      title: "Gadgets",
      items: ["Smart Wearables", "Fitness Gadgets", "Headphones", "Speakers"],
    },
    {
      title: "Fashion Accessories",
      items: [
        "Wallets",
        "Belts",
        "Perfumes & Body Mists",
        "Trimmers",
        "Deodorants",
        "Ties, Cufflinks & Pocket Squares",
        "Accessory Gift Sets",
        "Caps & Hats",
        "Mufflers, Scarves & Gloves",
        "Phone Cases",
        "Rings & Wristwear",
        "Helmets",
      ],
    },
    {
      title: "Bags & Backpacks",
      items: [],
    },
    {
      title: "Luggages & Trolleys",
      items: [],
    },
  ];

  return (
    <>
      <header className="bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.05)]">
        <div
          className="max-w-[1400px] mx-auto flex items-center justify-between px-4 py-2 relative"
          onMouseLeave={() => setMenOpen(false)}
        >
          <div className="flex items-center gap-3">
            <Link to="/">
              <img src={logo} alt="logo" className="w-[50px] sm:w-[60px]" />
            </Link>
            <button
              aria-label="Open menu"
              className="md:hidden p-2 rounded hover:bg-gray-100"
              onClick={() => setOpen((v) => !v)}
            >
              <FaBars />
            </button>
          </div>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-6 lg:gap-8">
              {navItems.map((item) =>
                item.name === "MEN" ? (
                  <li
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => setMenOpen(true)}
                  >
                    <Link
                      to={item.link}
                      className="text-[#282c3f] text-[14px] lg:text-[15px] font-bold hover:text-[#ff3f6c] transition duration-300 border-b-2 border-transparent hover:border-[#ff3f6c] pb-2"
                    >
                      {item.name}
                    </Link>
                  </li>
                ) : (
                  <li key={item.id}>
                    <Link
                      to={item.link}
                      className="text-[#282c3f] text-[14px] lg:text-[15px] font-bold hover:text-[#ff3f6c] transition duration-300 border-b-2 border-transparent hover:border-[#ff3f6c] pb-2"
                    >
                      {item.name}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>

          {menOpen && (
            <div
              className="absolute left-0 right-0 top-full z-50 bg-white border-t border-gray-200 shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
              onMouseEnter={() => setMenOpen(true)}
              onMouseLeave={() => setMenOpen(false)}
              role="menu"
              aria-label="Men mega menu"
            >
              <div className="max-w-[1400px] mx-auto px-6 py-6">
                <div className="grid grid-cols-5 gap-8">
                  {menMegaColumns.map((col, index) => (
                    <div
                      key={col.title}
                      className={`pr-4 ${
                        index < menMegaColumns.length - 1 ? 'border-r border-gray-200' : ''
                      }`}
                    >
                      <h4 className="text-[#ff3f6c] font-bold mb-3 uppercase text-[14px]">
                        {col.title}
                      </h4>
                      <ul className="space-y-2">
                        {col.items.map((it) => (
                          <li key={it}>
                            <Link
                              to="/men"
                              className="text-[#3e4152] hover:text-[#ff3f6c] transition-colors text-[14px] block"
                            >
                              {it}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center gap-4">
            <div className="relative bg-[#f5f5f6] rounded-[5px] hidden md:block">
              <form className="flex items-center gap-[10px]">
                <input
                  type="text"
                  placeholder="Search for products, brands and more"
                  className="w-48 sm:w-64 md:w-[400px] text-lg h-10 px-2 pl-10 rounded-[5px] focus:outline-none focus:bg-white focus:border focus:border-gray-300"
                />
                <button
                  type="submit"
                  className="w-10 h-10 flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-2 text-gray-500"
                >
                  <FaSearch />
                </button>
              </form>
            </div>

            <div className="flex items-center flex-col gap-[5px] cursor-pointer">
              <FaRegUser className="text-gray-700" />
              <Link
                to="/login"
                className="text-[#282c3f] text-[12px] font-bold"
              >
                Profile
              </Link>
            </div>

            <div className="ml-2 p-[6px] rounded-[5px]">
              <Link
                to="/add-product"
                className="text-white bg-[#DB6038] px-[10px] py-2 sm:py-3 rounded-[5px] text-[12px] font-bold whitespace-nowrap hover:bg-orange-700 transition"
              >
                Add Product
              </Link>
            </div>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t border-gray-200">
            <ul className="px-4 py-3 grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.link}
                    className="block text-[#282c3f] text-[15px] font-bold py-2"
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
