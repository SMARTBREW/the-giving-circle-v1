"use client";

import { motion } from "framer-motion";

const fadeVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function FadeInSection({
  children,
  className,
  amount = "some",
}: {
  children: React.ReactNode;
  className?: string;
  amount?: "some" | "all" | number;
}) {
  return (
    <motion.div
      variants={fadeVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
