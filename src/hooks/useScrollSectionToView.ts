"use client";

import { useActiveSection } from "@/context/activeSectionContext";
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

export const useScrollSectionToView = (sectionName: string, threshold?: number) => {
    const { ref, inView } = useInView({
        threshold: threshold ?? 0.75,
    });

    const { setActiveSection } = useActiveSection();

    useEffect(() => {
        if (inView) {
            setActiveSection(sectionName);
        }
    }, [inView, ref, sectionName, setActiveSection]);

    return { ref }
}