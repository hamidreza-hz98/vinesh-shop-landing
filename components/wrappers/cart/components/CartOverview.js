import ProductCartPrimaryCard from "@/components/common/cards/ProductCartPrimaryCard";
import { sampleCartItems } from "@/constants/product";
import React from "react";


const CartOverview = () => {
  return (
        <div className="w-full flex-col items-start justify-start gap-8">
          {sampleCartItems.products.map((product, index) => (
            <ProductCartPrimaryCard key={index} product={product} />
          ))}
        </div>
  );
};

export default CartOverview;
