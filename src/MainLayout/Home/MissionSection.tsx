import { Quote } from "lucide-react";
import tareqr from "../../assets/tareqvision.mp4";

export default function MissionSection() {
  return (
    <div className="bg-[#1a1c1e] text-white p-6 md:p-16 md:rounded-[150px] rounded-[40px] mx-auto overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 space-y-2">
          <p className="text-[#0098FD] md:text-sm text-xs font-medium tracking-wide uppercase">
            সরকারি উদ্যোগ • ONETAB-এর অনুপ্রেরণা
          </p>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
            যে ভাবনা থেকে জন্ম নিয়েছে <br />
            <span className="text-[#0098FD]">আমাদের প্ল্যাটফর্ম</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Video Section (Responsive & Rounded) */}
          <div className="flex justify-center items-center order-1">
            <div className="relative w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[450px] aspect-square">
              {/* Outer Decorative Ring */}
              <div className="absolute -inset-4 border-2 border-dashed border-[#0098FD]/30 rounded-full animate-[spin_20s_linear_infinite]" />
              
              {/* Main Video Container */}
              <div className="relative h-full w-full rounded-full overflow-hidden border-4 border-[#232629] shadow-[0_0_50px_rgba(0,152,253,0.2)]">
                <video
                  className="w-full h-full object-cover scale-110" // scale-110 ব্যবহার করা হয়েছে যাতে কিনারায় গ্যাপ না থাকে
                  autoPlay
                 
                  loop
                  playsInline
                  controls // প্রিমিয়াম লুকের জন্য কন্ট্রোল অফ রাখা ভালো, চাইলে true দিতে পারেন
                >
                  <source src={tareqr} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Overlay to match theme */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c1e]/40 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="space-y-8 order-2">
            {/* Quote Card */}
            <div className="relative bg-[#232629] p-8 rounded-3xl shadow-xl border border-white/5">
              <Quote className="text-[#0098FD] mb-4 h-8 w-8 opacity-50" />
              <p className="md:text-xl text-base leading-relaxed text-slate-200 mb-8 font-medium">
                "প্রতিটি শিক্ষকের হাতে একটি ট্যাব তুলে দিতে পারলে বাংলাদেশের
                শিক্ষাব্যবস্থা আমূল বদলে যাবে। 
                <span className="text-[#0098FD]"> One Teacher, One Tab</span> — এটি শুধু একটি স্লোগান নয়, এটি আমাদের শিক্ষার ভবিষ্যৎ।"
              </p>

              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-[#0098FD] to-[#0076c4] flex items-center justify-center font-bold text-xl shadow-lg">
                  TR
                </div>
                <div>
                  <h4 className="font-bold text-lg">তারেক রহমান</h4>
                  <p className="text-xs text-slate-400 uppercase tracking-wider">
                    মাননীয় প্রধানমন্ত্রী, গণপ্রজাতন্ত্রী বাংলাদেশ সরকার
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "প্রাথমিক বিদ্যালয়", val: "৫ লক্ষ+" },
                { label: "শিক্ষক", val: "৪০ লক্ষ+" },
                { label: "SDG Goal 4", val: "NPT 9—13" }
              ].map((stat, i) => (
                <div key={i} className="bg-[#232629] p-4 rounded-2xl border border-white/5 text-center hover:bg-[#2a2e32] transition-colors">
                  <p className="text-lg md:text-2xl font-black text-[#0098FD]">{stat.val}</p>
                  <p className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}