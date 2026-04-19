"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import { Github, Linkedin, Mail, Phone, MapPin, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profilePic from "@/assets/Akhil.png";

const TypingAnimation = ({ words }: { words: string[] }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 40 : subIndex === words[index].length ? 0 : 80, 30));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span>
      {`${words[index].substring(0, subIndex)}`}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {heroBg && (
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <Image
            src={heroBg}
            alt="Hero Background"
            fill
            sizes="100vw"
            priority
            className="object-cover opacity-30 pointer-events-none"
            quality={60}
          />
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-mono text-sm tracking-widest text-primary mb-4"
        >
          {"// SOFTWARE ENGINEER"}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-7xl font-bold font-heading mb-2"
        >
          Gouda <span className="text-gradient">Akhil</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="relative inline-block mt-2 mb-4"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-8 border-primary/10 p-2.5 bg-gradient-to-tr from-primary/40 via-transparent to-secondary/40 shadow-2xl shadow-primary/10">
            <div className="w-full h-full rounded-full border-4 border-primary/50 overflow-hidden bg-muted relative group">
              <Image
                src={profilePic}
                alt="Gouda Akhil"
                fill
                sizes="(max-width: 768px) 256px, 320px"
                className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
          <div className="absolute inset-0 -z-10 bg-primary/20 blur-[120px] rounded-full scale-[2] opacity-30 animate-pulse" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-2xl font-mono mb-6 min-h-[4rem]"
        >
          <span className="text-muted-foreground italic">I&apos;m Skilled In </span>
          <span className="text-primary font-bold">
            <TypingAnimation 
              words={[
                "Python Backend Development",
                "Django & Flask",
                "MySQL & PostgreSQL",
                "REST API Design",
                "AI/ML Integration"
              ]} 
            />
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-2 text-muted-foreground text-sm mb-6"
        >
          <MapPin className="w-4 h-4 text-primary" />
          <span>Warangal, India</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="https://drive.google.com/file/d/1dphy2WmmzuErpybx8NzJU5UC1Pbd1M7D/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            <Download className="w-4 h-4" /> Download Resume
          </a>
          <a
            href="mailto:akhilgouda19@gmail.com"
            className="flex items-center gap-2 px-5 py-3 rounded-lg border border-primary text-primary font-medium hover:bg-primary/10 transition-colors"
          >
            <Mail className="w-4 h-4" /> Contact Me
          </a>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/AKHILGOUDA28"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/akhil-gouda/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="tel:+917075239761"
              className="p-3 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-9 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
