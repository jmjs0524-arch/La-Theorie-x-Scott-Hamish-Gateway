/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, MapPin, Calendar } from "lucide-react";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-white font-sans selection:bg-gray-100">
      {/* Header / Joint Brand Title */}
      <header className="z-50 flex flex-col items-center justify-center border-b border-gray-100 bg-white py-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center"
        >
          <h1 className="font-serif text-2xl font-light tracking-[0.2em] text-gray-900 md:text-3xl">
            LA THÉORIE <span className="mx-3 text-gray-300">×</span> SCOTT HAMISH
          </h1>
          <p className="mt-3 text-[10px] font-medium tracking-[0.3em] uppercase text-gray-400 sm:text-[11px]">
            Discover two premium Korean skincare brands at our Vietnam exhibition booth
          </p>
        </motion.div>
      </header>

      {/* Main Split Section */}
      <main className="relative flex flex-1 flex-col md:flex-row">
        {/* La Théorie Section */}
        <motion.a
          href="https://www.latheoriekorea.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex flex-1 flex-col items-center justify-center border-r border-gray-100 bg-brand-light p-10 transition-all duration-700 md:p-12 lg:p-16"
        >
          {/* Side Label */}
          <div className="absolute top-12 left-10 hidden origin-left -rotate-90 transform text-[10px] uppercase tracking-[0.4em] text-gray-400 md:block">
            Dermatological Excellence
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-6 text-[11px] uppercase tracking-[0.5em] text-gray-400"
            >
              Brand 01
            </motion.span>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="flex flex-col items-center"
            >
              <h2 className="font-serif text-5xl font-light tracking-tight text-gray-900 sm:text-6xl">
                La Théorie
              </h2>
              <div className="my-8 h-16 w-px bg-gray-200" />
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="max-w-[300px] text-[13px] leading-relaxed tracking-wide text-gray-500 sm:text-sm"
            >
              The clinical answer to sensitive skin. Minimalist formulas driven by pure dermatological science and biological harmony.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 border border-gray-900 px-10 py-3.5 text-[10px] font-medium uppercase tracking-[0.3em] text-gray-900 transition-all duration-300 group-hover:bg-gray-900 group-hover:text-white"
            >
              Enter La Théorie
            </motion.div>
          </div>

          {/* Bottom Keywords */}
          <div className="absolute bottom-10 flex w-full justify-center gap-6 text-[9px] uppercase tracking-[0.2em] text-gray-400">
            <span>Sensitive</span>
            <span>Pure</span>
            <span>Clean Beauty</span>
          </div>
        </motion.a>

        {/* Scott Hamish Section */}
        <motion.a
          href="https://scotthamish.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex flex-1 flex-col items-center justify-center bg-brand-dark p-10 transition-all duration-700 md:p-12 lg:p-16"
        >
          {/* Side Label */}
          <div className="absolute top-12 right-10 hidden origin-right rotate-90 transform text-[10px] uppercase tracking-[0.4em] text-gray-500 md:block">
            Modern Performance Heritage
          </div>

          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] opacity-[0.05] mix-blend-overlay" />
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-6 text-[11px] uppercase tracking-[0.5em] text-gray-500"
            >
              Brand 02
            </motion.span>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="flex flex-col items-center"
            >
              <h2 className="font-serif text-5xl font-light tracking-tight text-[#F5F2ED] sm:text-6xl">
                Scott Hamish
              </h2>
              <div className="my-8 h-16 w-px bg-[#F5F2ED]/10" />
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="max-w-[300px] text-[13px] leading-relaxed tracking-wide text-[#F5F2ED]/60 sm:text-sm"
            >
              Refined grooming for the modern gentleman. A legacy of confidence built through heritage design and active performance.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12 border border-[#F5F2ED] px-10 py-3.5 text-[10px] font-medium uppercase tracking-[0.3em] text-[#F5F2ED] transition-all duration-300 group-hover:bg-[#F5F2ED] group-hover:text-brand-dark"
            >
              Enter Scott Hamish
            </motion.div>
          </div>

          {/* Bottom Keywords */}
          <div className="absolute bottom-10 flex w-full justify-center gap-6 text-[9px] uppercase tracking-[0.2em] text-[#F5F2ED]/30">
            <span>Heritage</span>
            <span>Confidence</span>
            <span>Performance</span>
          </div>
        </motion.a>
      </main>

      {/* Footer / Exhibition Info */}
      <footer className="z-40 flex flex-col items-center justify-between border-t border-gray-100 bg-white px-10 py-8 md:flex-row md:py-10">
        <div className="flex items-center gap-4">
          <div className="relative flex h-2 w-2 items-center justify-center">
            <div className="absolute h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></div>
            <div className="relative h-1.5 w-1.5 rounded-full bg-red-500"></div>
          </div>
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-500">
            Exhibition Live 2026
          </span>
        </div>
        
        <div className="my-6 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400 md:my-0">
          VIPREMIUM Vietnam 2026 &nbsp;·&nbsp; VietBeauty 2026 &nbsp;·&nbsp; Ho Chi Minh City
        </div>
        
        <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-500">
          Booth No. A-124 · Divided Brand Zone
        </div>
      </footer>
    </div>
  );
}
