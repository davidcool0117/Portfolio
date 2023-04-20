import React, { useState, useEffect, useRef } from 'react';
import "./MouseHandler.css";

function CursorOutline({ x, y, enlarged }) {
    const scale = enlarged ? 1.3 : 1;

    return (
        <div
            className="cursor-dot-outline"
            style={{ top: `${y - 20}px`, left: `${x - 20}px`, transform: `scale(${scale})` }}
        />
    );
}


function MouseHandler() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [visible, setVisible] = useState(true);
    const [enlarged, setEnlarged] = useState(false);
    const dotRef = useRef(null);

    useEffect(() => {
        setupEventListeners();
    }, []);

    const setupEventListeners = () => {
        const anchorElements = document.querySelectorAll('a');

        anchorElements.forEach((el) => {
            el.addEventListener('mouseover', () => {
                setEnlarged(true);
            });

            el.addEventListener('mouseout', () => {
                setEnlarged(false);
            });
        });

        document.addEventListener('mousedown', () => {
            setEnlarged(true);
        });

        document.addEventListener('mouseup', () => {
            setEnlarged(false);
        });

        document.addEventListener('mousemove', (e) => {
            setVisible(true);
            setX(e.pageX);
            setY(e.pageY);

            if (dotRef.current) {
                dotRef.current.style.top = `${e.pageY}px`;
                dotRef.current.style.left = `${e.pageX}px`;
            }

        });

        document.addEventListener('mouseenter', () => {
            setVisible(true);
            if (dotRef.current) {
                dotRef.current.style.opacity = 1;
            }
        });

        document.addEventListener('mouseleave', () => {
            setVisible(false);
            if (dotRef.current) {
                dotRef.current.style.opacity = 0;
            }
        });
        
        document.addEventListener('wheel', (e) => {
            setVisible(true);
            setX(e.pageX);
            setY(e.pageY);
        
            if (dotRef.current) {
                dotRef.current.style.top = `${e.pageY}px`;
                dotRef.current.style.left = `${e.pageX}px`;
            }
        });
        
    };

    const toggleCursorSize = () => {
        if (dotRef.current) {
            if (enlarged) {
                dotRef.current.style.transform = 'translate(-50%, -50%) scale(0.75)';
            } else {
                dotRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
            }
        }
    };

    const toggleCursorVisibility = () => {
        if (dotRef.current) {
            if (visible) {
                dotRef.current.style.opacity = 1;
            } else {
                dotRef.current.style.opacity = 0;
            }
        }
    };

    useEffect(() => {
        toggleCursorSize();
    }, [enlarged]);

    useEffect(() => {
        toggleCursorVisibility();
    }, [visible]);

    return (
        <>
            <div className="cursor-dot" ref={dotRef} style={{ top: `${y}px`, left: `${x}px` }} />
            {visible && <CursorOutline x={x} y={y} enlarged={enlarged} />}
        </>
    );
}

export default MouseHandler;
