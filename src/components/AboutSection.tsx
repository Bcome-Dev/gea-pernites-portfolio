"use client";

import { motion } from "framer-motion";

const mediums = [
    {
        num: "01",
        name: "Coffin Art",
        description:
            "Hand-painting wooden caskets with intricate motifs, portraits, and symbolic imagery — a deeply meaningful practice at the intersection of fine art, grief, and cultural ritual.",
    },
    {
        num: "02",
        name: "Wall Murals",
        description:
            "Large-scale paintings for public and private spaces, woven from Filipino folklore, community stories, and abstract narrative. I work directly on walls and architectural surfaces.",
    },
    {
        num: "03",
        name: "Canvas Painting",
        description:
            "Traditional and experimental work in oil, acrylic, and mixed media. Each piece explores texture, color, and the visual language of personal and collective memory.",
    },
    {
        num: "04",
        name: "Digital Art",
        description:
            "Illustrations and vector works created digitally — from editorial pieces and character design to commercial branding assets. Rooted in the same craft as my analog practice.",
    },
];

const stats = [
    { n: "10+", label: "Years creating" },
    { n: "80+", label: "Commissions" },
    { n: "4", label: "Disciplines" },
    { n: "PH", label: "Manila, Philippines" },
];

function fadeUp(delay = 0) {
    return {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" } as const,
        transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
    };
}

export default function AboutSection() {
    return (
        <section id="about" className="py-28 bg-[#F8FAFC]">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header row */}
                <div className="grid lg:grid-cols-2 gap-16 mb-24">
                    <div>
                        <motion.div {...fadeUp(0.05)} className="flex items-center gap-3 mb-6">
                            <span className="w-8 h-px bg-[#1E3A8A]" />
                            <span className="text-[11px] font-bold tracking-[0.22em] text-[#1E3A8A] uppercase">
                                About
                            </span>
                        </motion.div>

                        <motion.h2
                            {...fadeUp(0.12)}
                            className="font-serif text-[#0F172A] leading-[1.08]"
                            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
                        >
                            Art without
                            <br />
                            <span className="italic font-light">walls or limits</span>
                        </motion.h2>
                    </div>

                    <motion.div {...fadeUp(0.2)} className="flex flex-col justify-center">
                        <p className="text-slate-500 text-base leading-relaxed mb-5">
                            I&apos;m{" "}
                            <strong className="text-[#1E3A8A] font-semibold">
                                Gea V. Pernites
                            </strong>
                            , a Filipino fine artist based in Manila. My practice is
                            multi-disciplinary by necessity — I believe that confining art to a
                            single medium is like confining a river to a single bank.
                        </p>
                        <p className="text-slate-500 text-base leading-relaxed mb-5">
                            Growing up surrounded by Filipino folk tradition, jeepney murals, and
                            the dense visual culture of the barangay, I learned early that art is
                            everywhere — in grief rituals, on city walls, in festivals.
                        </p>
                        <p className="text-slate-500 text-base leading-relaxed">
                            My most distinctive practice is{" "}
                            <span className="text-[#1E3A8A] font-medium">coffin painting</span>{" "}
                            — hand-decorating wooden caskets as a final act of love. It is quiet,
                            spiritual work, and it has shaped everything else I do.
                        </p>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="border-t border-slate-100 mb-16" />

                {/* Mediums grid */}
                <motion.div
                    {...fadeUp(0.05)}
                    className="flex items-center gap-3 mb-10"
                >
                    <span className="text-[11px] font-bold tracking-[0.22em] text-slate-400 uppercase">
                        Mediums &amp; Disciplines
                    </span>
                </motion.div>

                <div className="grid sm:grid-cols-2 gap-x-16 gap-y-12 mb-24">
                    {mediums.map((m, i) => (
                        <motion.div
                            key={m.name}
                            {...fadeUp(0.08 + i * 0.07)}
                            className="group"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-[12px] font-bold text-[#FBCFE8] bg-[#1E3A8A] w-7 h-7 flex items-center justify-center rounded-full">
                                    {m.num}
                                </span>
                                <div className="flex-1 h-px bg-gradient-to-r from-[#BFDBFE] to-transparent" />
                            </div>
                            <h3 className="font-serif text-xl text-[#0F172A] mb-3 group-hover:text-[#1E3A8A] transition-colors">
                                {m.name}
                            </h3>
                            <p className="text-sm text-slate-500 leading-relaxed">{m.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Stats row */}
                <div className="bg-[#F8FAFC] rounded-2xl p-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
                    {stats.map((f, i) => (
                        <motion.div
                            key={f.label}
                            {...fadeUp(0.04 * i)}
                            className="text-center"
                        >
                            <p className="font-serif text-4xl font-bold text-[#1E3A8A] mb-1">
                                {f.n}
                            </p>
                            <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                                {f.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
