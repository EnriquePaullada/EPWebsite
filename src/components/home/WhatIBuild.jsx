import React from "react";
import { motion } from "framer-motion";
import { Target, Building2, Zap } from "lucide-react";

const WhatIBuild = () => {
  const services = [
    {
      icon: Target,
      title: "Business Workflow Automation",
      subtitle:
        "Where AI, Strategy, and Data converge to supercharge Business Outcomes.",
      points: [
        "Agentic Workflows",
        "Rigorous Performance Tracking",
        "Cohort & Baseline Analysis",
        "Build → Measure → Learn",
      ],
    },
    {
      icon: Building2,
      title: "Data Infrastructure at Scale",
      subtitle:
        "Production-grade systems that unlock the hidden value in complex data.",
      points: [
        "Scalable Data Warehousing & Modeling",
        "Robust ETL / ELT Pipelines",
        "Advanced Analytics for Structured & Unstructured Data",
        "Cloud-Native Architecture (GCP, Terraform)",
      ],
    },
    {
      icon: Zap,
      title: "Full-Stack Product Development",
      subtitle:
        "0→1 product builder focused on shipping efficient, value-driven solutions.",
      points: [
        "Agile & Lean Methodologies",
        "User-Centric Architecture",
        "Modern Tech Stacks (Python, GCP, SQL, MongoDB, JS, n8n, Alteryx)",
        "End-to-End DevOps & CI/CD (Terraform, Tekton)",
      ],
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="heading-serif text-4xl md:text-5xl font-bold text-navy mb-16"
        >
          What I Build
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-lg p-8 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 flex flex-col h-full"
              >
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-gold" />
                </div>

                {/* Header */}
                <div className="mb-6">
                  {/* Reserve exactly 2 lines for the title on md+ */}
                  <h3 className="heading-serif text-2xl font-bold text-navy mb-3 leading-tight md:min-h-[2.5em]">
                    {service.title}
                  </h3>

                  {/* (Optional) Reserve ~3 lines for subtitle on md+ */}
                  <p className="body-serif text-gray-600 leading-relaxed md:min-h-[4.5em]">
                    {service.subtitle}
                  </p>
                </div>

                {/* Bullet list */}
                <ul className="space-y-3">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <span className="ui-sans text-sm text-gray-700">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatIBuild;