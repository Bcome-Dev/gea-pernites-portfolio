"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Palette, PenTool, Layers, Camera } from "lucide-react";

const steps = [
    {
        num: "01",
        icon: Palette,
        title: "Discovery",
        phase: "Listening First",
        body: "Every piece begins with a conversation — about the subject, the space, the feeling you want to inhabit. I listen first. I sketch second. This phase is about understanding the soul of the work before a single brushstroke.",
        color: "#1E3A8A",
    },
    {
        num: "02",
        icon: PenTool,
        title: "Concept & Study",
        phase: "Drawing the Vision",
        body: "I develop thumbnail compositions, study color relationships, and sometimes create small material tests. I move freely between physical sketching and digital vector studies — whichever medium speaks to the piece.",
        color: "#4338CA",
    },
    {
        num: "03",
        icon: Layers,
        title: "Creation",
        phase: "Bringing It to Life",
        body: "Whether standing on a ladder with a brush, kneeling beside a casket, or working in Procreate at 2am — creation is deliberate, unhurried, and honest. This is where physical painting becomes digital vectors and back again.",
        color: "#7C3AED",
    },
    {
        num: "04",
        icon: Camera,
        title: "Delivery",
        phase: "The Final Gift",
        body: "Finished work is documented with archival photography and delivered with care. For commissions, I provide guidance on care, display, and preservation. The relationship doesn't end at delivery.",
        color: "#DB2777",
    },
];

function TimelineStep({
    s,
    i,
    isLast,
}: {
    s: (typeof steps)[0];
    i: number;
    isLast: boolean;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 0.85", "start 0.4"],
    });
    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const lineOpacity = useTransform(scrollYProgress, [0, 0.1], [0.2, 1]);

    const Icon = s.icon;

    return (
        <div ref={ref} className="relative flex gap-8">
            {/* Left column: timeline line + dot */}
            <div className="flex flex-col items-center" style={{ width: 48, minWidth: 48 }}>
                {/* Icon circle */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: i * 0.1, type: "spring", stiffness: 200 }}
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 z-10 shadow-lg"
                    style={{ background: s.color, boxShadow: `0 8px 24px ${s.color}44` }}
                >
                    <Icon size={20} color="white" />
                </motion.div>

                {/* Vertical line below icon */}
                {!isLast && (
                    <div className="relative w-0.5 flex-1 mt-2 bg-slate-100 overflow-hidden">
                        <motion.div
                            className="w-full absolute top-0 bottom-0"
                            style={{
                                height: lineHeight,
                                opacity: lineOpacity,
                                background: `linear-gradient(to bottom, ${s.color}, ${steps[i + 1]?.color ?? s.color})`,
                            }}
                        />
                    </div>
                )}
            </div>

            {/* Right column: content */}
            <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                    duration: 0.6,
                    delay: i * 0.1 + 0.1,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className={`pb-16 ${isLast ? "pb-0" : ""}`}
            >
                <div className="flex items-center gap-3 mb-2">
                    <span
                        className="text-[11px] font-bold tracking-[0.2em] uppercase"
                        style={{ color: s.color }}
                    >
                        {s.num} — {s.phase}
                    </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#0F172A] mb-3 leading-tight">
                    {s.title}
                </h3>
                <p className="text-slate-500 text-base leading-relaxed max-w-xl">{s.body}</p>
            </motion.div>
        </div>
    );
}

export default function ProcessTimeline() {
    return (
        <section id="process" className="py-28 bg-[#F8FAFC]">
            <div className="max-w-5xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 mb-20 items-end">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 mb-5"
                        >
                            <span className="w-8 h-px bg-[#1E3A8A]" />
                            <span className="text-[11px] font-bold tracking-[0.22em] text-[#1E3A8A] uppercase">
                                How I Work
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
                            A considered{" "}
                            <span className="italic font-light">creative process</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="text-slate-500 text-base leading-relaxed"
                    >
                        Art that lasts is art that is thought through. Here is how I move from
                        inquiry to finished work — journeying from physical painting to digital
                        vectors and back, regardless of medium.
                    </motion.p>
                </div>

                {/* Timeline */}
                <div>
                    {steps.map((s, i) => (
                        <TimelineStep key={s.num} s={s} i={i} isLast={i === steps.length - 1} />
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-16 p-8 bg-[#1E3A8A] rounded-2xl text-center"
                >
                    <p className="font-serif text-white text-xl font-semibold mb-2">
                        Ready to create something together?
                    </p>
                    <p className="text-blue-200 text-sm mb-6">
                        Every great work starts with a single conversation.
                    </p>
                    <motion.button
                        onClick={() =>
                            document
                                .querySelector("#contact")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95, rotate: "1deg" }}
                        className="px-8 py-3 bg-[#FBCFE8] text-[#1E3A8A] text-[13px] font-bold tracking-wide uppercase rounded-full hover:bg-white transition-colors duration-200"
                    >
                        Start the Conversation
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
