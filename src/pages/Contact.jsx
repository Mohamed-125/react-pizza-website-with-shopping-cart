import React from "react";
import Button from "../components/Button";
const Contact = () => {
  return (
    <div className="">
      <div className="flex gap-3 md:flex-col">
        <div className="h-screen md:h-[300px] bg-cover md:w-full w-[40%] bg-[url('https://raw.githubusercontent.com/machadop1407/react-website-tutorial/main/src/assets/pizzaLeft.jpg')]"></div>
        <div className="flex-1 h-full w-[50%] md:w-full px-7">
          <h1 className="text-5xl font-bold text-center xs:text-4xl py-11">
            Contact Me
          </h1>
          <div className="flex flex-col gap-5 ">
            <div className="flex flex-col gap-2">
              <label>Full Name</label>
              <input
                type="text"
                className="  border-b-[2px] border-slate-700 outline-none py-1 px-1"
              />{" "}
            </div>
            <div className="flex flex-col gap-2">
              {" "}
              <label>Email</label>{" "}
              <input
                type="email"
                className="  border-b-[2px] border-slate-700 outline-none py-1 px-1"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Message</label>
              <input
                type="text"
                className="  border-b-[2px] border-slate-700 outline-none py-1 px-1"
              />
            </div>
          </div>
          <Button text="Send" styles="mx-auto block mt-7" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
