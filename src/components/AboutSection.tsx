import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import tonyAbout from "@/assets/tony-4.jpeg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden" ref={ref}>
      {/* 背景裝飾 */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold-50/50 to-transparent" />
      
      <div className="container-narrow relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* 左側圖片 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gold-gradient rounded-2xl opacity-10 blur-xl" />
              <div className="relative overflow-hidden rounded-2xl shadow-card">
                <img
                  src={tonyAbout}
                  alt="王致生 - 企業家"
                  className="w-full h-[500px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
                
                {/* 浮動標籤 */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-card/90 backdrop-blur-sm rounded-xl p-4 shadow-elegant">
                    <p className="text-sm text-muted-foreground mb-1">創業歷程</p>
                    <p className="text-2xl font-bold text-gradient-gold">15+ 年</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 右側內容 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-block mb-4">
              <span className="text-sm font-medium tracking-wider text-accent uppercase">
                關於我
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-serif">
              生態架構師
              <span className="text-gradient-gold">的使命</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                自2010年起，我的創業旅程是一部緊握大灣區時代脈搏的進化史。從香港出發，在肇慶深耕實業，最終將事業版圖的戰略核心與「築橋者」的宏圖，紮根於珠海。
              </p>
              <p>
                我立志成為的標竿，並非財富的規模，而是一種可持續的生態模式。通過深度服務、產業賦能與系統架構，超越簡單的中介角色，成為促進區域協同、降低交易成本的「新型基礎設施」。
              </p>
              <p>
                從服務個人與企業的「擺渡人」起步，最終成長為設計並運營整個跨境創新網絡的「架構師」。這座以珠海為核心、跨越伶仃洋的生態之橋，正是不斷生長的灣區精神的最佳註腳。
              </p>
            </div>

            {/* 數據展示 */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              {[
                { number: "6+", label: "企業創立" },
                { number: "3", label: "核心城市" },
                { number: "2025", label: "星脈聯盟" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-3xl lg:text-4xl font-bold text-gradient-gold mb-1">
                    {stat.number}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
