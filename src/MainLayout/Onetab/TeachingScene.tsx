import { CheckCircle, ArrowRight, Info, Tablet } from "lucide-react";
import { Button } from "../../components/ui/button";
import LottieRaw from "lottie-react";
import teachingAnimation from "../../assets/teacher.json";

// Lottie Interoperability Fix
const Lottie = (LottieRaw as any).default || LottieRaw;

export default function TeachingScene() {
  return (
    <div className="max-w-7xl mx-auto p-4 my-12">
      {/* Main Content Card */}
      <div className="bg-white p-8 md:p-12 grid gap-12 lg:grid-cols-2 items-center rounded-3xl border shadow-sm relative overflow-hidden">
        
        {/* Decorative background shape - Emerald focus */}
        <div className="absolute -top-16 -right-16 h-64 w-64 bg-emerald-50/50 rounded-full border border-emerald-100/50" />

        {/* --- LEFT SIDE: ONE TAB CONTENT --- */}
        <div className="space-y-10 relative z-10">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="h-16 w-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center p-3 shadow-md shrink-0 text-emerald-600">
                {/* Smartphone/Tablet Icon */}
                <Tablet size={32} strokeWidth={1.5} />
              </div>
              <div className="space-y-1">
                <Badge
                  variant="outline"
                  className="text-emerald-700 bg-emerald-50 border-emerald-100 uppercase text-xs font-bold tracking-tight px-3 py-1 rounded-full"
                >
                  OneTab Solution
                </Badge>
                <h2 className="text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                  শিক্ষাদান ডিজিটাল করার <br />
                  <span className="text-emerald-600">সম্পূর্ণ সমাধান</span>
                </h2>
              </div>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              শিক্ষাদানের প্রতিটি কার্যক্রম ডিজিটালাইজ করার সম্পূর্ণ সমাধান। সাথে পূর্ণাঙ্গ School ERP (শিক্ষক ও প্রতিষ্ঠানের জন্য)।
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-emerald-500" /> Key OneTab Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {[
                {
                  title: "লেকচার নোট ও এজেন্ডা-বুক তৈরি",
                  description: "Create, store, and manage lecture notes centrally.",
                },
                {
                  title: "ভয়েস-টু-টেক্সট রিপোর্ট",
                  description: "Instantly convert spoken feedback into textual reports.",
                },
                {
                  title: "Geo-location Attendance",
                  description: "Ensure staff presence with verified location data.",
                },
                {
                  title: "বেতন ও আর্থিক ব্যবস্থাপনা",
                  description: "Simplify salary processing and financial tracking.",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-3 group">
                  <div className="mt-1 shrink-0 h-4 w-4 rounded-full border-2 border-emerald-300 group-hover:bg-emerald-500 transition-colors" />
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

          <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-100">
            <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 rounded-xl font-bold text-lg flex gap-3 shadow-lg">
              Manage OneTab Solution <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="text-slate-600 border-slate-200 hover:bg-slate-50"
            >
              <Info className="mr-2 h-4 w-4" /> Learn More
            </Button>
          </div>
        </div>

        {/* --- RIGHT SIDE: LOTTIE ANIMATION --- */}
        <div className="relative z-10">
          <div className="bg-slate-50/50 rounded-3xl p-4 border border-slate-100 shadow-inner">
            <Lottie 
              animationData={teachingAnimation} 
              loop={true} 
              className="w-full h-auto max-w-[500px] mx-auto"
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