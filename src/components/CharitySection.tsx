import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Laptop, Users, Landmark } from "lucide-react";
import tony6 from "@/assets/tony-6.jpeg";

const charityItems = [
  {
    title: "數位包容計劃",
    description: "賦能傳統行業，推動中小企業數位化轉型",
    icon: Laptop,
  },
  {
    title: "跨境青年創想營",
    description: "培育未來人才，促進粵港澳青年交流與創業",
    icon: Users,
  },
  {
    title: "文化遺產數位重生",
    description: "運用科技保護與傳承嶺南文化遺產，促進文化認同",
    icon: Landmark,
  },
];

const CharitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="charity" className="section-padding bg-navy-900 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-narrow relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* 左側內容 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center">
                <Heart className="w-5 h-5 text-gold-400" />
              </div>
              <span className="text-sm font-medium tracking-wider text-gold-400 uppercase">
                回饋社會
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 font-serif">
              人心相通
              <span className="text-gradient-gold block mt-2">築橋理念</span>
            </h2>

            <p className="text-navy-300 mb-10 leading-relaxed">
              我的慈善事業，緊密圍繞「築橋」理念展開。這一切，旨在為商業生態奠定最深厚的社會根基——讓人與人之間的心靈相通。
            </p>

            <div className="space-y-6">
              {charityItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex gap-4 p-4 rounded-xl bg-navy-800/50 border border-gold-500/10 card-hover"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-navy-400 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 右側圖片 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gold-gradient rounded-2xl opacity-10 blur-xl" />
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={tony6}
                  alt="王致生 - 慈善活動"
                  className="w-full h-[500px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
              </div>

              {/* 浮動裝飾 */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 bg-gold-gradient rounded-2xl p-6 shadow-gold"
              >
                <p className="text-navy-900 font-bold text-lg">築橋</p>
                <p className="text-navy-700 text-sm">連接心與心</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CharitySection;
