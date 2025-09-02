const spanClass = "text-[#209740] font-semibold";
export const Sobre = () => {
    return (
        <section className="flex flex-col md:flex-row items-center md:items-start gap-8 py-12 px-6 sm:px-10 md:px-16 lg:px-24 lg:py-40 text-white">

            <div className="flex-1 flex justify-center p-4 self-center">
                <img
                    src="/dev.png"
                    alt="Foto de Luan Antony"
                    className="shadow-lg w-[80%] h-[80%] rounded-full border-[#209740]"
                />
            </div>

            <div className="flex-1 p-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 leading-snug">
                    Luan Antony, Desenvolvedor Web Full Stack
                </h1>
                <p className="text-base sm:text-lg leading-relaxed">
                    Sou programador web fullstack e transformo ideias em aplicações. Trabalho com
                    <span className={spanClass}> HTML, CSS e JavaScript/TypeScript</span>,
                    criando código limpo e confiável que facilita manutenção e evolução dos projetos.
                    No front-end, uso React para desenvolver interfaces rápidas, responsivas e com foco total na experiência do usuário.
                </p>

                <p className="text-base sm:text-lg leading-relaxed mt-4">
                    No back-end, construo APIs eficientes com
                    <span className={spanClass}> Node.js e Express</span>, integradas a bancos de dados via
                    <span className={spanClass}> Prisma ORM</span>, garantindo estabilidade e performance.
                    Minha experiência com <span className={spanClass}>Docker</span> permite criar ambientes
                    de desenvolvimento consistentes e automatizar processos de deploy.
                </p>

                <div className="flex justify-center mt-6">
                    <a
                        className="bg-[#209740] text-white py-4 px-18 rounded hover:bg-[#1a7a2d] transition-colors"
                        target="_blank"
                        href="https://drive.google.com/file/d/1bwpfE6WriFFoQ8hW2EPw_lAepyhC66bY/view?usp=sharing"
                    >
                        Visualizar Currículo
                    </a>
                </div>

            </div>
        </section>

    )
}
