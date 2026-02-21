"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import ProcessTimeline from "@/components/ProcessTimeline";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

function CursorFollower() {
  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);
  const [visible, setVisible] = useState(false);

  const springConfig = { damping: 22, stiffness: 200, mass: 0.5 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX - 18);
      cursorY.set(e.clientY - 18);
      if (!visible) setVisible(true);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [cursorX, cursorY, visible]);

  return (
    <motion.div
      id="cursor-follower"
      style={{ x, y, opacity: visible ? 0.6 : 0 }}
      className="w-9 h-9 rounded-full border-2 border-pink-300"
    />
  );
}

export default function Home() {
  return (
    <>
      <CursorFollower />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        <HeroSection />
        <AboutSection />
        <Gallery />
        <Services />
        <ProcessTimeline />
        <ContactSection />
        <Footer />
      </motion.main>
    </>
  );
}
