import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Quote } from "lucide-react";

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
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative bg-black py-24 px-6 overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-950 to-black"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium uppercase tracking-wider">
              Testimonials
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            What Our Users Say
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Trusted by entrepreneurs, startups, and creators around the world.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: index * 0.2, duration: 0.5, ease: "easeInOut" }}
              whileHover={{ scale: 1.1, y: -6 }}
              className="relative group"
            >
              {/* Hover Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>

              <div className="relative h-full bg-gradient-to-br from-gray-900/90 to-gray-950/90 backdrop-blur-xl rounded-3xl p-8 border border-indigo-500/20 group-hover:border-indigo-400/40 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/0 to-cyan-400/0 group-hover:from-indigo-400/5 group-hover:to-cyan-400/5 rounded-3xl transition-all duration-300"></div>

                {/* Quote Icon */}
                <div className="relative flex flex-col h-full">
                  <div className="mb-6">
                    <div className="relative inline-block">
                      <div className="absolute inset-0 bg-indigo-400/20 rounded-lg blur-lg"></div>
                      <div className="relative bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 p-3 rounded-lg border border-indigo-400/30">
                        <Quote size={24} className="text-indigo-400" />
                      </div>
                    </div>
                  </div>

                  {/* Feedback */}
                  <p className="text-gray-300 text-base leading-relaxed mb-8 flex-1 italic">
                    "{testimonial.feedback}"
                  </p>

                  {/* User Info */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 to-cyan-500/30 rounded-full blur-md"></div>
                      <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-indigo-400/30 flex items-center justify-center">
                        <span className="text-indigo-400 font-bold text-lg">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-gray-100 font-semibold text-base group-hover:text-indigo-100 transition-colors duration-300">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"></div>
    </section>
  );
}
