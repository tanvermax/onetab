import { motion } from "framer-motion";
import { BookOpen, CalendarCheck, FileBarChart, LayoutPanelTop, PieChart, Users } from "lucide-react";

const userFeatures = [
  {
    title: "স্মার্ট পাঠ পরিকল্পনা",
    desc: "AI-এর সাহায্যে কাস্টমাইজড পাঠ তৈরি এবং শিক্ষার্থীদের মেধা অনুযায়ী লেসন সাজানো।",
    icon: <BookOpen className="w-8 h-8 text-emerald-500" />,
    color: "bg-emerald-50 dark:bg-emerald-900/20",
  },
  {
    title: "অটো উপস্থিতি ট্র্যাকিং",
    desc: "জিও-লোকেশন এবং কিউআর কোড ভিত্তিক ডিজিটাল উপস্থিতি ব্যবস্থা।",
    icon: <CalendarCheck className="w-8 h-8 text-blue-500" />,
    color: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    title: "ডায়নামিক রিপোর্ট",
    desc: "প্রতিটি শিক্ষার্থীর প্রগ্রেস গ্রাফ এবং পারফরম্যান্স রিপোর্ট এক ক্লিকেই জেনারেট করুন।",
    icon: <FileBarChart className="w-8 h-8 text-orange-500" />,
    color: "bg-orange-50 dark:bg-orange-900/20",
  },
  {
    title: "ইন্টারেক্টিভ ড্যাশবোর্ড",
    desc: "শিক্ষক, শিক্ষার্থী এবং অভিভাবকদের জন্য আলাদা এবং সহজ ম্যানেজমেন্ট প্যানেল।",
    icon: <LayoutPanelTop className="w-8 h-8 text-purple-500" />,
    color: "bg-purple-50 dark:bg-purple-900/20",
  },
  {
    title: "অ্যাকাডেমিক অ্যানালিটিক্স",
    desc: "পুরো প্রতিষ্ঠানের ডেটা অ্যানালাইসিস করে দুর্বলতা চিহ্নিত করা এবং মানোন্নয়ন।",
    icon: <PieChart className="w-8 h-8 text-cyan-500" />,
    color: "bg-cyan-50 dark:bg-cyan-900/20",
  },
  {
    title: "কমিউনিটি সাপোর্ট",
    desc: "শিক্ষকদের মধ্যে রিসোর্স শেয়ারিং এবং একে অপরকে সহযোগিতার জন্য উন্মুক্ত প্ল্যাটফর্ম।",
    icon: <Users className="w-8 h-8 text-rose-500" />,
    color: "bg-rose-50 dark:bg-rose-900/20",
  },
];

export default function UserSolutions() {
  return (
    <section id="user-solutions" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-emerald-600 font-bold text-sm uppercase tracking-widest mb-4"
            >
              <div className="h-1 w-8 bg-emerald-600 rounded-full" />
              ব্যবহারকারী অনুযায়ী সমাধান
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white"
            >
              আপনার প্রয়োজন মেটাতে <br />
              <span className="text-emerald-600">সব আধুনিক টুলস</span>
            </motion.h2 >
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-500 dark:text-slate-400 max-w-sm text-lg"
          >
            পাঠ পরিকল্পনা থেকে শুরু করে রিপোর্ট তৈরি—সবকিছু এখন আরও সহজ এবং অটোমেটেড।
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {userFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all group"
            >
              <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Action (Optional) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-16 p-8 rounded-[2rem] bg-emerald-600 text-white flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h4 className="text-2xl font-bold">আজই আপনার যাত্রা শুরু করুন</h4>
            <p className="text-emerald-100 opacity-80">ফ্রিতে অ্যাকাউন্ট তৈরি করে ডিজিটাল শিক্ষার নতুন অভিজ্ঞতা নিন।</p>
          </div>
          <button className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-emerald-50 transition-colors">
            অ্যাকাউন্ট তৈরি করুন
          </button>
        </motion.div>

      </div>
    </section>
  );
}