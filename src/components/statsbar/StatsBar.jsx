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

  // Slide-up animation when scroll in view
  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
    }
  }, [controls, inView]);

  // Count-up animation
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
      className="bg-[#0f0f0f] py-12 px-6"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-around items-center gap-10 text-center text-gray-100">
        {stats.map((stat) => (
          <motion.div
            key={stat.id}
            className="flex flex-col items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-indigo-500 mb-2">{stat.icon}</div>
            <h2 className="text-3xl font-bold">{stat.value.toLocaleString()}</h2>
            <p className="text-gray-400">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
