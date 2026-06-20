"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const LazyEmbed = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="min-h-[300px] flex items-center justify-center bg-muted/10 rounded-lg">
      {isVisible ? children : <div className="animate-pulse text-muted-foreground font-mono text-sm">Loading Preview...</div>}
    </div>
  );
};

const projects = [
  {
    title: "PathOfGoals",
    subtitle: "AI-Powered Personalized Learning Roadmap Platform",
    tech: ["Django REST Framework", "PostgreSQL", "Groq API", "React"],
    link: "https://github.com/AKHILGOUDA28/PathOfGoals",
    points: [
      "Designed scalable backend using Django REST Framework for auth, roadmap generation, and progress tracking.",
      "Integrated Groq LLM API (Llama 3) for dynamic syllabus and curated resources.",
      "Modeled normalized relational schema (Roadmaps → Subjects → Topics → Tests → Progress) in PostgreSQL.",
      "Developed AI-powered mock test engine with automated scoring and performance analytics.",
    ],
  },
  {    title: "Collaborative Task & Project Management System",
    subtitle: "Flask, HTML, CSS, PostgreSQL",
    tech: ["Flask", "HTML", "CSS", "PostgreSQL"],
    link: "https://github.com/AKHILGOUDA28/Team-Task-Manager",
    points: [
      "Developed a complete web application for project management using Python (Flask) with multi-tenancy and team collaboration features.",
      "Implemented role-based access control (RBAC) using Flask-Login for secure user authentication and permission handling.",
      "Designed a real-time dashboard to display task status, including active, overdue, and completed tasks.",
      "Utilized PostgreSQL to ensure efficient data management and maintain relational integrity.",
    ],
  },
  {    title: "Early Detection of Diabetic Retinopathy",
    subtitle: "AI Healthcare System (Team Project)",
    tech: ["Flask", "Python", "OpenCV", "Deep Learning", "EfficientNet-B0"],
    link: "https://github.com/AKHILGOUDA28/early-detection-DR-Capstone-Project",
    points: [
      "Built a deep learning model using EfficientNet-B0 to classify stages of diabetic retinopathy from retinal fundus images.",
      "Developed a Flask-based web app enabling secure image upload and real-time prediction.",
      "Designed an image preprocessing pipeline using OpenCV with resizing, normalization, and contrast enhancement.",
      "Integrated preprocessing pipeline with trained model for multi-class classification.",
    ],
  },
  {
    title: "Credit Approval System",
    subtitle: "Backend Loan Management",
    tech: ["Flask", "PostgreSQL", "Docker"],
    link: "https://github.com/AKHILGOUDA28/credit-approval-system",
    points: [
      "Developed backend system for customer registration and credit eligibility calculation.",
      "Implemented RESTful APIs to create, approve, and manage loans.",
      "Designed secure endpoints: /register, /check-eligibility, /create-loan.",
      "Modeled relational database schema to manage customers, loans, and repayment data.",
    ],
  },
  {
    title: "EEG-Based Mental State Classification",
    subtitle: "Feature Selection and Machine Learning",
    tech: ["Python", "Scikit-learn", "XGBoost", "Data Science", "MLP"],
    link: "https://github.com/AKHILGOUDA28/Mental-state-detection-",
    points: [
      "Developed a machine learning model to classify mental states using EEG brainwave features with high-dimensional data (988 features).",
      "Performed data preprocessing including duplicate removal, feature scaling, and label encoding to ensure data quality and consistency.",
      "Implemented and compared models such as Multilayer Perceptron (MLP) and XGBoost, achieving improved performance with XGBoost.",
      "Applied permutation-based feature importance to reduce dimensionality from 988 to 50 features, improving efficiency without loss of accuracy.",
      "Evaluated models using Stratified 5-Fold Cross-Validation and achieved a final accuracy of 97.38% with the optimized XGBoost model.",
      "Conducted statistical validation using paired t-test and Cohen’s d to ensure reliability and significance of results.",
    ],
  },
  {
    title: "MyGym",
    subtitle: "Daily Workout Planner",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://akhilgouda28.github.io/mygym/",
    points: [
      "Developed a frontend gym workout planner that provides daily exercise schedules and guided routines.",
      "Implemented interactive workout cards displaying exercise names, reps, and sets.",
      "Designed a responsive and user-friendly interface using HTML, CSS, and JavaScript.",
      "Improved user engagement by organizing workouts into day-wise muscle group plans.",
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-primary tracking-widest mb-2">{"// PROJECTS"}</p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading">Featured Work</h2>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 md:p-8 rounded-xl border border-border bg-background shadow-card hover:shadow-glow transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                <div className="w-full">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                    <div>
                      <h3 className="text-xl font-bold font-heading">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-primary hover:underline shrink-0"
                    >
                      <ExternalLink className="w-4 h-4" /> 
                      {project.link.includes("github.io") ? "Live Demo" : "View on GitHub"}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span key={t} className="font-mono text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary">
                    {t}
                  </span>
                ))}
              </div>

              <ul className="space-y-3">
                {project.points.map((point, j) => (
                  <li key={j} className="text-sm text-muted-foreground leading-relaxed pl-4 relative before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-primary">
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
