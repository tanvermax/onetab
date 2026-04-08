import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Lock, 
  Globe, 
  SmartphoneNfc, 
  EyeOff,
  CheckCircle2
} from "lucide-react";

const securityFeatures = [
  {
    title: "অ্যাডভান্সড অ্যাপ ফিল্টারিং",
    desc: "শিক্ষার্থীরা শুধু অনুমোদিত শিক্ষামূলক অ্যাপ ব্যবহার করতে পারবে। গেম বা সোশ্যাল মিডিয়া অ্যাপ ব্লক করার সুবিধা।",
    icon: <Lock className="w-6 h-6 text-[#0098FD]" />,
    bg: "bg-blue-50"
  },
  {
    title: "নিরাপদ ওয়েব ব্রাউজিং",
    desc: "অশ্লীল বা ক্ষতিকর ওয়েবসাইটগুলো অটোমেটিক ব্লক থাকবে। নিরাপদ ইন্টারনেট নিশ্চিত করবে আমাদের ক্লাউড ফিল্টার।",
    icon: <Globe className="w-6 h-6 text-emerald-500" />,
    bg: "bg-emerald-50"
  },
  {
    title: "রিমোট ম্যানেজমেন্ট (MDM)",
    desc: "ডিভাইস হারিয়ে গেলে বা চুরি হলে সেন্ট্রাল ড্যাশবোর্ড থেকে তাৎক্ষণিক লক এবং ডেটা ইরেজ করার ক্ষমতা।",
    icon: <SmartphoneNfc className="w-6 h-6 text-purple-500" />,
    bg: "bg-purple-50"
  },
];

export default function SecuritySection() {
  return (
    <section id="security" className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Visual Interactive Shield */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative flex justify-center order-2 lg:order-1"
          >
            {/* Background Decorative Circles */}
            <div className="absolute w-[300px] h-[300px] bg-[#0098FD]/5 rounded-full animate-pulse" />
            <div className="absolute w-[450px] h-[450px] border border-slate-100 dark:border-slate-800 rounded-full" />
            
            {/* Main Visual Card */}
            <div className="relative z-10 bg-white dark:bg-slate-900 p-12 rounded-[4rem] shadow-[0_30px_100px_rgba(0,0,0,0.05)] border border-slate-50 dark:border-slate-800">
              <div className="bg-emerald-500 w-24 h-24 rounded-[2rem] flex items-center justify-center shadow-xl shadow-emerald-500/20 mb-8 mx-auto">
                <ShieldCheck size={48} className="text-white" />
              </div>
              
              <div className="space-y-4">
                {[
                  { label: "App Lock Active", status: "Protected", icon: <Lock size={14}/> },
                  { label: "Web Filter Active", status: "Secure", icon: <Globe size={14}/> },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <div className="text-[#0098FD]">{item.icon}</div>
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{item.label}</span>
                    <span className="ml-auto text-[10px] font-black uppercase text-emerald-500">{item.status}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Protection Tag */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-4 bg-[#0098FD] text-white p-4 rounded-2xl shadow-xl flex items-center gap-3"
            >
              <EyeOff size={18} />
              <span className="text-[10px] font-black uppercase tracking-widest text-white">Privacy Guard ON</span>
            </motion.div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="order-1 lg:order-2 space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 text-emerald-600 font-bold text-sm uppercase tracking-widest mb-4">
                <div className="h-1 w-8 bg-emerald-600 rounded-full" />
                ডিজিটাল নিরাপত্তা ও নিয়ন্ত্রণ
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight mb-6">
                শিক্ষার্থীদের জন্য একটি <br />
                <span className="text-[#0098FD]">সুরক্ষিত সাইবার জগত।</span>
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
                আমাদের বিল্ট-ইন **MDM (Mobile Device Management)** সফটওয়্যার নিশ্চিত করে যে প্রতিটি ডিভাইস শুধুমাত্র শিক্ষার কাজে ব্যবহৃত হবে। ক্ষতিকর কন্টেন্ট থেকে দূরে রেখে শিক্ষার্থীদের মনোযোগ বৃদ্ধিতে এটি সহায়ক।
              </p>
            </div>

            <div className="grid gap-6">
              {securityFeatures.map((feature, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className={`h-14 w-14 shrink-0 rounded-2xl ${feature.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-2">
                      {feature.title} <CheckCircle2 size={14} className="text-emerald-500" />
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}