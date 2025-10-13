'use client';

import { motion } from "framer-motion";
import { headerLinks } from "./constants";
import Link from "next/link";
import { useActiveSection } from "@/context/activeSectionContext";

export const Header = () => {
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSection();

    return (
        <header className="z-[999] relative">
            <motion.div
                className="fixed top-0 left-1/2 -translate-x-1/2 bg-white w-full h-[5rem] rounded-none border border-white border-opacity-40 bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[4rem] sm:w-[53rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
            </motion.div>
            <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
                <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[1rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
                    {headerLinks.map((link) => (
                        <motion.li
                            className="h-3/4 flex items-center justify-center relative"
                            key={link.hash}
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}>
                            <Link href={link.hash} className={`flex w-full font-medium items-center justify-center px-5 py-4 transition dark:text-teal-500 ${link.name === activeSection ? "text-white hover:text-gray-100 dark:text-gray-200" : "hover:text-gray-950 dark:hover:text-gray-300"}`}
                                onClick={
                                    () => {
                                        setActiveSection(link.name);
                                        setTimeOfLastClick(Date.now());
                                    }
                                }>{link.name}</Link>
                            {link.name === activeSection && (
                                <motion.span
                                    className="bg-teal-500 rounded-full hover:scale-110 absolute inset-0 -z-10 dark:bg-teal-500/20"
                                    layoutId="activeSection"
                                    transition={{
                                        type: "spring",
                                        stiffness: 380,
                                        damping: 30,
                                    }}
                                ></motion.span>
                            )}
                        </motion.li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}