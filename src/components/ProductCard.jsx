"use client";
import Link from "next/link";

const ProductCard = ({ product }) => {
    const { id, name, price, rating, image, category } = product;

    return (
        <div className="card bg-white transition-all duration-300 border border-gray-100 group rounded-sm overflow-hidden hover:-translate-y-1">

            {/* Image */}
            <figure className="relative overflow-hidden">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 z-10"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-20">
                    <span className="badge bg-orange-500 text-white border-none text-[10px] font-bold px-3 py-2 uppercase tracking-wider shadow-md">
                        {category}
                    </span>
                </div>

                <img
                    src={image}
                    alt={name}
                    className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </figure>

            {/* Content */}
            <div className="card-body p-5">

                {/* Title + Rating */}
                <div className="flex justify-between items-start gap-2">
                    <h2 className="text-gray-800 text-lg font-bold leading-snug group-hover:text-orange-600 transition">
                        {name}
                    </h2>

                    <div className="flex items-center gap-1 text-yellow-500 font-semibold bg-yellow-50 px-2 py-1 rounded-full text-xs">
                        ★ {rating}
                    </div>
                </div>

                {/* Price */}
                <p className="text-2xl font-extrabold text-orange-600 mt-1 tracking-tight">
                    ${price}
                </p>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-3"></div>

                {/* Button */}
                <div className="card-actions">
                    <Link
                        href={`/product/details/${id}`}
                        className="btn w-full rounded-full font-bold border-none 
                        bg-gradient-to-r from-yellow-400 to-orange-400 
                        hover:from-orange-500 hover:to-yellow-500 
                        text-white shadow-md hover:shadow-lg transition-all duration-300"
                    >
                        View Details →
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;