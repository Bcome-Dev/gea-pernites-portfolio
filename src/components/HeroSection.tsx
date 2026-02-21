"use client";

import { useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

const WORDS = ["Murals", "Caskets", "Canvas", "Vectors", "Digital"];

const ART_CARDS = [
    {
        label: "Physical Canvas",
        sub: "Coffin Art · Murals",
        gradient: "linear-gradient(135deg, #1E3A8A 0%, #1e40af 50%, #312e81 100%)",
        accent: "#FBCFE8",
        rotate: -6,
        z: 0,
        x: 0,
        y: 0,
    },
    {
        label: "Digital Visions",
        sub: "Vector · Illustration",
        gradient: "linear-gradient(135deg, #7C3AED 0%, #4F46E5 60%, #1E3A8A 100%)",
        accent: "#C7D2FE",
        rotate: 2,
        z: 10,
        x: -24,
        y: -30,
    },
    {
        label: "Concept Art",
        sub: "Sketches · Experimental",
        gradient: "linear-gradient(135deg, #DB2777 0%, #9D174D 50%, #1E3A8A 100%)",
        accent: "#FBCFE8",
        rotate: 8,
        z: 20,
        x: -48,
        y: -60,
    },
];

function stagger(delay = 0) {
    return {
        initial: { opacity: 0, y: 32 },
        animate: { opacity: 1, y: 0 },
        transition: {
            duration: 0.7,
            delay,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    };
}

function FloatingArtStack() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(useTransform(mouseY, [-200, 200], [8, -8]), {
        damping: 30,
        stiffness: 200,
    });
    const rotateY = useSpring(useTransform(mouseX, [-200, 200], [-8, 8]), {
        damping: 30,
        stiffness: 200,
    });

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handle = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            mouseX.set(e.clientX - cx);
            mouseY.set(e.clientY - cy);
        };

        window.addEventListener("mousemove", handle);
        return () => window.removeEventListener("mousemove", handle);
    }, [mouseX, mouseY]);

    return (
        <div
            ref={containerRef}
            className="relative flex items-center justify-center"
            style={{ height: 420, width: "100%" }}
        >
            <motion.div
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="relative"
            >
                {ART_CARDS.map((card, i) => (
                    <motion.div
                        key={card.label}
                        initial={{ opacity: 0, scale: 0.8, y: 40 }}
                        animate={{ opacity: 1, scale: 1, y: card.y }}
                        transition={{
                            duration: 0.9,
                            delay: 0.5 + i * 0.15,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        style={{
                            position: i === 0 ? "relative" : "absolute",
                            top: i === 0 ? undefined : 0,
                            left: i === 0 ? undefined : card.x,
                            zIndex: card.z,
                            rotate: card.rotate,
                        }}
                        whileHover={{ scale: 1.03, y: card.y - 8 }}
                        className="w-64 rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
                    >
                        <div
                            className="h-80 relative flex flex-col justify-end p-5"
                            style={{ background: card.gradient }}
                        >
                            <div
                                className="absolute top-6 right-6 w-20 h-20 rounded-full opacity-20"
                                style={{ background: card.accent }}
                            />
                            <div
                                className="absolute top-16 right-12 w-10 h-10 rounded-full opacity-10"
                                style={{ background: card.accent }}
                            />

                            <div className="absolute inset-0 flex items-center justify-center opacity-10">
                                <svg width="200" height="200" viewBox="0 0 200 200">
                                    <path d="M20,100 Q60,40 100,100 T180,100" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" />
                                    <path d="M20,130 Q80,70 130,120 T180,80" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5" />
                                </svg>
                            </div>

                            <div className="absolute top-5 left-5">
                                <span className="font-serif text-white/20 leading-none select-none" style={{ fontSize: "5rem", fontWeight: 700 }}>G</span>
                            </div>

                            <div className="relative z-10">
                                <div
                                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase mb-3"
                                    style={{ background: "rgba(255,255,255,0.15)", color: card.accent, backdropFilter: "blur(8px)" }}
                                >
                                    <Sparkles size={9} />
                                    {card.sub}
                                </div>
                                <h3 className="font-serif text-white text-xl font-bold leading-tight">{card.label}</h3>
                            </div>

                            <div className="absolute bottom-0 inset-x-0 h-px bg-white/15" />
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Floating badge */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 0 }}
                animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                transition={{
                    opacity: { delay: 1.2, duration: 0.4 },
                    scale: { delay: 1.2, duration: 0.4 },
                    y: { delay: 1.6, duration: 2, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute -bottom-4 -right-2 bg-white rounded-xl px-4 py-2.5 shadow-xl border border-slate-100"
            >
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold mb-0.5">Status</p>
                <p className="text-xs font-semibold text-[#1E3A8A] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
                    Open for commissions
                </p>
            </motion.div>
        </div>
    );
}

export default function HeroSection() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center overflow-hidden"
            style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E3A8A 50%, #0F172A 100%)" }}
        >
            {/* Background decorations */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden>
                {/* Subtle grid */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
                        backgroundSize: "80px 80px",
                    }}
                />
                {/* Pink glow bottom-left */}
                <div
                    className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(251,207,232,0.12) 0%, transparent 70%)" }}
                />
                {/* Bright blue glow top-right */}
                <div
                    className="absolute -top-32 right-0 w-[600px] h-[600px] rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)" }}
                />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center w-full pt-28">
                {/* ── LEFT: Text ── */}
                <div>
                    {/* Eyebrow badge */}
                    <motion.div
                        {...stagger(0.1)}
                        className="inline-flex items-center gap-2 mb-8"
                    >
                        <span className="w-8 h-px bg-[#FBCFE8]" />
                        <span className="text-[11px] font-semibold tracking-[0.22em] text-[#FBCFE8] uppercase">
                            Multi-disciplinary Artist
                        </span>
                    </motion.div>

                    {/* Hero headline */}
                    <div className="mb-6 overflow-hidden">
                        <motion.h1
                            className="font-serif leading-[1.08] text-white"
                            style={{ fontSize: "clamp(3rem, 6.5vw, 5.5rem)" }}
                        >
                            {["Transforming", "Every Surface", "into Art."].map((line, i) => (
                                <motion.span
                                    key={line}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.75, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                                    className="block"
                                    style={{
                                        fontStyle: i === 1 ? "italic" : "normal",
                                        fontWeight: i === 1 ? 400 : 700,
                                        color: i === 1 ? "#FBCFE8" : "white",
                                    }}
                                >
                                    {line}
                                </motion.span>
                            ))}
                        </motion.h1>
                    </div>

                    {/* Tagline */}
                    <motion.p
                        {...stagger(0.55)}
                        className="text-white/50 text-base leading-relaxed max-w-sm mb-10"
                    >
                        Filipino fine artist working across{" "}
                        {WORDS.map((w, i) => (
                            <span key={w}>
                                <span className="text-[#FBCFE8] font-medium">{w}</span>
                                {i < WORDS.length - 1 ? " · " : ""}
                            </span>
                        ))}
                        . Every surface is a canvas.
                    </motion.p>

                    {/* Medium pills */}
                    <motion.div
                        {...stagger(0.65)}
                        className="flex flex-wrap gap-2 mb-10"
                    >
                        {["Coffin Art", "Wall Murals", "Canvas", "Vector Art", "Graphic Branding"].map((m) => (
                            <span
                                key={m}
                                className="px-3 py-1.5 text-[11px] font-semibold tracking-wide uppercase rounded-full"
                                style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.15)" }}
                            >
                                {m}
                            </span>
                        ))}
                    </motion.div>

                    {/* CTAs */}
                    <motion.div {...stagger(0.75)} className="flex items-center gap-4">
                        <motion.button
                            onClick={() => document.querySelector("#gallery")?.scrollIntoView({ behavior: "smooth" })}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-7 py-3.5 text-[13px] font-bold tracking-wide uppercase rounded-full shadow-lg transition-all duration-200"
                            style={{ background: "#FBCFE8", color: "#1E3A8A" }}
                        >
                            View My Work
                        </motion.button>
                        <motion.button
                            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                            whileHover={{ scale: 1.05, x: 4 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 text-[13px] font-semibold text-white/70 uppercase tracking-wide group hover:text-white transition-colors"
                        >
                            Commission a Piece
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </motion.button>
                    </motion.div>
                </div>

                {/* ── RIGHT: Art Stack ── */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex justify-center lg:justify-end"
                >
                    <FloatingArtStack />
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
                onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-white/80 transition-colors"
            >
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold">Scroll</span>
                <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
                    <ArrowDown size={14} />
                </motion.div>
            </motion.button>
        </section>
    );
}
