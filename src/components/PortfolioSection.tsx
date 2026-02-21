"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Medium = "All" | "Coffin Art" | "Murals" | "Canvas" | "Digital";

const TABS: Medium[] = ["All", "Coffin Art", "Murals", "Canvas", "Digital"];

const works = [
    // Coffin Art
    { id: 1, medium: "Coffin Art" as const, title: "Flores Para Los Muertos", year: "2024", description: "Hand-painted floral requiem on walnut-stained casket panel.", palette: ["#2D1B00", "#5C3317", "#B45309", "#D4A96A"] },
    { id: 2, medium: "Coffin Art" as const, title: "The Last Garden", year: "2023", description: "Garden of paradise motif, acrylic on solid mahogany.", palette: ["#1A2F1A", "#2D5A27", "#4A7C59", "#8FBC8F"] },
    { id: 3, medium: "Coffin Art" as const, title: "Inang Bayan", year: "2023", description: "Portrait of the motherland; traditional Filipino iconography.", palette: ["#1C1917", "#7C3030", "#B45309", "#F5E6C8"] },

    // Murals
    { id: 4, medium: "Murals" as const, title: "Tayo Ang Iisa", year: "2024", description: "Community mural in Tondo exploring collective identity.", palette: ["#1C2B4A", "#2563EB", "#F59E0B", "#FAFAFA"] },
    { id: 5, medium: "Murals" as const, title: "Bantayog", year: "2022", description: "10m × 4m exterior mural honoring local heritage — spray & acrylic.", palette: ["#220000", "#7C2D12", "#D97706", "#FEF3C7"] },

    // Canvas
    { id: 6, medium: "Canvas" as const, title: "Lungkot at Pag-asa", year: "2024", description: "Diptych in oil — grief and hope, side by side.", palette: ["#0F172A", "#334155", "#94A3B8", "#E2E8F0"] },
    { id: 7, medium: "Canvas" as const, title: "Bahala Na", year: "2023", description: "Textured acrylic on 60×80cm canvas. An exploration of surrender.", palette: ["#422006", "#854D0E", "#CA8A04", "#FEF9C3"] },
    { id: 8, medium: "Canvas" as const, title: "Roots", year: "2022", description: "Mixed media — canvas, soil, and found material from Cebu.", palette: ["#292524", "#57534E", "#A8A29E", "#D6D3D1"] },

    // Digital
    { id: 9, medium: "Digital" as const, title: "Diwata Series I", year: "2024", description: "Digital illustration series on Filipino mythology. Procreate.", palette: ["#1E1B4B", "#4338CA", "#818CF8", "#E0E7FF"] },
    { id: 10, medium: "Digital" as const, title: "Jeepney Chronicles", year: "2023", description: "Vector editorial on Philippine street culture.", palette: ["#1C1917", "#B91C1C", "#F59E0B", "#FAFAFA"] },
];

function PaletteChip({ colors }: { colors: string[] }) {
    return (
        <div className="flex gap-0.5">
            {colors.map((c) => (
                <span key={c} className="w-3 h-3 rounded-full border border-white/10" style={{ backgroundColor: c }} />
            ))}
        </div>
    );
}

function WorkCard({ w }: { w: (typeof works)[0] }) {
    const bg = `linear-gradient(160deg, ${w.palette[0]}, ${w.palette[1]})`;

    return (
        <motion.article
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.35 }}
            whileHover={{ y: -4 }}
            className="group cursor-pointer"
        >
            {/* Artwork tile */}
            <div
                className="w-full rounded-sm mb-4 overflow-hidden relative"
                style={{ paddingBottom: "75%", background: bg }}
            >
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    {/* Subtle paint strokes as visual metaphor */}
                    <div className="opacity-30 flex flex-col items-center gap-3 w-full px-8">
                        {[0.6, 1, 0.7].map((op, i) => (
                            <div
                                key={i}
                                className="h-0.5 rounded-full"
                                style={{ width: `${40 + i * 20}%`, backgroundColor: w.palette[2], opacity: op }}
                            />
                        ))}
                    </div>
                    {/* Year watermark */}
                    <span
                        className="absolute bottom-3 right-4 font-serif italic text-xs font-light opacity-30"
                        style={{ color: w.palette[3] ?? "#fff" }}
                    >
                        {w.year}
                    </span>
                </div>
                {/* Category tag */}
                <span className="absolute top-3 left-3 text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 bg-white/15 text-white/80 backdrop-blur-sm rounded-sm">
                    {w.medium}
                </span>
            </div>

            {/* Card body */}
            <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="font-serif text-base text-ink group-hover:text-amber transition-colors leading-tight">{w.title}</h3>
                <PaletteChip colors={w.palette} />
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">{w.description}</p>
        </motion.article>
    );
}

export default function PortfolioSection() {
    const [active, setActive] = useState<Medium>("All");

    const filtered = active === "All" ? works : works.filter((w) => w.medium === active);

    return (
        <section id="portfolio" className="py-24 bg-canvas">
            <div className="max-w-5xl mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[11px] uppercase tracking-[0.2em] text-amber font-medium mb-3"
                        >
                            Portfolio
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.08 }}
                            className="font-serif text-ink leading-tight"
                            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
                        >
                            Selected Works
                        </motion.h2>
                    </div>

                    {/* Tab filter */}
                    <div className="flex flex-wrap gap-1">
                        {TABS.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActive(tab)}
                                className={`px-3 py-1.5 text-[11px] font-medium uppercase tracking-wide rounded-sm transition-colors ${active === tab
                                        ? "bg-ink text-white"
                                        : "text-stone-500 hover:text-ink border border-stone-200 hover:border-stone-400 bg-white"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((w) => (
                            <WorkCard key={w.id} w={w} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* CTA */}
                <div className="mt-16 border-t border-stone-200 pt-10 text-center">
                    <p className="text-stone-400 text-sm mb-4">Interested in a commission or collaboration?</p>
                    <button
                        onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                        className="px-6 py-3 bg-ink text-white text-[13px] font-medium tracking-wide uppercase rounded-sm hover:bg-amber transition-colors duration-200"
                    >
                        Get in Touch
                    </button>
                </div>
            </div>
        </section>
    );
}
