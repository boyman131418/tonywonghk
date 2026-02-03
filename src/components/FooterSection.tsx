import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const FooterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer className="bg-primary py-12 relative overflow-hidden" ref={ref}>
      {/* 背景裝飾 */}
      <div className="absolute inset-0">
        <svg className="absolute top-0 left-0 right-0 w-full h-16 text-gold-500/10" viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path d="M0,0 Q300,60 600,30 T1200,0" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-navy-400 text-sm mb-4">
            © 2025 王致生 Tony Wong. All rights reserved.
          </p>
          <p className="text-gold-400/60 text-xs font-serif italic">
            「從擺渡人到架構師，跨越伶仃洋的生態之橋」
          </p>
        </motion.div>
      </div>

      {/* Hidden SEO Schema - JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "王致生",
            "alternateName": "Tony Wong",
            "jobTitle": "生態架構師",
            "description": "大灣區生態架構師，專注跨境服務、數位化轉型與文化創意產業。從香港、肇慶到珠海，打造跨越伶仃洋的生態之橋。",
            "url": "https://tonywongcs.com",
            "image": "https://filedn.com/lgloMyCdroNSxe8SsFIXwkf/Tony%20wong/media/tony-hero.jpg",
            "sameAs": [],
            "worksFor": [
              {
                "@type": "Organization",
                "name": "星脈聯盟",
                "description": "跨界資源整合平台"
              },
              {
                "@type": "Organization", 
                "name": "視覺方舟",
                "description": "數位內容創意工坊"
              },
              {
                "@type": "Organization",
                "name": "美思未來",
                "description": "教育科技服務"
              }
            ],
            "knowsAbout": [
              "大灣區發展",
              "跨境服務",
              "數位化轉型",
              "文化創意產業",
              "企業生態建設",
              "萬年",
              "美思未來",
              "視覺方舟",
              "星脈聯盟",
              "金門旅遊"
            ],
            "areaServed": [
              {
                "@type": "City",
                "name": "香港"
              },
              {
                "@type": "City",
                "name": "珠海"
              },
              {
                "@type": "City",
                "name": "肇慶"
              }
            ]
          })
        }}
      />
    </footer>
  );
};

export default FooterSection;
