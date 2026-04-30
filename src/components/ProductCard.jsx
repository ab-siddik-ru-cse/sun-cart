"use client";
import Link from "next/link";

const ProductCard = ({ product }) => {
    const { id, name, price, rating, image, category } = product;
    return (
        <div className="card bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-orange-50/50 group">
            {/* Product Image */}
            <figure className="px-4 pt-4 relative overflow-hidden">
                <div className="absolute top-6 left-6 z-10">
                    <span className="badge bg-orange-500 text-white border-none text-xs font-bold px-3 py-2 uppercase">
                        {category}
                    </span>
                </div>
                <img
                    src={image}
                    alt={name}
                    className="rounded-xl h-48 w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
            </figure>

            {/* Product Details */}
            <div className="card-body p-5">
                <div className="flex justify-between items-start">
                    <h2 className="card-title text-gray-800 text-lg font-bold leading-tight">
                        {name}
                    </h2>
                    <div className="flex items-center gap-1 text-yellow-500 font-bold">
                        <span>★</span>
                        <span className="text-sm">{rating}</span>
                    </div>
                </div>

                <p className="text-2xl font-black text-orange-600 mt-2">
                    ${price}
                </p>

                <div className="card-actions mt-4">
                    <Link
                        href={`/product/details/${id}`}
                        className="btn btn-warning w-full rounded-full font-bold text-orange-900 border-none bg-yellow-400 hover:bg-yellow-500"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;