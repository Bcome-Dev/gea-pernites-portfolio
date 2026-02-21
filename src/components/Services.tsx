"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Brush, Monitor, Layers, Check } from "lucide-react";

const services = [
    {
        icon: Brush,
        title: "Physical Canvas",
        subtitle: "From grief to grace",
        items: [
            "Casket & Coffin Painting",
            "Wall Murals (Interior & Exterior)",
            "Traditional Canvas — Oil & Acrylic",
            "Personalized Art Installations",
        ],
        color: "#FBCFE8",
        textColor: "#1E3A8A",
        border: "rgba(251,207,232,0.3)",
        iconBg: "rgba(251,207,232,0.15)",
    },
    {
        icon: Monitor,
        title: "Digital Visions",
        subtitle: "Craft meets code",
        items: [
            "Vector Illustrations",
            "Editorial & Character Design",
            "Graphic Branding & Identity",
            "Digital Art for Print & Screen",
        ],
        color: "#C7D2FE",
        textColor: "#818CF8",
        border: "rgba(199,210,254,0.3)",
        iconBg: "rgba(199,210,254,0.15)",
    },
    {
        icon: Layers,
        title: "Concept Art",
        subtitle: "Imagination, rendered",
        items: [
            "Experimental Sketches",
            "Concept Development",
            "Art Direction Consultations",
            "Mixed Media Explorations",
        ],
        color: "#F9A8D4",
        textColor: "#F472B6",
        border: "rgba(249,168,212,0.3)",
        iconBg: "rgba(249,168,212,0.15)",
    },
];

function TiltCard({ s, i }: { s: (typeof services)[0]; i: number }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useSpring(useTransform(y, [-80, 80], [10, -10]), { damping: 20, stiffness: 200 });
    const rotateY = useSpring(useTransform(x, [-80, 80], [-10, 10]), { damping: 20, stiffness: 200 });
    const glareX = useTransform(x, [-80, 80], ["0%", "100%"]);
    const glareY = useTransform(y, [-80, 80], ["0%", "100%"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
    };

    const Icon = s.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            style={{ perspective: 1000 }}
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d" as const,
                    background: "rgba(255,255,255,0.04)",
                    borderColor: s.border,
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={() => { x.set(0); y.set(0); }}
                whileHover={{ scale: 1.02 }}
                className="relative rounded-2xl p-7 border-2 cursor-default overflow-hidden group"
            >
                {/* Glare */}
                <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                    style={{ background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.08) 0%, transparent 60%)` }}
                />

                {/* Icon */}
                <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: s.iconBg, border: `1px solid ${s.border}` }}
                >
                    <Icon size={22} style={{ color: s.color }} />
                </div>

                <p className="text-[10px] font-bold tracking-[0.2em] uppercase mb-1" style={{ color: s.color, opacity: 0.7 }}>
                    {s.subtitle}
                </p>
                <h3 className="font-serif text-2xl font-bold mb-5 leading-tight text-white">
                    {s.title}
                </h3>

                <ul className="space-y-3">
                    {s.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                            <span
                                className="w-4 h-4 rounded-full flex items-center justify-center mt-0.5 shrink-0"
                                style={{ background: s.iconBg }}
                            >
                                <Check size={10} style={{ color: s.color }} strokeWidth={3} />
                            </span>
                            <span className="text-sm leading-snug" style={{ color: "rgba(255,255,255,0.55)" }}>{item}</span>
                        </li>
                    ))}
                </ul>

                <motion.button
                    onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-7 w-full py-2.5 rounded-full text-[12px] font-bold uppercase tracking-wide transition-all duration-200 border"
                    style={{ borderColor: s.border, color: s.color }}
                    onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
                    }}
                    onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "transparent";
                    }}
                >
                    Inquire Now
                </motion.button>
            </motion.div>
        </motion.div>
    );
}

export default function Services() {
    return (
        <section
            id="services"
            className="py-28 relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #0F172A 0%, #1e1b4b 50%, #0F172A 100%)" }}
        >
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full"
                    style={{ background: "radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 70%)" }}
                />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-3 mb-5"
                    >
                        <span className="w-8 h-px bg-[#FBCFE8]" />
                        <span className="text-[11px] font-bold tracking-[0.22em] text-[#FBCFE8] uppercase">Services</span>
                        <span className="w-8 h-px bg-[#FBCFE8]" />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.08 }}
                        className="font-serif text-white leading-tight mb-4"
                        style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
                    >
                        What I Can Create{" "}
                        <span className="italic font-light" style={{ color: "#FBCFE8" }}>for You</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.14 }}
                        className="text-base max-w-xl mx-auto"
                        style={{ color: "rgba(255,255,255,0.45)" }}
                    >
                        Each service is rooted in the same philosophy: art that is considered, intentional, and made to endure.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-7">
                    {services.map((s, i) => <TiltCard key={s.title} s={s} i={i} />)}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-12 text-center"
                >
                    <p className="text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>
                        All commissions include consultation, progress updates, and archival documentation.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
