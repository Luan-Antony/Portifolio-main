type Project = {
    title: string;
    image: string;
    github: string;
    description: string;
};

const projects: Project[] = [
    {
        title: "Tip Calculator",
        image: "/tipcalculator.gif",
        github: "https://github.com/Luan-Antony/Tip-Calculator",
        description: "Calculadora de gorjetas simples que divide contas em grupo."
    },
    {
        title: "Movieflix API",
        image: "/movieflix-api.png",
        github: "https://github.com/Luan-Antony/movieflix-api",
        description: "API para um aplicativo de streaming de filmes."
    },
    {
        title: "Fylo Dark Theme",
        image: "/fylodarktheme.gif",
        github: "https://github.com/Luan-Antony/Fylo-Dark-Theme",
        description: "Projeto de landing page desenvolvido como desafio do frontend mentor"
    },
];

export const Projetos = () => {
    return (
        <section id="projetos" className="flex py-12 px-6 sm:px-10 md:px-16 lg:px-30 lg:py-40 text-white">
            <div className="flex-1 py-20 bg-[#292929] shadow-[0_0_5px_5px_#209740]">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center uppercase">Projetos</h2>
                <ul
                    className="
                        grid gap-8 sm:gap-10 
                        grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                        py-10 px-4 sm:px-8 md:px-10 lg:py-20
                        place-items-center
                    "
                >
                    {projects.map((project) => (
                        <li
                            key={project.title}
                            className="
                                group flex flex-col items-center justify-start
                                w-full max-w-sm h-full
                                border border-[#209740] shadow-lg rounded-xl
                                hover:scale-105 transform transition-transform duration-300 ease-in-out
                                bg-[#1e1e1e]
                            "
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover rounded-t-xl"
                            />
                            <div className="flex flex-col flex-1 p-4 text-center">
                                <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-sm sm:text-base mb-4">{project.description}</p>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-auto bg-[#209740] hover:bg-green-600 px-4 py-2 rounded-lg transition-colors duration-300"
                                >
                                    Ver no GitHub
                                </a>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

