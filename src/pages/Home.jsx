import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className=" h-[calc(100vh-90px)] bg-cover bg-[url('https://raw.githubusercontent.com/machadop1407/react-website-tutorial/main/src/assets/pizza.jpeg')]">
      <div className="container flex flex-col h-full justify-center gap-4">
        <h1
          style={{ lineHeight: "52px" }}
          className="sm:text-[55px] text-[80px]"
        >
          Pizza Store
        </h1>
        <p className="text-2xl relative top-[-3px] mt-[10px] xs:top-[-7px] ">
          Pizza To Fit Any Taste
        </p>
        <Button
          text="Order"
          onClick={() => {
            navigate("/menu");
          }}
          styles="relative top-[-10px] mt-[10px]"
        />
      </div>
    </div>
  );
};

export default Home;
