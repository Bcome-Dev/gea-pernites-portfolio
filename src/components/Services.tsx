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
        color: "#1E3A8A",
        bg: "linear-gradient(145deg, #EFF6FF 0%, #DBEAFE 100%)",
        accentColor: "#1E3A8A",
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
        color: "#7C3AED",
        bg: "linear-gradient(145deg, #F5F3FF 0%, #EDE9FE 100%)",
        accentColor: "#7C3AED",
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
        color: "#DB2777",
        bg: "linear-gradient(145deg, #FDF2F8 0%, #FCE7F3 100%)",
        accentColor: "#DB2777",
    },
];

function TiltCard({ s, i }: { s: (typeof services)[0]; i: number }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useSpring(useTransform(y, [-80, 80], [10, -10]), {
        damping: 20,
        stiffness: 200,
    });
    const rotateY = useSpring(useTransform(x, [-80, 80], [-10, 10]), {
        damping: 20,
        stiffness: 200,
    });
    const glareX = useTransform(x, [-80, 80], ["0%", "100%"]);
    const glareY = useTransform(y, [-80, 80], ["0%", "100%"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        x.set(e.clientX - cx);
        y.set(e.clientY - cy);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
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
                    background: s.bg,
                    borderColor: `${s.color}22`,
                    boxShadow: `0 4px 24px ${s.color}14`,
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                whileHover={{ scale: 1.02 }}
                className="relative rounded-2xl p-7 border-2 transition-shadow duration-300 cursor-default overflow-hidden group"
            >
                {/* Glare effect */}
                <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                    style={{
                        background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.35) 0%, transparent 60%)`,
                    }}
                />

                {/* Icon */}
                <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 shadow-sm"
                    style={{ background: s.color }}
                >
                    <Icon size={22} color="white" />
                </div>

                {/* Title */}
                <p
                    className="text-[10px] font-bold tracking-[0.2em] uppercase mb-1"
                    style={{ color: s.accentColor, opacity: 0.6 }}
                >
                    {s.subtitle}
                </p>
                <h3
                    className="font-serif text-2xl font-bold mb-5 leading-tight"
                    style={{ color: s.color === "#1E3A8A" ? "#0F172A" : "#1E1B4B" }}
                >
                    {s.title}
                </h3>

                {/* Service items */}
                <ul className="space-y-3">
                    {s.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                            <span
                                className="w-4 h-4 rounded-full flex items-center justify-center mt-0.5 shrink-0"
                                style={{ background: `${s.color}20` }}
                            >
                                <Check size={10} style={{ color: s.color }} strokeWidth={3} />
                            </span>
                            <span className="text-sm text-slate-600 leading-snug">{item}</span>
                        </li>
                    ))}
                </ul>

                {/* Bottom CTA */}
                <motion.button
                    onClick={() =>
                        document
                            .querySelector("#contact")
                            ?.scrollIntoView({ behavior: "smooth" })
                    }
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95, rotate: "1deg" }}
                    className="mt-7 w-full py-2.5 rounded-full text-[12px] font-bold uppercase tracking-wide transition-all duration-200 border-2"
                    style={{
                        borderColor: s.color,
                        color: s.color,
                    }}
                    onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = s.color;
                        (e.currentTarget as HTMLElement).style.color = "white";
                    }}
                    onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "transparent";
                        (e.currentTarget as HTMLElement).style.color = s.color;
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
        <section id="services" className="py-28 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-3 mb-5"
                    >
                        <span className="w-8 h-px bg-[#1E3A8A]" />
                        <span className="text-[11px] font-bold tracking-[0.22em] text-[#1E3A8A] uppercase">
                            Services
                        </span>
                        <span className="w-8 h-px bg-[#1E3A8A]" />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.08 }}
                        className="font-serif text-[#0F172A] leading-tight mb-4"
                        style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
                    >
                        What I Can Create{" "}
                        <span className="italic font-light">for You</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.14 }}
                        className="text-slate-500 text-base max-w-xl mx-auto"
                    >
                        Each service is rooted in the same philosophy: art that is
                        considered, intentional, and made to endure.
                    </motion.p>
                </div>

                {/* 3D Tilt Cards */}
                <div className="grid md:grid-cols-3 gap-7">
                    {services.map((s, i) => (
                        <TiltCard key={s.title} s={s} i={i} />
                    ))}
                </div>

                {/* Bottom note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-12 text-center"
                >
                    <p className="text-sm text-slate-400">
                        All commissions include consultation, progress updates, and
                        archival documentation.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
