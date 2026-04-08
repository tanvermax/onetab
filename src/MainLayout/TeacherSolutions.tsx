import { motion } from "framer-motion";
import { GraduationCap, Wallet, BookCheck, MonitorPlay, ClipboardList, Zap } from "lucide-react";

const teacherFeatures = [
  {
    title: "School ERP ম্যানেজমেন্ট",
    desc: "একটি সেন্ট্রালাইজড সিস্টেমের মাধ্যমে ক্লাস রুটিন, নোটিশ এবং একাডেমিক ক্যালেন্ডার পরিচালনা।",
    icon: <MonitorPlay className="w-6 h-6 text-blue-500" />,
  },
  {
    title: "বেতন ও ইনভয়েসিং",
    desc: "শিক্ষকদের বেতন এবং অন্যান্য আর্থিক লেনদেনের অটোমেটেড হিসাব ও স্লিপ জেনারেশন।",
    icon: <Wallet className="w-6 h-6 text-emerald-500" />,
  },
  {
    title: "পরীক্ষা ও গ্রেডিং সিস্টেম",
    desc: "ডিজিটাল প্রশ্নপত্র তৈরি, উত্তরপত্র মূল্যায়ন এবং অটোমেটেড রেজাল্ট পাবলিশিং।",
    icon: <BookCheck className="w-6 h-6 text-purple-500" />,
  },
  {
    title: "স্মার্ট ক্লাস কন্টেন্ট",
    desc: "OneBoard-এর সাথে সিঙ্ক করে মাল্টিমিডিয়া ক্লাস লেসন সরাসরি ডেলিভারি করার সুবিধা।",
    icon: <Zap className="w-6 h-6 text-amber-500" />,
  },
];

export default function TeacherSolutions() {
  return (
    <section id="teacher-solutions" className="py-24 bg-slate-50 dark:bg-slate-900/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-blue-600 font-bold text-sm uppercase tracking-widest mb-4">
              <div className="h-1 w-8 bg-blue-600 rounded-full" />
              শিক্ষকদের জন্য সমাধান
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
              শিক্ষকতাই হোক আপনার মূল কাজ, <br />
              <span className="text-blue-600">বাকিটা আমাদের ওপর।</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 leading-relaxed">
              কাগজ-কলমের ঝামেলা এড়িয়ে ডিজিটাল পদ্ধতিতে ক্লাস ম্যানেজমেন্ট করুন। আমরা শিক্ষকদের জন্য এনেছি এমন এক ইকোসিস্টেম যা সময় বাঁচায় এবং পাঠদানকে আনন্দদায়ক করে।
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {teacherFeatures.map((feature, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h4 className="text-md font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Visual Element */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main Image/Mockup */}
            <div className="relative rounded-[3rem] bg-gradient-to-br from-blue-600 to-indigo-700 p-1">
              <div className="bg-white dark:bg-slate-900 rounded-[2.8rem] overflow-hidden p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-8 border-b border-slate-100 dark:border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <GraduationCap className="text-blue-600" />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900 dark:text-white text-sm">Teacher Dashboard</h5>
                      <p className="text-[10px] text-slate-500">Academic Session 2026</p>
                    </div>
                  </div>
                  <div className="h-2 w-20 bg-slate-100 dark:bg-slate-800 rounded-full" />
                </div>

                {/* Mockup Content */}
                <div className="space-y-4">
                  <div className="h-32 rounded-2xl bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center border-2 border-dashed border-slate-200 dark:border-slate-700">
                    <div className="text-center">
                      <p className="text-2xl font-black text-blue-600">85%</p>
                      <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">Syllabus Completed</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-20 rounded-xl bg-blue-50 dark:bg-blue-900/20 p-4">
                      <p className="text-[10px] text-blue-600 font-bold uppercase">Today's Class</p>
                      <p className="text-lg font-bold text-slate-700 dark:text-slate-300">04</p>
                    </div>
                    <div className="h-20 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 p-4">
                      <p className="text-[10px] text-emerald-600 font-bold uppercase">Evaluated</p>
                      <p className="text-lg font-bold text-slate-700 dark:text-slate-300">120</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Element */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-10 -right-6 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-2xl border border-blue-100 dark:border-blue-900 flex items-center gap-3"
            >
              <div className="h-10 w-10 rounded-xl bg-amber-500 flex items-center justify-center text-white">
                <ClipboardList />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase">Next Exam</p>
                <p className="text-sm font-black text-slate-900 dark:text-white">Mathematics Unit 2</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}