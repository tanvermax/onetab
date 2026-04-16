import { Badge } from "../components/ui/badge";
import { Mail } from "lucide-react";
import { BsApple, BsFacebook, BsGooglePlay, BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { PiYoutubeLogoLight } from "react-icons/pi";

// SDG লোগো ইম্পোর্ট করুন
import sdgLogo from "../assets/SDG Wheel_Transparent_WEB.png"; 
import Logo from "../components/ui/logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
   <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          
          {/* Brand & Download Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
               <Logo/>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xs">
                শিক্ষাদান ডিজিটাল করার সম্পূর্ণ সমাধান। আমরা বিশ্বাস করি প্রযুক্তির সঠিক ব্যবহার শিক্ষাব্যবস্থায় বৈপ্লবিক পরিবর্তন আনতে পারে।
              </p>
            </div>

          
            <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Get the App</h4>
                <div className="flex flex-col sm:flex-row xl:flex-row gap-3">
                    <DownloadButton 
                        icon={<BsGooglePlay size={20} className="text-[#0098FD] group-hover:text-white" />} 
                        storeName="Google Play" 
                        action="Get it on" 
                        href="https://play.google.com/store/apps/details?id=com.teknosoft.notearch.academy" 
                    />
                    <DownloadButton 
                        icon={<BsApple size={20} className="text-[#0098FD] group-hover:text-white" />} 
                        storeName="App Store" 
                        action="Download for Mac" 
                        href="https://apps.apple.com/gb/app/notearch/id6756450121" 
                    />
                </div>
            </div>

            {/* Social Icons - Moved Below Buttons */}
            <div className="flex gap-4 pt-2">
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
                  <FooterLink id="/#onetab" label="OneTab ERP" />
                  <FooterLink id="/#oneboard" label="OneBoard" />
                  <FooterLink id="/#onebook" label="OneBook" />
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Support</h3>
                <ul className="mt-4 space-y-2">
                  <FooterLink id="https://notearch.com/#contact-us" label="Contact Us" />
                </ul>
              </div>
            </div>
            
            {/* Compliance Section */}
            <div className="space-y-6">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Our Compliance</h3>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 group">
                  <img src={sdgLogo} alt="SDG Wheel" className="w-10 h-10 object-contain group-hover:rotate-12 transition-transform" />
                  <div>
                    <Badge variant="outline" className="text-[#E5243B] border-red-100 bg-red-50 dark:bg-red-900/10 dark:border-red-900/30 px-2 py-0.5 rounded-md text-[9px] font-bold">GOAL 4</Badge>
                    <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300 mt-1">Quality Education</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-[10px] font-black text-white shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">NPT</div>
                  <div>
                    <Badge variant="outline" className="text-blue-600 border-blue-100 bg-blue-50 dark:bg-blue-900/10 dark:border-blue-900/30 px-2 py-0.5 rounded-md text-[9px] font-bold">9–13</Badge>
                    <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300 mt-1">National Policy Compliant</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2 hover:text-[#0098FD] transition-colors cursor-pointer">
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
             <a href="https://notearch.com/page/type/terms-conditions" className="hover:text-[#0098FD] transition-colors">Terms of Service</a>
             <a href="https://notearch.com/page/type/privacy-policy" className="hover:text-[#0098FD] transition-colors">Privacy Policy</a>
             {/* <a href="#" className="hover:text-[#0098FD] transition-colors">Cookies</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

// Helper Components
function FooterLink({ label, id, }: { label: string, id: string }) {
  return (
    <li>
      <a href={`${id}`} className="text-sm text-slate-500 dark:text-slate-400 hover:text-[#0098FD] dark:hover:text-[#0098FD] transition-colors">
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
function DownloadButton({ icon, storeName, action, href }: { icon: React.ReactNode, storeName: string, action: string, href: string }) {
    return (
        <a 
            href={href} 
            className="flex items-center gap-3 w-fit sm:w-auto xl:w-full min-w-40 p-2 px-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 hover:bg-[#0098FD] hover:border-[#0098FD] group transition-all duration-300 shadow-sm"
        >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white dark:bg-slate-800 group-hover:bg-[#0098FD]/10 transition-colors">
                {icon}
            </div>
            <div className="flex flex-col">
                <p className="text-[10px] text-slate-400 dark:text-slate-500 group-hover:text-white/80">{action}</p>
                <p className="text-sm font-black text-slate-900 dark:text-white group-hover:text-white">{storeName}</p>
            </div>
        </a>
    );
}