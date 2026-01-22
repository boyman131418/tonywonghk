import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import tony7 from "@/assets/tony-7.jpeg";
import tony8 from "@/assets/tony-8.jpeg";

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const images = [tony7, tony8];

  return (
    <section className="section-padding bg-background relative overflow-hidden" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium tracking-wider text-accent uppercase">
            活動剪影
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4 font-serif">
            精彩 <span className="text-gradient-gold">瞬間</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative overflow-hidden rounded-2xl shadow-card group"
            >
              <img
                src={img}
                alt={`活動照片 ${index + 1}`}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
