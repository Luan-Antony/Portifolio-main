export const Header = () => {
    return (
        <header className="py-6 bg-[#292929] border-b-5 border-[#209740]">
            <nav>
                <ul className="flex gap-8 items-center justify-evenly 
                    [&>li>a]:text-white
                    [&>li>a]:text-lg
                    [&>li>a]:uppercase
                    [&>li>a]:hover:bg-[#209740]
                    [&>li>a]:px-40 [&>li>a]:py-6.5
                    [&>li>a]:transition-colors
                    [&>li>a]:duration-300
                    [&>li>a]:ease-in-out
                    [&>li>a]:rounded-t"
                    >

                    <li><a href="#">Habilidades</a></li>
                    <li><a href="#">Projetos</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}