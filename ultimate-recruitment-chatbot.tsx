import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  UserCheck, 
  Briefcase, 
  Send, 
  Globe, 
  Star 
} from 'lucide-react';

const UltimateChatbot = () => {
  const [formData, setFormData] = useState({
    name: '', 
    email: '', 
    position: ''
  });
  const [backgroundVariant, setBackgroundVariant] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundVariant((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const backgroundVariants = [
    {
      gradient: 'from-blue-500 via-purple-600 to-pink-500',
      particles: [
        { color: 'bg-blue-200/20', size: 'w-32 h-32' },
        { color: 'bg-purple-200/20', size: 'w-48 h-48' },
        { color: 'bg-pink-200/20', size: 'w-40 h-40' }
      ]
    },
    {
      gradient: 'from-green-400 via-cyan-500 to-blue-600',
      particles: [
        { color: 'bg-green-200/20', size: 'w-36 h-36' },
        { color: 'bg-cyan-200/20', size: 'w-44 h-44' },
        { color: 'bg-blue-200/20', size: 'w-52 h-52' }
      ]
    },
    {
      gradient: 'from-yellow-400 via-red-500 to-pink-500',
      particles: [
        { color: 'bg-yellow-200/20', size: 'w-40 h-40' },
        { color: 'bg-red-200/20', size: 'w-48 h-48' },
        { color: 'bg-pink-200/20', size: 'w-36 h-36' }
      ]
    }
  ];

  const currentBackground = backgroundVariants[backgroundVariant];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Dynamic Animated Background */}
      <motion.div 
        className={`absolute inset-0 bg-gradient-to-br ${currentBackground.gradient}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />

      {/* Floating Background Particles */}
      <AnimatePresence>
        {currentBackground.particles.map((particle, index) => (
          <motion.div 
            key={index}
            className={`absolute rounded-full ${particle.color} ${particle.size}`}
            initial={{ 
              opacity: 0,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0.5
            }}
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight
              ],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "mirror"
            }}
          />
        ))}
      </AnimatePresence>

      {/* Foreground Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <motion.div 
          className="w-full max-w-md bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="p-6 bg-white/95 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Neputune Talent Hub
              </h1>
              <p className="text-sm text-gray-500">Global Recruitment Platform</p>
            </div>
            <Globe className="text-blue-600" size={40} />
          </div>
          
          {/* Form */}
          <div className="p-6 space-y-4">
            <div className="relative">
              <UserCheck className="absolute left-3 top-3 text-gray-400" />
              <input 
                placeholder="Full Name"
                className="w-full p-3 pl-10 bg-gray-100 border-2 border-transparent focus:border-blue-500 rounded-lg transition"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
              />
            </div>

            <div className="relative">
              <Send className="absolute left-3 top-3 text-gray-400" />
              <input 
                placeholder="Email Address"
                type="email"
                className="w-full p-3 pl-10 bg-gray-100 border-2 border-transparent focus:border-blue-500 rounded-lg transition"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
              />
            </div>

            <div className="relative">
              <Briefcase className="absolute left-3 top-3 text-gray-400" />
              <select 
                className="w-full p-3 pl-10 bg-gray-100 border-2 border-transparent focus:border-blue-500 rounded-lg transition"
                value={formData.position}
                onChange={(e) => setFormData(prev => ({...prev, position: e.target.value}))}
              >
                <option>Select Position</option>
                <option>Software Engineer</option>
                <option>Data Analyst</option>
                <option>Product Manager</option>
              </select>
            </div>
            
            <motion.button 
              className="w-full p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Star className="mr-2" /> Submit Application
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateChatbot;
