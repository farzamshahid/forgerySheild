"use client";
import React, { useEffect, useRef, useState, } from "react";
import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";
import { cn } from "@/app/lib/utils";
export const TextRevealCard = ({
    text,
    revealText,
    children,
    className
}) => {
    const [widthPercentage, setWidthPercentage] = useState(0);
    const cardRef = useRef(null);
    const [left, setLeft] = useState(0);
    const [localWidth, setLocalWidth] = useState(0);
    const [isMouseOver, setIsMouseOver] = useState(false);

    useEffect(() => {
        if (cardRef.current) {
            const { left, width: localWidth } =
                cardRef.current.getBoundingClientRect();
            setLeft(left);
            setLocalWidth(localWidth);
        }
    }, []);

    function mouseMoveHandler(event) {
        event.preventDefault();

        const { clientX } = event;
        if (cardRef.current) {
            const relativeX = clientX - left;
            setWidthPercentage((relativeX / localWidth) * 100);
        }
    }

    function mouseLeaveHandler() {
        setIsMouseOver(false);
        setWidthPercentage(0);
    }
    function mouseEnterHandler() {
        setIsMouseOver(true);
    }
    function touchMoveHandler(event) {
        event.preventDefault();
        const clientX = event.touches[0].clientX;
        if (cardRef.current) {
            const relativeX = clientX - left;
            setWidthPercentage((relativeX / localWidth) * 100);
        }
    }

    const rotateDeg = (widthPercentage - 50) * 0.1;
    return (
        <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            onMouseMove={mouseMoveHandler}
            onTouchStart={mouseEnterHandler}
            onTouchEnd={mouseLeaveHandler}
            onTouchMove={touchMoveHandler}
            ref={cardRef}
            className={cn(
                "w-[40rem]   relative overflow-hidden",
                className
            )}>
            {children}
            <div className="h-20  relative  overflow-hidden">
                <motion.div
                    style={{
                        width: "100%",
                    }}
                    animate={
                        isMouseOver
                            ? {
                                opacity: widthPercentage > 0 ? 1 : 0,
                                clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                            }
                            : {
                                clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                            }
                    }
                    transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
                    className="absolute  z-20  will-change-transform">
                    <p
                        style={{
                            textShadow: "1px 1px 10px rgba(0,0,0,0.4)",
                            color: '#FFFFFF', // slightly darker than white
                            WebkitTextStroke: '1px #8CC6FF',
                            textStroke: '1px #8CC6FF',
                        }}
                        className="text-2xl sm:text-2xl lg:text-5xl font-bold whitespace-nowrap"
                    >
                        {revealText}
                    </p>
                </motion.div>
                <div className="overflow-hidden absolute top-[1px] [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]">
                    <p
                        style={{
                            color: '#FFFFFF',
                            WebkitTextStroke: '1px #8CC6FF',
                            textStroke: '1px #8CC6FF',
                        }}
                        className="text-2xl sm:text-2xl lg:text-5xl  font-bold whitespace-nowrap"
                    >
                        {text}
                    </p>
                </div>

            </div>
        </div>
    );
};

export const TextRevealCardTitle = ({
    children,
    className
}) => {
    return (
        <h2 className={twMerge("text-white text-lg mb-2", className)}>
            {children}
        </h2>
    );
};

export const TextRevealCardDescription = ({
    children,
    className
}) => {
    return (<p className={twMerge("text-[#a9a9a9] text-sm", className)}>{children}</p>);
};


