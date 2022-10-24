import React, { useState, useEffect } from "react";
import Pizza from "../components/Pizza";
import MenuList from "../data/data";

const Menu = ({}) => {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("cart-products"))?.length > 0
      ? JSON.parse(localStorage.getItem("cart-products"))
      : []
  );
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    if (isRendered) {
      localStorage.setItem("cart-products", JSON.stringify(products));
    } else {
      setIsRendered(true);
    }
  }, [products]);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const addToCartHandler = (name, price, img, id) => {
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
  };

  const removeFromCartHandler = (id) => {
    setProducts((pre) => pre.filter((product) => product.id !== Number(id)));
  };

  const decreaseQuantityHandler = (e, name, price, img, id) => {
    if (products.find((p) => p.id === Number(id))?.quantity === 1) {
      removeFromCartHandler(id);
    } else {
      setProducts((pre) => {
        return pre.map((item) => {
          if (item.name === name && item.quantity > 1) {
            return {
              name,
              price,
              img,
              id,
              quantity: item.quantity - 1,
            };
          } else {
            return item;
          }
        });
      });
    }
  };

  return (
    <div className="container relative  xs:!px-[10px]">
      <div
        style={{
          zIndex: "10000",
          animation: `${
            isCartOpen ? "nav-open-animation 0.2s" : "nav-close-animation 0.2s"
          }`,
        }}
        className={`${
          isCartOpen ? "mobile-nav-div-opened  " : "mobile-nav-div-closed"
        } h-full flex  max-w-[750px] w-[70%] top-[0px] right-0 translate-x-[100%]  bg-black text-white text-xl fixed `}
      >
        {" "}
        <button
          onClick={() => {
            setIsCartOpen(false);
          }}
          className="text-xl bg-white h-fit absolute top-[40px] z-[10000] left-4 text-black px-2 py-2"
        >
          Close Cart
        </button>
        <div className="py-[25px] overflow-auto    w-full px-[10px] mt-[89px] flex flex-col break-words gap-7">
          {products.length > 0 ? (
            products.map((product) => {
              return (
                <div className="w-full items-center flex gap-6 text-white sm:flex-col ">
                  {window.innerWidth > 639 ? (
                    <>
                      <div style={{ direction: "ltr", flex: "1" }} className="">
                        <h3 className="text-3xl mb-4 xs:text-2xl">
                          {product.name}
                        </h3>
                        <p className="text-xl mb-4 sm:mb-0">${product.price}</p>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() =>
                              addToCartHandler(
                                product.name,
                                product.price,
                                product.img,
                                product.id
                              )
                            }
                          >
                            +
                          </button>
                          <p>{product.quantity}</p>
                          <button
                            onClick={(e) =>
                              decreaseQuantityHandler(
                                e,
                                product.name,
                                product.price,
                                product.img,
                                product.id
                              )
                            }
                          >
                            -
                          </button>
                        </div>
                        <button
                          className=" bg-white text-black py-1 px-4 mt-2"
                          onClick={() => removeFromCartHandler(product.id)}
                        >
                          Delete
                        </button>
                      </div>
                      <img
                        className="w-[200px] h-[140px] object-cover object-center sm:w-[300px]"
                        src={product.img}
                      ></img>{" "}
                    </>
                  ) : (
                    <div style={{ direction: "ltr", flex: "1" }} className="">
                      <h3 className="text-3xl mb-4 text-center xs:text-2xl">
                        {product.name}
                      </h3>
                      <img
                        className="w-[200px] h-[140px] object-cover object-center sm:w-[300px]"
                        src={product.img}
                      ></img>{" "}
                      <p className="text-xl mb-4 sm:mb-0 text-center mt-2">
                        ${product.price}
                      </p>
                      <div className="flex items-center gap-3 w-fit mx-auto mt-2">
                        <button
                          onClick={() =>
                            addToCartHandler(
                              product.name,
                              product.price,
                              product.img,
                              product.id
                            )
                          }
                        >
                          +
                        </button>
                        <p>{product.quantity}</p>
                        <button
                          onClick={(e) =>
                            decreaseQuantityHandler(
                              e,
                              product.name,
                              product.price,
                              product.img,
                              product.id
                            )
                          }
                        >
                          -
                        </button>
                      </div>
                      <button
                        className="mx-auto block bg-white text-black py-1 px-4 mt-2"
                        onClick={() => removeFromCartHandler(product.id)}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <p>there's no products</p>
          )}

          <div className="mt-19 flex justify-around xs:flex-col gap-2    bg-black w-full h-[50px]">
            <p>
              Total Products :
              {products.reduce(
                (previousValue, currentValue) =>
                  previousValue + currentValue.quantity,
                0
              )}
            </p>
            <p>
              Total Price : $
              {products
                .reduce(
                  (previousValue, currentValue) =>
                    previousValue + currentValue.price * currentValue.quantity,
                  0
                )
                .toFixed(2)}{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 justify-between items-center">
        <h1 className="text-5xl font-bold sm:text-3xl my-6">Our Menu</h1>
        <div
          data-cart-products={products.reduce(
            (previousValue, currentValue) =>
              previousValue + currentValue.quantity,
            0
          )}
          onClick={() => setIsCartOpen((pre) => !pre)}
          className="relative cursor-pointer cart-icon"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
            className="w-[50px]"
          />
        </div>
      </div>
      <div>
        {MenuList.map((pizza) => {
          return (
            <Pizza
              id={pizza.id}
              products={products}
              setProducts={setProducts}
              name={pizza.name}
              key={pizza.name}
              img={pizza.image}
              price={pizza.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
