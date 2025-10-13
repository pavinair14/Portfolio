"use client";

import { useScrollSectionToView } from "@/hooks/useScrollSectionToView";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { useActiveSection } from "@/context/activeSectionContext";

export const Intro = () => {
    const { ref } = useScrollSectionToView("Home");
    const { setActiveSection, setTimeOfLastClick } = useActiveSection();

    return (
        <section id="home" ref={ref} className="mb-28 max-w-[80rem] text-center sm:mb-0 scroll-mt-[100rem]">
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.2,
                        }}
                    >
                        <Image
                            src={"/images/intro.jpg"}
                            alt="Pavithra portrait"
                            width="250"
                            height="250"
                            quality="95"
                            priority={true}
                            className="h-48 w-48 rounded-full object-cover border-[0.25rem] border-white shadow-xl"
                        />
                    </motion.div>

                </div>
            </div>

            <motion.h1
                className="mb-10 mt-4 px-4 text-5xl font-medium !leading-[1.5] sm:text-5xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}

            >
                <span className="font-medium text-3xl">Hello, I&apos;m </span>
                <p className="font-bold">Pavithra Muthumanickam</p>
                <span className="font-medium text-2xl">A Creative </span>
                <p className="font-bold italic bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600">Lead Frontend Developer</p>
                <p className="text-2xl mt-4">I build high-performance, scalable web applications and lead teams to create clean, maintainable, and impactful user interfaces.
                    With 8+ years of experience in frontend architecture and enterprise development, I&apos;m passionate about transforming ideas into engaging digital experiences.</p>
            </motion.h1>

            <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-8 px-4 text-lg font-medium"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                }}
            >
                <Link
                    href="#contact"
                    className="group bg-transparent border-3 rounded-full border-teal-600 text-teal-600 dark:text-white px-7 py-2.5 flex items-center gap-2 outline-none hover:scale-110 transition"
                    onClick={() => {
                        setActiveSection("Contact");
                        setTimeOfLastClick(Date.now());
                    }}
                >
                    Contact me here{" "}
                    <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                </Link>

                <a
                    className="group bg-white px-7 py-3 bg-gradient-to-r text-white from-teal-500 to-blue-600 flex items-center gap-2 rounded-full outline-none hover:scale-110 transition cursor-pointer borderBlack"
                    href={"/docs/resume.pdf"}
                    download
                >
                    Download CV{" "}
                    <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
                </a>

                <a
                    className="bg-transparent border-3 rounded-full border-teal-600 p-4 text-gray-950 hover:scale-[1.15] flex items-center gap-2 hover:scale-[1.15] transition cursor-pointer dark:bg-transparent dark:text-white"
                    href="https://www.linkedin.com/in/pavithra-leadfrontend/"
                    target="_blank"
                >
                    <BsLinkedin />
                </a>

                <a
                    className="bg-transparent border-3 rounded-full border-teal-600 p-4 text-gray-950 hover:scale-[1.15] flex items-center gap-2 hover:scale-[1.15] transition cursor-pointer dark:bg-transparent dark:text-white"
                    href="https://github.com/pavinair14"
                    target="_blank"
                >
                    <FaGithubSquare />
                </a>
            </motion.div>
        </section>
    );
}