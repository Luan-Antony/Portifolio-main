import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDocker } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiJest, SiExpress, SiPostgresql, SiPrisma } from "react-icons/si";
import type { JSX } from "react/jsx-dev-runtime";

type Skill = {
    name: string;
    icon: JSX.Element;
};

const groupHover = "group-hover:text-white";

const skills: Skill[] = [
    { name: "HTML", icon: <FaHtml5 size={50} className={`text-[#E34F26] ${groupHover}`} /> },
    { name: "CSS", icon: <FaCss3Alt size={50} className={`text-[#1572B6] ${groupHover}`} /> },
    { name: "JavaScript", icon: <FaJs size={50} className={`text-[#F7DF1E] ${groupHover}`} /> },
    { name: "TypeScript", icon: <SiTypescript size={50} className={`text-[#3178C6] ${groupHover}`} /> },
    { name: "React", icon: <FaReact size={50} className={`text-[#61DAFB] ${groupHover}`} /> },
    { name: "Nextjs", icon: <SiNextdotjs size={50} className={`text-white ${groupHover}`} /> },
    { name: "Tailwind", icon: <SiTailwindcss size={50} className={`text-[#38B2AC] ${groupHover}`} /> },
    { name: "Jest", icon: <SiJest size={50} className={`text-[#C21325] ${groupHover}`} /> },
    { name: "Git", icon: <FaGitAlt size={50} className={`text-[#F05032] ${groupHover}`} /> },
    { name: "GitHub", icon: <FaGithub size={50} className={`text-white ${groupHover}`} /> },
    { name: "Nodejs", icon: <FaNodeJs size={50} className={`text-[#339933] ${groupHover}`} /> },
    { name: "Express", icon: <SiExpress size={50} className={`text-white ${groupHover}`} /> },
    { name: "Postgresql", icon: <SiPostgresql size={50} className={`text-[#336791] ${groupHover}`} /> },
    { name: "Prisma", icon: <SiPrisma size={50} className={`text-[#0C344B] ${groupHover}`} /> },
    { name: "Docker", icon: <FaDocker size={50} className={`text-[#2496ED] ${groupHover}`} /> },
];

export const Habilidades = () => {
    return (
        <section id="habilidades" className="flex py-10 px-4 sm:px-8 md:px-16 lg:px-30 text-white">
            <div className="flex-1 py-20 bg-[#292929] shadow-[0_0_5px_5px_#209740]">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center uppercase">
                    Habilidades
                </h2>
                <ul
                    className="
                        grid gap-6 sm:gap-8 md:gap-10 
                        grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
                        py-10 sm:py-14 px-4 sm:px-6 md:px-10 lg:py-20
                        place-items-center
                    "
                >
                    {skills.map((skill) => (
                        <li
                            key={skill.name}
                            className="
                                group flex flex-col items-center justify-center
                                w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36
                                border border-[#209740] shadow-lg
                                hover:scale-105 transform transition-transform duration-300 ease-in-out
                                hover:bg-[#209740] cursor-default
                            "
                        >
                            {skill.icon}
                            <span className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg">
                                {skill.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

