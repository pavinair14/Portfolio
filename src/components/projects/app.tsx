"use client";

import { Fragment } from "react"
import { SectionTitle } from "../common/sectionTitle"
import { projectsData } from "./constants"
import { ProjectDetails } from "./ProjectDetails"
import { useScrollSectionToView } from "@/hooks/useScrollSectionToView"

export const Projects = () => {
    const { ref } = useScrollSectionToView("Projects", 0.5);

    return (
        <section ref={ref} id="projects" className="scroll-mt-28">
            <SectionTitle>Featured Projects</SectionTitle>
            <div>
                {projectsData.map((project, index) => (
                    <Fragment key={index}>
                        <ProjectDetails {...project} />
                    </Fragment>
                ))}
            </div>
        </section>
    )
}