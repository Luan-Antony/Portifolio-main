export const Header = () => {
    return (
        <header className="py-6 bg-[#292929] border-b-5 border-[#209740]">
            <nav>
                <ul className="flex gap-8 items-center justify-evenly">

                    <li><a className="
                        text-white text-lg uppercase hover:bg-[#209740]
                        px-40 py-6.5
                        transition-colors duration-300 ease-in-out
                        rounded-t" 
                    href="#">Projetos</a></li>

                    <li><a className="
                        text-white text-lg uppercase hover:bg-[#209740]
                        px-40 py-6.5
                        transition-colors duration-300 ease-in-out
                        rounded-t" 
                    href="#">Habilidades</a></li>
                    
                    <li><a className="
                        text-white text-lg uppercase hover:bg-[#209740]
                        px-40 py-6.5
                        transition-colors duration-300 ease-in-out
                        rounded-t" 
                    href="#">Contato</a></li>
                    
                </ul>
            </nav>
        </header>
    )
}