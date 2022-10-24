import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
const Navbar = ({
  logoText,
  logoImg,
  NavLinks,
  navbg = "white",
  navTextColor = "black",
}) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div style={{ backgroundColor: `${navbg}`, color: `${navTextColor}` }}>
      <div className="container flex-between relative h-[90px] shadow-md">
        {logoText ? (
          <Link className="text-3xl font-bold" to="/">
            <h1> {logoText}</h1>
          </Link>
        ) : logoImg ? (
          <Link to="/">
            <img src={logoImg} className="w-16" />
          </Link>
        ) : null}
        <div className="gap-6 flex text-lg items-center md:hidden">
          {NavLinks.map((link) => (
            <Link
              onClick={() => {
                setIsNavOpen(false);
              }}
              to={link.to}
              key={Math.random()}
            >
              {link.text}
            </Link>
          ))}
        </div>
        <div
          onClick={() => {
            setIsNavOpen((pre) => !pre);
          }}
          className={` md:flex flex-col gap-2 z-[1000] top-0 hidden cursor-pointer mobile-hamburger-div-closed ${
            isNavOpen ? "mobile-hamburger-div-opened" : null
          } `}
        >
          <span className="w-[35px] h-[4.1px] bg-white pointer-events-none"></span>
          <span className="w-[35px] h-[4.1px] bg-white pointer-events-none"></span>
          <span className="w-[35px] h-[4.1px] bg-white pointer-events-none"></span>
        </div>
        <div
          style={{
            translate: isNavOpen ? "0%" : "100%",
            transition: "0.3s all ease",
            zIndex: "100",
          }}
          className={`${
            isNavOpen ? "mobile-nav-div-opened" : "mobile-nav-div-closed"
          } h-full flex w-[70%] top-[0px] right-0 cart-div   bg-black text-white text-xl fixed `}
        >
          <div className="py-[25px] px-[50px] mt-[89px] flex flex-col break-words gap-7">
            {NavLinks.map((link) => (
              <Link
                onClick={() => {
                  setIsNavOpen(false);
                }}
                to={link.to}
                key={Math.random()}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
