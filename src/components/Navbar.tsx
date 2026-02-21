"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
    { label: "Work", href: "#gallery" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("");

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", fn, { passive: true });
        return () => window.removeEventListener("scroll", fn);
    }, []);

    const goto = (href: string) => {
        setMenuOpen(false);
        setActiveLink(href);
        setTimeout(
            () => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }),
            80
        );
    };

    return (
        <>
            <motion.header
                initial={{ y: -64, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled
                        ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-sm"
                        : "bg-transparent border-b border-transparent"
                    }`}
            >
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    {/* Logo / Wordmark */}
                    <motion.button
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="font-serif text-lg font-semibold text-[#1E3A8A] tracking-wide"
                    >
                        Gea V. Pernites
                    </motion.button>

                    {/* Desktop nav — centered */}
                    <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
                        {links.map((l) => (
                            <motion.button
                                key={l.label}
                                onClick={() => goto(l.href)}
                                whileHover={{ y: -1 }}
                                whileTap={{ y: 1 }}
                                className={`relative px-4 py-2 text-[13px] font-medium tracking-wider uppercase transition-colors duration-200 rounded-md ${activeLink === l.href
                                        ? "text-[#1E3A8A]"
                                        : "text-slate-500 hover:text-[#1E3A8A]"
                                    }`}
                            >
                                {l.label}
                                {activeLink === l.href && (
                                    <motion.span
                                        layoutId="nav-dot"
                                        className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#1E3A8A] rounded-full"
                                    />
                                )}
                            </motion.button>
                        ))}
                    </nav>

                    {/* CTA */}
                    <div className="hidden md:flex items-center gap-3">
                        <motion.button
                            onClick={() => goto("#contact")}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95, rotate: "1deg" }}
                            className="px-5 py-2 bg-[#1E3A8A] text-white text-[13px] font-semibold tracking-wide uppercase rounded-full shadow-md hover:shadow-lg hover:bg-blue-800 transition-all duration-200"
                        >
                            Get in Touch
                        </motion.button>
                    </div>

                    {/* Hamburger */}
                    <button
                        onClick={() => setMenuOpen((v) => !v)}
                        className="md:hidden text-[#1E3A8A] p-1"
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </motion.header>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <>
                        <motion.div
                            key="backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-40 bg-[#0F172A]/40 backdrop-blur-sm md:hidden"
                            onClick={() => setMenuOpen(false)}
                        />
                        <motion.div
                            key="panel"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 28, stiffness: 300 }}
                            className="fixed right-0 top-0 bottom-0 z-50 bg-white w-72 flex flex-col pt-20 pb-8 px-7 md:hidden shadow-2xl"
                        >
                            <div className="mb-6">
                                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-medium mb-4">
                                    Navigate
                                </p>
                                {links.map((l, i) => (
                                    <motion.button
                                        key={l.label}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.06 }}
                                        onClick={() => goto(l.href)}
                                        className="flex items-center w-full py-3 text-lg font-medium text-slate-700 border-b border-slate-100 last:border-0 hover:text-[#1E3A8A] transition-colors"
                                    >
                                        {l.label}
                                    </motion.button>
                                ))}
                            </div>
                            <motion.button
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.28 }}
                                onClick={() => goto("#contact")}
                                className="mt-auto py-3.5 text-center text-sm font-semibold text-white bg-[#1E3A8A] rounded-full hover:bg-blue-800 transition-colors uppercase tracking-wide"
                            >
                                Get in Touch
                            </motion.button>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
