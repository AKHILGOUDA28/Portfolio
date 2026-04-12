"use client";

import { motion } from "framer-motion";

const skillCategories = [
  { title: "Languages", skills: ["Python", "Java"] },
  { title: "Backend", skills: ["Flask", "Django", "Django REST Framework", "REST APIs"] },
  { title: "Databases", skills: ["PostgreSQL", "MySQL", "SQLite"] },
  { title: "Frontend", skills: ["HTML", "CSS", "JavaScript", "React.js"] },
  { title: "AI / ML", skills: ["Machine Learning", "Deep Learning", "OpenCV"] },
  { title: "Data Analysis", skills: ["NumPy", "Pandas", "Matplotlib", "Data Cleaning"] },
  { title: "Tools & DevOps", skills: ["Git", "GitHub", "Docker", "Postman"] },
  { title: "Concepts", skills: ["OOP", "Data Structures", "API Integration", "Agile/Scrum"] },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-primary tracking-widest mb-2">{"// SKILLS"}</p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading">Technical Arsenal</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.08 }}
              className="p-5 rounded-xl border border-border bg-card shadow-card hover:border-primary/30 transition-colors"
            >
              <h3 className="font-mono text-xs text-primary mb-3 tracking-wider">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
