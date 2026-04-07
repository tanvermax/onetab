import React from 'react';
import { Users, Monitor, Globe2, CheckCircle, Dot } from "lucide-react";

const TechnicalUSP: React.FC = () => {
  return (
    <section className=" max-w-7xl mx-auto py-24 px-6 md:px-12 lg:px-0 font-sans">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-[#59a285] font-bold tracking-widest text-sm uppercase mb-4">TECHNICAL USP</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          কেন OneTab <span className="text-[#59a285]">আলাদা?</span>
        </h2>
        <p className="text-gray-400 text-lg">তিনটি প্রযুক্তিগত সুবিধা যা বাংলাদেশের অন্য কোনো শিক্ষা প্ল্যাটফর্মে নেই।</p>
      </div>

      {/* USP Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        
        {/* Card 01 - Unified Ecosystem */}
        <USPItem 
          index="01"
          icon={<Users className="w-8 h-8 text-[#59a285]" />}
          badge="UNIFIED ECOSYSTEM"
          title="শিক্ষার সকল পক্ষ একটি প্ল্যাটফর্মে"
          description="শিক্ষক, অভিভাবক, লাইব্রেরি ও প্রকাশক — সবাই একই সংযুক্ত নেটওয়ার্কে কাজ করেন।"
          points={[
            "শিক্ষকের লেকচার সরাসরি অভিভাবকের ফিডে",
            "লাইব্রেরি ও প্রকাশকের কনটেন্ট ক্লাসে সরাসরি ব্যবহার",
            "কোচিং ও প্রাইভেট টিউটর একই নেটওয়ার্কে যুক্ত",
            "ডিজিটাল কনটেন্ট ক্রিয়েটরদের মার্কেটপ্লেস"
          ]}
          color="#59a285"
        />

        {/* Card 02 - Hybrid Learning */}
        <USPItem 
          index="02"
          icon={<Monitor className="w-8 h-8 text-blue-400" />}
          badge="HYBRID LEARNING"
          title="স্কুলে না আসলেও ক্লাস মিস নেই"
          description="শিক্ষার্থী যেকোনো জায়গা থেকে OneBook দিয়ে লাইভ ক্লাসে যুক্ত হতে পারে — শ্রেণীকক্ষের মতোই।"
          points={[
            "OneBoard-এ সরাসরি লেখা ও প্রশ্ন করার সুবিধা",
            "শিক্ষকের লেকচার নোট রিয়েল-টাইমে সিঙ্ক হয়",
            "ভার্চুয়াল ও ফিজিক্যাল শিক্ষার্থী একই সেশনে",
            "ক্লাস রেকর্ডিং পরে দেখার সুবিধা"
          ]}
          color="#60a5fa"
        />

        {/* Card 03 - Govt. Integration */}
        <USPItem 
          index="03"
          icon={<Globe2 className="w-8 h-8 text-indigo-400" />}
          badge="GOVT. INTEGRATION"
          title="সরকারি সেবা সরাসরি প্ল্যাটফর্মে"
          description="বোর্ড পরীক্ষার রেজিস্ট্রেশন থেকে শিক্ষাবৃত্তি — সরকারি পোর্টালের সাথে সরাসরি সংযুক্ত।"
          points={[
            "বোর্ড পরীক্ষার রেজিস্ট্রেশন ও সিট বন্টন",
            "শিক্ষাবৃত্তির টাকা সরাসরি প্ল্যাটফর্মে",
            "শিক্ষকের ছুটি ও প্রোমোশন অনলাইনে",
            "জাতীয় শিক্ষা কার্যক্রমের সাথে সরাসরি সংযোগ"
          ]}
          color="#818cf8"
        />
      </div>

      {/* Bottom CTA Bar */}
      <div className="max-w-5xl mx-auto text-white bg-black border border-gray-800 rounded-2xl p-6 md:p-8 flex items-center gap-6 group hover:border-[#59a285] transition-all">
        <div className="bg-[#d1e7dd] p-3 rounded-xl">
          <CheckCircle className="w-8 h-8 text-[#0f5132]" />
        </div>
        <div>
          <h4 className="lg:text-xl  md:text-2xl font-bold mb-1 group-hover:text-[#59a285] transition-colors">সম্পূর্ণ বিনামূল্যে অ্যাপ ডাউনলোড করুন</h4>
          <p className=" text-xs">শিক্ষাপ্রতিষ্ঠান, শিক্ষক, শিক্ষার্থী ও অভিভাবক — সবাই নিজের স্মার্টফোনে বিনামূল্যে ব্যবহার করতে পারবেন।</p>
        </div>
      </div>
    </section>
  );
};

// Reusable USP Component
const USPItem = ({  icon, badge, title, description, points, color }: any) => (
  <div className="bg-[#0d1011] rounded-3xl p-8 border border-gray-800 flex flex-col h-full hover:bg-[#262626] transition-all">
    {/* <span className="text-xs font-mono  text-gray-600 mb-6 tracking-[0.2em]">USP — {index}</span> */}
    
    <div className=" w-18 h-18 mx-auto rounded-2xl flex items-center justify-center mb-8">
      {icon}
    </div>

    <span className="bg-white mx-auto text-black text-[10px] font-black px-3 py-1 rounded-full w-fit mb-6 tracking-tighter">
      {badge}
    </span>

    <h3 className="text-2xl text-white font-bold mb-4 leading-tight">{title}</h3>
    <p className="text-white text-sm mb-8 leading-relaxed">{description}</p>

    <div className="mt-auto space-y-3 border-t border-gray-800 pt-8">
      {points.map((point: string, i: number) => (
        <div key={i} className="flex items-start gap-2 group/item">
          <Dot className="shrink-0 mt-[-4px]" size={32} color={color} />
          <span className="text-xs text-gray-400 leading-snug group-hover/item:text-gray-200 transition-colors">
            {point}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default TechnicalUSP;