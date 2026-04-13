import { useState, type JSX } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router";
import { navLinks } from "./Navinks";
import { motion, AnimatePresence } from "framer-motion";
import notearch from "../../assets/logonotearch.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState<
    string | JSX.Element | null
  >(null);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveMobileMenu(null);
  };

  return (
    <header className="sticky top-0 z-50 w-full px-4 py-4">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl bg-[#ffffff] px-6 py-4 shadow-2xl border border-white/5"
      >
        {/* LOGO */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-2 group"
        >
          <motion.div
            whileHover={{ rotate: 10, scale: 1.1 }} // লোগো হোভার অ্যানিমেশন
            className=""
          ></motion.div>
          <img className="w-30" src={notearch} alt="" />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => (
            <div key={link?.name} className="group relative px-4 py-2">
              {(link?.nestednav?.length as number) > 0 ? (
                <>
                  {" "}
                  <button className="flex items-center gap-1.5 text-sm font-semibold transition-colors hover:text-[#0098FD]">
                    {link?.name}
                    <ChevronDown
                      size={14}
                      className="transition-transform group-hover:rotate-180"
                    />
                  </button>
                </>
              ) : (
                <Link className="text-sm font-semibold transition-colors hover:text-[#0098FD]"
                 to={link?.href as string}>
               
               
                  {link?.name}
               </Link>
              )}

              {/* ৩. ডেস্কটপ মেগা মেনু অ্যানিমেশন */}
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="invisible absolute left-1/2 top-full w-[500px] -translate-x-1/2 pt-6 opacity-0 group-hover:visible group-hover:opacity-100"
                >
                  {(link?.nestednav?.length as number) > 0 ? (
                    <>
                      <div className="grid grid-cols-2 gap-2 rounded-[2rem] bg-white p-6 shadow-2xl ring-1 ring-black/5">
                        {link?.nestednav?.map((item) => (
                          <motion.a
                            key={item.name}
                            href={item.href}
                            whileHover={{
                              x: 5,
                              backgroundColor: "rgba(16, 185, 129, 0.05)",
                            }} // স্লাইড হোভার
                            className="flex items-start gap-4 rounded-2xl p-4 transition-all"
                          >
                            <div
                              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${item.iconBg}`}
                            >
                              {item.icon}
                            </div>
                            <div>
                              <h4 className="text-sm font-bold text-slate-900">
                                {item.name}
                              </h4>
                              <p className="mt-0.5 text-[11px] text-slate-500 line-clamp-2">
                                {item.desc}
                              </p>
                            </div>
                          </motion.a>
                        ))}
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="hidden items-center gap-4 lg:flex">
          {/* <Link to="https://notearch.com/login" target="_blank">
            <button className="text-sm font-bold text-white hover:text-[#0098FD] transition-colors">Login</button>
          </Link> */}
          <Link to={"https://notearch.com/login"}>
            {" "}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-xl bg-[#0098FD] px-6 py-2.5 text-sm font-semibold  text-white shadow-lg"
            >
              Login
            </motion.button>
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white"
        >
          <motion.div animate={{ rotate: isMenuOpen ? 90 : 0 }}>
            {isMenuOpen ? (
              <X className="text-[#0098FD]" size={28} />
            ) : (
              <Menu className="text-[#0098FD]" size={28} />
            )}
          </motion.div>
        </button>
      </motion.div>

      {/* ৪. মোবাইল মেনু স্লাইড অ্যানিমেশন */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-x-4 top-24 z-40 overflow-hidden rounded-[2.5rem] bg-[#0098FD] backdrop-blur-xl border border-white/10 p-8 text-white shadow-2xl lg:hidden"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <div key={link?.name} className="border-b border-white/5">
                  <button
                    onClick={() =>
                      setActiveMobileMenu(
                        (activeMobileMenu === link?.name ? (
                          <></>
                        ) : (
                          link?.name
                        )) as any,
                      )
                    }
                    className="flex w-full items-center justify-between py-4 text-xl font-light"
                  >
                    {link?.name}
                    <motion.div
                      animate={{
                        rotate: activeMobileMenu === link?.name ? 180 : 0,
                      }}
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {activeMobileMenu === link?.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="grid gap-3 overflow-hidden"
                      >
                        {link?.nestednav?.map((item) => (
                          <motion.a
                            key={item.name}
                            href={item.href}
                            onClick={closeMenu}
                            initial={{ x: -20 }}
                            animate={{ x: 0 }}
                            className="flex items-center gap-4 rounded-2xl bg-white text-black p-4"
                          >
                            <div
                              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${item.iconBg}`}
                            >
                              {item.icon}
                            </div>
                            <span className="text-sm font-medium ">
                              {item.name}
                            </span>
                          </motion.a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-8 flex flex-col gap-4"
              >
                <Link
                  to={"https://notearch.com/login"}
                  className="w-full
                  rounded-2xl border border-white/10  py-4 text-center font-normal"
                >
                  Login
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
