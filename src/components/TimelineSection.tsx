import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Rocket, Network } from "lucide-react";

const phases = [
  {
    id: 1,
    period: "2010-2017",
    title: "服務築基",
    subtitle: "積累信任資本與實體服務經驗",
    icon: Building2,
    color: "from-navy-600 to-navy-700",
    items: [
      { year: "2010", event: "創辦萬年移民有限公司", desc: "深耕肇慶，專注跨境服務" },
      { year: "2014", event: "拓展IT服務業務", desc: "熟悉傳統企業數位化痛點" },
      { year: "2017", event: "收購金門旅遊", desc: "獲取成熟品牌與高端服務網絡" },
    ],
  },
  {
    id: 2,
    period: "2018-2024",
    title: "多元佈局",
    subtitle: "將服務能力產品化，佈局科技與文化賽道",
    icon: Rocket,
    color: "from-gold-600 to-gold-700",
    items: [
      { year: "2018", event: "成立美思未來", desc: "數位化轉型解決方案" },
      { year: "2024", event: "成立世一娛樂", desc: "佈局青年潮流文化" },
    ],
  },
  {
    id: 3,
    period: "2024-2025",
    title: "生態架構",
    subtitle: "完成業務板塊的戰略協同與頂層生態設計",
    icon: Network,
    color: "from-accent to-gold-600",
    items: [
      { year: "2024", event: "戰略落子珠海", desc: "設立事業總樞紐" },
      { year: "2025", event: "成立視覺方舟", desc: "VR/AR沉浸式體驗項目" },
      { year: "2025", event: "創辦星脈聯盟", desc: "高端資源平台，成為生態架構師" },
    ],
  },
];

const TimelineSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="timeline" className="section-padding bg-navy-900 relative overflow-hidden" ref={ref}>
      {/* 背景 */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-gold-400/5 rounded-full blur-3xl" />
      </div>

      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium tracking-wider text-gold-400 uppercase">
            發展歷程
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mt-4 mb-6 font-serif">
            三階段 <span className="text-gradient-gold">躍遷</span>
          </h2>
          <p className="text-navy-300 max-w-2xl mx-auto">
            從服務積累到多元佈局，再到生態架構，每一步都是對灣區未來的深刻洞察
          </p>
        </motion.div>

        {/* 時間線 */}
        <div className="relative">
          {/* 中央連線 */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-500/50 via-gold-400/30 to-gold-500/50 hidden lg:block" />

          <div className="space-y-16 lg:space-y-24">
            {phases.map((phase, phaseIndex) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: phaseIndex * 0.2 }}
                className={`relative grid lg:grid-cols-2 gap-8 lg:gap-16 ${
                  phaseIndex % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* 中央節點 */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 hidden lg:flex items-center justify-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${phase.color} flex items-center justify-center shadow-lg shadow-gold-500/20`}>
                    <phase.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                </div>

                {/* 左側/右側內容 */}
                <div className={`${phaseIndex % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="bg-navy-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gold-500/10 shadow-card">
                    <div className="flex items-center gap-4 mb-6 lg:hidden">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${phase.color} flex items-center justify-center`}>
                        <phase.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <span className="text-gold-400 text-sm font-medium">{phase.period}</span>
                        <h3 className="text-xl font-bold text-primary-foreground">{phase.title}</h3>
                      </div>
                    </div>

                    <div className="hidden lg:block mb-6">
                      <span className="text-gold-400 text-sm font-medium">{phase.period}</span>
                      <h3 className="text-2xl font-bold text-primary-foreground mt-1">{phase.title}</h3>
                      <p className="text-navy-300 mt-2">{phase.subtitle}</p>
                    </div>

                    <div className="space-y-4">
                      {phase.items.map((item, itemIndex) => (
                        <motion.div
                          key={item.year + item.event}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: phaseIndex * 0.2 + itemIndex * 0.1 }}
                          className="flex gap-4"
                        >
                          <div className="flex-shrink-0 w-14 text-right">
                            <span className="text-gold-400 font-semibold">{item.year}</span>
                          </div>
                          <div className="flex-shrink-0 w-px bg-gold-500/30" />
                          <div>
                            <p className="text-primary-foreground font-medium">{item.event}</p>
                            <p className="text-navy-400 text-sm mt-1">{item.desc}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
