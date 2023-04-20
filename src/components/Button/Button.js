import React from "https://esm.run/react@18";
import confetti from "https://esm.run/canvas-confetti@1";

function Button() {
    function onClick() {
        confetti({
            particleCount: 150,
            spread: 60
        });
    }

    return (
        <button className="button" onClick={onClick}>
            <span>🎉</span>
            <span>Like</span>
        </button>
    );
}

export default Button;