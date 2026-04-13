import { motion } from "framer-motion";
import { Target, Lightbulb, Users, Smartphone, BookOpen, Presentation } from "lucide-react";

export default function AboutUs() {
  const values = [
    {
      title: "OneTab",
      desc: "শিক্ষাপ্রতিষ্ঠান ও শিক্ষকদের জন্য সম্পূর্ণ ডিজিটাল ম্যানেজমেন্ট সলিউশন।",
      icon: <Smartphone className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "OneBoard",
      desc: "শ্রেণীকক্ষে আধুনিক ও তথ্যনির্ভর পাঠদানের জন্য স্মার্ট ইন্টারঅ্যাক্টিভ মাধ্যম।",
      icon: <Presentation className="w-6 h-6 text-emerald-500" />,
    },
    {
      title: "OneBook",
      desc: "শিক্ষার্থী ও অভিভাবকদের জন্য ডিজিটাল লাইব্রেরি এবং প্রগ্রেস ট্র্যাকিং প্ল্যাটফর্ম।",
      icon: <BookOpen className="w-6 h-6 text-purple-500" />,
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-950">
      {/* 1. Hero Section: The Vision */}
      <section className="relative py-20 overflow-hidden bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 text-[#0098FD] px-4 py-2 rounded-full mb-6 font-bold text-xs uppercase tracking-widest"
          >
            <Target size={16} /> আমাদের লক্ষ্য ও উদ্দেশ্য
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight max-w-4xl mx-auto mb-8"
          >
            জাতীয় লক্ষ্যমাত্রা ও <span className="text-[#0098FD]">টেকসই উন্নয়ন</span> লক্ষ্য অর্জনে আমরা প্রতিশ্রুতিবদ্ধ
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            বাংলাদেশের Sustainable Development Goals (SDGs)-এর অংশ হিসেবে Goal 4: Quality Education এবং জাতীয় অগ্রাধিকারমূলক লক্ষ্যমাত্রা (NPT: 9-13) অর্জনে আমরা কাজ করছি।
          </motion.p>
        </div>
      </section>

      {/* 2. Inspiration & Mission */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              আমাদের অনুপ্রেরণা: <br />
              <span className="text-[#0098FD]">One-Teacher-One-Tab</span>
            </h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-400 text-lg leading-relaxed text-justify">
              <p>
                বাংলাদেশ সরকারের সুদূরপ্রসারী ভাবনা থেকে অনুপ্রাণিত হয়ে আমরা তৈরি করেছি এক সমন্বিত ইকোসিস্টেম। আমাদের লক্ষ্য প্রচলিত শিক্ষাব্যবস্থার আধুনিকায়ন এবং শিক্ষার্থীদের ভবিষ্যৎ প্রযুক্তিনির্ভর পেশার জন্য উপযুক্ত করে গড়ে তোলা।
              </p>
              <p>
                শিক্ষক হলো শিক্ষার মূল চালিকাশক্তি। উন্নত বিশ্বের সাথে তাল মিলিয়ে চলতে শিক্ষকদের উপযুক্ত প্রশিক্ষণ এবং তথ্যনির্ভর পাঠদানের উপকরণ নিশ্চিত করাই আমাদের মূল লক্ষ্য।
              </p>
            </div>
          </motion.div>

          {/* Core Products Grid */}
          <div className="grid gap-6">
            {values.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="flex items-center gap-5">
                  <div className="h-14 w-14 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center group-hover:bg-[#0098FD] group-hover:text-white transition-colors">
                    {val.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">{val.title}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{val.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The "One Thread" Concept (The Connector) */}
      <section className="py-24 bg-[#0098FD] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
            {/* Background pattern or dots */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[20px_20px]" />
        </div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <Lightbulb className="w-12 h-12 text-yellow-200 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            সবাইকে এক সুতায় বাঁধার অঙ্গীকার
          </h2>
          <p className="text-blue-100 text-xl leading-relaxed mb-12">
            OneTab, OneBoard এবং OneBook হলো একটি যৌথ ডিজিটাল মাধ্যম যা শিক্ষাপ্রতিষ্ঠান, শিক্ষক, অভিভাবক, লাইব্রেরী, কন্টেন্ট ক্রিয়েটর এবং জাতীয় শিক্ষা কার্যক্রম পরিচালনাকারী প্রতিষ্ঠানসমূহকে একটি প্ল্যাটফর্মে নিয়ে আসে। এটি অভিভাবকদের সন্তানদের পড়াশুনার সাথে আরও নিবিড়ভাবে সংযুক্ত করে এবং শিক্ষার্থীদের সর্বোচ্চ সফলতা নিশ্চিত করে।
          </p>
          <div className="flex flex-wrap justify-center gap-4">
             <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full text-white font-medium border border-white/20">
                ২৪/৭ মনিটরিং
             </div>
             <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full text-white font-medium border border-white/20">
                ফ্রি অ্যাপ্লিকেশন ডাউনলোড
             </div>
             <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full text-white font-medium border border-white/20">
                অভিভাবক-শিক্ষক সমন্বয়
             </div>
          </div>
        </div>
      </section>

      {/* 4. Support Footer */}
      <section className="py-20 text-center max-w-4xl mx-auto px-6">
        <Users className="w-10 h-10 text-[#0098FD] mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">একত্রে গড়বো আগামীর বাংলাদেশ</h3>
        <p className="text-slate-500 dark:text-slate-400">
          আমাদের অ্যাপসমূহ বিনামূল্যে ডাউনলোড করে আপনিও হতে পারেন এই ডিজিটাল শিক্ষা বিপ্লবের অংশ।
        </p>
      </section>
    </div>
  );
}