import { motion } from "framer-motion";
import { Target, Lightbulb, Users2, Rocket } from "lucide-react";
import studentAnimation from "../../src/assets/learning.json"


import Lottie from "lottie-react";

  const LottieComponent = (Lottie as any).default || Lottie;


const stats = [
  { label: "NPT Targets", value: "9-13", icon: <Target className="text-[#0098FD]" /> },
  { label: "SDG Goal", value: "04", icon: <Lightbulb className="text-blue-500" /> },
  { label: "Vision", value: "100%", icon: <Rocket className="text-purple-500" /> },
  { label: "Experts", value: "Global", icon: <Users2 className="text-orange-500" /> },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 overflow-hidden bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#0098FD] font-bold tracking-widest uppercase text-sm"
          >
            আমাদের সম্পর্কে
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight"
          >
            ভবিষ্যতের দক্ষ জনবল গড়তে <span className="text-[#0098FD]">ডিজিটাল শিক্ষা</span> বিপ্লব
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed text-justify">
              বাংলাদেশের Sustainable Development Goals (SDGs)-এর অংশ হিসেবে Goal 4: Quality Education অর্জনে আমরা বদ্ধপরিকর। জাতীয় অগ্রাধিকারমূলক লক্ষ্যসমূহ (NPT: 9-13) এর সাথে সামঞ্জস্য রেখে প্রচলিত শিক্ষাব্যবস্থাকে আমরা প্রযুক্তিনির্ভর করে তুলছি। 
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed text-justify">
              বাংলাদেশ সরকারের One-Teacher-One-Tab ভাবনা থেকে অনুপ্রাণিত হয়ে আমরা তৈরি করেছি এক সমন্বিত ডিজিটাল ইকোসিস্টেম। যেখানে OneTab, OneBoard এবং OneBook-এর মাধ্যমে শিক্ষক, শিক্ষার্থী এবং অভিভাবকদের এক সুতোয় গেঁথে শিক্ষার সর্বোচ্চ সফলতা নিশ্চিত করা হয়।
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              {stats.map((stat, index) => (
                <div key={index} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-center hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-tighter">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Interactive Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800">
               {/* এখানে আপনার একটি প্রফেশনাল ইমেজ বা লটি অ্যানিমেশন বসাতে পারেন */}
             <LottieComponent 
              animationData={studentAnimation} 
              loop={true} 
              className="w-full h-auto max-w-125 mx-auto"
            />
              <div className="absolute inset-0 bg-[#0098FD]/10 mix-blend-multiply" />
            </div>

            {/* Floating Card */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-xl max-w-50 border border-emerald-100 dark:border-emerald-900"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="h-3 w-3 rounded-full bg-[#0098FD] animate-pulse" />
                <span className="text-xs font-bold text-slate-500">Live Mission</span>
              </div>
              <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                ১০০% শিক্ষার্থীর উচ্চমাধ্যমিক শিক্ষা নিশ্চিত করা
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}