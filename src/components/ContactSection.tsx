import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Phone, Linkedin, Globe } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-primary relative overflow-hidden" ref={ref}>
      {/* 背景裝飾 */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold-400/5 rounded-full blur-3xl" />
        {/* 橋梁線條 */}
        <svg className="absolute top-0 left-0 right-0 w-full h-20 text-gold-500/10" viewBox="0 0 1200 80" preserveAspectRatio="none">
          <path d="M0,0 Q300,80 600,40 T1200,0" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium tracking-wider text-gold-400 uppercase">
            聯繫我
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mt-4 mb-6 font-serif">
            共建 <span className="text-gradient-gold">灣區未來</span>
          </h2>
          <p className="text-navy-300 max-w-2xl mx-auto">
            期待與您攜手，在大灣區這片熱土上創造更多可能
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              icon: MapPin,
              title: "辦公地點",
              content: "珠海市",
              subtitle: "大灣區戰略核心",
            },
            {
              icon: Mail,
              title: "電子郵件",
              content: "contact@tonywong.com",
              subtitle: "商務合作洽談",
            },
            {
              icon: Globe,
              title: "業務覆蓋",
              content: "香港 · 肇慶 · 珠海",
              subtitle: "跨境服務網絡",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-navy-800/30 border border-gold-500/10 card-hover"
            >
              <div className="w-14 h-14 rounded-full bg-gold-500/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-gold-400" />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">{item.title}</h3>
              <p className="text-gold-400 font-medium mb-1">{item.content}</p>
              <p className="text-navy-400 text-sm">{item.subtitle}</p>
            </motion.div>
          ))}
        </div>

        {/* 底部標語 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-navy-400 text-sm mb-4">
            © 2025 王致生 Tony Wong. All rights reserved.
          </p>
          <p className="text-gold-400/60 text-xs font-serif italic">
            「從擺渡人到架構師，跨越伶仃洋的生態之橋」
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
