'use client'
import { createContext, useEffect, useState } from 'react';

// create context
export const AppContext = createContext();

// provider
export const AppProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const res = await fetch("/data/products.json");
                if (!res.ok) throw new Error("Data fetch failed");
                const data = await res.json();
                setProducts(data);
            } catch (err) {
                console.error("Error:", err);
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, []);


    console.log(products);


    return (
        <AppContext.Provider value={{ products, loading }}>
            {children}
        </AppContext.Provider>
    );
};