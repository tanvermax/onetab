import { motion } from "framer-motion";
import { 
  Fingerprint, 
  MapPin, 
  QrCode, 
  BellRing, 
  ShieldCheck, 
  Users 
} from "lucide-react";

const attendanceFeatures = [
  {
    title: "QR কোড স্ক্যান",
    desc: "শিক্ষার্থীরা তাদের ডিজিটাল আইডি কার্ড ব্যবহার করে এক সেকেন্ডে উপস্থিতি দিতে পারবে।",
    icon: <QrCode className="w-6 h-6 text-[#0098FD]" />,
  },
  {
    title: "জিও-ফেন্সিং ট্র্যাকিং",
    desc: "শিক্ষক প্রতিষ্ঠানের নির্দিষ্ট সীমানার মধ্যে থাকলেই কেবল উপস্থিতি নিশ্চিত হবে।",
    icon: <MapPin className="w-6 h-6 text-emerald-500" />,
  },
  {
    title: "ইনস্ট্যান্ট প্যারেন্ট অ্যালার্ট",
    desc: "উপস্থিতি বা অনুপস্থিতি হওয়া মাত্রই অভিভাবকদের ফোনে স্বয়ংক্রিয় SMS চলে যাবে।",
    icon: <BellRing className="w-6 h-6 text-amber-500" />,
  },
];

export default function SmartAttendance() {
  return (
    <section id="attendance" className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Mockup / Visual */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative flex justify-center"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-blue-500/10 blur-[120px] rounded-full" />
            
            {/* Mobile Mockup */}
            <div className="relative w-[300px] h-[600px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden">
              {/* App UI Header */}
              <div className="bg-[#0098FD] p-6 pt-10">
                <div className="flex justify-between items-center text-white mb-4">
                  <Users size={20} />
                  <span className="text-xs font-bold uppercase tracking-widest">Live Attendance</span>
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                </div>
                <h4 className="text-white text-xl font-bold">Class 10 - Section A</h4>
              </div>

              {/* Attendance List Mockup */}
              <div className="p-4 space-y-3">
                {[
                  { name: "Mahidi", time: "09:00 AM", status: "Present", color: "text-emerald-500" },
                  { name: "Jalal Uddin", time: "09:05 AM", status: "Present", color: "text-emerald-500" },
                  { name: "Rahat Kabir", time: "--:--", status: "Absent", color: "text-red-500" },
                  { name: "Sabbir Ahmed", time: "09:12 AM", status: "Present", color: "text-emerald-500" },
                ].map((student, i) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={i} 
                    className="bg-slate-800/50 p-3 rounded-xl border border-white/5 flex justify-between items-center"
                  >
                    <div>
                      <p className="text-white text-xs font-bold">{student.name}</p>
                      <p className="text-[10px] text-slate-500">{student.time}</p>
                    </div>
                    <span className={`text-[10px] font-bold uppercase ${student.color}`}>{student.status}</span>
                  </motion.div>
                ))}
              </div>

              {/* QR Scanner Overlay Effect */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/40 cursor-pointer hover:scale-110 transition-transform">
                  <QrCode size={30} className="text-white" />
                </div>
                <p className="text-[10px] text-slate-400 mt-2 font-bold uppercase tracking-widest">Tap to Scan</p>
              </div>
            </div>

            {/* Floating Info Card */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -right-4 top-20 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-700"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">৯৮% উপস্থিতি</p>
                  <p className="text-[10px] text-slate-500">আজকের গড় রিপোর্ট</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 text-[#0098FD] px-4 py-2 rounded-full mb-6 font-bold text-xs uppercase tracking-widest">
                <Fingerprint size={16} />
                Smart Attendance System
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight mb-6">
                হাজিরা হোক <span className="text-[#0098FD]">অটোমেটেড</span>, <br />
                নিশ্চিত হোক নিরাপত্তা।
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed italic">
                পুরানো খাতা-কলমের হাজিরা বাদ দিয়ে ব্যবহার করুন ডিজিটাল উপস্থিতি ব্যবস্থা। এতে যেমন সময় বাঁচবে, তেমনি জালিয়াতি হওয়ার কোনো সুযোগ থাকবে না।
              </p>
            </div>

            <div className="space-y-4">
              {attendanceFeatures.map((f, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors border border-transparent hover:border-slate-100 dark:hover:border-slate-800">
                  <div className="mt-1">{f.icon}</div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">{f.title}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{f.desc}</p>
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