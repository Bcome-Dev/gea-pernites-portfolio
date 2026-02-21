"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ExternalLink } from "lucide-react";

type Category = "All" | "Physical Canvas" | "Digital Visions" | "Concept Art";

const TABS: { id: Category; label: string }[] = [
    { id: "All", label: "All Works" },
    { id: "Physical Canvas", label: "Physical Canvas" },
    { id: "Digital Visions", label: "Digital Visions" },
    { id: "Concept Art", label: "Concept Art" },
];

interface Work {
    id: number;
    category: Category;
    title: string;
    medium: string;
    year: string;
    description: string;
    palette: string[];
    aspectRatio?: string;
}

const works: Work[] = [
    // Physical Canvas — Casket painting
    {
        id: 1,
        category: "Physical Canvas",
        title: "Flores Para Los Muertos",
        medium: "Casket Painting · Acrylic on Walnut",
        year: "2024",
        description:
            "Floral requiem on walnut-stained casket panel. A deeply personal tribute blending folk motifs with botanical precision.",
        palette: ["#1E3A8A", "#2563EB", "#FBCFE8", "#F9A8D4"],
        aspectRatio: "100%",
    },
    // Physical Canvas — Wall Mural
    {
        id: 2,
        category: "Physical Canvas",
        title: "Tayo Ang Iisa",
        medium: "Wall Mural · Spray & Acrylic",
        year: "2024",
        description:
            "Community mural in Tondo exploring collective Filipino identity. 10×4m wall, mixed media.",
        palette: ["#172554", "#1E3A8A", "#FBCFE8", "#DBEAFE"],
        aspectRatio: "56%",
    },
    // Physical Canvas — Traditional Canvas
    {
        id: 3,
        category: "Physical Canvas",
        title: "Lungkot at Pag-asa",
        medium: "Canvas · Oil, Diptych",
        year: "2024",
        description:
            "Grief and hope, set side by side. An exploration of the simultaneity of loss and renewal.",
        palette: ["#1e40af", "#3B82F6", "#FDF2F8", "#FBCFE8"],
        aspectRatio: "80%",
    },
    {
        id: 4,
        category: "Physical Canvas",
        title: "Inang Bayan",
        medium: "Casket Painting · Oil on Mahogany",
        year: "2023",
        description:
            "Portrait of the motherland; traditional Filipino iconography honoring a life of deep patriotism.",
        palette: ["#1E3A8A", "#7C3AED", "#FBCFE8", "#E0E7FF"],
        aspectRatio: "100%",
    },
    {
        id: 5,
        category: "Physical Canvas",
        title: "Bantayog",
        medium: "Exterior Mural · Spray & Acrylic",
        year: "2022",
        description:
            "A 10m × 4m exterior mural honoring local barangay heritage. Rendered in spray paint and acrylic.",
        palette: ["#172554", "#1E3A8A", "#F472B6", "#FBCFE8"],
        aspectRatio: "60%",
    },
    // Digital Visions
    {
        id: 6,
        category: "Digital Visions",
        title: "Diwata Series I",
        medium: "Digital Illustration · Procreate",
        year: "2024",
        description:
            "A six-piece illustration series on Filipino mythology. Each work explores one of the forest spirits of Philippine folklore.",
        palette: ["#1E3A8A", "#4338CA", "#FBCFE8", "#C7D2FE"],
        aspectRatio: "100%",
    },
    {
        id: 7,
        category: "Digital Visions",
        title: "Jeepney Chronicles",
        medium: "Vector Illustration · Figma",
        year: "2023",
        description:
            "Vector editorial series on Philippine street culture and the jeepney as cultural artifact.",
        palette: ["#1E3A8A", "#2563EB", "#FDF2F8", "#FBCFE8"],
        aspectRatio: "75%",
    },
    {
        id: 8,
        category: "Digital Visions",
        title: "Brand System: Lakambini",
        medium: "Graphic Branding · Illustrator",
        year: "2023",
        description:
            "Complete identity system for a Filipino artisan collective — logo, typography, and brand pattern library.",
        palette: ["#172554", "#1E3A8A", "#F9A8D4", "#FBCFE8"],
        aspectRatio: "75%",
    },
    // Concept Art
    {
        id: 9,
        category: "Concept Art",
        title: "Baybayin Dreams",
        medium: "Experimental Sketch · Mixed Media",
        year: "2024",
        description:
            "Fusing ancient Baybayin script with surreal landscapes. Pencil, ink, and digital overlay.",
        palette: ["#1E3A8A", "#6D28D9", "#FBCFE8", "#EDE9FE"],
        aspectRatio: "100%",
    },
    {
        id: 10,
        category: "Concept Art",
        title: "Bahala Na",
        medium: "Concept Sketch · Charcoal & Ink",
        year: "2023",
        description:
            "An exploration of surrender and faith through layered mark-making. Roots, decay, and renewal.",
        palette: ["#1D4ED8", "#2563EB", "#FDF2F8", "#FBCFE8"],
        aspectRatio: "80%",
    },
];

function WorkCard({ w }: { w: Work }) {
    const bg = `linear-gradient(145deg, ${w.palette[0]} 0%, ${w.palette[1]} 60%, ${w.palette[2]}33 100%)`;

    return (
        <motion.article
            layout
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.4 }}
            whileHover={{ y: -6 }}
            className="group cursor-pointer"
        >
            {/* Image tile */}
            <div
                className="w-full rounded-xl mb-4 overflow-hidden relative"
                style={{ paddingBottom: w.aspectRatio ?? "75%", background: bg }}
            >
                {/* Decorative overlay */}
                <div className="absolute inset-0">
                    <div
                        className="absolute inset-0 opacity-30"
                        style={{
                            backgroundImage: `radial-gradient(circle at 30% 30%, ${w.palette[2]}66, transparent 60%), radial-gradient(circle at 75% 75%, ${w.palette[3]}44, transparent 60%)`,
                        }}
                    />
                    {/* Paint stroke decoration */}
                    <svg
                        className="absolute bottom-4 left-4 opacity-20"
                        width="80"
                        height="40"
                        viewBox="0 0 80 40"
                    >
                        <path
                            d="M4,20 Q20,4 40,20 T76,20"
                            stroke="white"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#1E3A8A]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white p-4">
                        <ExternalLink size={22} className="mx-auto mb-2 opacity-80" />
                        <p className="text-xs font-semibold tracking-wide uppercase">
                            View Work
                        </p>
                    </div>
                </div>

                {/* Category tag */}
                <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-white/20 text-white backdrop-blur-sm rounded-full border border-white/30">
                    {w.category}
                </span>
                {/* Year watermark */}
                <span className="absolute bottom-3 right-3 font-serif italic text-xs text-white/40">
                    {w.year}
                </span>

                {/* Palette chips */}
                <div className="absolute bottom-3 left-3 flex gap-1">
                    {w.palette.slice(0, 3).map((c) => (
                        <span
                            key={c}
                            className="w-3 h-3 rounded-full border border-white/30"
                            style={{ backgroundColor: c }}
                        />
                    ))}
                </div>
            </div>

            {/* Card body */}
            <div>
                <h3 className="font-serif text-base font-semibold text-[#0F172A] group-hover:text-[#1E3A8A] transition-colors leading-tight mb-1">
                    {w.title}
                </h3>
                <p className="text-[11px] font-semibold text-[#FBCFE8] bg-[#1E3A8A] px-2 py-0.5 rounded-full inline-block mb-2 tracking-wide">
                    {w.medium}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">{w.description}</p>
            </div>
        </motion.article>
    );
}

export default function Gallery() {
    const [active, setActive] = useState<Category>("All");

    const filtered =
        active === "All" ? works : works.filter((w) => w.category === active);

    return (
        <section id="gallery" className="py-28 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 mb-5"
                        >
                            <span className="w-8 h-px bg-[#1E3A8A]" />
                            <span className="text-[11px] font-bold tracking-[0.22em] text-[#1E3A8A] uppercase">
                                Portfolio
                            </span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.08 }}
                            className="font-serif text-[#0F172A] leading-tight"
                            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
                        >
                            Selected Works
                        </motion.h2>
                    </div>

                    {/* Filter tabs */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="flex flex-wrap gap-2"
                    >
                        {TABS.map((tab) => (
                            <motion.button
                                key={tab.id}
                                onClick={() => setActive(tab.id)}
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.96 }}
                                className={`px-4 py-2 text-[11px] font-bold uppercase tracking-wide rounded-full transition-all duration-200 ${active === tab.id
                                    ? "bg-[#1E3A8A] text-[#FBCFE8] shadow-md"
                                    : "bg-white text-slate-500 hover:text-[#1E3A8A] border border-slate-200 hover:border-[#BFDBFE]"
                                    }`}
                            >
                                {tab.label}
                            </motion.button>
                        ))}
                    </motion.div>
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filtered.map((w) => (
                            <WorkCard key={w.id} w={w} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* CTA */}
                <div className="mt-16 pt-10 border-t border-slate-200 text-center">
                    <p className="text-slate-400 text-sm mb-5">
                        Interested in a commission or collaboration?
                    </p>
                    <motion.button
                        onClick={() =>
                            document
                                .querySelector("#contact")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95, rotate: "1deg" }}
                        className="px-8 py-3.5 bg-[#1E3A8A] text-white text-[13px] font-bold tracking-wide uppercase rounded-full shadow-lg hover:shadow-xl hover:bg-blue-800 transition-all duration-200"
                    >
                        Get in Touch
                    </motion.button>
                </div>
            </div>
        </section>
    );
}
