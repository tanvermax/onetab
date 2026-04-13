import { motion } from "framer-motion";
import { 

  Cpu, 
  Accessibility, 
  CloudSun, 
  Infinity,

  Award
} from "lucide-react";
// আপনার আপলোড করা SDG লোগোটি এখানে ইম্পোর্ট করুন
import sdgLogo from "../../assets/SDG Wheel_Transparent_WEB.png"; 

export default function ModifiedVision() {
  const visionCards = [
    {
      title: "বিশেষ চাহিদা সম্পন্ন শিশুদের জন্য AI",
      desc: "ভয়েস-টু-টেক্সট ও টেক্সট-টু-ভয়েস প্রযুক্তি ব্যবহার করে অন্তর্ভুক্তিমূলক শিক্ষা নিশ্চিত করা (NPT 13)।",
      icon: <Accessibility className="text-emerald-500" />,
    },
    {
      title: "ভবিষ্যৎ প্রযুক্তিনির্ভর পেশা",
      desc: "৬০% এর বেশি শিক্ষার্থীকে উচ্চতর প্রযুক্তি ও ক্যারিয়ারের প্রতি আগ্রহী করে তোলা (NPT 11)।",
      icon: <Cpu className="text-purple-500" />,
    },
    {
      title: "নিরবচ্ছিন্ন শিক্ষা কার্যক্রম",
      desc: "দুর্যোগ বা অস্থিরতায় স্থান-কাল ভেদে শিক্ষা সচল রাখা আমাদের অন্যতম লক্ষ্য।",
      icon: <CloudSun className="text-amber-500" />,
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-950 font-sans">
      
      {/* 1. Hero Section */}
      <section className="relative py-24 overflow-hidden bg-slate-50 dark:bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-[#0098FD] text-xs font-black uppercase tracking-[0.2em] mb-8"
          >
            Future Outlook & Goals
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-8 leading-tight">
            শিক্ষাব্যবস্থা ও প্রযুক্তির <br />
            <span className="text-[#0098FD]">দূরত্ব হ্রাসের ভিশন</span>
          </h1>
        </div>
      </section>

      {/* 2. Main Content: Left (Text) | Right (SDG & Stats) */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-16 items-start">
          
          {/* Left Side: Full Vision Content */}
         <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6 text-slate-700 dark:text-slate-300 text-lg leading-relaxed text-justify"
          >
            <h2 className="text-3xl font-black text-emerald-500 mb-8 uppercase tracking-tight">আগামীর ভাবনা</h2>
            <p>OneTab, OneBoard এবং OneBook প্রোডাক্ট এবং পরিষেবা সমূহ উন্নয়নে উন্নত বিশ্বের শীর্ষস্থানীয় শিক্ষাপ্রতিষ্ঠানসমূহের অধ্যাপক, গবেষক, দক্ষ প্রকৌশলী এবং পেশাজীবিদের সমন্বিত একটি দল প্রতিনিয়ত কাজ করছে যাদের মূল উদ্দ্যেশ্য হল বাংলাদেশে SDGs এর NPT: 9-13- এর পূর্ণ বাস্তবায়ন এবং দ্রুত পরিবর্তনশীল ভবিষ্যৎ প্রযুক্তিনির্ভর পেশাসমূহের জন্য প্রয়োজনীয় শিক্ষাব্যবস্থা ও প্রচলিত শিক্ষাব্যবস্থার মধ্যে বিদ্যমান দূরত্ব যথাসম্ভব হ্রাস করা।</p>
            <p>শিক্ষার্থী, অভিভাবক, শিক্ষকবৃন্দ সহ শিক্ষাপ্রতিষ্ঠানের সাথে সংশ্লিষ্ট পেশাজীবীগণ তাদের দৈনন্দিন কার্য সম্পাদনে স্মার্ট ফোন, Tablet, ল্যাপটপ অথবা ডেস্কটপ কম্পিউটার ব্যবহারে অনেক সময় ব্যয় করে। আমাদের তৈরীকৃত প্রোডাক্ট এবং পরিষেবা সমূহ অভিভাবক ও শিক্ষকবৃন্দকে স্মার্ট ফোন, Tablet ও কম্পিউটার ডিভাইস-এ তাদের ব্যয়কৃত সময়ের আরও গঠনমূলক ব্যবহারের মাধ্যমে শিক্ষার্থীদের পড়াশুনার প্রক্রিয়ার সাথে সরাসরি অথবা ভার্চুয়ালী আরও গভীরভাবে সম্পৃক্ত হওয়ার সুযোগ করে দেয়, ফলে ১০০% শিক্ষার্থীর উচ্চমাধ্যমিক বা সমমান পর্যন্ত শিক্ষার সফল সমাপ্তি নিশ্চিত করা সহজ হয়, যা SDGs এর NPT 9 এবং 10 এর অন্তর্ভুক্ত।</p>
            <p>ভবিষ্যৎ প্রযুক্তিনির্ভর পেশাসমূহের জন্য দক্ষ জনবল তৈরীর লক্ষ্যে, OneBook দিয়ে উচ্চমাধ্যমিক, ভোকেশনাল ও দাখিল পর্যন্ত বিজ্ঞান শিক্ষার কারিকুলাম সমন্বয় করে এবং কেন্দ্রীয়ভাবে প্রযুক্তিভিত্তিক ব্যবহারিক প্রশিক্ষণ উপকরণ তৈরী করে শিক্ষার্থীদের প্রশিক্ষণ প্রদানের মাধ্যমে ৬০% এর বেশী শিক্ষার্থীকে উচ্চতর প্রযুক্তির শিক্ষা ও পেশার বিষয়ে আগ্রহী করে তোলা যায়, যা SDGs এর NPT 11 এর অন্তর্ভুক্ত।</p>
            <p>আমাদের প্রোডাক্ট সমূহের আর্টিফিশিয়াল ইন্টেলিজেন্স ভিত্তিক ভয়েস-টু- টেক্সট এবং টেক্সট-টু-ভয়েস সুবিধা ব্যবহার করে বাক, দৃষ্টি ও শ্রবণ প্রতিবন্ধী সহ বিশেষ চাহিদা সম্পন্ন শিশু/শিক্ষার্থীদেরকেও স্বাভাবিক শিক্ষা প্রক্রিয়ার সাথে যুক্ত করা সম্ভব, যা SDGs এর NPT 13 এর অন্তর্ভুক্ত।</p>
            <p>বর্তমানে কিছু শিক্ষা প্রতিষ্ঠান বা শিক্ষা কার্যক্রম পরিচালনাকারী সরকারী/বেসরকারী সংস্থাসমূহ নিজস্ব ERP- System ব্যবহার করে, যা খুব সহজেই One Tab এর সাথে ইন্টিগ্রেট করে একটি যৌথ প্লাটফর্ম তৈরী করার মাধ্যমে শিক্ষা ব্যবস্থাকে সম্পূর্ণ ডিজিটালাইজড করা সম্ভব।</p>
            <p>প্রাকৃতিক দুর্যোগ, প্যানডেমিক পরিস্থিতি, গ্লোবাল ওয়ার্মিং এবং আন্তর্জাতিক/আঞ্চলিক অস্থিরতার কারণে অনেক সময় শিক্ষার্থী, অভিভাবক বা শিক্ষকবৃন্দকে অনিচ্ছাকৃত স্থান ত্যাগ করতে হয় এবং অনেক ক্ষেত্রে শিক্ষা প্রতিষ্ঠান বন্ধ থাকে। OneTab, OneBoard এবং OneBook প্রোডাক্ট এবং পরিষেবা সমূহের অন্যতম লক্ষ্য হল স্থান কাল ভেদে যেকোন অবস্থায় শিক্ষর্থীদের শিক্ষা কার্যক্রম সচল রাখা।</p>
          </motion.div>

          {/* Right Side: SDG Wheel Visual */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} className="lg:sticky lg:top-24 flex flex-col items-center">
            <img src={sdgLogo} alt="SDG Wheel" className="w-64 h-64 object-contain animate-[spin_30s_linear_infinite]" />
            <div className="mt-8 p-6 text-center border border-slate-100 dark:border-slate-800 rounded-3xl">
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Global Standards</p>
              <p className="text-xs text-slate-400 mt-1">SDGs NPT 9-13 Implementation</p>
            </div>
          </motion.div>

          {/* Right Side: SDG Highlight & Vision Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-24 space-y-6"
          >
            {/* SDG Special Highlight */}
            <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden group">
               <div className="relative z-10 flex items-center gap-6">
                  <img 
                    src={sdgLogo} 
                    alt="SDG Wheel" 
                    className="w-20 h-20 object-contain animate-[spin_20s_linear_infinite]" 
                  />
                  <div>
                    <h3 className="text-xl font-bold">SDG Compliance</h3>
                    <p className="text-slate-400 text-sm mt-1 leading-relaxed">
                      NPT 9, 10, 11 এবং 13 লক্ষ্যমাত্রা অর্জনে আমাদের প্রযুক্তিগত অঙ্গীকার।
                    </p>
                  </div>
               </div>
               <div className="absolute inset-0 bg-gradient-to-r from-[#0098FD]/20 to-transparent pointer-events-none" />
            </div>

            {/* Vision Impact Cards */}
            <div className="grid gap-4">
              {visionCards.map((card, i) => (
                <div 
                  key={i} 
                  className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-start gap-4 hover:shadow-lg transition-all group"
                >
                  <div className="h-10 w-10 shrink-0 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">{card.title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Global Expertise Badge */}
            <div className="p-6 rounded-[2rem] bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/30 flex items-center gap-4">
               <Award className="text-[#0098FD]" size={32} />
               <div>
                  <h5 className="font-bold text-slate-900 dark:text-white text-sm">Global Expert Team</h5>
                  <p className="text-xs text-slate-500">শীর্ষস্থানীয় গবেষক ও পেশাজীবিদের সমন্বয়।</p>
               </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Integration Message */}
      <section className="py-24 bg-[#0098FD] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 text-white">
          <Infinity size={48} className="mx-auto mb-6 opacity-30" />
          <h2 className="text-3xl font-black mb-6 italic">"যেকোনো অবস্থায় শিক্ষা সচল রাখাই আমাদের অঙ্গীকার।"</h2>
          <div className="flex justify-center gap-4">
            <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-sm font-bold">
              ERP Integration Ready
            </div>
            <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-sm font-bold">
              Crisis Resilient Learning
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}