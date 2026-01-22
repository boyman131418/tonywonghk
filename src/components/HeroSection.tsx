import { motion } from "framer-motion";
import tonyHero from "@/assets/tony-2.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero overflow-hidden">
      {/* 背景裝飾 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />
        {/* 橋梁線條裝飾 */}
        <svg className="absolute bottom-0 left-0 right-0 w-full h-32 text-gold-500/20" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path d="M0,100 Q300,20 600,50 T1200,100" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M0,100 Q400,30 800,60 T1200,100" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        </svg>
      </div>

      <div className="container-narrow relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* 左側文字 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 text-sm font-medium tracking-wider text-gold-400 bg-gold-500/10 rounded-full border border-gold-500/20">
                灣區築橋者 · Bay Area Bridge Builder
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-6 font-serif">
              王致生
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal mt-3 text-gold-400">
                Tony Wong
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-navy-200 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              從擺渡人到架構師，跨越伶仃洋的生態之橋
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                href="#about"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gold-gradient text-navy-900 font-semibold rounded-lg shadow-gold transition-all duration-300 hover:shadow-lg"
              >
                認識我
              </motion.a>
              <motion.a
                href="#timeline"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border-2 border-gold-500/30 text-gold-400 font-semibold rounded-lg hover:bg-gold-500/10 transition-all duration-300"
              >
                事業歷程
              </motion.a>
            </div>
          </motion.div>

          {/* 右側圖片 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative mx-auto w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* 裝飾圓環 */}
              <div className="absolute inset-0 rounded-full border-2 border-gold-500/30 animate-pulse-gold" />
              <div className="absolute -inset-4 rounded-full border border-gold-500/10" />
              <div className="absolute -inset-8 rounded-full border border-gold-500/5" />
              
              {/* 主圖 */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gold-500/40 shadow-2xl">
                <img
                  src={tonyHero}
                  alt="王致生 Tony Wong"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 向下滾動提示 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gold-500/30 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-gold-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
