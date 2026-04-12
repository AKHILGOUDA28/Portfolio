"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science Engineering",
    school: "SR University",
    score: "CGPA: 8.1",
    icon: GraduationCap,
  },
  {
    degree: "Diploma – Civil Engineering",
    school: "Government Polytechnic, Station Ghanpur",
    period: "2020 – 2023",
    score: "CGPA: 8.3 / 10",
    icon: GraduationCap,
  },
  {
    degree: "SSC",
    school: "Sharadha Vidhyalam High School",
    period: "2019 – 2020",
    score: "CGPA: 10.0",
    icon: GraduationCap,
  },
];

const certifications = [
  "Infosys Springboard – Programming Fundamentals using Python - Part 1",
  "Infosys Springboard – Programming Fundamentals using Python - Part 2",
  "Infosys Springboard – Python Foundation Certification",
  "Infosys Springboard – Object Oriented Programming using Python",
  "12-Hour Programming Hackathon – Certificate of Participation (SR University, Sep 2023)",
  "AWS Academy Graduate – AWS Academy Cloud Foundations",
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-primary tracking-widest mb-2">{"// EDUCATION"}</p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading">Education & Certifications</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl border border-border bg-card shadow-card"
            >
              <edu.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-bold font-heading mb-1">{edu.degree}</h3>
              <p className="text-sm text-muted-foreground mb-2">{edu.school}</p>
              {edu.period && <p className="text-xs text-muted-foreground mb-1">{edu.period}</p>}
              <p className="font-mono text-sm text-primary font-medium">{edu.score}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          className="p-6 rounded-xl border border-border bg-card shadow-card"
        >
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-6 h-6 text-primary" />
            <h3 className="font-bold font-heading">Certifications</h3>
          </div>
          <ul className="space-y-3">
            {certifications.map((cert) => (
              <li key={cert} className="text-sm text-muted-foreground pl-4 relative before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-primary">
                {cert}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
