"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const MAP_URL =
  "https://res.cloudinary.com/dftway9sm/image/upload/f_auto,q_auto/portfolio/urbanext/lot-map-white";

export default function UrbanextLotMap() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#f8fafc",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 60% 50%, rgba(59,130,246,0.06) 0%, transparent 60%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <motion.div
        style={{ position: "relative", width: "100%", height: "100%" }}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src={MAP_URL}
          alt="Mapa de lotes UrbaNext – Nuevo San Vicente"
          fill
          sizes="(max-width: 768px) 100vw, 45vw"
          style={{ objectFit: "contain" }}
          priority
        />
      </motion.div>
    </div>
  );
}
