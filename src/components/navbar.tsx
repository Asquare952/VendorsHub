import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LogoImage from './common/logo'; // Update the path to your logo component
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  return (
    <nav className="center md:pt-8 pt-4 w-full text-white relative">
      <div className="between w-[90%]">
        <LogoImage />
        <div className="hidden md:flex items-center gap-6 text-[1rem]">
          <Link href="/vendorsListings">Categories</Link>
          <Link href="/service">Services</Link>
          <Link href="https://docs.google.com/forms/d/1diP-bM8dIQaQngA4dmq4E1laLlVLltujahS6osRTjpM/edit?usp=sharing_eil_se_dm&ts=64abcbfc"
            target="_blank"
          >
            <button className="bg-yellow text-black text-normal font-bold px-8 py-2 rounded cursor-pointer">
              Register
            </button>
          </Link>
        </div>
        <div className="md:hidden" onClick={handleOpenMenu}>
          <Image src="/svg/menu.svg" alt="menu" width={27} height={27} />
        </div>
      </div>
      {openMenu && (
        <div className="w-full bg-white text-black absolute top-0 right-0 left-0 center py-6 z-50">
          <div className="w-[90%] flex-col flex">
            <div className="flex items-end justify-end" onClick={handleCloseMenu}>
              <FaTimes className="text-[1.5rem]" />
            </div>
            <div className="md:hidden flex flex-col text-[1rem] mt-4">
              <Link href="/vendorsListings" onClick={handleCloseMenu}>
                Categories
              </Link>
              <Link href="/service" onClick={handleCloseMenu}>
                Services
              </Link>
              <Link href="https://docs.google.com/forms/d/1diP-bM8dIQaQngA4dmq4E1laLlVLltujahS6osRTjpM/edit?usp=sharing_eil_se_dm&ts=64abcbfc"
                target="_blank" 
                onClick={handleCloseMenu}
              >
                <button className="bg-yellow text-black text-normal font-bold px-8 py-2 rounded cursor-pointer mt-4">
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
