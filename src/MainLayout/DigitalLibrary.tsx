import { motion } from "framer-motion";
import { 
  BookOpenCheck, 
  Search, 
  Download, 
  Headphones, 
  Video, 
  Sparkles 
} from "lucide-react";

const libraryFeatures = [
  {
    title: "৩০০০+ ই-বুক ও নোটস",
    desc: "জাতীয় শিক্ষাক্রমের সকল বই এবং আমাদের নিজস্ব বিশেষজ্ঞ শিক্ষকদের তৈরি স্পেশাল নোটস।",
    icon: <BookOpenCheck className="w-6 h-6 text-emerald-500" />,
  },
  {
    title: "অডিও বুক সুবিধা",
    desc: "পড়ার পাশাপাশি শোনার মাধ্যমে শেখার জন্য প্রতিটি অধ্যায়ের প্রফেশনাল অডিও ভার্সন।",
    icon: <Headphones className="w-6 h-6 text-blue-500" />,
  },
  {
    title: "ভিডিও লেসন লাইব্রেরি",
    desc: "কঠিন বিষয়গুলো সহজে বোঝার জন্য রয়েছে হাজারো এনিমেটেড এবং লাইভ ক্লাস ভিডিও।",
    icon: <Video className="w-6 h-6 text-purple-500" />,
  },
];

export default function DigitalLibrary() {
  return (
    <section id="library" className="py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 px-4 py-2 rounded-full mb-6 font-bold text-xs uppercase tracking-widest">
              <Sparkles size={16} />
              OneBook Digital Resource Center
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight mb-6">
              পকেটে রাখুন পুরো <br />
              <span className="text-emerald-600">জ্ঞানের সমুদ্র।</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-10">
              ভারী বইয়ের ব্যাগ আর নয়! OneBook-এর ডিজিটাল লাইব্রেরিতে আপনি পাচ্ছেন অফলাইন রিডিং, স্মার্ট সার্চ এবং ইন্টারঅ্যাক্টিভ কন্টেন্ট যা আপনার শেখার অভিজ্ঞতাকে করবে আরও আনন্দদায়ক।
            </p>

            <div className="space-y-6">
              {libraryFeatures.map((feature, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-5 p-4 rounded-2xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 transition-all"
                >
                  <div className="h-12 w-12 shrink-0 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">{feature.title}</h4>
                    <p className="text-sm text-slate-500">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Visual Library UI */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="order-1 lg:order-2 relative"
          >
            {/* Search Bar Mockup */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-full max-w-[350px] z-20">
              <div className="bg-white dark:bg-slate-800 shadow-2xl rounded-2xl p-4 flex items-center gap-3 border border-emerald-100 dark:border-emerald-900">
                <Search className="text-slate-400" size={20} />
                <span className="text-sm text-slate-400 italic">পদার্থবিজ্ঞান ২য় পত্র...</span>
                <div className="ml-auto bg-emerald-500 text-white p-1.5 rounded-lg">
                  <Download size={16} />
                </div>
              </div>
            </div>

            {/* Book Grid Visual */}
            <div className="grid grid-cols-2 gap-6 pt-10">
              {[
                { title: "পদার্থবিজ্ঞান", color: "bg-blue-500", delay: 0.1 },
                { title: "উচ্চতর গণিত", color: "bg-emerald-500", delay: 0.2 },
                { title: "জীববিজ্ঞান", color: "bg-purple-500", delay: 0.3 },
                { title: "তথ্য প্রযুক্তি", color: "bg-amber-500", delay: 0.4 },
              ].map((book, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: book.delay }}
                  whileHover={{ rotateY: -20, perspective: 1000 }}
                  className={`${book.color} aspect-[3/4] rounded-2xl shadow-xl p-6 flex flex-col justify-end relative overflow-hidden group cursor-pointer`}
                >
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                  <div className="h-1 w-12 bg-white/40 rounded-full mb-4" />
                  <h5 className="text-white font-black text-xl leading-tight">{book.title}</h5>
                  <p className="text-white/70 text-[10px] mt-2 font-bold uppercase tracking-widest">Read Now →</p>
                  
                  {/* Decorative Book Spine */}
                  <div className="absolute left-0 top-0 bottom-0 w-4 bg-black/10" />
                </motion.div>
              ))}
            </div>

            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-5 rounded-[2rem] shadow-2xl border border-slate-100 dark:border-slate-800"
            >
              <div className="text-center">
                <p className="text-2xl font-black text-emerald-600">৫০GB+</p>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">ফ্রি ক্লাউড স্টোরেজ</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}