import {  Quote } from "lucide-react";

import tareqr from "../assets/video/tareqrahman.mp4";

console.log(tareqr);
export default function MissionSection() {
  return (
    <div className="bg-[#1a1c1e] text-white p-8 md:p-16  md:rounded-[150px] md:max-w-375  shadow-lg shadow-[rgb(89,162,133)]  mx-auto overflow-hidden">
      {/* Top Header */}
     <div className="max-w-7xl mx-auto">
         <div className="text-center mb-12 space-y-2">
        <p className="text-emerald-500 text-sm font-medium tracking-wide">
          সরকারি উদ্যোগ • ONETAB-এর অনুপ্রেরণা
        </p>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          যে ভাবনা থেকে জন্ম নিয়েছে <br />
          <span className="text-emerald-500">আমাদের প্ল্যাটফর্ম</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Video Placeholder */}
        <div className="relative aspect-video bg-slate-800 rounded-3xl border border-slate-700 flex items-center justify-center overflow-hidden group cursor-pointer shadow-2xl">
          {/* You can replace this with an <iframe> or <video> tag */}
          <div className=" ">
            {/* <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
             </svg> */}

            <div className="relative aspect-video bg-slate-800 rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
              <video
                className="w-full h-full object-cover relative z-20" // z-index নিশ্চিত করে যে এটি উপরে আছে
                controls
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={tareqr} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
        </div>

        {/* Right Side: Content */}
        <div className="space-y-8">
          {/* Quote Card */}
          <div className="relative bg-[#232629] p-8 rounded-3xl  shadow-xl">
            <Quote className="text-emerald-500 mb-4 h-8 w-8 opacity-50" />
            <p className="text-lg leading-relaxed text-slate-200 mb-6 font-medium">
              প্রতিটি শিক্ষকের হাতে একটি ট্যাব তুলে দিতে পারলে বাংলাদেশের
              শিক্ষাব্যবস্থা আমূল বদলে যাবে।
              <span className="text-emerald-400"> One Teacher, One Tab</span> —
              এটি শুধু একটি স্লোগান নয়, এটি আমাদের শিক্ষার ভবিষ্যৎ।
            </p>

            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-lg">
                TR
              </div>
              <div>
                <h4 className="font-bold">তারেক রহমান</h4>
                <p className="text-xs text-slate-400">
                  মাননীয় প্রধানমন্ত্রী, গণপ্রজাতন্ত্রী বাংলাদেশ সরকার
                </p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-[#232629] p-4 rounded-2xl border border-slate-800 text-center">
              <p className="text-xl font-bold text-emerald-500">৫ লক্ষ+</p>
              <p className="text-[10px] text-slate-400">প্রাথমিক বিদ্যালয়</p>
            </div>
            <div className="bg-[#232629] p-4 rounded-2xl border border-slate-800 text-center">
              <p className="text-xl font-bold text-emerald-500">৪০ লক্ষ+</p>
              <p className="text-[10px] text-slate-400">শিক্ষক</p>
            </div>
            <div className="bg-[#232629] p-4 rounded-2xl border border-slate-800 text-center">
              <p className="text-xl font-bold text-emerald-500 uppercase">
                Sdg
              </p>
              <p className="text-[10px] text-slate-400">Goal 4 • NPT 9—13</p>
            </div>
          </div>

          {/* Tags */}
          {/* <div className="flex flex-wrap gap-2">
            <Badge className="bg-white text-slate-900 hover:bg-white px-4 py-1.5 rounded-full text-xs">
              One Teacher One Tab
            </Badge>
            <Badge
              variant="outline"
              className="text-white border-slate-700 px-4 py-1.5 rounded-full text-xs hover:bg-white hover:text-black transition-colors cursor-pointer"
            >
              সরকারি অনুপ্রেরণা
            </Badge>
            <Badge
              variant="outline"
              className="text-white border-slate-700 px-4 py-1.5 rounded-full text-xs"
            >
              ডিজিটাল বাংলাদেশ
            </Badge>
            <Badge
              variant="outline"
              className="text-white border-slate-700 px-4 py-1.5 rounded-full text-xs"
            >
              আধুনিক শিক্ষা
            </Badge>
            <Badge
              variant="outline"
              className="text-white border-slate-700 px-4 py-1.5 rounded-full text-xs uppercase"
            >
              Npt 9—13
            </Badge>
          </div> */}

          {/* Download Button */}
          {/* <Button className="w-full bg-[#232629] hover:bg-emerald-600 text-white border border-slate-700 rounded-xl py-6 flex items-center justify-center gap-3 transition-all font-bold">
            <Download className="h-5 w-5" />
            বিনামূল্যে OneTab ডাউনলোড করুন
          </Button> */}
        </div>
      </div>
     </div>
    </div>
  );
}
