import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Presentation, 
  Award, 
  PlayCircle, 
  FileCheck, 
  Compass 
} from "lucide-react";
import { Link } from "react-router";

const trainingSteps = [
  {
    title: "ডিজিটাল লিটারেসি মাস্টারক্লাস",
    desc: "স্মার্ট ট্যাবলেট এবং বোর্ড ব্যবহারের বেসিক থেকে অ্যাডভান্সড টেকনিক শিখুন।",
    icon: <Presentation className="w-6 h-6 text-indigo-500" />,
    step: "০১"
  },
  {
    title: "কন্টেন্ট ক্রিয়েশন ও ডেলিভারি",
    desc: "কীভাবে ইন্টারঅ্যাক্টিভ মাল্টিমিডিয়া লেসন তৈরি করে শিক্ষার্থীদের শেখাবেন।",
    icon: <PlayCircle className="w-6 h-6 text-rose-500" />,
    step: "০২"
  },
  {
    title: "মূল্যায়ন ও রিপোর্ট অ্যানালিটিক্স",
    desc: "AI ব্যবহার করে দ্রুত রেজাল্ট তৈরি এবং শিক্ষার্থীদের দুর্বলতা চিহ্নিত করার কৌশল।",
    icon: <FileCheck className="w-6 h-6 text-emerald-500" />,
    step: "০৩"
  }
];

export default function TeacherTraining() {
  return (
    <section id="training" className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content Left */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest">
              <GraduationCap size={16} />
              Professional Development
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
              প্রযুক্তিতে দক্ষ শিক্ষক, <br />
              <span className="text-indigo-600">স্মার্ট বাংলাদেশের কারিগর।</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              আমরা শুধু ডিভাইস দিচ্ছি না, বরং প্রতিটি শিক্ষককে একজন ডিজিটাল বিশেষজ্ঞ হিসেবে গড়ে তুলছি। আমাদের বিশেষ ট্রেনিং প্রোগ্রামের মাধ্যমে আপনি শিখবেন আধুনিক বিশ্বের সমসাময়িক পাঠদান পদ্ধতি।
            </p>
            
            <Link to={"/teachertrainingpage"} className="flex items-center gap-3 bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-600/20">
              ট্রেনিং মডিউল দেখুন <Compass size={20} />
            </Link >
          </motion.div>

          {/* Training Roadmap Right */}
          <div className="relative space-y-4">
            {trainingSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="group relative flex items-start gap-6 p-6 rounded-[2rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:bg-white transition-all hover:shadow-xl"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white dark:bg-slate-800 shadow-sm group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                  {step.icon}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-[10px] font-black text-indigo-400 uppercase tracking-tighter">Step {step.step}</span>
                    <h4 className="font-bold text-slate-900 dark:text-white">{step.title}</h4>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certificate Section Highlight */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative p-8 md:p-12 rounded-[3rem] bg-indigo-950 text-white overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] -mr-48 -mt-48" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
            <div className="h-40 w-full md:w-64 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-center p-6">
              <Award size={48} className="text-amber-400 mb-3" />
              <p className="text-[10px] uppercase font-bold tracking-widest text-indigo-300">Certified Professional</p>
              <p className="font-bold text-sm">OneTab Educator</p>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">ট্রেনিং শেষে অর্জন করুন ডিজিটাল সার্টিফিকেট</h3>
              <p className="text-indigo-200/70 text-lg mb-6">
                প্রতিটি মডিউল সফলভাবে সম্পন্ন করার পর আপনি পাবেন আন্তর্জাতিক মানের ই-সার্টিফিকেট, যা আপনার পেশাগত দক্ষতা এবং ক্যারিয়ারের মান বাড়িয়ে দেবে।
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-8">
                <div>
                  <p className="text-3xl font-black text-white">১২+</p>
                  <p className="text-[10px] uppercase font-bold text-indigo-400">ট্রেনিং সেশন</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-white">২৪/৭</p>s
                  <p className="text-[10px] uppercase font-bold text-indigo-400">মেন্টর সাপোর্ট</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-white">১০০%</p>
                  <p className="text-[10px] uppercase font-bold text-indigo-400">প্র্যাকটিক্যাল লার্নিং</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}