'use client'
import React,{ createContext, useState, useContext } from 'react';
interface MobileNavbarContextProps {
    showNavbar: boolean;
    setShowNavbar: React.Dispatch<React.SetStateAction<boolean>>;
}

type MobileNavbarProviderProps = {
    children: React.ReactNode;
};

const MobileNavbarContext = createContext<MobileNavbarContextProps | null>(null);

export const MobileNavbarProvider = ({ children }: MobileNavbarProviderProps) => {
    const [showNavbar, setShowNavbar] = useState(false);

    return (
        <MobileNavbarContext.Provider value={{ showNavbar, setShowNavbar }}>
            {children}
        </MobileNavbarContext.Provider>
    );
};

export const useMobileNavbar = (): MobileNavbarContextProps => {
    const context = useContext(MobileNavbarContext);
    if (!context) {
        throw new Error("useMobileNavbar must be used within a MobileNavbarProvider");
    }
    return context;
};
