import React from "react";
import { Zap, Cpu, FileText, Users } from "lucide-react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const features = [
  {
    icon: <Zap size={28} />,
    title: "Fast AI Generation",
    desc: "Generate powerful pitches in seconds with our AI-powered engine."
  },
  {
    icon: <Cpu size={28} />,
    title: "Customizable Tone",
    desc: "Choose from formal, fun, or creative tones to match your style."
  },
  {
    icon: <FileText size={28} />,
    title: "Editable Results",
    desc: "Fine-tune your generated pitch before sharing or exporting."
  },
  {
    icon: <Users size={28} />,
    title: "Track Metrics",
    desc: "View stats like pitches generated, clients served, and more."
  },
];

export default function FeaturesSection() {
  const { scrollYProgress } = useViewportScroll();

  // Transform scroll progress to y-translation for section
  const yTranslate = useTransform(scrollYProgress, [0, 0.5], [100, 0]); 
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <motion.section
      style={{ y: yTranslate, opacity }}
      className="bg-gradient-to-r from-[#0a0a0a] to-[#111827] py-20 px-6 text-gray-100"
    >
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">How Pitchcraft Works</h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Simple steps to craft compelling pitches effortlessly.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-[#121212] p-6 rounded-2xl flex flex-col items-center gap-4 text-center shadow-lg hover:scale-105 transition-transform"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
          >
            <div className="text-indigo-500">{feature.icon}</div>
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-gray-400">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
