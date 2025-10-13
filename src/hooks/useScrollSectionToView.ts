"use client";

import { useActiveSection } from "@/context/activeSectionContext";
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

export const useScrollSectionToView = (sectionName: string, threshold?: number) => {
    const { ref, inView } = useInView({
        threshold: threshold ?? 0.75,
    });

    const { setActiveSection, timeOfLastClick } = useActiveSection();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection(sectionName);
        }
    }, [inView, timeOfLastClick, sectionName, setActiveSection]);

    return { ref }
}