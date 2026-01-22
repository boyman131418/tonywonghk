import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building, Plane, Cpu, Sparkles, Eye, Users } from "lucide-react";
import tony3 from "@/assets/tony-3.jpeg";
import tony4 from "@/assets/tony-4.jpeg";
import tony5 from "@/assets/tony-5.jpeg";

const businesses = [
  {
    name: "萬年移民",
    year: "2010",
    description: "為粵港澳高淨值家庭提供頂級的移民規劃與跨境財富管理服務",
    icon: Building,
    category: "跨境服務",
  },
  {
    name: "金門旅遊",
    year: "1972/2017",
    description: "成熟品牌與高端客戶服務經驗，實體服務網絡",
    icon: Plane,
    category: "文旅服務",
  },
  {
    name: "美思未來",
    year: "2018",
    description: "為大灣區企業提供數位化轉型解決方案，從項目服務商轉變為科技夥伴",
    icon: Cpu,
    category: "科技賦能",
  },
  {
    name: "世一娛樂",
    year: "2024",
    description: "致力於青年潮流文化，為商業生態注入品牌活力與內容創造力",
    icon: Sparkles,
    category: "文化創意",
  },
  {
    name: "視覺方舟",
    year: "2025",
    description: "運用VR/AR、數位孿生等技術，打造前沿的沉浸式體驗項目",
    icon: Eye,
    category: "前沿科技",
  },
  {
    name: "星脈聯盟",
    year: "2025",
    description: "聚合兩地企業家、投資人與專家的高端資源平台，以「課題制」推動跨境合作",
    icon: Users,
    category: "生態平台",
  },
];

const BusinessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const images = [tony3, tony4, tony5];

  return (
    <section id="business" className="section-padding bg-background relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-gold-50/30 to-transparent" />

      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium tracking-wider text-accent uppercase">
            商業版圖
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 font-serif">
            多元 <span className="text-gradient-gold">生態矩陣</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            跨科技、文旅、文娛的商業矩陣，從經營自己生意的「商人」，徹底轉變為設計合作規則、調度區域資源的「生態架構師」
          </p>
        </motion.div>

        {/* 圖片展示區 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-3 gap-4 mb-16"
        >
          {images.map((img, index) => (
            <div key={index} className="relative overflow-hidden rounded-xl aspect-[4/3] shadow-card">
              <img
                src={img}
                alt={`商業活動 ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
            </div>
          ))}
        </motion.div>

        {/* 業務卡片網格 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {businesses.map((business, index) => (
            <motion.div
              key={business.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group bg-card rounded-2xl p-6 border border-border card-hover shadow-elegant"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                  <business.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                  {business.category}
                </span>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-1 font-serif">{business.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">
                {business.year.includes("/") ? `創立於 ${business.year.split("/")[0]}，${business.year.split("/")[1]}年收購` : `${business.year}年成立`}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {business.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
