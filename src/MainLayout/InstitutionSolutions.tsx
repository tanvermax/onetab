import { motion } from "framer-motion";
import { 
  Building2, 
  ShieldCheck, 
  BarChart3, 
  Users, 
  Lock, 
  CloudLightning 
} from "lucide-react";

const instFeatures = [
  {
    title: "সেন্ট্রাল অ্যাডমিন প্যানেল",
    desc: "পুরো প্রতিষ্ঠানের ডেটা, শিক্ষক এবং শিক্ষার্থীদের তথ্য এক জায়গা থেকে নিয়ন্ত্রণের সুবিধা।",
    icon: <Building2 className="w-6 h-6 text-orange-600" />,
  },
  {
    title: "রিয়েল-টাইম প্রগ্রেস ট্র্যাকিং",
    desc: "প্রতিটি ক্লাসের পারফরম্যান্স এবং সিলেবাস কতটুকু শেষ হলো তা লাইভ মনিটর করার ক্ষমতা।",
    icon: <BarChart3 className="w-6 h-6 text-orange-600" />,
  },
  {
    title: "উন্নত নিরাপত্তা (MDM)",
    desc: "শিক্ষার্থীদের ট্যাবলেটে অনিরাপদ অ্যাপ বা কন্টেন্ট ব্লক করার জন্য সেন্ট্রাল সিকিউরিটি সিস্টেম।",
    icon: <Lock className="w-6 h-6 text-orange-600" />,
  },
  {
    title: "অটোমেটেড রিপোর্ট কার্ড",
    desc: "মাসিক এবং বাৎসরিক রিপোর্ট কার্ড অটো-জেনারেট করার মাধ্যমে সময় ও শ্রম সাশ্রয়।",
    icon: <CloudLightning className="w-6 h-6 text-orange-600" />,
  },
];

export default function InstitutionSolutions() {
  return (
    <section id="inst-solutions" className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 dark:bg-orange-900/20 text-orange-600 font-bold text-xs uppercase tracking-widest mb-6"
          >
            <ShieldCheck size={16} />
            প্রতিষ্ঠানের জন্য ডিজিটাল সিকিউরিটি
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight mb-6">
            প্রতিষ্ঠান পরিচালনা হোক <br />
            <span className="text-orange-600 text-shadow-sm">সহজ, নিরাপদ ও আধুনিক।</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            আপনার স্কুল বা মাদ্রাসা এখন সম্পূর্ণ ডিজিটাল। OneTab-এর সেন্ট্রাল ম্যানেজমেন্টের মাধ্যমে নিরাপত্তা এবং শিক্ষার মান নিশ্চিত করুন এক ক্লিকেই।
          </p>
        </div>

        {/* Features Grid with Hover Effect */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 transition-all shadow-sm hover:shadow-2xl hover:shadow-orange-500/10"
            >
              <div className="w-14 h-14 rounded-2xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed italic">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Interactive Stats / Trust Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 p-10 rounded-[3rem] bg-gradient-to-r from-slate-900 to-slate-800 text-white relative overflow-hidden"
        >
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="flex items-center gap-6">
              <div className="h-20 w-20 rounded-full bg-orange-600 flex items-center justify-center shadow-lg shadow-orange-600/40">
                <Users size={32} />
              </div>
              <div>
                <h4 className="text-3xl font-black italic">সমন্বিত প্ল্যাটফর্ম</h4>
                <p className="text-slate-400">মালিকপক্ষ, শিক্ষক এবং অভিভাবকদের ডিজিটাল বন্ধন।</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 w-full lg:w-auto">
              <div className="text-center lg:text-left">
                <p className="text-2xl font-black text-orange-500">১০০%</p>
                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">ডেটা নিরাপত্তা</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl font-black text-orange-500">২৪/৭</p>
                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">কাস্টমার সাপোর্ট</p>
              </div>
              <div className="text-center lg:text-left col-span-2 sm:col-span-1">
                <p className="text-2xl font-black text-orange-500">স্মার্ট</p>
                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">মনিটরিং ব্যবস্থা</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}