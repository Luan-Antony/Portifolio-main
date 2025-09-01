import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";

const btnClass = "p-3 bg-gray-800 hover:bg-[#209740] text-white rounded-lg transition-colors duration-300";

export const Aside = () => {
    return (
        <aside className="fixed top-1/2 left-0 transform -translate-y-1/2 flex flex-col gap-4 bg-[#292929] p-3 rounded-r-lg shadow-lg z-50">

            <a
                href="https://github.com/Luan-Antony"
                target="_blank"
                className={btnClass}
            >
                <FaGithub size={24} />
            </a>

            <a
                href="https://linkedin.com/in/luan-antony-337b73253/"
                target="_blank"
                className={btnClass}
            >
                <FaLinkedin size={24} />
            </a>

            <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=fplpgluan@gmail.com"
                target="_blank"
                className={btnClass}
            >
                <FaEnvelope size={24} />
            </a>

            <a href="https://drive.google.com/file/d/1bwpfE6WriFFoQ8hW2EPw_lAepyhC66bY/view?usp=sharing"
                target="_blank"
                className={btnClass}
            >
                <FaFileAlt size={24} />
            </a>

        </aside>
    );
}
