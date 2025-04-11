import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AdvancedChatbot = () => {
  const [formData, setFormData] = useState({
    name: '', 
    email: '', 
    position: ''
  });

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background Layers */}
      <motion.div 
        className="absolute inset-0 bg-blue-500"
        animate={{
          background: [
            'linear-gradient(45deg, #3B82F6, #8B5CF6)',
            'linear-gradient(45deg, #8B5CF6, #EC4899)',
            'linear-gradient(45deg, #EC4899, #3B82F6)'
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Subtle Moving Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div 
          key={i}
          className="absolute bg-white/20 rounded-full"
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: Math.random() * window.innerHeight 
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth, 
              Math.random() * window.innerWidth
            ],
            y: [
              Math.random() * window.innerHeight, 
              Math.random() * window.innerHeight
            ],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: Math.random() * 10 + 5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            width: Math.random() * 50 + 10,
            height: Math.random() * 50 + 10
          }}
        />
      ))}

      {/* Static Foreground Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-6 bg-white/90 shadow-sm">
            <h1 className="text-2xl font-bold text-blue-600">
              Neputune Smart Automation
            </h1>
            <p className="text-gray-500">AI Recruitment Portal</p>
          </div>
          
          <div className="p-6 space-y-4">
            <input 
              placeholder="Full Name"
              className="w-full p-3 bg-white border rounded-lg"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
            />
            <input 
              placeholder="Email Address"
              type="email"
              className="w-full p-3 bg-white border rounded-lg"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
            />
            <select 
              className="w-full p-3 bg-white border rounded-lg"
              value={formData.position}
              onChange={(e) => setFormData(prev => ({...prev, position: e.target.value}))}
            >
              <option>Select Position</option>
              <option>Software Engineer</option>
              <option>Data Analyst</option>
            </select>
            
            <button className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Submit Application
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedChatbot;
