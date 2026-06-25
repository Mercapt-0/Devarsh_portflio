"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  MapPin,
  Mail,
  Phone,
  Github,
  Linkedin,
  GraduationCap,
  Briefcase,
  Brain,
  Database,
  Cloud,
  Award,
  ArrowUpRight,
  Cpu,
  Code2,
  Sparkles,
  Eye,
  ChevronRight,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

function GlassCard({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      id={id}
      className={`glass group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/5 ${className}`}
    >
      {children}
    </motion.div>
  );
}

function SkillPill({ name }: { name: string }) {
  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className="inline-block cursor-default rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-300 transition-all duration-200 hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-purple-200"
    >
      {name}
    </motion.span>
  );
}

function SectionLabel({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div className="mb-4 flex items-center gap-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/10">
        <Icon className="h-4 w-4 text-purple-400" />
      </div>
      <span className="text-sm font-medium uppercase tracking-wider text-purple-400">
        {label}
      </span>
    </div>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="text-sm text-gray-400 transition-colors hover:text-white"
    >
      {label}
    </a>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#030014] text-white">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] animate-float rounded-full bg-purple-600/15 blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] animate-float-delayed rounded-full bg-blue-600/15 blur-[128px]" />
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] animate-pulse-glow rounded-full bg-indigo-600/10 blur-[100px]" />
      </div>

      {/* Floating Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="fixed left-1/2 top-5 z-50 -translate-x-1/2"
      >
        <div className="glass flex items-center gap-1 rounded-full px-2 py-2 sm:gap-2 sm:px-4">
          <NavLink href="#about" label="About" />
          <NavLink href="#experience" label="Experience" />
          <NavLink href="#skills" label="Skills" />
          <NavLink href="#projects" label="Projects" />
          <a
            href="#contact"
            className="ml-1 rounded-full bg-purple-600/80 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-purple-500"
          >
            Contact
          </a>
        </div>
      </motion.nav>

      {/* Bento Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="mx-auto grid max-w-6xl auto-rows-min grid-cols-1 gap-4 px-4 pb-16 pt-28 md:grid-cols-2 lg:grid-cols-4"
      >
        {/* ===== ROW 1-2: HERO + IMAGE + QUICK INFO ===== */}

        {/* Hero Card */}
        <GlassCard className="flex flex-col justify-center md:col-span-2 lg:row-span-2">
          <div id="about" className="scroll-mt-24">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-2 text-sm text-gray-400"
            >
              Hey there, I&apos;m
            </motion.p>
            <h1 className="gradient-text mb-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Devarsh Soni
            </h1>
            <p className="mb-4 text-lg font-medium text-gray-300">
              ML Engineer &amp; Computer Scientist
            </p>
            <p className="mb-6 max-w-lg text-sm leading-relaxed text-gray-400">
              MS Computer Science candidate at UT Arlington with hands-on
              experience deploying production machine learning and computer
              vision systems. Skilled in Python, PyTorch, TensorFlow, and
              building end-to-end AI pipelines.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/mercapt-0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm transition-all hover:border-purple-500/30 hover:bg-purple-500/10"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/devarsh-soni-16n31/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm transition-all hover:border-purple-500/30 hover:bg-purple-500/10"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="mailto:sonidevarsh1155@gmail.com"
                className="flex items-center gap-2 rounded-full bg-purple-600/80 px-4 py-2 text-sm font-medium transition-colors hover:bg-purple-500"
              >
                <Mail className="h-4 w-4" />
                Get in Touch
              </a>
            </div>
          </div>
        </GlassCard>

        {/* Profile Image Card */}
        <GlassCard className="flex items-center justify-center lg:row-span-2">
          <div className="relative">
            <div className="absolute -inset-4 animate-pulse-glow rounded-full bg-gradient-to-br from-purple-500/30 to-blue-500/30 blur-xl" />
            <div className="relative h-48 w-48 overflow-hidden rounded-full border-2 border-white/10 sm:h-56 sm:w-56">
              <Image
                src="/devarshh-modified.png"
                alt="Devarsh Soni"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </GlassCard>

        {/* Stats Card */}
        <GlassCard className="flex flex-col justify-between">
          <SectionLabel icon={Award} label="Highlights" />
          <div className="space-y-3">
            <div>
              <p className="text-2xl font-bold text-white">3.5<span className="text-sm font-normal text-gray-400">/4.0</span></p>
              <p className="text-xs text-gray-500">B.Tech GPA</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">10K+</p>
              <p className="text-xs text-gray-500">Images Annotated</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">20%</p>
              <p className="text-xs text-gray-500">Detection Accuracy Boost</p>
            </div>
          </div>
        </GlassCard>

        {/* Location Card */}
        <GlassCard>
          <SectionLabel icon={MapPin} label="Location" />
          <p className="text-lg font-semibold text-white">Arlington, TX</p>
          <p className="mt-1 text-sm text-gray-400">University of Texas at Arlington</p>
          <div className="mt-4 flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 w-fit">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-xs text-emerald-300">Open to Internships</span>
          </div>
        </GlassCard>

        {/* ===== ROW 3: EXPERIENCE + EDUCATION ===== */}

        {/* Experience Card */}
        <GlassCard className="md:col-span-2" id="experience">
          <div className="scroll-mt-24">
            <SectionLabel icon={Briefcase} label="Experience" />
            <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Machine Learning Engineer Intern
                </h3>
                <p className="text-sm text-purple-300">BISAG-N</p>
                <p className="text-xs text-gray-500">
                  Bhaskaracharya Institute for Space Research &amp; Geo-Informatics
                </p>
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-400">
                Dec 2024 — Apr 2025
              </span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li className="flex gap-2">
                <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-purple-400" />
                <span>
                  Built automated aerial-surveillance CV pipeline using{" "}
                  <span className="text-gray-200">YOLOv8 &amp; Faster R-CNN</span>{" "}
                  to detect aircraft, tanks, and vehicles in satellite imagery
                </span>
              </li>
              <li className="flex gap-2">
                <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-purple-400" />
                <span>
                  Improved detection accuracy by{" "}
                  <span className="text-gray-200">20%</span> through advanced
                  preprocessing, augmentation, and hyperparameter tuning
                </span>
              </li>
              <li className="flex gap-2">
                <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-purple-400" />
                <span>
                  Curated &amp; annotated{" "}
                  <span className="text-gray-200">10,000+ image</span> dataset
                  with LabelImg &amp; Roboflow for model evaluation
                </span>
              </li>
            </ul>
          </div>
        </GlassCard>

        {/* Education Card */}
        <GlassCard className="md:col-span-2">
          <SectionLabel icon={GraduationCap} label="Education" />
          <div className="space-y-5">
            <div className="relative border-l-2 border-purple-500/30 pl-5">
              <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full border-2 border-purple-500 bg-[#030014]" />
              <h3 className="font-semibold text-white">
                University of Texas at Arlington
              </h3>
              <p className="text-sm text-purple-300">
                M.S. Computer Science
              </p>
              <p className="text-xs text-gray-500">
                Aug 2025 — May 2027 &nbsp;|&nbsp; GPA: 3.3/4.0
              </p>
              <p className="mt-1 text-xs text-gray-400">
                Advanced Algorithms, Data Analysis, Database Systems, Computer
                Vision, AI
              </p>
            </div>
            <div className="relative border-l-2 border-blue-500/30 pl-5">
              <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full border-2 border-blue-500 bg-[#030014]" />
              <h3 className="font-semibold text-white">
                ITM, SLS Baroda University
              </h3>
              <p className="text-sm text-blue-300">
                B.Tech, Computer Science Engineering
              </p>
              <p className="text-xs text-gray-500">
                Aug 2021 — May 2025 &nbsp;|&nbsp; GPA: 3.5/4.0
              </p>
            </div>
          </div>
        </GlassCard>

        {/* ===== ROW 4: SKILLS ===== */}

        {/* Skills - ML/DL */}
        <GlassCard id="skills">
          <div className="scroll-mt-24">
            <SectionLabel icon={Brain} label="ML / Deep Learning" />
            <div className="flex flex-wrap gap-2">
              {[
                "PyTorch",
                "TensorFlow",
                "Keras",
                "Scikit-learn",
                "OpenCV",
                "YOLOv8",
                "Faster R-CNN",
                "DeepLabV3+",
                "CNNs",
                "CUDA",
              ].map((s) => (
                <SkillPill key={s} name={s} />
              ))}
            </div>
          </div>
        </GlassCard>

        {/* Skills - LLMs */}
        <GlassCard>
          <SectionLabel icon={Sparkles} label="LLMs & Gen AI" />
          <div className="flex flex-wrap gap-2">
            {[
              "RAG",
              "LLM Fine-tuning",
              "Prompt Engineering",
              "Vector Search",
              "Embeddings",
              "Hugging Face",
              "Transformers",
            ].map((s) => (
              <SkillPill key={s} name={s} />
            ))}
          </div>
        </GlassCard>

        {/* Skills - Data Engineering */}
        <GlassCard>
          <SectionLabel icon={Database} label="Data & Databases" />
          <div className="flex flex-wrap gap-2">
            {[
              "PostgreSQL",
              "MySQL",
              "MongoDB",
              "Apache Spark",
              "Hadoop",
              "Kafka",
              "REST APIs",
              "Oracle SQL",
              "PL/SQL",
            ].map((s) => (
              <SkillPill key={s} name={s} />
            ))}
          </div>
        </GlassCard>

        {/* Skills - Cloud & Tools */}
        <GlassCard>
          <SectionLabel icon={Cloud} label="Cloud & Tools" />
          <div className="flex flex-wrap gap-2">
            {[
              "AWS",
              "GCP (Certified)",
              "Git",
              "GitHub",
              "Linux",
              "Jupyter",
              "Tableau",
              "Power BI",
              "Docker",
            ].map((s) => (
              <SkillPill key={s} name={s} />
            ))}
          </div>
        </GlassCard>

        {/* ===== ROW 5: LANGUAGES + CERT ===== */}

        {/* Programming Languages */}
        <GlassCard className="md:col-span-2">
          <SectionLabel icon={Code2} label="Languages" />
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
            {[
              { name: "Python", pct: 95 },
              { name: "JavaScript", pct: 75 },
              { name: "SQL", pct: 85 },
              { name: "HTML/CSS", pct: 80 },
              { name: "Bash", pct: 70 },
              { name: "C++", pct: 60 },
            ].map((lang) => (
              <div key={lang.name} className="text-center">
                <div className="relative mx-auto mb-2 h-14 w-14">
                  <svg className="h-14 w-14 -rotate-90" viewBox="0 0 56 56">
                    <circle
                      cx="28"
                      cy="28"
                      r="24"
                      fill="none"
                      stroke="rgba(255,255,255,0.05)"
                      strokeWidth="4"
                    />
                    <circle
                      cx="28"
                      cy="28"
                      r="24"
                      fill="none"
                      stroke="url(#grad)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeDasharray={`${(lang.pct / 100) * 150.8} 150.8`}
                    />
                    <defs>
                      <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#a855f7" />
                        <stop offset="100%" stopColor="#3b82f6" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white">
                    {lang.pct}
                  </span>
                </div>
                <p className="text-xs text-gray-400">{lang.name}</p>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Certification Card */}
        <GlassCard className="flex flex-col items-center justify-center text-center md:col-span-2">
          <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20">
            <Award className="h-7 w-7 text-yellow-400" />
          </div>
          <h3 className="font-semibold text-white">Google Cloud Certified</h3>
          <p className="mt-1 text-sm text-gray-400">
            Cloud Digital Leader
          </p>
          <a
            href="#"
            className="mt-3 flex items-center gap-1 text-sm text-purple-400 transition-colors hover:text-purple-300"
          >
            View Credential <ArrowUpRight className="h-3 w-3" />
          </a>
        </GlassCard>

        {/* ===== ROW 6: PROJECTS ===== */}

        {/* Project 1 - Vision-CBF */}
        <GlassCard className="md:col-span-2" id="projects">
          <div className="scroll-mt-24">
            <SectionLabel icon={Eye} label="Featured Project" />
            <div className="mb-2 flex items-start justify-between">
              <h3 className="text-lg font-semibold text-white">
                Vision-CBF: Semantic Segmentation for Autonomous Vehicles
              </h3>
              <a
                href="https://github.com/Mercapt-0/vision-cbf-safe-nav"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-purple-400 transition-colors hover:text-purple-300"
              >
                <Github className="h-4 w-4" />
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
            <div className="mb-4 flex flex-wrap gap-2">
              {["PyTorch", "DeepLabV3+", "CARLA", "OpenCV", "NVIDIA A100"].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-md bg-purple-500/10 px-2 py-0.5 text-xs text-purple-300"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex gap-2">
                <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-purple-400" />
                <span>
                  Fine-tuned DeepLabV3+ on 15K+ CARLA images achieving{" "}
                  <span className="font-semibold text-white">96.1% pixel accuracy</span>{" "}
                  and <span className="font-semibold text-white">73.9% mIoU</span>
                </span>
              </li>
              <li className="flex gap-2">
                <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-purple-400" />
                <span>
                  Integrated into depth-fused safety pipeline achieving{" "}
                  <span className="font-semibold text-white">98.75% free-space IoU</span>{" "}
                  for collision avoidance
                </span>
              </li>
              <li className="flex gap-2">
                <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-purple-400" />
                <span>
                  Designed two-phase training with discriminative learning rates
                  and Dice + Cross-Entropy loss for class imbalance
                </span>
              </li>
            </ul>
          </div>
        </GlassCard>

        {/* Project 2 - Optics Retail */}
        <GlassCard className="md:col-span-2">
          <SectionLabel icon={Database} label="Project" />
          <div className="mb-2 flex items-start justify-between">
            <h3 className="text-lg font-semibold text-white">
              Optics Retail Enterprise Database
            </h3>
            <a
              href="https://github.com/Mercapt-0/Optics-Retail-DBMS"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-purple-400 transition-colors hover:text-purple-300"
            >
              <Github className="h-4 w-4" />
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
          <div className="mb-4 flex flex-wrap gap-2">
            {["Oracle SQL", "PL/SQL", "EER Modeling", "Triggers", "Window Functions"].map(
              (t) => (
                <span
                  key={t}
                  className="rounded-md bg-blue-500/10 px-2 py-0.5 text-xs text-blue-300"
                >
                  {t}
                </span>
              )
            )}
          </div>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex gap-2">
              <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-400" />
              <span>
                Architected{" "}
                <span className="text-gray-200">BCNF-normalized schema with 15+ entities</span>{" "}
                for end-to-end retail operations with referential integrity
              </span>
            </li>
            <li className="flex gap-2">
              <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-400" />
              <span>
                Built analytical SQL with complex JOINs, Window Functions,
                CUBE/ROLLUP aggregations for real-time inventory &amp; sales
                reports
              </span>
            </li>
          </ul>
        </GlassCard>

        {/* ===== ROW 7: CONTACT ===== */}

        <GlassCard className="md:col-span-2 lg:col-span-4" id="contact">
          <div className="scroll-mt-24 text-center">
            <h2 className="gradient-text mb-2 text-3xl font-bold">
              Let&apos;s Connect
            </h2>
            <p className="mb-6 text-gray-400">
              Always open to discussing ML research, collaboration, or internship opportunities.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:sonidevarsh1155@gmail.com"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm transition-all hover:border-purple-500/30 hover:bg-purple-500/10"
              >
                <Mail className="h-5 w-5 text-purple-400" />
                <span>sonidevarsh1155@gmail.com</span>
              </a>
              <a
                href="tel:+16825645690"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm transition-all hover:border-purple-500/30 hover:bg-purple-500/10"
              >
                <Phone className="h-5 w-5 text-purple-400" />
                <span>(682) 564-5690</span>
              </a>
              <a
                href="https://www.linkedin.com/in/devarsh-soni-16n31/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm transition-all hover:border-purple-500/30 hover:bg-purple-500/10"
              >
                <Linkedin className="h-5 w-5 text-purple-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/mercapt-0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm transition-all hover:border-purple-500/30 hover:bg-purple-500/10"
              >
                <Github className="h-5 w-5 text-purple-400" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Footer */}
      <footer className="border-t border-white/5 py-6 text-center text-xs text-gray-600">
        <p>&copy; {new Date().getFullYear()} Devarsh Soni. Built with Next.js &amp; Framer Motion.</p>
      </footer>
    </main>
  );
}
