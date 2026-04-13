import { motion } from "framer-motion";
import { 
  Globe2, 
  Cpu, 
  Accessibility, 
  CloudSun, 
  Users2, 
  TrendingUp, 
  Infinity 
} from "lucide-react";

export default function VisionPage() {
  const visionCards = [
    {
      title: "গ্লোবাল এক্সপার্ট টিম",
      desc: "বিশ্বের শীর্ষস্থানীয় অধ্যাপক, গবেষক এবং প্রকৌশলীদের সমন্বয়ে গঠিত আমাদের টিম প্রতিনিয়ত কারিকুলাম উন্নয়নে কাজ করছে।",
      icon: <Users2 className="text-blue-500" />,
      tag: "Expertise"
    },
    {
      title: "অন্তর্ভুক্তিমূলক শিক্ষা (AI)",
      desc: "ভয়েস-টু-টেক্সট ও টেক্সট-টু-ভয়েস প্রযুক্তি ব্যবহার করে বিশেষ চাহিদা সম্পন্ন শিক্ষার্থীদের মূলধারার শিক্ষায় যুক্ত করা।",
      icon: <Accessibility className="text-emerald-500" />,
      tag: "NPT 13"
    },
    {
      title: "প্রযুক্তিনির্ভর ক্যারিয়ার",
      desc: "৬০% এর বেশি শিক্ষার্থীকে উচ্চতর প্রযুক্তি ও পেশার প্রতি আগ্রহী করে তুলতে কেন্দ্রীয়ভাবে ব্যবহারিক উপকরণ সরবরাহ।",
      icon: <Cpu className="text-purple-500" />,
      tag: "NPT 11"
    },
    {
      title: "নিরবচ্ছিন্ন শিক্ষা কার্যক্রম",
      desc: "প্রাকৃতিক দুর্যোগ বা প্যানডেমিক পরিস্থিতিতেও 'স্থান-কাল' ভেদে শিক্ষার্থীদের শিক্ষা কার্যক্রম সচল রাখা।",
      icon: <CloudSun className="text-amber-500" />,
      tag: "Resilience"
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-950 font-sans">
      
      {/* 1. Hero Section: Global Vision */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-5 pointer-events-none">
          <Globe2 size={800} className="mx-auto text-[#0098FD] animate-[spin_60s_linear_infinite]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-[#0098FD] text-xs font-black uppercase tracking-[0.2em] mb-8"
          >
            Our Vision & Strategic Goals
          </motion.div>
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white mb-8 leading-normal">
            শিক্ষাব্যবস্থা ও প্রযুক্তির <br />
            <span className="text-[#0098FD]">দূরত্ব হ্রাসের অঙ্গীকার</span>
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
            বাংলাদেশের SDGs-এর NPT: 9-13 লক্ষ্যমাত্রা অর্জনে আমরা উন্নত বিশ্বের শীর্ষস্থানীয় গবেষক ও প্রকৌশলীদের সাথে নিয়ে কাজ করছি। আমাদের লক্ষ্য—প্রথাগত শিক্ষার সাথে দ্রুত পরিবর্তনশীল প্রযুক্তি বিশ্বের মেলবন্ধন ঘটানো।
          </p>
        </div>
      </section>

      {/* 2. Impact Stats: Constructional Use of Time */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">ডিজিটাল সময়ের গঠনমূলক ব্যবহার</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                স্মার্টফোন বা কম্পিউটারে ব্যয়কৃত সময়কে শিক্ষার প্রক্রিয়ায় রূপান্তর করাই আমাদের উদ্দেশ্য। এর মাধ্যমে ১০০% শিক্ষার্থীর উচ্চমাধ্যমিক শিক্ষা সম্পন্ন নিশ্চিত করা সম্ভব (NPT 9 & 10), যা জাতীয় উন্নয়নের চাবিকাঠি।
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] shadow-sm border border-slate-100 dark:border-slate-700">
                <div className="text-4xl font-black text-[#0098FD] mb-2">১০০%</div>
                <div className="text-xs uppercase font-bold text-slate-400">উচ্চমাধ্যমিক সমাপ্তি</div>
              </div>
              <div className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] shadow-sm border border-slate-100 dark:border-slate-700">
                <div className="text-4xl font-black text-emerald-500 mb-2">৬০%+</div>
                <div className="text-xs uppercase font-bold text-slate-400">প্রযুক্তি শিক্ষায় আগ্রহ</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Vision Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {visionCards.map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[3rem] border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:shadow-2xl hover:shadow-blue-500/5 transition-all group"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 group-hover:bg-[#0098FD] group-hover:text-white transition-colors">
                  {card.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-3 py-1 border border-slate-100 dark:border-slate-800 rounded-full">
                  {card.tag}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{card.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm md:text-base">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Integration & Crisis Management (The Joint Platform) */}
      <section className="py-24 bg-[#0098FD] relative overflow-hidden">
        {/* Animated Background Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/10 rounded-full animate-pulse" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 text-white">
          <Infinity size={48} className="mx-auto mb-8 opacity-50" />
          <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">যেকোনো প্ল্যাটফর্মের সাথে ইন্টিগ্রেশন এবং চিরস্থায়ী শিক্ষা</h2>
          <p className="text-blue-50 text-xl leading-relaxed mb-12">
            বিদ্যমান যেকোনো ERP সিস্টেমকে OneTab-এর সাথে ইন্টিগ্রেট করা সম্ভব। আন্তর্জাতিক অস্থিরতা বা প্রাকৃতিক দুর্যোগে শিক্ষা প্রতিষ্ঠান বন্ধ থাকলেও আমাদের প্রোডাক্টগুলো নিশ্চিত করে যে শিক্ষার্থীদের পড়াশোনা এক মুহূর্তের জন্যও থেমে থাকবে না।
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="px-8 py-4 bg-white text-[#0098FD] font-normal rounded-2xl shadow-xl  tracking-wide text-sm">
              ERP Integration Ready
            </div>
            <div className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-normal rounded-2xl  tracking-wide text-sm">
              Anytime, Anywhere Learning
            </div>
          </div>
        </div>
      </section>

      {/* 5. Final Vision Statement */}
      <section className="py-24 text-center">
        <TrendingUp size={40} className="mx-auto text-[#0098FD] mb-6" />
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 italic">"ভবিষ্যৎ প্রজন্মের জন্য একটি দক্ষ ও স্মার্ট বাংলাদেশ গড়ার স্বপ্ন।"</h2>
        <div className="h-1 w-20 bg-[#0098FD] mx-auto rounded-full" />
      </section>

    </div>
  );
}