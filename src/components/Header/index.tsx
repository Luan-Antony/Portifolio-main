const navLink =
    "text-white text-sm sm:text-base md:text-lg uppercase hover:bg-[#209740] px-4 sm:px-6 md:px-8 lg:px-30 py-2 sm:py-3 md:py-4 lg:py-7 transition-colors duration-300 ease-in-out rounded-t"
;

export const Header = () => {
    return (
        <header className="py-6 bg-[#292929] border-b-4 border-[#209740]">
            <nav>
                <ul className="flex flex-wrap gap-4 items-center justify-center md:justify-evenly">
                    <li><a href="#projetos" className={navLink}>Projetos</a></li>
                    <li><a href="#habilidades" className={navLink}>Habilidades</a></li>
                    <li><a href="#contato" className={navLink}>Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}
