import React from 'react';
import { Tablet, Tv, BookOpen, CheckCircle2 } from "lucide-react";

interface Feature {
  title: string;
  subtitle: string;
  description: string;
  target: string;
  icon: React.ReactNode;
  points: string[];
}

const features: Feature[] = [
  {
    title: "One Tab",
    target: "শিক্ষক ও প্রতিষ্ঠানের জন্য",
    subtitle: "শিক্ষাদানের প্রতিটি কার্যক্রম ডিজিটালাইজ করার সম্পূর্ণ সমাধান। সাথে পূর্ণাঙ্গ School ERP।",
    description: "",
    icon: <Tablet className="w-8 h-8 text-black" />,
    points: [
      "লেকচার নোট ও এজেন্ডা-বুক তৈরি",
      "ভয়েস-টু-টেক্সট রিপোর্ট",
      "Geo-location Attendance",
      "বেতন ও আর্থিক ব্যবস্থাপনা"
    ]
  },
  {
    title: "OneBoard",
    target: "শ্রেণীকক্ষের জন্য",
    subtitle: "ইন্টারেক্টিভ ডিজিটাল বোর্ড যা শ্রেণীকক্ষ ও ভার্চুয়াল শিক্ষার্থীদের একই সাথে যুক্ত রাখে।",
    description: "",
    icon: <Tv className="w-8 h-8 text-black" />,
    points: [
      "লাইভ ক্লাস ব্রডকাস্ট",
      "OneBook-এর সাথে সংযুক্ত",
      "লেকচার নোটে সরাসরি লেখা",
      "ভার্চুয়াল প্রশ্নোত্তর"
    ]
  },
  {
    title: "OneBook",
    target: "শিক্ষার্থী ও অভিভাবকের জন্য",
    subtitle: "সন্তানের পড়াশোনার সাথে অভিভাবককে সরাসরি যুক্ত করার স্মার্ট সমাধান।",
    description: "",
    icon: <BookOpen className="w-8 h-8 text-black" />,
    points: [
      "হোমওয়ার্ক ও এসাইনমেন্ট ট্র্যাকিং",
      "বিষয়ভিত্তিক অগ্রগতি রিপোর্ট",
      "কুইজ ও ক্লাস টেস্টের নম্বর",
      "ভার্চুয়াল ক্লাসে অংশগ্রহণ"
    ]
  }
];

const FeatureSection: React.FC = () => {
  return (
    <section className="text-black  py-20 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-16 text-center">
        <p className="text-[#59a285] font-semibold text-lg mb-2">আমাদের প্রোডাক্টসমূহ</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">তিনটি সমাধান, একটি লক্ষ্য</h2>
        <p className="text-black max-w-2xl mx-auto text-lg leading-relaxed">
          শিক্ষার প্রতিটি অংশীজনকে একই ডিজিটাল প্ল্যাটফর্মে যুক্ত করে শিক্ষার্থীর সর্বোচ্চ সাফল্য নিশ্চিত করা।
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="bg-[#303339] border border-gray-800 rounded-3xl p-8 hover:border-[#59a285] transition-all duration-300 group"
          >
            {/* Icon Box */}
            <div className="bg-[#d1e7dd] w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
              {feature.icon}
            </div>

            {/* Content */}
            <h3 className="text-3xl text-white font-bold mb-1">{feature.title}</h3>
            <p className="text-[#59a285] font-medium mb-6">{feature.target}</p>
            <p className="text-white mb-8 leading-relaxed">
              {feature.subtitle}
            </p>

            {/* Feature Points */}
            <ul className="space-y-4">
              {feature.points.map((point, idx) => (
                <li key={idx} className="flex text-white items-start gap-3  group-hover:text-gray-200 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-[#59a285] shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
