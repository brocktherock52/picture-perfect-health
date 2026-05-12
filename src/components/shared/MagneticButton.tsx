import { useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

/**
 * Wraps any element in a subtle magnetic hover effect. The child translates
 * toward the cursor on mouse-move and springs back on leave. Respects
 * useReducedMotion.
 */
export function MagneticButton({
  children,
  className,
  strength = 18,
}: MagneticButtonProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setPos({ x: (x / rect.width) * strength, y: (y / rect.height) * strength });
  };
  const onLeave = () => setPos({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 220, damping: 18, mass: 0.4 }}
    >
      {children}
    </motion.div>
  );
}
