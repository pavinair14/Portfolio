"use client";

import { useScrollSectionToView } from "@/hooks/useScrollSectionToView";
import { SectionTitle } from "../common/sectionTitle";
import { skillsData } from "./constants";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};


export const Skills = () => {
    const { ref } = useScrollSectionToView("Skills");

    return (
        <section id="skills" ref={ref} className="max-w-[60rem] scroll-mt-28 text-center mb-28 sm:mb-0">
            <SectionTitle>My skills</SectionTitle>
            <ul className="flex flex-wrap justify-center gap-2 text-xl text-gray-800">
                {skillsData.map((skill, index) => (
                    <motion.li
                        className="bg-white flex items-center borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
                        key={index}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true
                        }}
                        custom={index}
                    >
                        <Image src={skill.icon} alt="tech-icons" width={50} height={50} />
                        <span className="ml-2">{skill.name}</span>
                    </motion.li>
                ))}
            </ul>
        </section>
    )
}