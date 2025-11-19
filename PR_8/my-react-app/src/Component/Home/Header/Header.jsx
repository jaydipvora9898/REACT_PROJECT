import logo from "../../../assets/Img/logo.png";
import { FaRegUser, FaSearch, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';

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

  return (
    <>
      <header className="bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.05)]">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 py-2">
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
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.link}
                    className="text-[#282c3f] text-[14px] lg:text-[15px] font-bold hover:text-black transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="relative bg-[#f5f5f6] rounded-[5px]">
              <form className="flex items-center gap-[10px]">
                <input
                  type="text"
                  placeholder="Search for products, brands and more"
                  className="w-48 sm:w-64 md:w-[400px] text-lg h-10 px-2 pl-10 rounded-[5px]"
                />
                <button
                  type="submit"
                  className="w-10 h-10 flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-2"
                >
                  <FaSearch />
                </button>
              </form>
            </div>

            <div className="flex items-center flex-col gap-[5px]">
              <FaRegUser />
              <Link to="/login" className="text-[#282c3f] text-[12px] font-bold">
                Profile
              </Link>
            </div>

            <div className="ml-2 p-[6px] rounded-[5px]">
              <Link
                to="/add-product"
                className="text-white bg-[#DB6038] px-[10px] py-2 sm:py-3 rounded-[5px] text-[12px] font-bold whitespace-nowrap"
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
}

export default Header;
