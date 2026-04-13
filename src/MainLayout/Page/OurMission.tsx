import { motion } from "framer-motion";
import { 
  Target, 
  Cpu, 

  ShieldCheck, 
  FilePieChart, 
  Globe, 
  Mic, 
  MapPin 
} from "lucide-react";

export default function MissionPage() {
  const missionFeatures = [
    {
      title: "শিক্ষকদের ক্ষমতায়ন",
      desc: "এজেন্ডা-বুক, লেকচার নোট, অ্যানিমেশন এবং ভিডিও টিউটোরিয়াল তৈরির মাধ্যমে ডিজিটাল পাঠদান।",
      icon: <Cpu className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "ভার্চুয়াল ক্লাসরুম",
      desc: "শ্রেণীকক্ষে উপস্থিত না থেকেও OneBoard-এর মাধ্যমে শিক্ষার্থীরা সরাসরি লেকচারে অংশগ্রহণ ও প্রশ্ন করতে পারে।",
      icon: <Globe className="w-6 h-6 text-emerald-500" />,
    },
    {
      title: "স্মার্ট রিপোর্টিং",
      desc: "ভয়েস-টু-টেক্সট কমান্ড ব্যবহার করে প্রতিটি শিক্ষার্থীর চ্যাপ্টারওয়াইজ প্রগ্রেস রিপোর্ট প্রদান।",
      icon: <Mic className="w-6 h-6 text-purple-500" />,
    },
    {
      title: "নিরাপত্তা ও নিয়ন্ত্রণ",
      desc: "Geo-Location ট্র্যাকিং এবং বিনোদনমূলক অ্যাপ ব্লক করে শুধুমাত্র পড়াশোনার পরিবেশ নিশ্চিত করা।",
      icon: <ShieldCheck className="w-6 h-6 text-rose-500" />,
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-950">
      {/* 1. Hero: The Core Mission */}
      <section className="relative py-24 bg-linear-to-b from-slate-50 to-white dark:from-slate-900/50 dark:to-slate-950">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 text-[#0098FD] px-4 py-2 rounded-full mb-8 font-bold text-xs uppercase tracking-widest"
          >
            <Target size={16} /> আমাদের লক্ষ্য ও ভিশন
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight mb-8">
            শিক্ষার প্রতিটি ধাপ হোক <br />
            <span className="text-[#0098FD]">ডিজিটাল ও স্মার্ট</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            OneTab-এর মূল কাজ হলো একজন শিক্ষককে আধুনিক শিক্ষাদানে দ্রুত প্রশিক্ষিত করা এবং প্রযুক্তি ব্যবহারের মাধ্যমে শিক্ষক, শিক্ষার্থী ও অভিভাবকের মধ্যে একটি অভিন্ন মেলবন্ধন তৈরি করা।
          </p>
        </div>
      </section>

      {/* 2. Professional Tools for Teachers */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-t border-slate-100 dark:border-slate-800">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-100/50 dark:bg-blue-900/20 rounded-[3rem] blur-2xl" />
            <div className="relative bg-white dark:bg-slate-900 p-8 rounded-[3rem] shadow-xl border border-slate-50 dark:border-slate-800">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">শিক্ষক ও পাঠদান ডিজিটালাইজেশন</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                শিক্ষকরা জাতীয় ও আন্তর্জাতিক কারিকুলাম বিশ্লেষণ করে অতি সহজেই লেকচার নোট, ক্লাস টেস্টের প্রশ্নপত্র এবং অ্যানিমেশন লেকচার তৈরি করতে পারেন। ভার্চুয়াল কানেক্টিভিটির মাধ্যমে দূরবর্তী শিক্ষার্থীরাও সরাসরি ক্লাসে যুক্ত হতে পারে।
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {["এজেন্ডা-বুক", "ভিডিও টিউটোরিয়াল", "অ্যানিমেশন নোট", "ভার্চুয়াল বোর্ড"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300">
                    <div className="h-2 w-2 rounded-full bg-[#0098FD]" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="grid gap-6">
            {missionFeatures.map((f, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex gap-4 p-5 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
              >
                <div className="h-12 w-12 shrink-0 rounded-xl bg-white dark:bg-slate-800 shadow-md flex items-center justify-center">
                  {f.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">{f.title}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Institutional Excellence (ERP) */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6">OneTab: একটি সম্পূর্ণ ERP সিস্টেম</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">ভর্তি প্রক্রিয়া থেকে শুরু করে বেতন আদায় এবং শিক্ষক-কর্মচারীদের ম্যানেজমেন্ট—সবই এখন হবে এক ক্লিকে।</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: "অ্যাকাডেমিক ম্যানেজমেন্ট", detail: "রুটিন, সিলেবাস এবং পরীক্ষা মডারেশন।" },
              { label: "অ্যাডমিন ও ফাইন্যান্স", detail: "বেতন আদায়, আয়-ব্যয় এবং জিও-লোকেশন হাজিরা।" },
              { label: "সরকারি কানেক্টিভিটি", detail: "বোর্ড রেজিস্ট্রেশন, বৃত্তির টাকা এবং প্রমোশন ম্যানেজমেন্ট।" }
            ].map((box, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] hover:bg-white/10 transition-all">
                <FilePieChart className="text-[#0098FD] mb-4" size={32} />
                <h4 className="text-xl font-bold mb-3">{box.label}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{box.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Parent's Peace of Mind (OneBook) */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="bg-[#0098FD] rounded-[4rem] p-10 md:p-20 text-white relative overflow-hidden">
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-6">অভিভাবকদের জন্য OneBook</h2>
              <ul className="space-y-4">
                {[
                  "হোমওয়ার্ক ও এসাইনমেন্ট স্ট্যাটাস ট্র্যাকিং",
                  "চ্যাপ্টারওয়াইজ ডিজিটাল প্রগ্রেস রিপোর্ট",
                  "প্রাইভেট টিউটর নিয়োগ ও মনিটরিং",
                  "সন্তানের গতিবিধি ও নিরাপত্তা (Geo-Location)"
                ].map((li) => (
                  <li key={li} className="flex items-center gap-3 text-lg font-medium">
                    <div className="h-2 w-2 rounded-full bg-white" /> {li}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
              <MapPin className="mb-4 text-white animate-bounce" />
              <h4 className="text-xl font-bold mb-2">নিরাপদ ও নিয়ন্ত্রিত ডিভাইস</h4>
              <p className="text-blue-50 leading-relaxed text-sm">
                OneBook Tablet-এ গেম বা সোশ্যাল মিডিয়া ব্যবহারের কোনো সুযোগ নেই। এটি শুধুমাত্র পড়াশোনার কাজে ব্যবহৃত হয়, যা আপনার সন্তানের ফোকাস নিশ্চিত করে।
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}