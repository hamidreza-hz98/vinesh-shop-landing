"use client"

import React, { useEffect, useMemo } from "react";
import { X } from "lucide-react"; // delete icon
import Image from "next/image";
import { products } from "@/constants/product";
import { useRouter, useSearchParams } from "next/navigation";

const CompareProductsPageWrapper = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

const ids = useMemo(() => {
    try {
      const raw = searchParams.get("ids");

      console.log(JSON.parse(raw));

      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }, [searchParams]);
  

  const productsToCompare = ids
    .map((slug) => products.find((p) => p.slug.en === slug))
    .filter(Boolean);


  const handleRemove = (slug) => {
    const updated = ids.filter((id) => id !== slug);
    router.push(`?ids=${JSON.stringify(updated)}`);
  };

  const handleAddProduct = () => {
    router.push("/products")
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Compare Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {productsToCompare.map((product) => (
          <div
            key={product.slug.en}
            className="relative border rounded-2xl shadow p-4 bg-white"
          >
            <button
              onClick={() => handleRemove(product.slug.en)}
              className="absolute top-2 right-2 p-1 bg-gray-200 rounded-full hover:bg-red-500 hover:text-white transition"
            >
              <X size={16} />
            </button>

            <div className="flex justify-center">
              <Image
                src={product.media[0].src}
                alt={product.name.en}
                width={120}
                height={120}
                className="object-contain"
              />
            </div>

            <h2 className="mt-2 font-semibold text-center">{product.name.en}</h2>
            <p className="text-sm text-gray-500 text-center">
              {product.excerpt.en}
            </p>
            <p className="mt-2 text-center font-bold">{product.price.en}</p>
            <p className="text-center text-yellow-500">
              ⭐ {product.rate}/5
            </p>
          </div>
        ))}

        {productsToCompare.length < 4 && (
          <button
            onClick={handleAddProduct}
            className="border-2 border-dashed rounded-2xl flex items-center justify-center text-gray-500 hover:text-black p-4"
          >
            + Add Product
          </button>
        )}
      </div>
    </div>
  );
};

export default CompareProductsPageWrapper;
