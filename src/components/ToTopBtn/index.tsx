import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 p-4 bg-[#209740] text-white rounded-full shadow-lg hover:bg-[#157a35] transition-colors z-50 cursor-pointer"
                    aria-label="Voltar ao topo"
                >
                    <FaArrowUp size={20} />
                </button>
            )}
        </>
    );
}
