import React, { useState, useEffect, useRef } from 'react';
import { 
  User, 
  MessageCircle, 
  FileText, 
  Camera, 
  Check, 
  Mic, 
  Send, 
  RefreshCw 
} from 'lucide-react';

const AdvancedHRChatbot = () => {
  const [conversationStage, setConversationStage] = useState('welcome');
  const [formData, setFormData] = useState({
    name: '', 
    email: '', 
    phone: '',
    position: '',
    resume: null,
    skills: [],
    additionalDetails: ''
  });
  const [aiAssistance, setAIAssistance] = useState('');
  const [voiceInput, setVoiceInput] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    { 
      sender: 'AI', 
      message: 'Welcome to Neputune Smart Automation! I\'m your AI recruitment assistant.' 
    }
  ]);

  const speechRecognition = useRef(null);

  useEffect(() => {
    // Voice recognition setup
    if ('webkitSpeechRecognition' in window) {
      speechRecognition.current = new window.webkitSpeechRecognition();
      speechRecognition.current.continuous = false;
      speechRecognition.current.interimResults = false;
      
      speechRecognition.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setFormData(prev => ({...prev, name: transcript}));
      };
    }
  }, []);

  const startVoiceInput = () => {
    if (speechRecognition.current) {
      setVoiceInput(true);
      speechRecognition.current.start();
    }
  };

  const handleAIAssistance = async () => {
    // Simulated AI guidance
    const response = await fetch('/api/ai-guidance', {
      method: 'POST',
      body: JSON.stringify(formData)
    });
    const guidance = await response.json();
    setAIAssistance(guidance.recommendation);
  };

  const renderStage = () => {
    switch(conversationStage) {
      case 'welcome':
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-600">
              AI Recruitment Assistant
            </h2>
            <p className="text-gray-600">
              I'll help you through a smart, personalized application process.
            </p>
            <button 
              onClick={() => setConversationStage('personal_info')}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg hover:opacity-90"
            >
              Start Application
            </button>
          </div>
        );
      
      case 'personal_info':
        return (
          <div className="space-y-4">
            <div className="relative">
              <input 
                placeholder="Full Name"
                className="w-full p-3 border rounded-lg pl-10"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
              />
              <User className="absolute left-3 top-3 text-gray-500" />
              <button 
                onClick={startVoiceInput}
                className="absolute right-3 top-3"
              >
                <Mic className={`text-${voiceInput ? 'red' : 'blue'}-500`} />
              </button>
            </div>
            <div className="relative">
              <input 
                placeholder="Email Address"
                type="email"
                className="w-full p-3 border rounded-lg pl-10"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
              />
              <MessageCircle className="absolute left-3 top-3 text-gray-500" />
            </div>
            <button 
              onClick={() => setConversationStage('job_details')}
              className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600"
            >
              Next
            </button>
          </div>
        );
      
      case 'job_details':
        return (
          <div className="space-y-4">
            <div className="relative">
              <select 
                className="w-full p-3 border rounded-lg pl-10"
                value={formData.position}
                onChange={(e) => setFormData(prev => ({...prev, position: e.target.value}))}
              >
                <option>Select Position</option>
                <option>Software Engineer</option>
                <option>Data Analyst</option>
                <option>Product Manager</option>
              </select>
              <FileText className="absolute left-3 top-3 text-gray-500" />
            </div>
            <div>
              <label className="block mb-2">Upload Resume</label>
              <input 
                type="file"
                accept=".pdf,.doc,.docx"
                className="w-full p-3 border rounded-lg"
                onChange={(e) => setFormData(prev => ({...prev, resume: e.target.files[0]}))}
              />
            </div>
            <button 
              onClick={handleAIAssistance}
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
            >
              Get AI Career Guidance
            </button>
            {aiAssistance && (
              <div className="bg-blue-100 p-3 rounded-lg">
                <p>{aiAssistance}</p>
              </div>
            )}
            <button 
              onClick={() => setConversationStage('submission')}
              className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600"
            >
              Submit Application
            </button>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 p-6 text-white">
          <h1 className="text-2xl font-bold">Neputune Smart Automation</h1>
          <p className="text-sm opacity-75">AI-Powered Recruitment</p>
        </div>
        
        <div className="p-6">
          {renderStage()}
        </div>
      </div>
    </div>
  );
};

export default AdvancedHRChatbot;
