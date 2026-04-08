import { motion } from "framer-motion";
import { Play, FileText, Lock, CheckCircle } from "lucide-react";
import { Link } from "react-router";

const modules = [
  {
    id: 1,
    title: "মডিউল ১: স্মার্ট ডিভাইসের পরিচিতি",
    duration: "৪৫ মিনিট",
    lessons: "০৫টি লেসন",
    status: "Completed",
    topics: ["ট্যাবলেট সেটআপ", "ইন্টারনেট কানেক্টিভিটি", "বেসিক সেটিংস"]
  },
  {
    id: 2,
    title: "মডিউল ২: ডিজিটাল কন্টেন্ট ম্যানেজমেন্ট",
    duration: "১ ঘণ্টা ২০ মিনিট",
    lessons: "০৮টি লেসন",
    status: "In Progress",
    topics: ["OneBook ব্যবহার", "পিডিএফ ও ভিডিও প্লেয়ার", "অফলাইন রিডিং"]
  },
  {
    id: 3,
    title: "মডিউল ৩: ইন্টারেক্টিভ ক্লাস কন্ডাক্ট",
    duration: "২ ঘণ্টা",
    lessons: "১০টি লেসন",
    status: "Locked",
    topics: ["OneBoard সিঙ্কিং", "লাইভ কুইজ গ্রহণ", "হোয়াইটবোর্ড টুলস"]
  }
];

export default function TeacherTrainingPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="mb-12">
          <Link to="/" className="text-indigo-600 font-bold flex items-center gap-2 mb-6">
            ← ফিরে যান
          </Link>
          <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-4">
            শিক্ষক প্রশিক্ষণ <span className="text-indigo-600">কারিকুলাম</span>
          </h1>
          <p className="text-slate-500">আপনার ডিজিটাল শিক্ষকতা ক্যারিয়ারের ধাপগুলো এখান থেকে সম্পন্ন করুন।</p>
        </div>

        {/* Modules List */}
        <div className="space-y-6">
          {modules.map((m) => (
            <motion.div 
              key={m.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex items-center gap-4">
                  <div className={`h-12 w-12 rounded-2xl flex items-center justify-center ${
                    m.status === 'Completed' ? 'bg-emerald-100 text-emerald-600' : 
                    m.status === 'Locked' ? 'bg-slate-100 text-slate-400' : 'bg-indigo-100 text-indigo-600'
                  }`}>
                    {m.status === 'Locked' ? <Lock size={20} /> : <Play size={20} />}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">{m.title}</h3>
                    <div className="flex gap-4 mt-1 text-xs text-slate-400 font-medium">
                      <span className="flex items-center gap-1"><Play size={12}/> {m.duration}</span>
                      <span className="flex items-center gap-1"><FileText size={12}/> {m.lessons}</span>
                    </div>
                  </div>
                </div>
                
                <button className={`px-6 py-2 rounded-xl font-bold text-sm transition-all ${
                  m.status === 'Completed' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' :
                  m.status === 'Locked' ? 'bg-slate-50 text-slate-400 cursor-not-allowed' : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`}>
                  {m.status === 'Completed' ? 'সম্পন্ন হয়েছে' : m.status === 'Locked' ? 'লকড' : 'শুরু করুন'}
                </button>
              </div>

              {/* Module Topics */}
              <div className="mt-6 flex flex-wrap gap-2">
                {m.topics.map(topic => (
                  <span key={topic} className="px-3 py-1 bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] rounded-full border border-slate-100 dark:border-slate-700">
                    • {topic}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Progress Bar Bottom */}
        <div className="mt-12 p-8 bg-indigo-600 rounded-[2.5rem] text-white flex items-center justify-between overflow-hidden relative">
          <div className="relative z-10">
            <h4 className="text-xl font-bold mb-2">আপনার অগ্রগতি</h4>
            <div className="flex items-center gap-4">
              <div className="h-2 w-48 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-white w-[35%]" />
              </div>
              <span className="font-bold text-sm text-indigo-100">৩৫% সম্পন্ন</span>
            </div>
          </div>
          <CheckCircle size={80} className="absolute -right-4 -bottom-4 text-white/10" />
        </div>

      </div>
    </div>
  );
}