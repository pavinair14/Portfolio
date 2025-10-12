"use client";

import { useActiveSection } from "@/context/activeSectionContext";
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

export const useScrollSectionToView = (sectionName: string, threshold?: number) => {
    const { ref, inView } = useInView({
        threshold: threshold ?? 0.75,
    });
    console.log("inView", inView, sectionName);
    const { setActiveSection } = useActiveSection();

    useEffect(() => {
        if (inView) {
            setActiveSection(sectionName);
        }
    }, [inView, ref])

    return { ref }
}