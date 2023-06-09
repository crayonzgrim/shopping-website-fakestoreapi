import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context";
import { ProductContextType, ProductType } from "../../types";
import { Product } from "../organisms";

type HomeProps = {
  //
};

export const Home = (props: HomeProps) => {
  const { products } = useContext<ProductContextType>(ProductContext);

  const [filteredProduct, setFilteredProduct] = useState<ProductType[]>([]);

  useEffect(() => {
    const filtered = products.filter((product: ProductType) => {
      return (
        product.category === `men's clothing` ||
        product.category === `women's clothing`
      );
    });

    setFilteredProduct(filtered);
  }, [products]);

  return (
    <div className="mt-20">
      <section className="py-16 lg:px-14">
        <div className="container mx-auto">
          <div className="mx-auto grid max-w-sm grid-cols-1 gap-[30px] md:mx-0 md:max-w-none md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {filteredProduct.map((product: ProductType) => {
              return <Product key={product.id} product={product} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
