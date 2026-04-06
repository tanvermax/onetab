import  { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles, BookOpen, GraduationCap, Brain, Lightbulb } from 'lucide-react';

const ClassroomScene = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const slides = [
    { 
      title: "Mathematics", 
      equation: "E = mc²", 
      description: "Energy-Mass Equivalence",
      icon: <Brain className="w-6 h-6" />
    },
    { 
      title: "Algebra", 
      equation: "x² + y² = r²", 
      description: "Circle Equation",
      icon: <Sparkles className="w-6 h-6" />
    },
    { 
      title: "Calculus", 
      equation: "∫ f(x) dx", 
      description: "Integration",
      icon: <GraduationCap className="w-6 h-6" />
    },
    { 
      title: "Geometry", 
      equation: "a² + b² = c²", 
      description: "Pythagorean Theorem",
      icon: <Lightbulb className="w-6 h-6" />
    },
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [activeSlide]);

  return (
    <div className="h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 flex items-center justify-center p-8 overflow-hidden relative">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              scale: 0 
            }}
            animate={{ 
              y: [null, -100, -200],
              scale: [0, 1, 0],
              opacity: [0, 0.5, 0]
            }}
            transition={{ 
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Main Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-full  max-w-7xl "
      >
        {/* Floating Decor Elements */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 -right-20 w-60 h-60 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"
        />

        {/* Classroom Card */}
        <div className="relative backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
          
          {/* Header */}
          <div className="absolute top-0 left-0 right-0 h-14 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-md border-b border-white/10 z-20 flex items-center justify-between px-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-lg" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-lg" />
              <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-lg" />
            </div>
            <div className="text-white/40 text-sm font-mono">Classroom Live • Session 2024</div>
            <div className="w-16" />
          </div>

          {/* Main Scene */}
          <div className="pt-14 pb-8 px-8">
            {/* Teacher & Board Section */}
            <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
              
              {/* Chalkboard */}
              <motion.div 
                className="relative flex-1 max-w-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-xl opacity-30" />
                <div className="relative bg-[#1a1a2e] rounded-2xl border border-indigo-500/30 shadow-2xl overflow-hidden">
                  {/* Wooden Frame Effect */}
                  <div className="absolute inset-0 border-8 border-amber-900/40 rounded-2xl pointer-events-none" />
                  <div className="absolute inset-0 border-2 border-amber-700/30 rounded-2xl pointer-events-none" />
                  
                  {/* Board Content */}
                  <div className="p-8 min-h-[320px] flex flex-col items-center justify-center">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeSlide}
                        initial={{ opacity: 0, y: 30, rotateX: -15 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        exit={{ opacity: 0, y: -30, rotateX: 15 }}
                        transition={{ duration: 0.5, type: "spring" }}
                        className="text-center"
                      >
                        <motion.div 
                          className="flex justify-center mb-4"
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                          <div className="p-3 rounded-full bg-gradient-to-br from-yellow-400/20 to-orange-400/20">
                            {slides[activeSlide].icon}
                          </div>
                        </motion.div>
                        <h3 className="text-indigo-300 text-sm uppercase tracking-wider mb-2 font-mono">
                          {slides[activeSlide].title}
                        </h3>
                        <motion.p 
                          className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent mb-4 font-mono"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          {slides[activeSlide].equation}
                        </motion.p>
                        <p className="text-white/50 text-sm">{slides[activeSlide].description}</p>
                        
                        {/* Chalk Dust Effect */}
                        <div className="absolute bottom-2 right-2 text-white/10 text-xs">✧ chalk dust ✧</div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  
                  {/* Chalk Tray */}
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-[90%] h-3 bg-amber-800 rounded-b-lg shadow-lg" />
                </div>
                
                {/* Navigation Arrows */}
                <button 
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all group"
                >
                  <ChevronLeft className="w-5 h-5 text-white group-hover:scale-110 transition" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all group"
                >
                  <ChevronRight className="w-5 h-5 text-white group-hover:scale-110 transition" />
                </button>
              </motion.div>

              {/* Teacher */}
              <motion.div 
                className="relative"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="relative w-48 h-48 lg:w-56 lg:h-56">
                  {/* Glow behind teacher */}
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-2xl" />
                  
                  {/* Teacher Character SVG */}
                  <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
                    <defs>
                      <linearGradient id="teacherBody" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#4f46e5" />
                        <stop offset="100%" stopColor="#7c3aed" />
                      </linearGradient>
                      <linearGradient id="teacherSkin" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#fcd34d" />
                        <stop offset="100%" stopColor="#fbbf24" />
                      </linearGradient>
                    </defs>
                    
                    {/* Body */}
                    <motion.path 
                      d="M 60,120 C 50,160 45,200 45,200 L 155,200 C 155,200 150,160 140,120 Z"
                      fill="url(#teacherBody)"
                      animate={{ scaleY: [1, 1.02, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    
                    {/* Arms pointing to board */}
                    <motion.path 
                      d="M 55,130 Q 30,150 25,140"
                      stroke="#4f46e5" 
                      strokeWidth="12" 
                      strokeLinecap="round"
                      fill="none"
                      animate={{ rotate: [0, -5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <motion.path 
                      d="M 145,130 Q 170,150 175,140"
                      stroke="#4f46e5" 
                      strokeWidth="12" 
                      strokeLinecap="round"
                      fill="none"
                      animate={{ rotate: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    
                    {/* Head */}
                    <circle cx="100" cy="85" r="38" fill="url(#teacherSkin)" />
                    
                    {/* Glasses */}
                    <circle cx="85" cy="82" r="12" fill="none" stroke="#1e1b4b" strokeWidth="2" />
                    <circle cx="115" cy="82" r="12" fill="none" stroke="#1e1b4b" strokeWidth="2" />
                    <line x1="97" y1="82" x2="103" y2="82" stroke="#1e1b4b" strokeWidth="2" />
                    
                    {/* Eyes with blink animation */}
                    <motion.circle 
                      cx="85" cy="82" r="2" fill="#1e1b4b"
                      animate={{ scaleY: [1, 0.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                    />
                    <motion.circle 
                      cx="115" cy="82" r="2" fill="#1e1b4b"
                      animate={{ scaleY: [1, 0.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                    />
                    
                    {/* Smile */}
                    <path d="M 88,98 Q 100,110 112,98" stroke="#1e1b4b" strokeWidth="2" fill="none" strokeLinecap="round" />
                    
                    {/* Pointer stick */}
                    <motion.line 
                      x1="150" y1="115" x2="195" y2="80" 
                      stroke="#78350f" strokeWidth="4" strokeLinecap="round"
                      animate={{ rotate: [0, 8, 0], transformOrigin: "150px 115px" }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <circle cx="195" cy="80" r="3" fill="#ef4444" />
                  </svg>
                  
                  {/* Speech Bubble */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="absolute -top-12 -right-12 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg"
                  >
                    <p className="text-indigo-600 text-sm font-medium">"Great job!"</p>
                    <div className="absolute bottom-0 right-4 w-3 h-3 bg-white/90 transform rotate-45 translate-y-1/2" />
                  </motion.div>
                </div>
                <p className="text-center text-white/60 text-sm mt-2 font-medium">Ms. Johnson</p>
              </motion.div>
            </div>

            {/* Students Section */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Alex", emoji: "📚", color: "from-blue-500/20 to-cyan-500/20", delay: 0 },
                { name: "Sarah", emoji: "🧠", color: "from-purple-500/20 to-pink-500/20", delay: 0.2 },
                { name: "Michael", emoji: "⚡", color: "from-green-500/20 to-emerald-500/20", delay: 0.4 }
              ].map((student, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + student.delay, type: "spring" }}
                  whileHover={{ y: -5 }}
                  className="relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${student.color} rounded-2xl blur-xl opacity-50`} />
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
                    {/* Student Avatar */}
                    <div className="flex flex-col items-center">
                      <motion.div 
                        className="relative w-24 h-24 mb-3"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: student.delay }}
                      >
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <circle cx="50" cy="45" r="25" fill="#fcd34d" />
                          <circle cx="40" cy="42" r="3" fill="#1e1b4b" />
                          <circle cx="60" cy="42" r="3" fill="#1e1b4b" />
                          <path d="M 43,55 Q 50,63 57,55" stroke="#1e1b4b" strokeWidth="2" fill="none" />
                          <path d="M 30,70 L 70,70 L 65,95 L 35,95 Z" fill="#6366f1" />
                        </svg>
                        <div className="absolute -top-2 -right-2 text-xl">{student.emoji}</div>
                      </motion.div>
                      <p className="text-white font-medium">{student.name}</p>
                      <div className="flex items-center gap-1 mt-2">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="w-2 h-2 rounded-full bg-yellow-400"
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                          />
                        ))}
                      </div>
                      
                      {/* Book with page flip animation */}
                      <motion.div 
                        className="mt-4 relative w-32 h-24 bg-gradient-to-br from-white/10 to-white/5 rounded-lg border border-white/10 p-2"
                        whileHover={{ rotateX: 10 }}
                      >
                        <div className="text-white/40 text-xs text-center">Notebook</div>
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-lg"
                          animate={{ x: ["0%", "100%", "0%"] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Footer with live indicator */}
          <div className="px-8 py-4 border-t border-white/10 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <motion.div 
                className="w-2 h-2 rounded-full bg-green-500"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-white/40 text-xs">Live • 12 students online</span>
            </div>
            <div className="flex items-center gap-3">
              <BookOpen className="w-4 h-4 text-white/30" />
              <GraduationCap className="w-4 h-4 text-white/30" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ClassroomScene;