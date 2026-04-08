import { Badge } from "../components/ui/badge";
import {  Mail } from "lucide-react";
import { BsFacebook, BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { PiYoutubeLogoLight } from "react-icons/pi";
import notearch from "../assets/logonotearch.png"

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img className="w-30" src={notearch} alt="" />
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xs">
              শিক্ষাদান ডিজিটাল করার সম্পূর্ণ সমাধান। আমরা বিশ্বাস করি প্রযুক্তির সঠিক ব্যবহার শিক্ষাব্যবস্থায় বৈপ্লবিক পরিবর্তন আনতে পারে।
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<BsFacebook size={18} />} href="#" />
              <SocialIcon icon={<BsTwitterX size={18} />} href="#" />
              <SocialIcon icon={<FaLinkedin size={18} />} href="#" />
              <SocialIcon icon={<PiYoutubeLogoLight size={18} />} href="#" />
            </div>
          </div>

          {/* Links Section */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Solutions</h3>
                <ul className="mt-4 space-y-2">
                  <FooterLink id="onetab" label="OneTab ERP" />
                  <FooterLink id="oneboard" label="OneBoard" />
                  <FooterLink id="onebook" label="OneBook" />
                  {/* <FooterLink id="smart-attendance" label="Smart Attendance" /> */}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Support</h3>
                <ul className="mt-4 space-y-2">
                  <FooterLink id="guide" label="Guides" />
                  {/* <FooterLink id="privacy" label="Privacy Policy" /> */}
                </ul>
              </div>
              
            </div>
            
            {/* Newsletter or Badges Area */}
            <div className="space-y-6">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Our Compliance</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-[#0098FD] dark:text-[#0098FD] border-emerald-100 dark:border-emerald-900/50 bg-emerald-50 dark:bg-emerald-900/10 px-3 py-1 rounded-full text-[10px] font-bold">
                  SDG Goal 4
                </Badge>
                <Badge variant="outline" className="text-blue-600 border-blue-100 bg-blue-50 dark:bg-blue-900/10 dark:border-blue-900/50 px-3 py-1 rounded-full text-[10px] font-bold">
                  NPT 9–13
                </Badge>
                <Badge variant="outline" className="text-violet-600 border-violet-100 bg-violet-50 dark:bg-violet-900/10 dark:border-violet-900/50 px-3 py-1 rounded-full text-[10px] font-bold">
                  One Teacher One Tab
                </Badge>
              </div>
              <div className="pt-4">
                <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2">
                  <Mail size={14} /> support@notearch.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 dark:text-slate-500 text-xs text-center">
            © {currentYear} NoteArch Education. সর্বস্বত্ব সংরক্ষিত।
          </p>
          <div className="flex gap-6 text-xs text-slate-400">
             <a href="#" className="hover:text-[#0098FD] transition-colors">Terms of Service</a>
             <a href="#" className="hover:text-[#0098FD] transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-[#0098FD] transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Helper Components
function FooterLink({ label,id }: { label: string,id:string }) {
  return (
    <li>
      <a href={`#${id}`} className="text-sm text-slate-500 dark:text-slate-400 hover:text-[#0098FD] dark:hover:text-[#0098FD] transition-colors">
        {label}
      </a>
    </li>
  );
}

function SocialIcon({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <a 
      href={href} 
      className="h-9 w-9 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-[#0098FD] hover:text-white hover:border-[#0098FD] transition-all duration-300"
    >
      {icon}
    </a>
  );
}