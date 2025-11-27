import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
}

export const Reveal = ({ children, width = "fit-content" }: Props) => {
  const ref = useRef(null);
  
  // AQUÍ ESTÁ EL TRUCO DEL MAGO 🎩:
  // margin: "-150px" le dice: "Esperá a que el elemento esté 150px ADENTRO de la pantalla"
  const isInView = useInView(ref, { once: true, margin: "-150px 0px -150px 0px" });
  
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100 }, // Bajamos un poco más el inicio (100px) para más dramatismo
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        // Hacemos la animación más lenta (0.8s) y suave
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};