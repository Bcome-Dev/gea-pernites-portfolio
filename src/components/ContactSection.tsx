"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Instagram, Linkedin, Send, CheckCircle2 } from "lucide-react";

const socials = [
    {
        Icon: Instagram,
        href: "#",
        label: "Instagram",
        sub: "@geapernites",
        color: "#E1306C",
    },
    {
        Icon: Linkedin,
        href: "#",
        label: "LinkedIn",
        sub: "Gea V. Pernites",
        color: "#0A66C2",
    },
    {
        Icon: Mail,
        href: "mailto:hello@geapernites.com",
        label: "Email",
        sub: "hello@geapernites.com",
        color: "#1E3A8A",
    },
];

const services = [
    "Casket Painting",
    "Wall Mural",
    "Canvas Commission",
    "Digital Illustration",
    "Graphic Branding",
    "Other / Collaboration",
];

function fadeUp(delay = 0) {
    return {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" } as const,
        transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
    };
}

export default function ContactSection() {
    const [selectedService, setSelectedService] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        setSubmitted(true);
    };

    return (
        <section id="contact" className="py-28 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        {...fadeUp(0.05)}
                        className="flex items-center justify-center gap-3 mb-5"
                    >
                        <span className="w-8 h-px bg-[#1E3A8A]" />
                        <span className="text-[11px] font-bold tracking-[0.22em] text-[#1E3A8A] uppercase">
                            Get in Touch
                        </span>
                        <span className="w-8 h-px bg-[#1E3A8A]" />
                    </motion.div>
                    <motion.h2
                        {...fadeUp(0.1)}
                        className="font-serif text-[#0F172A] leading-tight mb-4"
                        style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
                    >
                        Let&apos;s Create{" "}
                        <span className="italic font-light">Something Together</span>
                    </motion.h2>
                    <motion.p {...fadeUp(0.16)} className="text-slate-500 text-base max-w-lg mx-auto">
                        Whether you have a commission in mind, a wall that needs a story, or
                        simply want to say hello — I&apos;d love to hear from you.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-5 gap-12">
                    {/* Left: Info */}
                    <motion.div {...fadeUp(0.1)} className="lg:col-span-2 space-y-10">
                        {/* Socials */}
                        <div>
                            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-slate-400 mb-5">
                                Find Me Online
                            </p>
                            <div className="space-y-3">
                                {socials.map(({ Icon, href, label, sub, color }) => (
                                    <motion.a
                                        key={label}
                                        href={href}
                                        whileHover={{ x: 4 }}
                                        className="flex items-center gap-4 p-3 rounded-xl bg-[#F8FAFC] hover:bg-[#EFF6FF] transition-colors group"
                                    >
                                        <div
                                            className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                                            style={{ background: `${color}15` }}
                                        >
                                            <Icon size={17} style={{ color }} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-[#0F172A] group-hover:text-[#1E3A8A] transition-colors">
                                                {label}
                                            </p>
                                            <p className="text-xs text-slate-400">{sub}</p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Info block */}
                        <div className="bg-[#F8FAFC] rounded-2xl p-6">
                            <p className="font-serif text-lg font-semibold text-[#1E3A8A] mb-3">
                                Commission Process
                            </p>
                            <p className="text-sm text-slate-500 leading-relaxed mb-4">
                                All commissions begin with a free 20-minute consultation. I&apos;m
                                currently accepting work for 2025–2026, with priority given to
                                meaningful and challenging briefs.
                            </p>
                            <div className="flex gap-2 items-center">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-sm font-semibold text-[#1E3A8A]">
                                    Open for commissions
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div {...fadeUp(0.18)} className="lg:col-span-3">
                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="h-full flex flex-col items-center justify-center text-center p-12 bg-[#EFF6FF] rounded-2xl border-2 border-[#BFDBFE]"
                            >
                                <CheckCircle2 size={48} className="text-[#1E3A8A] mb-4" />
                                <h3 className="font-serif text-2xl font-bold text-[#0F172A] mb-3">
                                    Message Sent!
                                </h3>
                                <p className="text-slate-500 mb-6">
                                    Thank you for reaching out. I&apos;ll get back to you within 48 hours.
                                </p>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setSubmitted(false)}
                                    className="px-6 py-2.5 bg-[#1E3A8A] text-white text-sm font-semibold rounded-full hover:bg-blue-800 transition-colors"
                                >
                                    Send Another
                                </motion.button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                {/* Name + Email */}
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-[11px] font-bold tracking-[0.15em] uppercase text-slate-500">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={form.name}
                                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                                            placeholder="Your name"
                                            className="w-full px-4 py-3 bg-[#F8FAFC] border border-slate-200 rounded-xl text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#BFDBFE] transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[11px] font-bold tracking-[0.15em] uppercase text-slate-500">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={form.email}
                                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                                            placeholder="your@email.com"
                                            className="w-full px-4 py-3 bg-[#F8FAFC] border border-slate-200 rounded-xl text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#BFDBFE] transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Service selection */}
                                <div className="space-y-2">
                                    <label className="text-[11px] font-bold tracking-[0.15em] uppercase text-slate-500">
                                        What Can I Help You With?
                                    </label>
                                    <div className="flex flex-wrap gap-2">
                                        {services.map((s) => (
                                            <motion.button
                                                key={s}
                                                type="button"
                                                whileHover={{ scale: 1.04 }}
                                                whileTap={{ scale: 0.96 }}
                                                onClick={() => setSelectedService(s)}
                                                className={`px-3.5 py-2 text-[11px] font-bold uppercase tracking-wide rounded-full transition-all duration-200 border ${selectedService === s
                                                        ? "bg-[#1E3A8A] text-[#FBCFE8] border-[#1E3A8A]"
                                                        : "bg-white text-slate-500 border-slate-200 hover:border-[#1E3A8A] hover:text-[#1E3A8A]"
                                                    }`}
                                            >
                                                {s}
                                            </motion.button>
                                        ))}
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="space-y-2">
                                    <label className="text-[11px] font-bold tracking-[0.15em] uppercase text-slate-500">
                                        Tell Me About Your Project *
                                    </label>
                                    <textarea
                                        required
                                        rows={5}
                                        value={form.message}
                                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                                        placeholder="Describe what you have in mind — the more detail, the better."
                                        className="w-full px-4 py-3 bg-[#F8FAFC] border border-slate-200 rounded-xl text-sm text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#BFDBFE] transition-all resize-none"
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.96, rotate: "1deg" }}
                                    className="w-full py-3.5 bg-[#1E3A8A] text-white font-bold text-[13px] tracking-wide uppercase rounded-full shadow-lg hover:shadow-xl hover:bg-blue-800 transition-all duration-200 flex items-center justify-center gap-2"
                                >
                                    <Send size={15} />
                                    Send Message
                                </motion.button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
