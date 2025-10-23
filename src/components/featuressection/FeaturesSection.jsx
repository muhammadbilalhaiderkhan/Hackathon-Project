import React from "react";
import { Zap, Cpu, FileText, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const features = [
  {
    icon: <Zap size={32} />,
    title: "Fast AI Generation",
    desc: "Generate powerful pitches in seconds with our AI-powered engine.",
  },
  {
    icon: <Cpu size={32} />,
    title: "Customizable Tone",
    desc: "Choose from formal, fun, or creative tones to match your style.",
  },
  {
    icon: <FileText size={32} />,
    title: "Editable Results",
    desc: "Fine-tune your generated pitch before sharing or exporting.",
  },
  {
    icon: <Users size={32} />,
    title: "Track Metrics",
    desc: "View stats like pitches generated, clients served, and more.",
  },
];

export default function FeaturesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative bg-[#0a0a0a] py-24 px-6 overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-black to-[#0a0a0a]"></div>

      {/* Glowing Orbs */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium uppercase tracking-wider">
              Features
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            How Pitchcraft Works
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Simple steps to craft compelling pitches effortlessly with AI-powered precision.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{
                scale: 1.07,
                y: -6,
                transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] },
              }}
              whileTap={{ scale: 0.97 }}
              className="relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>

              <div className="relative h-full bg-gradient-to-br from-gray-900/50 to-gray-950/50 backdrop-blur-xl rounded-2xl p-8 border border-indigo-500/10 group-hover:border-indigo-400/30 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/0 to-purple-400/0 group-hover:from-indigo-400/5 group-hover:to-purple-400/5 rounded-2xl transition-all duration-500"></div>

                <div className="relative flex flex-col items-center gap-6 text-center h-full">
                  {/* Icon */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-indigo-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative bg-gradient-to-br from-indigo-500/10 to-purple-500/10 p-5 rounded-2xl border border-indigo-400/20 group-hover:border-indigo-400/40 transition-all duration-500">
                      <div className="text-indigo-400 group-hover:text-purple-300 transition-colors duration-500">
                        {feature.icon}
                      </div>
                    </div>
                  </div>

                  {/* Title + Description */}
                  <div className="flex-1 flex flex-col justify-start gap-3">
                    <h3 className="text-xl font-semibold text-gray-100 group-hover:text-indigo-100 transition-colors duration-500">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>

                  {/* Progress Line */}
                  <div className="w-full h-1 bg-gray-800/50 rounded-full overflow-hidden mt-auto">
                    <motion.div
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                      initial={{ width: "0%" }}
                      animate={inView ? { width: "100%" } : {}}
                      transition={{
                        delay: index * 0.15 + 0.5,
                        duration: 1,
                        ease: "easeOut",
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Section Dividers */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"></div>
    </section>
  );
}
