// import { useState } from "react";
// import { Menu, X } from "lucide-react";

// function Navbar() {
//     const [menuOpen, setMenuOpen] = useState(false);

//     return (
//         <header className="sticky top-0 left-0 w-full z-50 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-opacity-90 backdrop-blur-md shadow">
//             <div className="max-w-7xl mx-auto px-6 sm:px-12 py-4 flex justify-between items-center text-white">
//                 {/* Logo */}
//                 <div className="flex items-center gap-2 text-xl font-bold">
//                     <span className="text-white text-2xl">🚀</span>
//                     <span>Digital Value Creation</span>
//                 </div>

//                 {/* Desktop Nav */}
//                 <nav className="hidden sm:flex gap-8 text-sm font-medium">
//                     <a href="#services" className="hover:text-slate-300 transition">Services</a>
//                     <a href="#about" className="hover:text-slate-300 transition">About</a>
//                     <a href="#contact" className="hover:text-slate-300 transition">Contact</a>
//                 </nav>

//                 {/* Mobile menu button */}
//                 <button
//                     className="sm:hidden"
//                     onClick={() => setMenuOpen(!menuOpen)}
//                     aria-label="Toggle menu"
//                 >
//                     {menuOpen ? <X size={24} /> : <Menu size={24} />}
//                 </button>
//             </div>

//             {/* Mobile Menu Dropdown */}
//             {menuOpen && (
//                 <div className="sm:hidden bg-indigo-700 px-6 pb-4 space-y-3 text-white text-sm">
//                     <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
//                     <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
//                     <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
//                 </div>
//             )}
//         </header>
//     );
// }

// export default Navbar;


import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all ${scrolled ? "bg-indigo-800/90 backdrop-blur shadow-md" : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-12 py-4 flex justify-between items-center text-white">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 text-xl font-bold">
                    <Logo className="w-7 h-7 text-white" />
                    <span className="text-lg sm:text-xl font-bold">Digital Value Creation</span>

                </Link>

                {/* Desktop nav */}
                <nav className="hidden sm:flex gap-8 text-sm font-medium">
                    <Link to="/about" className="hover:text-slate-300 transition">About</Link>
                    <Link to="/contact" className="hover:text-slate-300 transition">Contact</Link>
                </nav>

                {/* Mobile menu toggle */}
                <button
                    className="sm:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="sm:hidden absolute top-full left-0 w-full bg-indigo-700/80 backdrop-blur-lg text-white text-lg font-medium py-6 flex flex-col items-center gap-6 rounded-b-2xl shadow-lg"
                    >
                        <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-slate-300 transition">Home</Link>
                        <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-slate-300 transition">About</Link>
                        <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-slate-300 transition">Contact</Link>
                    </motion.div>
                )}
            </AnimatePresence>



        </header>
    );
}

export default Navbar;
