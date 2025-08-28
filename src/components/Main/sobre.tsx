export const Sobre = () => {
    return (
        <section className="flex flex-col md:flex-row items-center md:items-start gap-8 py-12 px-6 sm:px-10 md:px-16 lg:px-24 lg:py-40 text-white">
            
            <div className="flex-1 flex justify-center md:justify-start p-4">
                <img
                    src="https://placehold.co/500x400"
                    alt="Foto de Luan Antony"
                    className="rounded-2xl shadow-lg max-w-full h-auto"
                />
            </div>

            <div className="flex-1 p-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 leading-snug">
                    Luan Antony, Desenvolvedor Web Full Stack
                </h1>
                <p className="text-base sm:text-lg leading-relaxed">
                    Sou programador web fullstack e transformo ideias em aplicações. Trabalho com 
                    <span className="text-[#209740] font-semibold"> HTML, CSS e JavaScript/TypeScript</span>, 
                    criando código limpo e confiável que facilita manutenção e evolução dos projetos. 
                    No front-end, uso React para desenvolver interfaces rápidas, responsivas e com foco total na experiência do usuário.
                </p>

                <p className="text-base sm:text-lg leading-relaxed mt-4">
                    No back-end, construo APIs eficientes com 
                    <span className="text-[#209740] font-semibold"> Node.js e Express</span>, integradas a bancos de dados via 
                    <span className="text-[#209740] font-semibold"> Prisma ORM</span>, garantindo estabilidade e performance. 
                    Minha experiência com <span className="text-[#209740] font-semibold">Docker</span> permite criar ambientes 
                    de desenvolvimento consistentes e automatizar processos de deploy.
                </p>
            </div>
        </section>
    )
}
