import { Sobre } from './sobre';
import { Habilidades } from './habilidades';
import { Projetos } from './projetos';


export function Main() {
    return (
        <main className="bg-[#1d1d1d]">
            <Sobre />
            <Habilidades />
            <Projetos />
        </main>
    );
}
