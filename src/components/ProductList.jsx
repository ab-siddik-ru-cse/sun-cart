"use client";

import { useContext } from "react";
import ProductCard from "./ProductCard";
import TopProducts from "./TopProducts";
import { AppContext } from "@/app/context/AppContext";

const ProductList = () => {
    const { products, loading } = useContext(AppContext);

    const topProducts = products.slice(0, 4);

    const restProducts = products.slice(4);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <h1 className="text-lg font-medium animate-pulse">Loading...</h1>
            </div>
        );
    }

    if (!products || products.length === 0) {
        return (
            <div className="flex justify-center items-center h-64">
                <h1 className="text-lg font-medium text-gray-500">
                    No Product Found...!
                </h1>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4">

            {/* 🔥 Top Products Section */}
            <div className="py-16">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        🔥 Top <span className="text-orange-500">Picks</span>
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Handpicked products just for you
                    </p>
                    <div className="h-1 w-16 bg-orange-500 mx-auto mt-3 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {topProducts.map((topProduct) => (
                        <TopProducts key={topProduct.id} topProduct={topProduct} />
                    ))}
                </div>
            </div>

            {/* 🛍️ All Products Section */}
            <div className="pb-16">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        <span className="text-orange-500">🛍️ All </span>Products
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Explore our full collection
                    </p>
                    <div className="h-1 w-16 bg-yellow-400 mx-auto mt-3 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {restProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>

        </div>
    );
};

export default ProductList;