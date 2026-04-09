import { useRef, useState } from "react";
import { Quote, Play } from "lucide-react"; // Play icon add kora hoyeche
import tareqr from "../../assets/tareqvision.mp4";

export default function MissionSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };
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
          
          {/* Left Side: Video Section */}
          <div className="flex justify-center items-center order-1">
            <div className="relative w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[450px] aspect-square">
              {/* Outer Decorative Ring */}
              <div className="absolute -inset-4 border-2 border-dashed border-[#0098FD]/30 rounded-full animate-[spin_20s_linear_infinite]" />
              
              <div 
                className="relative h-full w-full rounded-full overflow-hidden border-4 border-[#232629] shadow-[0_0_50px_rgba(0,152,253,0.2)] cursor-pointer group"
                onClick={togglePlay}
              >
               <video
                  ref={videoRef} 
                  className="w-full h-full object-cover scale-110"
                  loop
                  playsInline
                >
                  <source src={tareqr} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c1e]/60 to-transparent pointer-events-none" />

                {/* Play Button Overlay */}
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300">
                    <div className=" p-5 rounded-full border border-[#0098FD]  transform transition-transform group-hover:scale-110 active:scale-95">
                      <Play size={40}  className=" ml-1 text-[#0098FD]" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Side: Content remains same */}
          <div className="space-y-8 order-2">
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