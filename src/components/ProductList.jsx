"use client";

import { useContext } from "react";
import ProductCard from "./ProductCard";
import { AppContext } from "@/app/context/AppContext";

const ProductList = () => {
    const { products } = useContext(AppContext);
    const bestProducts = products.slice(0, 4);

    if (!products || products.length === 0) {
        return (
            <div className="flex justify-center items-center h-64">
                <span className="loading loading-spinner loading-lg text-orange-500"></span>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto">
            <div className="container mx-auto px-4 py-12">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 tracking-tight">
                        Our <span className="text-orange-500">Summer</span> Collection
                    </h2>
                    <div className="h-1 w-20 bg-yellow-400 mx-auto rounded-full"></div>
                </div>

                {/* Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {bestProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductList;