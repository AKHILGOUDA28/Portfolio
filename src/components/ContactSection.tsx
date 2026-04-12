"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-card/50">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <p className="font-mono text-sm text-primary tracking-widest mb-2">{"// CONTACT"}</p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Let's Connect</h2>
          <p className="text-muted-foreground mb-10">
            I'm always open to new opportunities and interesting projects.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="mailto:akhilgouda19@gmail.com"
            className="flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            <Mail className="w-4 h-4" /> akhilgouda19@gmail.com
          </a>
          <a
            href="tel:+917075239761"
            className="flex items-center gap-2 px-5 py-3 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors text-sm"
          >
            <Phone className="w-4 h-4 text-primary" /> +91-7075239761
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-4 mt-8"
        >
          <a href="https://github.com/AKHILGOUDA28" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/akhil-gouda/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      <div className="mt-20 text-center text-xs text-muted-foreground border-t border-border pt-8 max-w-6xl mx-auto">
        <p suppressHydrationWarning>© {new Date().getFullYear()} Gouda Akhil. Built with passion.</p>
      </div>
    </section>
  );
};

export default ContactSection;
