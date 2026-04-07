
import { 
   
  CheckCircle, 

  Presentation, 
  Layout, 
  MousePointer2, 
  PenTool 
} from "lucide-react";

import Lottie from "lottie-react";
// OneBoard এর জন্য একটি প্রাসঙ্গিক লটি ফাইল ব্যবহার করুন (যেমন: whiteboard or presentation animation)
import boardAnimation from "../../../assets/TeacherPythagoras.json"; 

export default function OneBoardSection() {
  // Lottie ইমপোর্ট এরর হ্যান্ডেল করার জন্য সেফটি চেক
  const LottieComponent = (Lottie as any).default || Lottie;

  return (
    <div className="max-w-7xl mx-auto p-4 my-12">
      {/* Main Content Card */}
      <div className="bg-white p-8 md:p-12 grid gap-12 lg:grid-cols-2 items-center rounded-3xl border shadow-sm relative overflow-hidden">
        
        {/* Decorative background shape - Left side focus */}
        <div className="absolute -bottom-16 -left-16 h-64 w-64 bg-blue-50/50 rounded-full border border-blue-100/50" />

        {/* --- LEFT SIDE: LOTTIE ANIMATION --- */}
        <div className="relative z-10">
          <div className="bg-slate-50/50 rounded-3xl p-4 border border-slate-100 shadow-inner">
            <LottieComponent 
              animationData={boardAnimation} 
              loop={true} 
              className="w-full h-auto  mx-auto"
            />
          </div>
        </div>

        {/* --- RIGHT SIDE: ONE BOARD CONTENT --- */}
        <div className="order-1 lg:order-2 space-y-10 relative z-10">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="h-16 w-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center p-3 shadow-md shrink-0 text-blue-600">
                <Presentation size={32} strokeWidth={1.5} />
              </div>
              <div className="space-y-1">
                <Badge
                  variant="outline"
                  className="text-blue-700 bg-blue-50 border-blue-100 uppercase text-xs font-bold tracking-tight px-3 py-1 rounded-full"
                >
                  OneBoard Solution
                </Badge>
                <h2 className="text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                  ইন্টারেক্টিভ ক্লাসরুমের <br />
                  <span className="text-blue-600">স্মার্ট হোয়াইটবোর্ড</span>
                </h2>
              </div>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              আপনার সাধারণ ক্লাসরুমকে রূপান্তর করুন একটি আধুনিক ডিজিটাল লার্নিং হাবে। মাল্টি-টাচ ও ক্লাউড শেয়ারিং সুবিধার পূর্ণাঙ্গ বোর্ড সফটওয়্যার।
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-blue-500" /> Advanced Board Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {[
                {
                  title: "স্মার্ট রাইটিং ও ড্রয়িং",
                  description: "Smooth writing experience with AI shape recognition.",
                  icon: <PenTool className="h-4 w-4 text-blue-400" />
                },
                {
                  title: "রিয়েল-টাইম কোলাবরেশন",
                  description: "Multiple users can interact simultaneously on the board.",
                  icon: <MousePointer2 className="h-4 w-4 text-blue-400" />
                },
                {
                  title: "মাল্টিমিডিয়া ইন্টিগ্রেশন",
                  description: "Easily import images, videos, and PDFs directly to board.",
                  icon: <Layout className="h-4 w-4 text-blue-400" />
                },
                {
                  title: "ক্লাউড সেভ ও শেয়ার",
                  description: "Save your board work directly to cloud or share via QR.",
                  icon: <Presentation className="h-4 w-4 text-blue-400" />
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-3 group">
                  <div className="mt-1 shrink-0 h-8 w-8 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 text-blue-600">
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
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-xl font-bold text-lg flex gap-3 shadow-lg shadow-blue-100">
              Launch OneBoard <ArrowRight className="h-5 w-5" />
            </Button>
           
          </div> */}
        </div>
      </div>
    </div>
  );
}

// Badge Component (Same as before)
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