import { FaEnvelope, FaFileAlt, FaGithub, FaLinkedin } from "react-icons/fa";

const aClass = "hover:text-[#209740] transition-colors";

export const Footer = () => {
    return (
        <footer id="contato" className="bg-[#292929] text-gray-300 py-10">
            <div className="max-w-6xl mx-auto px-6 flex flex-col justify-center items-center gap-6">
                <nav>
                    <ul className="flex flex-col gap-4 text-1xl items-center text-center">
                        <li>
                            <p>Luan Antony | 15/12/2002</p>
                        </li>
                        <li>
                            <p>Praia Grande, SP</p>
                        </li>
                        <li>
                            <p>(13) 98123-4567 | (13) 3472-0675</p>
                        </li>
                        <li>
                            <p>fplpgluan@gmail.com</p>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="border-t border-gray-700 mt-6 flex justify-center gap-6 text-3xl pt-4">
                <a href="https://github.com/Luan-Antony" target="_blank" className={aClass}>
                    <FaGithub />
                </a>
                <a href="https://linkedin.com/in/luan-antony-337b73253/" target="_blank" className={aClass}>
                    <FaLinkedin />
                </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=fplpgluan@gmail.com" target="_blank" className={aClass}>
                    <FaEnvelope/>
                </a>
                <a href="https://drive.google.com/file/d/1bwpfE6WriFFoQ8hW2EPw_lAepyhC66bY/view?usp=sharing " target="_blank" className={aClass}>
                    <FaFileAlt />
                </a>
            </div>
        </footer>

    );
}
