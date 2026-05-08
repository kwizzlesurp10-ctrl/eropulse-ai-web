"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    setIsPremium(localStorage.getItem('eropulse_premium') === 'true');
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-red-900/30 backdrop-blur-md bg-black/70">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <motion.span 
            className="text-3xl font-black tracking-tighter text-red-500 animate-pulse"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            EROPULSE
          </motion.span>
          <span className="text-xs uppercase tracking-[4px] text-amber-400">AI GAY DESIRE ENGINE</span>
        </div>
        
        <div className="flex items-center gap-6">
          {isPremium && (
            <span className="px-4 py-1 bg-gradient-to-r from-amber-400 to-yellow-300 text-black text-xs font-black rounded-3xl flex items-center gap-1">
              🔥 ALPHA
            </span>
          )}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/pricing'}
            className="px-6 py-2 bg-gradient-to-r from-red-600 to-amber-500 rounded-3xl text-sm font-bold hover:scale-105 transition-all"
          >
            {isPremium ? 'MANAGE PULSE' : 'UPGRADE FOR RAW ACCESS'}
          </motion.button>
          <div className="w-9 h-9 bg-gradient-to-br from-amber-400 to-red-500 rounded-2xl flex items-center justify-center text-xl">🍆</div>
        </div>
      </div>
    </nav>
  );
}
