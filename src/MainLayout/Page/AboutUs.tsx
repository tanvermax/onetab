import { motion } from "framer-motion";
import { Target, Lightbulb, Smartphone, BookOpen, Presentation, ChevronRight } from "lucide-react";
import Lottie from "lottie-react";
import modernEduAnimation from "../../assets/animation.json"; // আপনার Lottie এনিমেশন পাথ
import { BsApple, BsGooglePlay } from "react-icons/bs";


export default function AboutUs() {
  const values = [
    {
      title: "OneTab",
      desc: "শিক্ষাপ্রতিষ্ঠান ও শিক্ষকদের সম্পূর্ণ ডিজিটাল ম্যানেজমেন্ট সলিউশন।",
      icon: <Smartphone className="w-5 h-5 text-blue-500" />,
    },
    {
      title: "OneBoard",
      desc: "শ্রেণীকক্ষে আধুনিক ও তথ্যনির্ভর পাঠদানের জন্য স্মার্ট ইন্টারঅ্যাক্টিভ মাধ্যম।",
      icon: <Presentation className="w-5 h-5 text-emerald-500" />,
    },
    {
      title: "OneBook",
      desc: "শিক্ষার্থী ও অভিভাবকদের জন্য ডিজিটাল লাইব্রেরি এবং প্রগ্রেস ট্র্যাকিং প্ল্যাটফর্ম।",
      icon: <BookOpen className="w-5 h-5 text-purple-500" />,
    },
  ];
    const LottieComponent = (Lottie as any).default || Lottie;

  return (
    
    <div className="bg-white dark:bg-slate-950 font-sans">
      
      {/* Hero Section: The Vision Header */}
      <section className="relative py-24 bg-slate-50 dark:bg-slate-900/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-[#0098FD] text-xs font-black uppercase tracking-widest mb-6"
          >
            <Target size={16} /> আমাদের লক্ষ্য ও উদ্দেশ্য
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight max-w-5xl mx-auto mb-8"
          >
            জাতীয় লক্ষ্যমাত্রা ও <span className="text-[#0098FD]">টেকসই উন্নয়ন</span> লক্ষ্য অর্জনে আমরা প্রতিশ্রুতিবদ্ধ
          </motion.h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            বাংলাদেশের SDGs-এর Goal 4: Quality Education এবং জাতীয় অগ্রাধিকারমূলক লক্ষ্যমাত্রা (NPT: 9-13) অর্জনে আমরা কাজ করছি।
          </p>
        </div>
      </section>

      {/* Main Content Section (Two-Column Layout) */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-t border-slate-100 dark:border-slate-800">
        <div className="grid  lg:flex grid-cols-[1fr,0.8fr] gap-16 items-start">
          
          {/* Left Side: Your Full Content Text */}
         <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6 text-slate-700 dark:text-slate-300 text-lg leading-relaxed text-justify"
          >
            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-8">আমাদের সম্পর্কে</h2>
            <p>বাংলাদেশের Sustainable Development Goals (SDGs)-এর অংশ হিসেবে Goal 4: Quality Education-এর অন্তর্ভুক্ত জাতীয় অগ্রাধিকারমূলক লক্ষ্যসমূহের (NPT: 9-13) সাথে সামঞ্জস্য রেখে প্রচলিত শিক্ষাব্যবস্থার আধুনিকায়ন ও শিক্ষার্থীদের ভবিষ্যৎ প্রযুক্তিনির্ভর পেশাসমূহের জন্য উপযুক্ত করে গড়ে তোলার লক্ষ্যে, বাংলাদেশ সরকারের সুদূরপ্রসারী One-Teacher-One-Tab ভাবনা থেকে অনুপ্রাণিত হয়ে আমরা শিক্ষক ও শিক্ষাপ্রতিষ্ঠানসমূহের জন্য OneTab, শ্রেণীকক্ষে শিক্ষকদের পাঠদানের মাধ্যম হিসাবে OneBoard এবং শিক্ষার্থী ও তাদের অভিভাবকদের জন্য OneBook নামের বিশেষ সফটওয়্যার সমন্বিত Tablet বা ডিজিটাল ডিসপ্লে বোর্ড প্রোডাক্ট ও পরিষেবা চালু করেছি।</p>
            <p>শিক্ষাপ্রতিষ্ঠান, শিক্ষক, শিক্ষার্থী এবং অভিভাবকবৃন্দ OneTab, OneBoard এবং OneBook Tablet-এর জন্য আমাদের তৈরিকৃত এপ্লিকেশন সফ্টওয়ারটি বিনামূল্যে তাদের নিজস্ব স্মার্টফোনে বা Tablet-এ ডাউনলোড করে নিদৃষ্ট পরিসরে ব্যবহার করতে পারবে। শিক্ষার্থীদেরকে পরিপূর্ণ ভাবে গড়ে তোলার ক্ষেত্রে একজন শিক্ষক নিয়ামকের ভূমিকা পালন করে। কিন্তু সেক্ষেত্রে একজন শিক্ষকের উন্নত বিশ্বের আধুনিক শিক্ষাব্যবস্থার সাথে সামঞ্জস্য রেখে শ্রেণীকক্ষে তথ্য নির্ভর পাঠদানের জন্য প্রয়োজনীয় উপকরণসহ উপযুক্ত প্রশিক্ষণ গ্রহণের প্রয়োজনীয়তা রয়েছে।</p>
            <p>শিক্ষার্থীর পূর্ণ বিকাশে, শিক্ষকের পাশাপাশি অভিভাবককেও শিক্ষার্থীর অগ্রগতি নিয়মিতভাবে পর্যবেক্ষণ করে প্রয়োজনীয় সিদ্ধান্ত নিতে হয়। OneTab, OneBoard এবং OneBook হলো যৌথ ডিজিটাল মাধ্যম যা শিক্ষার্থীদের শিক্ষার সাথে সম্পর্কিত সকল শিক্ষা প্রতিষ্ঠান, শিক্ষক, অভিভাবক, কোচিং সেন্টার, প্রাইভেট টিউটর, লাইব্রেরী, পুস্তক প্রকাশক, ডিজিটাল একাডেমিক কনটেন্ট ক্রিয়েটর, শিক্ষাবৃত্তি বা অনুদান প্রদানকারী প্রতিষ্ঠান এবং জাতীয় শিক্ষা কার্যক্রম পরিচালনাকারী প্রতিষ্ঠানসমূহের কার্যক্রমসমূহকে একটি সুতায় গেঁথে শিক্ষকদের প্রয়োজনীয় প্রশিক্ষণ প্রদান এবং অভিভাবকদের তাদের সন্তানদের পড়াশুনার সাথে আরও বেশী সংযুক্ত করার দ্বারা শিক্ষার্থীদের শিক্ষাজীবনে সর্বোচ্চ সফলতা অর্জনে সহায়তা করে।</p>
          </motion.div>

          {/* Right Side: Visuals */}
         
          {/* Right Side: Interactive Lottie Visual & Products */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:sticky lg:top-24 space-y-12"
          >
            {/* Professional Animation Area */}
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-500/5 border-8 border-white dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6">
              <LottieComponent 
                animationData={modernEduAnimation} 
                loop={true} 
                className="w-full h-auto max-w-[400px] mx-auto"
              />
              <div className="absolute inset-0 bg-[#0098FD]/5 mix-blend-multiply" />
            </div>

            {/* Product Quick Links (values) */}
            <div className="space-y-4">
              <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider mb-6">Our Ecosystem</h4>
              {values.map((val, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all group cursor-pointer">
                  <div className="h-12 w-12 shrink-0 rounded-2xl bg-white dark:bg-slate-800 group-hover:bg-[#0098FD] group-hover:text-white transition-colors flex items-center justify-center">
                    {val.icon}
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">{val.title} <ChevronRight size={14} className="text-[#0098FD] group-hover:translate-x-1 transition-transform" /></h5>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 🔥🔥 Hero Buttons Integration */}
            <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
                <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">Get the App</h4>
                <div className="flex flex-col sm:flex-row gap-4">
                    <HeroDownloadButton 
                        icon={<BsGooglePlay size={20} className="text-[#0098FD] group-hover:text-white" />} 
                        storeName="Google Play" 
                        action="Get it on" 
                        href="#" 
                    />
                    <HeroDownloadButton 
                        icon={<BsApple size={20} className="text-[#0098FD] group-hover:text-white" />} 
                        storeName="App Store" 
                        action="Download for Mac" 
                        href="#" 
                    />
                </div>
            </div>

          </motion.div>

        </div>
      </section>

      {/* Final Inclusive Message (The "One Thread" Concept) */}
      <section className="py-24 bg-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-8">
          <Lightbulb className="w-12 h-12 text-blue-200 mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">সবাইকে এক সুতায় বাঁধার অঙ্গীকার</h2>
          <p className="text-blue-100 text-xl leading-relaxed max-w-3xl mx-auto">
            আমরা বিশ্বাস করি প্রযুক্তির সঠিক ব্যবহার শিক্ষাব্যবস্থায় বৈপ্লবিক পরিবর্তন আনতে পারে। শিক্ষক ও অভিভাবকদের সমন্বিত প্রচেষ্টার মাধ্যমেই শিক্ষার্থীদের শিক্ষাজীবনে সর্বোচ্চ সফলতা অর্জন করা সম্ভব।
          </p>
        </div>
      </section>
    </div>
  );
}

// 🔥🔥 Reusable Hero-style Download Button Component
function HeroDownloadButton({ icon, storeName, action, href }: { icon: React.ReactNode, storeName: string, action: string, href: string }) {
    return (
        <a 
            href={href} 
            className="flex items-center gap-3 w-full sm:w-auto min-w-[180px] p-2 px-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 hover:bg-[#0098FD] hover:border-[#0098FD] group transition-all duration-300 shadow-sm"
        >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white dark:bg-slate-800 group-hover:bg-[#0098FD]/10 transition-colors">
                {icon}
            </div>
            <div className="flex flex-col">
                <p className="text-[10px] text-slate-400 dark:text-slate-500 group-hover:text-white/80">{action}</p>
                <p className="text-sm font-black text-slate-900 dark:text-white group-hover:text-white">{storeName}</p>
            </div>
        </a>
    );
}