import {
  Tablet,
  Monitor,
  BookOpen,
  Layers,
  GraduationCap,
  ShieldCheck,
  Globe,
  Users,
  Building2,
} from "lucide-react";

export const navLinks = [
  {
    name: "Products",
    href: "#",
    nestednav: [
      {
        name: "OneTab",
        href: "/#onetab",
        desc: "শিক্ষক ও প্রতিষ্ঠানের ERP",
        icon: <Tablet className="w-5 h-5 text-[#0098FD]" />,
        iconBg: "bg-emerald-50",
      },
      {
        name: "OneBoard",
        href: "/#oneboard",
        desc: "ডিজিটাল ডিসপ্লে বোর্ড",
        icon: <Monitor className="w-5 h-5 text-blue-600" />,
        iconBg: "bg-blue-50",
      },
      {
        name: "OneBook",
        href: "/#onebook",
        desc: "শিক্ষার্থী ও অভিভাবক ট্যাবলেট",
        icon: <BookOpen className="w-5 h-5 text-orange-600" />,
        iconBg: "bg-orange-50",
      },
    ],
  },
  {
    name: "Solutions",
    href: "#",
    nestednav: [
      {
        name: "ব্যবহারকারী অনুযায়ী",
        desc: "পাঠ তৈরি, উপস্থিতি, রিপোর্ট",
        href: "/usersolutions",
        icon: <Users className="w-5 h-5 text-[#0098FD]" />,
        iconBg: "bg-emerald-50",
      },
      {
        name: "শিক্ষকদের জন্য",
        href: "/forteachers",
        desc: "School ERP, বেতন, পরীক্ষা ব্যবস্থাপনা",
        icon: <GraduationCap className="w-5 h-5 text-blue-600" />,
        iconBg: "bg-blue-50",
      },
      {
        name: "প্রতিষ্ঠানের জন্য",
        href: "/forinstitutions",
        desc: "প্রগ্রেস ট্র্যাকিং, হোমওয়ার্ক, নিরাপত্তা",
        icon: <Building2 className="w-5 h-5 text-orange-600" />,
        iconBg: "bg-orange-50",
      },
    ],
  },
  {
    name: "Features",
    href: "#",
    nestednav: [
      {
        name: "Smart Attendance",
        href: "/smartattendance",
        desc: "Geo-location ভিত্তিক উপস্থিতি",
        icon: <ShieldCheck className="w-5 h-5 text-red-600" />,
        iconBg: "bg-red-50",
      },
      {
        name: "Digital Library",
        href: "/digitallibrary",
        desc: "বিশাল বইয়ের ভাণ্ডার",
        icon: <Layers className="w-5 h-5 text-cyan-600" />,
        iconBg: "bg-cyan-50",
      },
      {
        name: "Teacher Training",
        href: "/teachertraining",
        desc: "আধুনিক শিক্ষক প্রশিক্ষণ",
        icon: <GraduationCap className="w-5 h-5 text-amber-600" />,
        iconBg: "bg-amber-50",
      },
      {
        name: "Security",
        href: "/security",
        desc: "শিক্ষার্থীদের নিরাপদ ডিভাইস",
        icon: <ShieldCheck className="w-5 h-5 text-green-600" />,
        iconBg: "bg-green-50",
      },
    ],
  },
  {
    name: "Resources",
    href: "#",
    nestednav: [
      {
        name: "SDG Goals",
        href: "sdggoals", // বা আপনার SDG সেকশনের ID
        desc: "আমাদের লক্ষ্য ও উদ্দেশ্য",
        icon: <Globe className="w-5 h-5 text-blue-500" />,
        iconBg: "bg-blue-50",
      },
      {
        name: "Why OneTab",
        href: "whyonetab", // আপনার Mission সেকশনের ID
        desc: "আমাদের যাত্রা ও টিম",
        icon: <Users className="w-5 h-5 text-indigo-500" />,
        iconBg: "bg-indigo-50",
      },
    ],
  },
  ,
  {
    name: "About Us",
    href: "/aboutus",
  },
  {
    name: "Our Mission",
    href: "/ourmission",
  },
  {
    name:"Vision",
    href:"/ourvision"
  }
];
