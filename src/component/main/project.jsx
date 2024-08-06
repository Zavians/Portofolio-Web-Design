import React, { useEffect, useRef } from "react";
import "../../index.css";

export const Project = () => {
    const typewriterRef = useRef(null);

    useEffect(() => {
        const words = ["Welcome to My Site!", "Happy Exploring and Enjoy the Journey!"];
        let i = 0;
        let j = 0;
        let currentWord = "";
        let isDeleting = false;

        function type() {
            if (typewriterRef.current) {
                currentWord = words[i];
                if (isDeleting) {
                    typewriterRef.current.textContent = currentWord.substring(0, j - 1);
                    j--;
                    if (j === 0) {
                        isDeleting = false;
                        i++;
                        if (i === words.length) {
                            i = 0;
                        }
                    }
                } else {
                    typewriterRef.current.textContent = currentWord.substring(0, j + 1);
                    j++;
                    if (j === currentWord.length) {
                        isDeleting = true;
                    }
                }
                setTimeout(type, 150);
            }
        }

        type();
    }, []);

    return (
        <div className="pl-10 p-8 bg-black text-white font-poppins ">
            <div className="flex justify-between">
                <div>
                    Kenza
                </div>
                <div>
                    Kenza
                </div>
            </div>
        </div>
    );
};

export default Project;
