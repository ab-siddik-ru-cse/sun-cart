'use client'
import { createContext, useEffect, useState } from 'react';

// create context
export const AppContext = createContext();

// provider
export const AppProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const [reload, setReload] = useState(false);

    useEffect(() => {
        const loadData = async () => {
            try {
                const res = await fetch("/data/products.json", { cache: "no-store" });
                const data = await res.json();
                setProducts(data);
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, [reload]);
    return (
        <AppContext.Provider value={{ products, loading }}>
            {children}
        </AppContext.Provider>
    );
};