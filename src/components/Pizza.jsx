import React from "react";
import Button from "./Button";

const Pizza = ({ name, img, price, products, setProducts, id }) => {
  const addToCartHandler = () => {
    if (products.find((product) => product.name === name)) {
      setProducts((pre) => {
        return [
          ...pre.map((item) => {
            if (item.name === name) {
              return { name, price, img, id, quantity: item.quantity + 1 };
            } else {
              return item;
            }
          }),
        ];
      });
    } else {
      setProducts([
        ...products,
        {
          name,
          img,
          id,
          quantity: 1,
          price,
        },
      ]);
    }
  };

  const removeFromCartHandler = (id) => {
    setProducts((pre) => pre.filter((product) => product.id !== Number(id)));
  };

  const decreaseQuantityHandler = (e) => {
    const productId = e.target.parentNode.parentNode.parentNode.id;

    console.log(products.find((p) => p.id === Number(productId)));

    if (products.find((p) => p.id === Number(productId))?.quantity === 1) {
      removeFromCartHandler(productId);
    } else {
      setProducts((pre) => {
        return pre.map((item) => {
          if (item.name === name && item.quantity > 1) {
            return { name, price, img, id, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      });
    }
  };

  return (
    <div
      id={id}
      className="flex gap-9 h-[280px] sm:h-fit sm:flex-col sm:gap-4 border-[2px] bg-white border-gray-700 my-7 items-center"
    >
      <div
        className="max-w-[235px] sm:w-full sm:max-w-none min-h-[240px] h-full flex-1 bg-center bg-cover"
        style={{
          backgroundImage: `url(${img})`,
        }}
      />
      <div className=" pb-4 px-3">
        <h3 className="text-3xl mb-4 xs:text-2xl">{name}</h3>
        <p className="text-xl mb-4">${price}</p>
        {!products.find((product) => product.name === name) ? (
          <Button text="Add To Cart" onClick={addToCartHandler} />
        ) : (
          <div className="flex items-center gap-3">
            <button onClick={addToCartHandler}>+</button>
            <p>{products.find((product) => product.name === name).quantity}</p>
            <button onClick={decreaseQuantityHandler}>-</button>
          </div>
        )}{" "}
      </div>
    </div>
  );
};

export default Pizza;
