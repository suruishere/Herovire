import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  UserCheck, 
  Phone, 
  Mail, 
  Briefcase, 
  Percent, 
  DollarSign, 
  FileText,
  Upload
} from 'lucide-react';

const NeptuneChatbot = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    postApplied: '',
    boardMarks: '',
    parentsAnnualIncome: '',
    category: '',
    religion: '',
    interests: '',
    fiveYearVision: '',
    additionalInfo: '',
    workCommitmentResponse: '',
    signature: null,
    termsConfirmed: false
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({...prev, [field]: value}));
  };

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-2xl bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-6">
        <h1 className="text-2xl font-bold text-blue-600 mb-6 text-center">
          Neputune Smart Automation Application
        </h1>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Personal Information */}
          <div className="space-y-4">
            <div className="relative">
              <UserCheck className="absolute left-3 top-3 text-gray-400" />
              <input 
                placeholder="Name of the Applicant *"
                className="w-full p-3 pl-10 bg-gray-100 rounded-lg"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
            </div>

            <div className="relative">
              <Phone className="absolute left-3 top-3 text-gray-400" />
              <input 
                placeholder="Mobile Number *"
                type="tel"
                className="w-full p-3 pl-10 bg-gray-100 rounded-lg"
                value={formData.mobile}
                onChange={(e) => handleInputChange('mobile', e.target.value)}
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" />
              <input 
                placeholder="Email ID *"
                type="email"
                className="w-full p-3 pl-10 bg-gray-100 rounded-lg"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
            </div>
          </div>

          {/* Application Details */}
          <div className="space-y-4">
            <div className="relative">
              <Briefcase className="absolute left-3 top-3 text-gray-400" />
              <select 
                className="w-full p-3 pl-10 bg-gray-100 rounded-lg"
                value={formData.postApplied}
                onChange={(e) => handleInputChange('postApplied', e.target.value)}
              >
                <option>Post Applied For *</option>
                <option>Software Engineer</option>
                <option>Data Analyst</option>
                <option>Product Manager</option>
              </select>
            </div>

            <div className="relative">
              <Percent className="absolute left-3 top-3 text-gray-400" />
              <input 
                placeholder="10th Board Marks and Percentage *"
                type="number"
                className="w-full p-3 pl-10 bg-gray-100 rounded-lg"
                value={formData.boardMarks}
                onChange={(e) => handleInputChange('boardMarks', e.target.value)}
              />
            </div>

            <div className="relative">
              <DollarSign className="absolute left-3 top-3 text-gray-400" />
              <input 
                placeholder="Parents Annual Income *"
                type="number"
                className="w-full p-3 pl-10 bg-gray-100 rounded-lg"
                value={formData.parentsAnnualIncome}
                onChange={(e) => handleInputChange('parentsAnnualIncome', e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-4 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <select 
              className="w-full p-3 bg-gray-100 rounded-lg"
              value={formData.category}
              onChange={(e) => handleInputChange('category', e.target.value)}
            >
              <option>Category *</option>
              <option>General</option>
              <option>SC</option>
              <option>ST</option>
              <option>OBC</option>
            </select>

            <input 
              placeholder="Religion"
              className="w-full p-3 bg-gray-100 rounded-lg"
              value={formData.religion}
              onChange={(e) => handleInputChange('religion', e.target.value)}
            />
          </div>

          <textarea 
            placeholder="Major Interests and Hobbies *"
            className="w-full p-3 bg-gray-100 rounded-lg"
            value={formData.interests}
            onChange={(e) => handleInputChange('interests', e.target.value)}
          />

          <textarea 
            placeholder="Where do you see yourself after 5 years *"
            className="w-full p-3 bg-gray-100 rounded-lg"
            value={formData.fiveYearVision}
            onChange={(e) => handleInputChange('fiveYearVision', e.target.value)}
          />

          <textarea 
            placeholder="Any other information you want to give"
            className="w-full p-3 bg-gray-100 rounded-lg"
            value={formData.additionalInfo}
            onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
          />

          <textarea 
            placeholder="If your superior/teacher stops you after 6pm on a date when you have prior commitments, what will you do?"
            className="w-full p-3 bg-gray-100 rounded-lg"
            value={formData.workCommitmentResponse}
            onChange={(e) => handleInputChange('workCommitmentResponse', e.target.value)}
          />

          <div className="relative">
            <Upload className="absolute left-3 top-3 text-gray-400" />
            <input 
              type="file"
              placeholder="Upload Signature"
              className="w-full p-3 pl-10 bg-gray-100 rounded-lg"
              onChange={(e) => handleInputChange('signature', e.target.files[0])}
            />
          </div>

          <div className="flex items-center">
            <input 
              type="checkbox"
              className="mr-2"
              checked={formData.termsConfirmed}
              onChange={(e) => handleInputChange('termsConfirmed', e.target.checked)}
            />
            <label>I confirm that all details filled above are correct</label>
          </div>

          <motion.button 
            className="w-full p-3 bg-blue-600 text-white rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit Application
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default NeptuneChatbot;
