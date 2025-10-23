import React, { useEffect, useState } from "react";
import { Users, FileText, Cpu } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function StatsBar() {
  const statsData = [
    { id: 1, icon: <Users size={28} />, label: "Clients Served", value: 0, target: 1250 },
    { id: 2, icon: <FileText size={28} />, label: "Pitches Generated", value: 0, target: 5400 },
    { id: 3, icon: <Cpu size={28} />, label: "AI Models", value: 0, target: 8 },
  ];

  const [stats, setStats] = useState(statsData);

  const { ref, inView } = useInView({ triggerOnce: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
    }
  }, [controls, inView]);

  useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      setStats((prev) =>
        prev.map((stat) => ({
          ...stat,
          value: stat.value < stat.target ? stat.value + Math.ceil(stat.target / 50) : stat.target,
        }))
      );
    }, 20);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className="relative bg-[#0a0a0a] py-16 px-6 overflow-hidden"
    >
      {/* Background gradient & glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/30 via-black to-purple-950/30"></div>

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{
                scale: 1.08,
                y: -6,
                transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }, // smooth & quick
              }}
              whileTap={{
                scale: 0.97,
                transition: { duration: 0.15, ease: "easeInOut" },
              }}
              className="relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>

              <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-950/90 backdrop-blur-xl rounded-2xl p-8 border border-indigo-500/20 group-hover:border-indigo-400/40 transition-all duration-300 ease-in-out">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/5 to-purple-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-in-out"></div>

                <div className="relative flex flex-col items-center gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-indigo-400/20 rounded-full blur-xl animate-pulse"></div>
                    <div className="relative bg-gradient-to-br from-indigo-500/20 to-purple-500/20 p-4 rounded-full border border-indigo-400/30 group-hover:border-indigo-400/60 transition-all duration-300 ease-in-out">
                      <div className="text-indigo-400 group-hover:text-purple-300 transition-colors duration-300 ease-in-out">
                        {stat.icon}
                      </div>
                    </div>
                  </div>

                  <div className="text-center space-y-2">
                    <motion.h2
                      className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent"
                      animate={
                        inView
                          ? {
                              backgroundPosition: ["0%", "100%", "0%"],
                            }
                          : {}
                      }
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      style={{ backgroundSize: "200% auto" }}
                    >
                      {stat.value.toLocaleString()}
                      {stat.value === stat.target && stat.target >= 1000 && "+"}
                    </motion.h2>

                    <p className="text-gray-400 text-sm md:text-base font-medium tracking-wide uppercase">
                      {stat.label}
                    </p>
                  </div>

                  <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${(stat.value / stat.target) * 100}%` } : {}}
                      transition={{ duration: 2, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
    </motion.section>
  );
}
