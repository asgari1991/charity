import React, { Fragment, useState } from "react";
import { header } from "../../landing/constants";
import { Link } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import LoginModal from "./LoginModal";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginModalShow, setLoginModalShow] = useState(false);

  return (
    <section className="md:px-[60px] px-[20px] md:py-[21px] py-[11px]">
      <LoginModal
        loginModalShow={loginModalShow}
        setLoginModalShow={setLoginModalShow}
      />
      <div className="flex-row-reverse md:flex-row flex items-center justify-between">
        <div className="flex items-center gap-[14px] text-[#004743]">
          <img
            src="/icons/MeubelHouseLogos.png"
            alt="آرم"
            width={50}
            height={32}
            className="hidden md:flex"
          />
          <h1 className="font-sansBold text-center text-[15px] w-[167px] md:w-[260px] sm:text-[20px]">
            موسسه خیریه تکفل ایتام و نیازمندان اراک
          </h1>
        </div>
        <ul className="w-full gap-8 font-sans text-[#323232] size-4 justify-center hidden xl:flex">
          {header.map((item, index) => (
            <Link key={item.title} to={item.link}>
              <li>{item.title}</li>
            </Link>
          ))}
        </ul>
        <button onClick={() => setLoginModalShow(true)} className="text-[#323232] font-sansBold min-w-max mr-20 hidden xl:flex">
          ورود/عضویت
        </button>
        <Menu>
          <MenuButton className="xl:hidden text-[#AC7B05] text-3xl">
            {/* Simple menu icon without react-icons dependency */}
            <span className="text-3xl leading-none">☰</span>
          </MenuButton>
          <Transition>
            <MenuItems
              className="bg-white border border-yellow-600 p-4 rounded-md z-50 w-56 gap-8 font-sans 
              text-[#323232] origin-top-right xl:origin-top-left justify-center flex flex-col  transition duration-100 ease-out 
              [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 absolute"
              dir="rtl"
              anchor="bottom end"
            >
              {/* <div className=" bg-white border border-yellow-600 p-4 rounded-md z-50  w-56" dir="rtl"> */}
              {/* <ul className="w-full gap-8 font-sans text-[#323232]  justify-center flex flex-col"> */}
              {header.map((item, index) => (
                <MenuItem as={Fragment}>
                  <Link
                    className=""
                    key={item.title}
                    to={item.link}
                    onClick={() => setMenuOpen(false)}
                  >
                    <p>{item.title}</p>
                  </Link>
                </MenuItem>
              ))}
              {/* </ul> */}
              {/* </div> */}
            </MenuItems>
          </Transition>
        </Menu>
      </div>
      <div className="w-[98%] h-[2px] md:hidden bg-gradient-to-r from-[#FFFFFF] via-[#004743] to-[#FFFFFF] mt-[21px] mb-[10px]"></div>
    </section>
  );
};

export default Header;
