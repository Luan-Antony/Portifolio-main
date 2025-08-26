import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDocker } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiJest, SiExpress, SiPostgresql, SiPrisma } from "react-icons/si";

type Skill = {
    name: string;
    icon: React.ReactNode;
};

const skills: Skill[] = [
    { name: "HTML", icon: <FaHtml5 size={40} /> },
    { name: "CSS", icon: <FaCss3Alt size={40} /> },
    { name: "JavaScript", icon: <FaJs size={40} /> },
    { name: "TypeScript", icon: <SiTypescript size={40} /> },
    { name: "React", icon: <FaReact size={40} /> },
    { name: "Nextjs", icon: <SiNextdotjs size={40} /> },
    { name: "Tailwind", icon: <SiTailwindcss size={40} /> },
    { name: "Jest", icon: <SiJest size={40} /> },
    { name: "Git", icon: <FaGitAlt size={40} /> },
    { name: "GitHub", icon: <FaGithub size={40} /> },
    { name: "Nodejs", icon: <FaNodeJs size={40} /> },
    { name: "Express", icon: <SiExpress size={40} /> },
    { name: "Postgresql", icon: <SiPostgresql size={40} /> },
    { name: "Prisma", icon: <SiPrisma size={40} /> },
    { name: "Docker", icon: <FaDocker size={40} /> },
];

export const Habilidades = () => {
    return (
        <section className="flex py-20 px-30 text-white">
            <div className="flex-1 p-4 bg-gray-800">
                <h2 className="text-3xl font-bold mb-5 text-center">Habilidades</h2>
                <ul className="grid gap-10 grid-cols-5 py-20 place-items-center">
                    {skills.map((skill) => (
                        <li
                            key={skill.name}
                            className="flex flex-col items-center justify-center p-4 w-52 h-52 bg-amber-950 rounded-2xl shadow-lg"
                        >
                            {skill.icon}
                            <span className="mt-3 text-lg">{skill.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};
