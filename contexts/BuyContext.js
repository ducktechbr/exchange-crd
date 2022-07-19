import { createContext, useState, useEffect } from 'react';

export const BuyContext = createContext({});

export function BuyProvider({ children }) {
    const [buyValue, setBuyValue] = useState(100);

    useEffect(() => {}, []);

    return (
        <BuyContext.Provider value={{ buyValue, setBuyValue }}>
            {children}
        </BuyContext.Provider>
    );
}
