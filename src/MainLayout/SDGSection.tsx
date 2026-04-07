import { motion } from "framer-motion";
import { CheckCircle2, Cpu, Users, Accessibility } from "lucide-react";

const goals = [
  {
    npt: "NPT — 9",
    title: "সার্বজনীন প্রাথমিক ও মাধ্যমিক শিক্ষা সম্পন্ন",
    desc: "OneBook ও OneTab ব্যবহার করে ভার্চুয়াল ক্লাসরুমের মাধ্যমে ১০০% শিক্ষার্থীর উচ্চমাধ্যমিক বা সমমান পর্যন্ত শিক্ষার সফল সমাপ্তি নিশ্চিত করা।",
    num: "09",
    icon: <CheckCircle2 className="w-6 h-6 text-[#0098FD]" />,
  },
  {
    npt: "NPT — 10",
    title: "শিক্ষা ও প্রশিক্ষণে সমান সুযোগ নিশ্চিত",
    desc: "অভিভাবক ও শিক্ষকবৃন্দকে স্মার্টফোন ও ট্যাবলেটে সময়ের গঠনমূলক ব্যবহারের মাধ্যমে শিক্ষার্থীদের সাথে আরও গভীরভাবে সম্পৃক্ত করা।",
    num: "10",
    icon: <Users className="w-6 h-6 text-blue-500" />,
  },
  {
    npt: "NPT — 11",
    title: "প্রযুক্তি শিক্ষায় ৬০%+ শিক্ষার্থীর আগ্রহ",
    desc: "উচ্চমাধ্যমিক ও ভোকেশনাল পর্যায়ে বিজ্ঞান কারিকুলাম সমন্বয় করে কেন্দ্রীয়ভাবে প্রযুক্তিভিত্তিক ব্যবহারিক প্রশিক্ষণ প্রদান।",
    num: "11",
    icon: <Cpu className="w-6 h-6 text-purple-500" />,
  },
  {
    npt: "NPT — 12 & 13",
    title: "বিশেষ চাহিদাসম্পন্ন শিক্ষার্থীদের অন্তর্ভুক্তি",
    desc: "AI ভিত্তিক Voice-to-Text এবং Text-to-Voice সুবিধা ব্যবহার করে বাক, দৃষ্টি ও শ্রবণ প্রতিবন্ধী শিশুদের স্বাভাবিক শিক্ষা প্রক্রিয়ায় যুক্ত করা।",
    num: "13",
    icon: <Accessibility className="w-6 h-6 text-orange-500" />,
  },
];

export default function SDGSection() {
  return (
    <section id="sdg" className="py-20 bg-slate-50 dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-[#0098FD] px-4 py-1.5 rounded-full w-fit text-sm font-bold">
              <div className="w-2 h-2 rounded-full bg-[#0098FD] animate-pulse" />
              SDG Goal 4 — Quality Education
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
              জাতীয় <span className="text-[#0098FD] italic">অগ্রাধিকার লক্ষ্যমাত্রা</span>
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 max-w-md text-lg leading-relaxed">
            বাংলাদেশের SDGs-এর NPT 9 থেকে 13 পর্যন্ত প্রতিটি লক্ষ্যমাত্রার সাথে OneTab-এর পণ্য ও পরিষেবাসমূহ সরাসরি সংযুক্ত।
          </p>
        </div>

        {/* Goals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-[#0098FD]/50 transition-all hover:shadow-2xl overflow-hidden"
            >
              <div className="relative z-10">
                <span className="text-xs font-bold text-[#0098FD] dark:text-[#0098FD] mb-4 block">
                  {goal.npt}
                </span>
                <div className="mb-4">{goal.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 leading-snug">
                  {goal.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {goal.desc}
                </p>
              </div>
              <span className="absolute -bottom-4 -right-2 text-8xl font-black text-slate-100 dark:text-slate-800/50 pointer-events-none group-hover:text-[#0098FD]/10 transition-colors">
                {goal.num}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Big Highlight Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative rounded-[2.5rem] bg-[#0f2a1a] p-8 md:p-12 text-white overflow-hidden shadow-2xl"
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#0098FD]/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -ml-32 -mb-32" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-[#0098FD]/20 text-emerald-300 text-xs font-bold mb-6 border border-[#0098FD]/30">
                Strategic Vision
              </span>
              <h3 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
                প্রচলিত শিক্ষাব্যবস্থা ও ভবিষ্যৎ পেশার মধ্যকার দূরত্ব কমানো
              </h3>
              <p className="text-emerald-100/70 text-lg leading-relaxed">
                OneTab, OneBoard ও OneBook প্রোডাক্ট এবং পরিষেবাসমূহ উন্নত বিশ্বের শীর্ষস্থানীয় শিক্ষাপ্রতিষ্ঠানের অধ্যাপক, গবেষক এবং পেশাজীবিদের সমন্বিত একটি দল প্রতিনিয়ত উন্নত করে চলেছে।
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { num: "100%", lbl: "শিক্ষার্থীর শিক্ষা সম্পন্নের লক্ষ্য" },
                { num: "60%+", lbl: "প্রযুক্তি পেশায় আগ্রহী করার লক্ষ্য" },
                { num: "NPT 9–13", lbl: "সম্পূর্ণ বাস্তবায়নের প্রতিশ্রুতি" },
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center sm:items-start p-4 rounded-2xl bg-white/5 border border-white/10 text-center sm:text-left">
                  <span className="text-3xl font-black text-[#0098FD] mb-2">{stat.num}</span>
                  <span className="text-[11px] uppercase tracking-wider text-emerald-100/60 font-bold leading-tight">
                    {stat.lbl}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}