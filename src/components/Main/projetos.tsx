type Project = {
    title: string;
    image: string;
    github: string;
    description: string;
};

const projects: Project[] = [
    {
        title: "Tip Calculator",
        image: "./public/tipcalculator.gif",
        github: "https://github.com/Luan-Antony/Tip-Calculator",
        description: "Calculadora de gorjetas simples que divide contas em grupo."
    },
    {
        title: "Movieflix API",
        image: "./public/movieflix-api.png",
        github: "https://github.com/Luan-Antony/movieflix-api",
        description: "API para um aplicativo de streaming de filmes."
    },
    {
        title: "Fylo Dark Theme",
        image: "./public/fylodarktheme.gif",
        github: "https://github.com/Luan-Antony/Fylo-Dark-Theme",
        description: "Projeto de landing page desenvolvido como desafio do frontend mentor"
    },

    {
        title: "Tip Calculator",
        image: "./public/tipcalculator.gif",
        github: "https://github.com/Luan-Antony/Tip-Calculator",
        description: "Calculadora de gorjetas simples que divide contas em grupo."
    },

    {
        title: "Tip Calculator",
        image: "./public/tipcalculator.gif",
        github: "https://github.com/Luan-Antony/Tip-Calculator",
        description: "Calculadora de gorjetas simples que divide contas em grupo."
    },

    {
        title: "Tip Calculator",
        image: "./public/tipcalculator.gif",
        github: "https://github.com/Luan-Antony/Tip-Calculator",
        description: "Calculadora de gorjetas simples que divide contas em grupo."
    }
];

export const Projetos = () => {
    return (
        <section className="flex py-20 px-30 text-white">
            <div className="flex-1 py-15 bg-[#292929] rounded-2xl shadow-[0_0_5px_5px_#209740]">
                <h2 className="text-3xl font-bold mb-5 text-center uppercase">Projetos</h2>
                <ul className="grid gap-10 grid-cols-3 py-20 px-10 place-items-center">
                    {projects.map((project) => (
                        <li
                            key={project.title}
                            className="group flex flex-col items-center justify-center w-80 h-120 border border-[#209740] rounded-2xl shadow-lg hover:scale-105 transform transition-transform duration-300 ease-in-out"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-40 object-cover rounded-t-2xl"
                            />
                            <div className="flex flex-col items-center justify-between flex-1 p-4">
                                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                                <p className="text-sm mt-2 text-center">{project.description}</p>
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
