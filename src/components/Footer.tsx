"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail, Heart } from "lucide-react";

const navLinks = [
    { label: "Work", href: "#gallery" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
];

const socials = [
    { Icon: Instagram, href: "#", label: "Instagram" },
    { Icon: Linkedin, href: "#", label: "LinkedIn" },
    { Icon: Mail, href: "mailto:hello@geapernites.com", label: "Email" },
];

const mediums = ["Coffin Art", "Wall Murals", "Canvas", "Digital Art", "Graphic Branding"];

export default function Footer() {
    const goto = (href: string) =>
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

    return (
        <footer className="bg-[#0F172A] text-white">
            {/* Top accent bar */}
            <div className="h-1 bg-gradient-to-r from-[#1E3A8A] via-[#FBCFE8] to-[#7C3AED]" />

            <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <motion.button
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            whileHover={{ scale: 1.02 }}
                            className="font-serif text-2xl font-bold text-white hover:text-[#FBCFE8] transition-colors mb-4 block"
                        >
                            Gea V. Pernites
                        </motion.button>
                        <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-6">
                            Multi-disciplinary Filipino fine artist working across physical and digital
                            mediums. Manila, Philippines — open to commissions worldwide.
                        </p>

                        {/* Mediums marquee */}
                        <div className="flex flex-wrap gap-1.5">
                            {mediums.map((m) => (
                                <span
                                    key={m}
                                    className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 border border-white/10 text-white/40 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}
                                >
                                    {m}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold mb-5">
                            Navigate
                        </p>
                        <ul className="space-y-3">
                            {navLinks.map((l) => (
                                <li key={l.label}>
                                    <motion.button
                                        onClick={() => goto(l.href)}
                                        whileHover={{ x: 3 }}
                                        className="text-sm text-white/50 hover:text-white transition-colors"
                                    >
                                        {l.label}
                                    </motion.button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold mb-5">
                            Connect
                        </p>
                        <div className="flex gap-2 mb-5">
                            {socials.map(({ Icon, href, label }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    whileHover={{ y: -3, scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-9 h-9 border border-white/15 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:border-[#FBCFE8] hover:bg-[#FBCFE8]/10 transition-all"
                                >
                                    <Icon size={15} />
                                </motion.a>
                            ))}
                        </div>
                        <p className="text-xs text-white/30 mb-1">hello@geapernites.com</p>
                        <div className="flex items-center gap-1.5 mt-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-xs text-white/40 font-medium">Open for commissions</span>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-[11px] text-white/25">
                        © {new Date().getFullYear()} Gea V. Pernites. All rights reserved.
                    </p>
                    <p className="text-[11px] text-white/20 font-serif italic flex items-center gap-1.5">
                        Made with <Heart size={10} className="text-[#FBCFE8]/50" /> Art without walls or limits
                    </p>
                </div>
            </div>
        </footer>
    );
}
