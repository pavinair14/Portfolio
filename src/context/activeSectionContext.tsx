"use client";

import { createContext, useContext, useState } from "react";

type ActiveSectionContextType = {
    activeSection: string;
    setActiveSection: (section: string) => void;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const useActiveSection = () => useContext(ActiveSectionContext) as ActiveSectionContextType;

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export const ActiveSectionProvider = ({ children }: { children: React.ReactNode }) => {
    const [activeSection, setActiveSection] = useState<string>("Home");
    const [timeOfLastClick, setTimeOfLastClick] = useState(0);


    return <ActiveSectionContext.Provider value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
    }}>{children}</ActiveSectionContext.Provider>;
}