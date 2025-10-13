"use client";

import { useScrollSectionToView } from "@/hooks/useScrollSectionToView";
import { SectionTitle } from "../common/sectionTitle";
import Image from "next/image";

export const About = () => {
    const { ref } = useScrollSectionToView("About");
    return (
        <section ref={ref} id="about" className="max-w-[80rem] text-xl text-center leading-8 scroll-mt-28">
            <SectionTitle>About me</SectionTitle>
            <p className="mb-3">
                I am a <span className="font-medium">Frontend Engineer</span> with over <span className="italic">eight years of experience</span> developing and leading <span className="font-medium">large-scale web applications</span> using <span className="font-medium">React</span>, <span className="font-medium">TypeScript</span>, and <span className="font-medium">Next.js (Basics)</span>.
                My focus is on building <span className="font-medium">scalable frontend architectures</span>, <span className="font-medium">reusable UI systems</span>, and <span className="font-medium">high-performance interfaces</span> that enhance both <span className="italic">usability</span> and <span className="italic">maintainability</span>.
            </p>

            <p className="mb-3">
                Beyond coding, I’m passionate about <span className="font-medium">creativity and design</span>. I love crafting <span className="font-medium">resumes</span>, <span className="font-medium">logos</span>, and <span className="font-medium">invitations</span> using <span className="italic">Canva</span> — a hobby that sharpens my <span className="italic">visual sense</span> and <span className="italic">attention to detail</span>.
                I also enjoy creating <span className="font-medium">cinematic videos</span> using <span className="italic">Sony Vegas</span> and <span className="italic">DaVinci Resolve</span>, capturing everyday moments as <span className="italic">meaningful stories</span> for my friends and family.
                These creative pursuits keep me inspired to build interfaces that are not only <span className="font-medium">functional</span> but also <span className="italic">emotionally engaging</span>.

            </p>
            <p className="mb-3">
                Whether I’m <span className="font-medium">developing user interfaces</span>, <span className="font-medium">mentoring teams</span>, or <span className="italic">exploring new design ideas</span>, I aim to deliver <span className="font-medium">digital experiences</span> that combine <span className="italic">performance</span>, <span className="italic">clarity</span>, and <span className="font-medium">visual harmony</span>.
            </p>

            <p className="flex justify-center items-center mt-8">
                <Image src={"/images/pushpin.png"} alt={"pushpin"} width={25} height={25} />
                <span><span className="italic px-2">Based in India</span> | <span className="px-2 font-medium"> Open to senior and lead-level frontend roles across the UAE.</span></span>
            </p>
        </section>
    )
}