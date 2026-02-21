"use client";

import { motion } from "framer-motion";

const items = [
    "Coffin Art",
    "Wall Murals",
    "Canvas Painting",
    "Vector Illustration",
    "Digital Art",
    "Graphic Branding",
    "Concept Art",
    "Mixed Media",
];

export default function MarqueeStrip() {
    const repeated = [...items, ...items, ...items];

    return (
        <div className="bg-[#1E3A8A] py-4 overflow-hidden border-y border-white/10">
            <motion.div
                className="flex gap-0 whitespace-nowrap"
                animate={{ x: ["0%", "-33.333%"] }}
                transition={{ duration: 22, ease: "linear", repeat: Infinity }}
            >
                {repeated.map((item, i) => (
                    <span
                        key={i}
                        className="inline-flex items-center gap-6 px-8 font-serif text-sm italic text-white/70 tracking-wide shrink-0"
                    >
                        {item}
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FBCFE8] inline-block not-italic" />
                    </span>
                ))}
            </motion.div>
        </div>
    );
}
