import { FaCode, FaRobot, FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Building responsive, high-performance websites and web apps using modern stacks like React, Next.js, and Node.js. Focused on clean code, scalability, and pixel-perfect UI implementation.",
      icon: <FaCode />,
      color: "from-blue-500 to-indigo-600",
      bgGlow: "bg-blue-900/30"
    },
    {
      id: 2,
      title: "AI/ML Engineering",
      description: "Developing intelligent systems with TensorFlow and PyTorch. Specializing in computer vision, NLP, and predictive modeling to create automated decision-making solutions.",
      icon: <FaRobot />,
      color: "from-purple-500 to-pink-600",
      bgGlow: "bg-purple-900/30"
    },
    {
      id: 3,
      title: "Data Science",
      description: "Extracting actionable insights through statistical modeling and machine learning. Expertise in Python, data visualization, and building analytical pipelines for business intelligence.",
      icon: <FaChartLine />,
      color: "from-teal-500 to-emerald-600",
      bgGlow: "bg-teal-900/30"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0c] flex flex-col items-center justify-center px-4 md:px-8 py-12 md:py-16">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-100 mb-12 md:mb-16 tracking-tight"
      >
        My Services
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="h-1 mt-3 md:mt-4 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full"
        />
      </motion.h2>

      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 max-w-6xl mx-auto w-full">
        {services.map((service) => (
          <motion.div
  key={service.id}
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  whileHover={{ y: -12, scale: 1.03 }}
  className="relative w-full md:w-[30%] min-w-[280px] max-w-[400px] p-[2px] rounded-2xl group bg-gradient-to-br from-blue-700/50 via-blue-500/30 to-indigo-600/30 transition-all duration-500 shadow-[0_0_10px_#3b82f680]"
>
  <div className="bg-[var(--color-ui-2)] rounded-2xl p-6 md:p-8 h-full backdrop-blur-md border border-blue-500/20 group-hover:shadow-[0_0_20px_#60a5fa] transition-all duration-500">
    
    {/* Neon Border Glow Animation */}
    <motion.div 
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 0.4, scale: 1.15 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className={`absolute -top-24 -left-24 w-72 h-72 rounded-full bg-blue-700 blur-3xl z-0`}
    />

    {/* Icon */}
    <div className={`absolute top-6 right-6 rounded-full p-3 bg-gradient-to-br ${service.color} shadow-lg transition-transform duration-500 group-hover:rotate-12`}>
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="text-white text-xl"
      >
        {service.icon}
      </motion.div>
    </div>

    {/* Content */}
    <div className="relative z-10 h-full flex flex-col">
      <h3 className="text-2xl font-bold mb-4">
        <span className={`text-transparent bg-clip-text bg-gradient-to-r ${service.color}`}>
          {service.title}
        </span>
      </h3>
      <p className="text-gray-300 text-base leading-relaxed mb-4 group-hover:text-gray-100 transition-colors duration-300">
        {service.description}
      </p>
    </div>

    {/* Animated bottom border */}
    <motion.div 
      initial={{ width: 0 }}
      whileHover={{ width: "100%" }}
      transition={{ duration: 0.3 }}
      className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-600`}
    />
  </div>
</motion.div>
        ))}
      </div>
    </div>
  );
}