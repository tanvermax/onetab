import React from 'react';
import {  CheckCircle} from "lucide-react";
import tarq from "../../../assets/tareqrahman.jpg";

import { motion } from "framer-motion";
import { FaApple, FaGooglePlay } from 'react-icons/fa';
const HeroSection: React.FC = () => {
  return (
    <section className=" min-h-screen flex flex-col items-center justify-center py-12 px-6 lg:px-12 font-sans overflow-hidden">
      
      {/* Main Grid Container */}
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        
        {/* Left Column: Content */}
        <div className="order-2 lg:order-1 text-left">
          {/* SDG Badge */}
          <div className="inline-flex items-center gap-2 bg-[#d0ecff] text-[#0f5132] px-4 py-2 rounded-full mb-8 shadow-sm border border-[#badbcc]">
            <div className="w-2 h-2 bg-[#0098FD] rounded-full animate-pulse" />
            <span className="text-xs md:text-sm font-bold tracking-wider uppercase">
              SDG Goal 4 • Quality Education • Bangladesh
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-black leading-[1.1] mb-6">
            শিক্ষার ভবিষ্যৎ, <br />
            <span className="text-[#0098FD]">এখন একটি ট্যাবেই।</span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 max-w-xl text-lg md:text-xl leading-relaxed mb-10">
            <span className="font-bold text-gray-900">One Teacher, One Tab</span> — বাংলাদেশ সরকারের এই দূরদর্শী ভাবনাকে বাস্তবে রূপ দিতে আমরা এনেছি 
            <span className="text-[#0098FD] font-semibold"> OneTab, OneBoard ও OneBook</span>।
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            {/* Play Store Button */}
            <a 
              href="https://play.google.com/store/apps/details?id=com.teknosoft.notearch.academy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#0098FD] text-white px-6 py-3 rounded-2xl hover:bg-gray-900 transition-all shadow-xl hover:shadow-emerald-500/10 border border-white/10 group"
            >
              <div className="bg-white/10 p-2 rounded-lg group-hover:scale-110 transition-transform">
                <FaGooglePlay size={24} fill="white" className="" />
              </div>
              <div className="flex flex-col items-start leading-none">
                <span className="text-[10px] uppercase font-medium text-black">Get it on</span>
                <span className="text-lg font-bold text-black">Google Play</span>
              </div>
            </a>

            {/* Apple Store Button */}
            <a 
              href="https://apps.apple.com/gb/app/notearch/id6756450121" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#0098FD] text-white px-6 py-3 rounded-2xl hover:bg-gray-900 transition-all shadow-xl hover:shadow-blue-500/10 border border-white/10 group"
            >
              <div className="bg-white/10 p-2 rounded-lg group-hover:scale-110 transition-transform">
                <FaApple size={24} fill="white" className="" />
              </div>
              <div className="flex flex-col items-start leading-none">
                <span className="text-[10px] uppercase font-medium text-black">Download on the</span>
                <span className="text-lg font-bold text-black">App Store</span>
              </div>
            </a>
          </motion.div>
          </div>
        </div>

        {/* Right Column: Image with Highlighted Text */}
        <div className="order-1 lg:order-2 relative group">
          {/* Background Decorative Element */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-[#0098FD22] to-transparent rounded-[3rem] -z-10 blur-2xl" />
          
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl border-4 border-white">
            <img 
              src={tarq} 
              alt="Honorable Visionary" 
              className=" h-[70vh]  transform group-hover:scale-105 transition-duration-700"
            />
            
            {/* Highlighted Text Overlay (Glassmorphism Effect) */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="backdrop-blur-md bg-black/40 border border-white/20 p-6 rounded-2xl text-white shadow-2xl">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle size={18} className="text-[#0098FD]" />
                  <span className="text-xs uppercase tracking-widest font-semibold text-gray-200">The Vision</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black leading-tight">
                  One Teacher <br /> 
                  <span className="text-[#0098FD]">One Tab</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="w-full max-w-7xl border-t border-gray-100 pt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatItem number="৩টি" label="স্মার্ট প্রোডাক্ট" />
          <StatItem number="বিনামূল্যে" label="অ্যাপ ব্যবহার" />
          <StatItem number="১১+" label="স্টেকহোল্ডার গ্রুপ" />
          <StatItem number="১০০%" label="ডিজিটাল পরিচালনা" />
        </div>
      </div>
    </section>
  );
};

// Reusable Stat Component
const StatItem = ({ number, label }: { number: string; label: string }) => (
  <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
    <h3 className="text-4xl md:text-5xl font-black text-[#0098FD] mb-2 tracking-tight">
      {number}
    </h3>
    <p className="text-gray-500 text-sm md:text-base font-bold uppercase tracking-wide">
      {label}
    </p>
  </div>
);

export default HeroSection;