import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sara Khan",
    role: "Startup Founder",
    feedback: "Pitchcraft helped me create a pitch in minutes! Truly game-changing.",
  },
  {
    name: "Ali Raza",
    role: "Marketing Manager",
    feedback: "The AI-generated pitches are professional and customizable. Highly recommended!",
  },
  {
    name: "Hina Sheikh",
    role: "Entrepreneur",
    feedback: "Love the tone selector! I can now make pitches fun or formal depending on the audience.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#0a0a0a] py-20 px-6 text-gray-100">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Trusted by entrepreneurs, startups, and creators around the world.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            className="bg-[#121212] p-6 rounded-2xl shadow-lg flex flex-col justify-between text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <p className="text-gray-300 mb-4 italic">"{t.feedback}"</p>
            <h3 className="text-lg font-semibold">{t.name}</h3>
            <span className="text-gray-500 text-sm">{t.role}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
