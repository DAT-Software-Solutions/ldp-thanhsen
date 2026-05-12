"use client";

import type { ReactNode } from "react";
import { LazyMotion, domAnimation, m, useReducedMotion } from "motion/react";

type RevealElement = "div" | "section" | "header" | "article" | "aside" | "li";

const revealViewport = { once: true, amount: 0.18, margin: "0px 0px -80px" };

export const LandingMotionProvider = ({ children }: { children: ReactNode }) => (
    <LazyMotion features={domAnimation} strict>
        {children}
    </LazyMotion>
);

export const Reveal = ({
    as = "div",
    children,
    className,
    ariaLabel,
    delay = 0,
}: {
    as?: RevealElement;
    children: ReactNode;
    className?: string;
    ariaLabel?: string;
    delay?: number;
}) => {
    const shouldReduceMotion = useReducedMotion();
    const motionProps = {
        className,
        "aria-label": ariaLabel,
        initial: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: revealViewport,
        transition: {
            duration: shouldReduceMotion ? 0.01 : 0.55,
            delay: shouldReduceMotion ? 0 : delay,
            ease: [0.22, 1, 0.36, 1],
        },
    } as const;

    switch (as) {
        case "section":
            return <m.section {...motionProps}>{children}</m.section>;
        case "header":
            return <m.header {...motionProps}>{children}</m.header>;
        case "article":
            return <m.article {...motionProps}>{children}</m.article>;
        case "aside":
            return <m.aside {...motionProps}>{children}</m.aside>;
        case "li":
            return <m.li {...motionProps}>{children}</m.li>;
        default:
            return <m.div {...motionProps}>{children}</m.div>;
    }
};

export const RevealList = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <m.div
            className={className}
            initial='hidden'
            whileInView='show'
            viewport={revealViewport}
            variants={{
                hidden: {},
                show: {
                    transition: {
                        staggerChildren: shouldReduceMotion ? 0 : 0.08,
                    },
                },
            }}>
            {children}
        </m.div>
    );
};

export const RevealItem = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <m.div
            className={className}
            variants={{
                hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
                show: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: shouldReduceMotion ? 0.01 : 0.48,
                        ease: [0.22, 1, 0.36, 1],
                    },
                },
            }}>
            {children}
        </m.div>
    );
};
