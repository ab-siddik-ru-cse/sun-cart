'use client'
import { createContext, useEffect, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            try {
                setCart(JSON.parse(storedCart));
            } catch (error) {
                console.error("Error parsing cart from localStorage", error);
            }
        }
    }, []);

    useEffect(() => {
        if (cart.length > 0 || localStorage.getItem("cart")) {
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart]);

    useEffect(() => {
        const loadData = async () => {
            try {
                const res = await fetch("/data/products.json", { cache: "no-store" });
                const data = await res.json();
                setProducts(data);
            } catch (e) {
                console.error("Failed to fetch products:", e);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    return (
        <AppContext.Provider value={{ products, loading, cart, setCart }}>
            {children}
        </AppContext.Provider>
    );
};