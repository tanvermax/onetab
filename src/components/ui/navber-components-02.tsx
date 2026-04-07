import  { useState } from "react";
import { Button } from "./button";
import { ModeToggle } from "./ModeToggle";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Products", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Contacts", href: "#" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-slate-200 dark:border-slate-800">
      <div className=" mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        
        {/* LOGO SECTION */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="h-9 w-9 rounded-xl bg-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-200 dark:shadow-none group-hover:rotate-6 transition-transform">
             <div className="h-4 w-4 bg-white rounded-sm" />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            NoteArch
          </span>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden flex-1 items-center justify-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-slate-600 dark:text-slate-400 transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-2 sm:gap-4">
          <ModeToggle />
          
          <Button className="hidden md:flex bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-6 font-bold shadow-md">
            Start Free
          </Button>

          {/* MOBILE MENU TOGGLE */}
          <button 
            className="md:hidden p-2 text-slate-600 dark:text-slate-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY MENU */}
      {isOpen && (
        <div className="fixed inset-0 top-[73px] z-40 bg-white dark:bg-slate-950 md:hidden animate-in slide-in-from-right duration-300">
           <nav className="flex bg-white flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl  font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-4"
                >
                  {link.name}
                </a>
              ))}
              <Button className="w-full bg-emerald-600 py-8 text-xl font-bold rounded-2xl mt-4">
                Start Free Trial <ArrowRight className="ml-2" />
              </Button>
           </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;