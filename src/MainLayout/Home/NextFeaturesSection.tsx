"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  GraduationCap,
  BookOpen,
  LayoutDashboard,
  Users,
  Mic,
  FileText,
  Video,
  CalendarCheck,
  MonitorPlay,
  PenLine,
  ClipboardList,
  Bell,
  BarChart3,
  Wallet,
  UserCheck,
  BookMarked,
  MessageSquare,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import { Badge } from "../../components/ui/badge";


// ─── Types ────────────────────────────────────────────────────────────────────

interface FeatureItem {
  icon: React.ElementType;
  title: string;
  desc: string;
}

interface Tab {
  id: string;
  label: string;
  bangla: string;
  icon: React.ElementType;
  color: {
    badge: string;
    icon: string;
    accent: string;
    dot: string;
  };
  headline: string;
  sub: string;
  features: FeatureItem[];
}


const TABS: Tab[] = [
  {
    id: "teacher",
    label: "Teacher's Tools",
    bangla: "শিক্ষকের সরঞ্জাম",
    icon: GraduationCap,
    color: {
      badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
      icon: "bg-emerald-50 text-emerald-600",
      accent: "text-emerald-600",
      dot: "bg-emerald-500",
    },
    headline: "আধুনিক শিক্ষকের সম্পূর্ণ ডিজিটাল কর্মক্ষেত্র",
    sub: "লেকচার তৈরি থেকে রিপোর্ট প্রদান — সব একটি ট্যাবেই। ভয়েস কমান্ডে কাজ করুন, সময় বাঁচান।",
    features: [
      {
        icon: FileText,
        title: "লেকচার নোট ও এজেন্ডা-বুক",
        desc: "জাতীয় কারিকুলাম বিশ্লেষণ করে স্বয়ংক্রিয়ভাবে পাঠ পরিকল্পনা ও লেকচার নোট তৈরি করুন।",
      },
      {
        icon: Mic,
        title: "ভয়েস-টু-টেক্সট রিপোর্ট",
        desc: "কণ্ঠস্বর দিয়ে প্রতিটি শিক্ষার্থীর জন্য আলাদা বিস্তারিত প্রোগ্রেস রিপোর্ট তৈরি করুন।",
      },
      {
        icon: Video,
        title: "ভিডিও ও অ্যানিমেশন কনটেন্ট",
        desc: "ব্যবহারিক ক্লাসের জন্য ভিডিও টিউটোরিয়াল এবং শিশুদের জন্য অ্যানিমেশন লেকচার নোট তৈরি।",
      },
      {
        icon: CalendarCheck,
        title: "ক্লাস টেস্ট ও পরীক্ষা ব্যবস্থাপনা",
        desc: "প্রশ্নপত্র তৈরি, মডারেশন, পরীক্ষা গ্রহণ এবং ফলাফল প্রকাশ সম্পূর্ণ ডিজিটালি।",
      },
    ],
  },
  {
    id: "student",
    label: "Student View",
    bangla: "শিক্ষার্থীর অভিজ্ঞতা",
    icon: BookOpen,
    color: {
      badge: "bg-violet-50 text-violet-700 border-violet-200",
      icon: "bg-violet-50 text-violet-600",
      accent: "text-violet-600",
      dot: "bg-violet-500",
    },
    headline: "শ্রেণীকক্ষে থাকুন বা বাইরে — শিক্ষা চলবেই",
    sub: "OneBook দিয়ে ভার্চুয়ালি ক্লাসে যোগ দিন, বোর্ডে লিখুন, প্রশ্ন করুন। অনুপস্থিতি আর বাধা নয়।",
    features: [
      {
        icon: MonitorPlay,
        title: "ভার্চুয়াল ক্লাসরুম",
        desc: "শ্রেণীকক্ষের বাইরে থেকেও OneBoard-এ সরাসরি যুক্ত হয়ে লাইভ ক্লাসে অংশ নিন।",
      },
      {
        icon: PenLine,
        title: "ইন্টারেক্টিভ নোট",
        desc: "শিক্ষকের লেকচার নোটের উপরে সরাসরি লিখুন, হাইলাইট করুন এবং নিজের নোট সংরক্ষণ করুন।",
      },
      {
        icon: ClipboardList,
        title: "হোমওয়ার্ক ও এসাইনমেন্ট",
        desc: "পেন্ডিং কাজের তালিকা, ডেডলাইন এবং সাবমিশন স্ট্যাটাস এক জায়গায় দেখুন।",
      },
      {
        icon: TrendingUp,
        title: "নিজের অগ্রগতি ট্র্যাক করুন",
        desc: "বিষয়ভিত্তিক কুইজ ও ক্লাস টেস্টের নম্বর এবং সামগ্রিক পারফরম্যান্স রিপোর্ট দেখুন।",
      },
    ],
  },
  {
    id: "erp",
    label: "ERP Dashboard",
    bangla: "প্রতিষ্ঠান পরিচালনা",
    icon: LayoutDashboard,
    color: {
      badge: "bg-blue-50 text-blue-700 border-blue-200",
      icon: "bg-blue-50 text-blue-600",
      accent: "text-blue-600",
      dot: "bg-blue-500",
    },
    headline: "একটি ড্যাশবোর্ডে পুরো প্রতিষ্ঠান পরিচালনা করুন",
    sub: "ভর্তি থেকে বেতন, উপস্থিতি থেকে পরীক্ষা — সম্পূর্ণ স্কুল ERP এখন আপনার হাতে।",
    features: [
      {
        icon: UserCheck,
        title: "Geo-location Attendance",
        desc: "শিক্ষক ও কর্মচারীদের লোকেশন-ভিত্তিক উপস্থিতি ও দৈনন্দিন কার্যাবলী ব্যবস্থাপনা।",
      },
      {
        icon: Wallet,
        title: "আর্থিক ব্যবস্থাপনা",
        desc: "শিক্ষার্থীদের বেতন আদায়, শিক্ষকদের বেতন প্রদান এবং সকল আয়-ব্যয়ের হিসাব ডিজিটালি।",
      },
      {
        icon: BarChart3,
        title: "কোর্স ও সিলেবাস ম্যানেজমেন্ট",
        desc: "ক্লাস রুটিন, পরীক্ষার সময়সূচি, সিলেবাস ও কারিকুলাম সম্পূর্ণ ডিজিটাল পদ্ধতিতে পরিচালনা।",
      },
      {
        icon: BookMarked,
        title: "জাতীয় সংস্থার সাথে সংযুক্তি",
        desc: "জাতীয় পরীক্ষার রেজিস্ট্রেশন, বৃত্তি বিতরণ, শিক্ষা ছুটি ও প্রমোশন ডিজিটালি সম্পন্ন।",
      },
    ],
  },
  {
    id: "parents",
    label: "Parents Feed",
    bangla: "অভিভাবকের নজরদারি",
    icon: Users,
    color: {
      badge: "bg-amber-50 text-amber-700 border-amber-200",
      icon: "bg-amber-50 text-amber-600",
      accent: "text-amber-600",
      dot: "bg-amber-500",
    },
    headline: "সন্তানের প্রতিটি পদক্ষেপ সম্পর্কে সচেতন থাকুন",
    sub: "OneBook দিয়ে সার্বক্ষণিক সন্তানের পড়াশোনার আপডেট পান এবং সঠিক সিদ্ধান্ত নিন।",
    features: [
      {
        icon: Bell,
        title: "রিয়েল-টাইম নোটিফিকেশন",
        desc: "হোমওয়ার্ক ডেডলাইন, পরীক্ষার সময়সূচি এবং শিক্ষকের গুরুত্বপূর্ণ বার্তা তাৎক্ষণিক পান।",
      },
      {
        icon: CheckCircle2,
        title: "সাবমিশন ট্র্যাকিং",
        desc: "সন্তানের হোমওয়ার্ক ও এসাইনমেন্ট জমা দেওয়ার স্ট্যাটাস এবং পেন্ডিং তালিকা দেখুন।",
      },
      {
        icon: TrendingUp,
        title: "বিষয়ভিত্তিক অগ্রগতি রিপোর্ট",
        desc: "প্রতিটি বিষয়ে কুইজ, ক্লাস টেস্ট ও পরীক্ষার নম্বর এবং সামগ্রিক পারফরম্যান্স ট্র্যাক করুন।",
      },
      {
        icon: MessageSquare,
        title: "শিক্ষকের সাথে সরাসরি যোগাযোগ",
        desc: "সন্তানের অগ্রগতি নিয়ে সরাসরি শিক্ষকের সাথে যোগাযোগ করুন এবং প্রয়োজনীয় সিদ্ধান্ত নিন।",
      },
    ],
  },
];


export default function NextFeaturesSection() {
  const [activeTab, setActiveTab] = useState<string>("teacher");

  const active = TABS.find((t) => t.id === activeTab)!;
  const ActiveIcon = active.icon;

  return (
    <section className="relative bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Section header */}
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-2 text-lg font-semibold uppercase tracking-widest text-emerald-600">
              প্ল্যাটফর্ম ফিচারসমূহ
            </p>
            <h2 className="text-5xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              সবার জন্য আলাদা,{" "}
              <span className="text-emerald-600">সবার জন্য উপযুক্ত।</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              শিক্ষক, শিক্ষার্থী, প্রতিষ্ঠান পরিচালক ও অভিভাবক — প্রত্যেকের জন্য
              আলাদাভাবে ডিজাইন করা ফিচার।
            </p>
          </motion.div>
        </div>

        {/* Tab switcher */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 flex flex-wrap justify-center gap-2"
        >
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  relative flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold
                  transition-all duration-200
                  ${
                    isActive
                      ? "border-foreground/15 bg-foreground text-background shadow-sm"
                      : "border-border bg-background text-muted-foreground hover:border-border/80 hover:bg-muted hover:text-foreground"
                  }
                `}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.bangla}</span>
                {isActive && (
                  <motion.span
                    layoutId="active-tab-dot"
                    className="ml-0.5 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400"
                  />
                )}
              </button>
            );
          })}
        </motion.div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
           
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Content header */}
            <div className="mb-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${active.color.icon}`}
              >
                <ActiveIcon className="h-6 w-6" />
              </div>
              <div>
                <Badge
                  variant="outline"
                  className={`mb-1.5 text-[10px] font-semibold uppercase tracking-wider ${active.color.badge}`}
                >
                  {active.bangla}
                </Badge>
                <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                  {active.headline}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {active.sub}
                </p>
              </div>
            </div>

            {/* Feature cards grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {active.features.map((feat, i) => {
                const FeatIcon = feat.icon;
                return (
                  <motion.div
                    key={feat.title}
                    custom={i}
                    
                    initial="hidden"
                    animate="visible"
                    className="group rounded-2xl border border-border bg-card p-5 transition-all duration-200 hover:-translate-y-1 hover:border-border/80 hover:shadow-sm"
                  >
                    <div
                      className={`mb-4 flex h-9 w-9 items-center justify-center rounded-xl ${active.color.icon}`}
                    >
                      <FeatIcon className="h-4 w-4" />
                    </div>
                    <h4 className="mb-1.5 text-base font-semibold leading-snug text-foreground">
                      {feat.title}
                    </h4>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {feat.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}