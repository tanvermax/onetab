
import { 

  CheckCircle, 

  BookOpen, 
  Library, 
  Search, 
  CloudDownload 
} from "lucide-react";

import Lottie from "lottie-react";
// OneBook এর জন্য একটি লাইব্রেরি বা রিডিং অ্যানিমেশন ব্যবহার করুন
import bookAnimation from "../../../assets/STUDENT.json"; 

export default function OneBookSection() {
  // Lottie interoperability fix
  const LottieComponent = (Lottie as any).default || Lottie;

  return (
    <div className="max-w-7xl mx-auto p-4 my-12">
      {/* Main Content Card */}
      <div className="bg-white p-8 md:p-12 grid gap-12 lg:grid-cols-2 items-center rounded-3xl border shadow-sm relative overflow-hidden">
        
        {/* Decorative background shape - Right focus */}
        <div className="absolute -top-16 -right-16 h-64 w-64 bg-violet-50/50 rounded-full border border-violet-100/50" />

        {/* --- LEFT SIDE: ONE BOOK CONTENT --- */}
        <div className="space-y-10 relative z-10">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="h-16 w-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center p-3 shadow-md shrink-0 text-violet-600">
                <Library size={32} strokeWidth={1.5} />
              </div>
              <div className="space-y-1">
                <Badge
                  variant="outline"
                  className="text-violet-700 bg-violet-50 border-violet-100 uppercase text-xs font-bold tracking-tight px-3 py-1 rounded-full"
                >
                  OneBook Solution
                </Badge>
                <h2 className="text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                  ডিজিটাল লাইব্রেরি ও <br />
                  <span className="text-violet-600">স্মার্ট রিসোর্স ম্যানেজমেন্ট</span>
                </h2>
              </div>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              হাজারো বই এবং শিক্ষামূলক কন্টেন্ট এখন এক জায়গায়। শিক্ষার্থীদের জন্য সহজলভ্য ডিজিটাল লাইব্রেরি এবং অটোমেটেড বুক ট্র্যাকিং সিস্টেম।
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-violet-500" /> Library Management Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {[
                {
                  title: "ই-বুক ও রিসোর্স শেয়ারিং",
                  description: "Upload and distribute digital books instantly.",
                  icon: <BookOpen className="h-4 w-4 text-violet-400" />
                },
                {
                  title: "স্মার্ট সার্চ ও ফিল্টার",
                  description: "Find any book or topic in seconds with AI search.",
                  icon: <Search className="h-4 w-4 text-violet-400" />
                },
                {
                  title: "অফলাইন রিডিং মোড",
                  description: "Download resources for reading without internet.",
                  icon: <CloudDownload className="h-4 w-4 text-violet-400" />
                },
                {
                  title: "বুক ইস্যু ও ট্র্যাকিং",
                  description: "Track physical and digital book circulation easily.",
                  icon: <Library className="h-4 w-4 text-violet-400" />
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-3 group">
                  <div className="mt-1 shrink-0 h-8 w-8 rounded-lg bg-violet-50 flex items-center justify-center group-hover:bg-violet-600 group-hover:text-white transition-colors duration-300 text-violet-600">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 leading-tight">
                      {item.title}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-100">
            <Button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-6 rounded-xl font-bold text-lg flex gap-3 shadow-lg shadow-violet-100">
              Access OneBook <ArrowRight className="h-5 w-5" />
            </Button>
           
          </div> */}
        </div>

        {/* --- RIGHT SIDE: LOTTIE ANIMATION --- */}
        <div className="relative z-10">
          <div className="bg-slate-50/50 rounded-3xl p-4 border border-slate-100 shadow-inner">
            <LottieComponent 
              animationData={bookAnimation} 
              loop={true} 
              className="w-full h-auto max-w-125 mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Badge Component
function Badge({ children, className, variant }: any) {
  const styles = variant === "outline" ? "border" : "bg-slate-100";
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold ${styles} ${className}`}
    >
      {children}
    </span>
  );
}