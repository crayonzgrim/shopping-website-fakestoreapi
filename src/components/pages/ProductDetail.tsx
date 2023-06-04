import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { CartContext } from "../../context";
import { ProductContext } from "../../context";
import { ProductType } from "../../types";

export const ProductDetail = () => {
  /** Property */
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { handleAddToCart } = useContext(CartContext);

  const [product, setProduct] = useState({} as ProductType);

  useEffect(() => {
    const findProduct = products.find((item: ProductType) => {
      if (id) {
        return item.id === parseInt(id);
      } else {
        return {};
      }
    });

    if (findProduct) {
      setProduct(findProduct);
    }
  }, [products]);

  /** Function */

  /** Render */
  if (!product) {
    return (
      <section className="flex h-screen items-center justify-center">
        Loading...
      </section>
    );
  } else {
    return (
      <section className="flex h-screen items-center pb-12 pt-32 lg:py-32">
        <div className="container mx-auto">
          <div className="flex flex-col items-center lg:flex-row">
            <div className="mb-8 flex flex-1 items-center justify-center lg:mb-0">
              <img
                className="max-w-[200px] lg:max-w-sm"
                src={product.image}
                alt={product.title}
              />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h1 className="mx-auto mb-2 max-w-[450px] text-[26px] font-medium">
                {product.title}
              </h1>
              <p className="mx-auto mb-6 max-w-[450px] text-xl font-medium text-red-500 ">
                $ {product.price}
              </p>
              <p className="mx-auto mb-8 max-w-[450px]">
                {product.description}
              </p>
              <p className="mx-auto max-w-[450px]">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-primary px-8 py-4 text-white"
                >
                  Add to cart
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
};
