import { motion } from "framer-motion";
import { 
  Target, 
  Cpu, 
  ShieldCheck, 
  Mic, 
  MapPin, 
  ArrowRight,
  LayoutDashboard
} from "lucide-react";

export default function MissionPage() {
  const missionPoints = [
    {
      title: "ডিজিটাল পাঠদান উপকরণ",
      desc: "এজেন্ডা-বুক, লেকচার নোট এবং অ্যানিমেশন তৈরি।",
      icon: <Cpu className="w-5 h-5 text-blue-500" />,
    },
    {
      title: "স্মার্ট রিপোর্টিং সিস্টেম",
      desc: "ভয়েস-টু-টেক্সট কমান্ডে চ্যাপ্টারওয়াইজ প্রগ্রেস রিপোর্ট।",
      icon: <Mic className="w-5 h-5 text-purple-500" />,
    },
    {
      title: "ERP ও ম্যানেজমেন্ট",
      desc: "ভর্তি, ক্লাস রুটিন এবং স্যালারি ম্যানেজমেন্টের পূর্ণ সমাধান।",
      icon: <LayoutDashboard className="w-5 h-5 text-emerald-500" />,
    },
    {
      title: "নিরাপদ ইকোসিস্টেম",
      desc: "গেম ও সোশ্যাল মিডিয়া মুক্ত এবং Geo-location ট্র্যাকিং সুবিধা।",
      icon: <ShieldCheck className="w-5 h-5 text-rose-500" />,
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 text-[#0098FD] px-4 py-2 rounded-full mb-6 font-bold text-xs uppercase tracking-widest"
          >
            <Target size={16} /> আমাদের লক্ষ্য ও ভিশন
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight">
            শিক্ষার প্রতিটি ধাপ হোক <span className="text-[#0098FD]">ডিজিটাল ও স্মার্ট</span>
          </h1>
        </div>
      </section>

      {/* Main Content: Left (Text) | Right (Visuals) */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-16 items-start">
          
          {/* Left Side: Full Mission Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6 text-slate-700 dark:text-slate-300 text-lg leading-relaxed text-justify"
          >
            <h2 className="text-3xl font-black text-[#0098FD] mb-8 uppercase tracking-tight">আমাদের লক্ষ্য</h2>
            <p>One Tab-এর মূল কাজ হলো একজন শিক্ষকের শিক্ষাদান সম্পর্কিত সকল কার্যক্রমকে ডিজিটালাইজ করার মাধ্যমে তাকে আধুনিক শিক্ষাদানে সক্ষমতার জন্য দ্রুত প্রশিক্ষিত করা। OneTab- এর মাধ্যমে একজন শিক্ষক শ্রেণী ও বিষয়ভিত্তিক জাতীয় ও আন্তর্জাতিক শিক্ষা কারিকুলামসমূহ বিশ্লেষণ করে এবং One Tab- এর নিজস্ব ডিজিটাল লাইব্রেরিতে সংরক্ষিত পাঠ্যবই সমূহ ব্যবহার করে অতি সহজেই শিক্ষার্থীদের পাঠদানের জন্য প্রয়োজনীয় উপাদান যেমন, এজেন্ডা-বুক, লেকচার নোট, ক্লাস টেস্টের প্রশ্নপত্র, ব্যবহারিক ক্লাসের জন্য ভিডিও টিউটোরিয়াল এবং শিশুদের জন্য অ্যানিমেশন লেকচার নোট ইত্যাদি তৈরী করতে পারে।</p>
            <p>একজন শিক্ষক শ্রেণীকক্ষে পাঠদানের সময়, শ্রেণীকক্ষের বাইরে থাকা শিক্ষার্থীরাও ভার্চুয়ালি শ্রেণীকক্ষে যোগ দিতে পারে এবং OneBook-এর সাথে ভার্চুয়ালি সংযুক্ত OneBoard নামের ডিজিটাল বোর্ডে অথবা OneTab-এ প্রদর্শিত শিক্ষকের লেকচার নোটের উপরে লিখতে পারে বা প্রশ্ন করতে পারে, ফলশ্রুতিতে কোনও শিক্ষর্থী বিশেষ কারণে স্বশরীরে শ্রেণীকক্ষে উপস্থিত থাকতে না পারলেও তার শিক্ষা কার্যক্রম থেকে বিচ্যুত হওয়ার সম্ভাবনা থাকে না।</p>
            <p>ভয়েস-টু-টেক্সট কমান্ড ব্যবহার করে একজন শিক্ষক পাঠ্যবইয়ের প্রতিটি অধ্যায় ও বিষয়ের অগ্রগতির ব্যাপারে অতি সহজেই প্রত্যেক শিক্ষার্থীর ব্যাপারে আলাদা আলাদা ভাবে বিস্তারিত রিপোর্ট প্রদান করতে পারে যা থেকে অভিভাবকগণ শিক্ষার্থীর অগ্রগতি সম্পর্কে প্রতিনিয়ত পরিষ্কার ধারণা পায় এবং শিক্ষার্থীকে আরও প্রয়োজনীয় সহায়তা করার ব্যাপারে সিদ্ধান্ত নিতে পারে। One Tab যেকোন শিক্ষা প্রতিষ্ঠানের জন্য একটি ERP System হিসাবেও কাজ করে।</p>
            <p>শিক্ষা প্রতিষ্ঠানে শিক্ষার্থী ভর্তি থেকে শুরু করে, ক্লাস ম্যানেজমেন্ট, কোর্স ম্যানেজমেন্ট, সিলেবাস ও কারিকুলাম ম্যানেজমেন্ট, ক্লাস ও পরীক্ষার রুটিন ম্যানেজমেন্ট, পরীক্ষার প্রশ্নপত্র তৈরী, মডারেশন, পরীক্ষা নেওয়া, পরীক্ষার ফল প্রকাশ এবং রিপোর্ট প্রদান করা, শিক্ষক ও কর্মকর্তা-কর্মচারীদের Geo-location based attendence এবং দৈনন্দিন কার্যাবলী ম্যানেজমেন্ট, শিক্ষার্থীদের থেকে মাসিক বেতন আদায়, শিক্ষক ও কর্মকর্তা-কর্মচারীদের মাসিক বেতন প্রদান সহ অন্যান্য আয়-ব্যয়ের হিসাব One Tab দিয়ে ডিজিটালি সম্পন্ন করা যায়।</p>
            <p>অধিকন্তু, শিক্ষা কার্যক্রম পরিচালনাকারী সংস্থাসমূহের ওয়েব পোর্টালের সাথে OneTab সফটওয়্যার এর মাধ্যমে ডিজিটালি সংযুক্ত হয়ে শিক্ষক ও শিক্ষার্থীদের বিভিন্ন কার্যক্রম যেমন শিক্ষার্থীদের জাতীয় পরীক্ষাসমূহের জন্য রেজিস্ট্রেশন এবং পরীক্ষার জন্য কেন্দ্র ও সিট বন্টন, শিক্ষার্থীদের বৃত্তির টাকা বন্টন, শিক্ষকদের শিক্ষা ছুটি এবং প্রমোশন ইত্যাদি কার্যসমূহ অধিকতর সহজভাবে সম্পন্ন করা যায়।</p>
            <p>অন্যদিকে শিক্ষাপ্রতিষ্ঠান এবং শিক্ষকের ডিজিটালাইজ শিক্ষা কার্যক্রমের পূর্ণ সুবিধা গ্রহণ করার মাধ্যমে অভিভাবকগণ OneBook ব্যবহার করে সন্তানের শিক্ষা কার্যক্রমের উন্নয়নে গুরুত্বপূর্ণ ভূমিকা রাখতে পারে। যেমন, অভিভাবক সার্বক্ষণিকভাবে সন্তানের হোমওয়ার্ক ও প্রোজেক্ট/এসাইনমেন্ট সাবমিশন স্ট্যাটাস, ডেডলাইন সহ পেন্ডিং হোমওয়ার্ক ও প্রোজেক্ট/এসাইনমেন্ট লিস্ট, কুইজ ও ক্লাস টেস্টের প্রাপ্ত নম্বর এবং আলাদা আলাদা ভাবে প্রত্যেক সাবজেক্ট এর জন্য চ্যাপ্টারওয়াইজ প্রগ্রেস রিপোর্ট ডিজিটালি মনিটর করতে পারে।</p>
            <p>অভিভাবকগণ প্রয়োজনমত সন্তানদের জন্য ডিজিটালি প্রাইভেট টিউটর নিয়োগ করতে পারে এবং প্রাইভেট টিউটরের সাথে সন্তানের পড়াশুনার অগ্রগতিও ডিজিটালি মনিটর করতে পারে। অভিভাবকগণ শিক্ষক, কোচিংসেন্টার এবং প্রাইভেট টিউটরদের সাথে সন্তানের পড়াশুনার বিষয়গুলি অতি সহজেই ডিজিটালি সমন্বয় করে সন্তানকে আরও ভালোভাবে গড়ে তুলতে পারে। অধিকন্তু, OneBook সফটওয়্যার-এর Geo-Location ফীচার ব্যবহার করে অবস্থান ও গতিবিধি পর্যবেক্ষণের দ্বারা সন্তানের নিরাপত্তা নিশ্চিত করতে পারে। OneBook Tablet-এ শিক্ষার সাথে সম্পর্কিত নির্ধারিত সফটওয়্যার ব্যাতিত অন্য কোনো বিনোদনমূলক এপ্লিকেশন সফটওয়্যার, কম্পিউটার গেম বা সোশ্যাল মিডিয়া ব্যবহারের সুযোগ নেই, যার ফলে OneBook Tablet-টি শুধুমাত্র পড়াশুনার কাজে ব্যবহৃত হয়।</p>
          </motion.div>
          {/* Right Side: Visual Components & Feature Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-24 space-y-6"
          >
            {/* Main Highlight Card */}
            <div className="bg-gradient-to-br from-[#0098FD] to-blue-700 p-8 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:scale-110 transition-transform">
                  <MapPin size={100} />
               </div>
               <h3 className="text-2xl font-bold mb-4">সবকিছু এক সুতায়</h3>
               <p className="text-blue-50 text-sm mb-6 leading-relaxed">
                  শিক্ষক, শিক্ষার্থী এবং অভিভাবককে একটি ইন্টিগ্রেটেড প্ল্যাটফর্মে নিয়ে আসাই আমাদের মূল সার্থকতা।
               </p>
               <div className="flex items-center gap-2 text-sm font-bold bg-white/20 w-fit px-4 py-2 rounded-full border border-white/30">
                  নিরাপদ শিক্ষা ইকোসিস্টেম <ArrowRight size={14} />
               </div>
            </div>

            {/* Feature Grid Side-by-Side */}
            <div className="grid gap-4">
              {missionPoints.map((point, i) => (
                <div 
                  key={i} 
                  className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center gap-5 hover:bg-white dark:hover:bg-slate-800 transition-all shadow-sm hover:shadow-md group"
                >
                  <div className="h-12 w-12 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center group-hover:bg-[#0098FD] group-hover:text-white transition-colors shadow-sm">
                    {point.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-md">{point.title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Security Badge */}
            <div className="p-6 rounded-[2rem] bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-800/30">
               <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-emerald-900 dark:text-emerald-400 text-sm">১০০% ফোকাসড ডিভাইস</h5>
                    <p className="text-xs text-emerald-600 dark:text-emerald-500">গেম এবং সোশ্যাল মিডিয়া সম্পূর্ণ নিষিদ্ধ।</p>
                  </div>
               </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Statistics / Impact Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="text-5xl font-black text-[#0098FD] mb-2">২৪/৭</div>
            <p className="text-slate-400 uppercase text-xs tracking-widest">ভার্চুয়াল সাপোর্ট</p>
          </div>
          <div>
            <div className="text-5xl font-black text-emerald-500 mb-2">০%</div>
            <p className="text-slate-400 uppercase text-xs tracking-widest">সোশ্যাল মিডিয়া ডিস্ট্রাকশন</p>
          </div>
          <div>
            <div className="text-5xl font-black text-purple-500 mb-2">১০০%</div>
            <p className="text-slate-400 uppercase text-xs tracking-widest">ডিজিটাল প্রগ্রেস ট্র্যাকিং</p>
          </div>
        </div>
      </section>
    </div>
  );
}