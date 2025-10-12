"use client";

import { createContext, useContext, useState } from "react";

type ActiveSectionContextType = {
    activeSection: string;
    setActiveSection: (section: string) => void;
};

export const useActiveSection = () => useContext(ActiveSectionContext) as ActiveSectionContextType;

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export const ActiveSectionProvider = ({ children }: { children: React.ReactNode }) => {
    const [activeSection, setActiveSection] = useState<string>("Home");


    return <ActiveSectionContext.Provider value={{
        activeSection,
        setActiveSection
    }}>{children}</ActiveSectionContext.Provider>;
}