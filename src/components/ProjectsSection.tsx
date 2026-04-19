"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
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
    tech: ["Django REST Framework", "PostgreSQL", "Groq API", "YouTube API", "React"],
    link: "https://github.com/AKHILGOUDA28/PathOfGoals",
    embed: (
      <LazyEmbed>
        <iframe 
          src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7430688884096679936?compact=1" 
          height="399" 
          width="100%" 
          frameBorder="0" 
          allowFullScreen={true} 
          title="Embedded post"
          className="rounded-lg border border-border"
        ></iframe>
      </LazyEmbed>
    ),
    points: [
      "Designed scalable backend using Django REST Framework for auth, roadmap generation, and progress tracking.",
      "Integrated Groq LLM API (Llama 3) and YouTube Data API for dynamic syllabus and curated resources.",
      "Modeled normalized relational schema (Roadmaps → Subjects → Topics → Tests → Progress) in PostgreSQL.",
      "Developed AI-powered mock test engine with automated scoring and performance analytics.",
    ],
  },
  {
    title: "Early Detection of Diabetic Retinopathy",
    subtitle: "AI Healthcare System (Team Project)",
    tech: ["Flask", "Python", "OpenCV", "Deep Learning", "EfficientNet-B0"],
    link: "https://github.com/AKHILGOUDA28/early-detection-DR-Capstone-Project",
    embed: (
      <LazyEmbed>
        <div className="relative w-full pt-[56.25%]">
          <iframe 
            className="absolute inset-0 w-full h-full rounded-lg border border-border"
            src="https://www.youtube.com/embed/S7ldgT2y7hI?autoplay=1&mute=1&loop=1&playlist=S7ldgT2y7hI" 
            title="ET hackathon" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
          ></iframe>
        </div>
      </LazyEmbed>
    ),
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
    embed: (
      <LazyEmbed>
        <iframe 
          src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7398745067940687874?compact=1" 
          height="399" 
          width="100%" 
          frameBorder="0" 
          allowFullScreen={true} 
          title="Embedded post"
          className="rounded-lg border border-border"
        ></iframe>
      </LazyEmbed>
    ),
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
    embed: (
      <LazyEmbed>
        <div className="relative w-full aspect-[4/3]">
          <Image 
            src="https://media.licdn.com/dms/image/v2/D5622AQGyIHFqd7IlNg/feedshare-shrink_2048_1536/B56Z0RJjKSKkAk-/0/1774109209539?e=1777507200&v=beta&t=X0CJq0dd5D4YCXd7vapP5p_b5NgrsZyoikvt1Lqfn8Q" 
            alt="EEG Project" 
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="rounded-lg border border-border object-cover"
          />
        </div>
      </LazyEmbed>
    ),
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
    subtitle: "Daily Workout Planner with YouTube Video Guidance",
    tech: ["HTML", "CSS", "JavaScript", "YouTube API"],
    link: "https://akhilgouda28.github.io/mygym/",
    embed: (
      <LazyEmbed>
        <div className="relative w-full aspect-video">
          <Image 
            src="https://media.licdn.com/dms/image/v2/D4E22AQE3UhY2bk3gTQ/feedshare-shrink_800/B4EZV7JpwSGwAg-/0/1741527884696?e=1777507200&v=beta&t=6i9XVjOv4GD6EG04JH36DXBomyNSqlJHM4XxJ3V0NHk" 
            alt="MyGym Project" 
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="rounded-lg border border-border object-cover"
          />
        </div>
      </LazyEmbed>
    ),
    points: [
      "Developed a frontend gym workout planner that provides daily exercise schedules with YouTube-based visual guidance.",
      "Implemented interactive workout cards displaying exercise names, reps, sets, and embedded tutorial videos.",
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
                  {project.embed && (
                    <div className="my-6 overflow-hidden max-w-full">
                      {project.embed}
                    </div>
                  )}
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
