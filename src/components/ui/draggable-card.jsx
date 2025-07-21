/* eslint-disable no-unused-vars */
import { cn } from "@/lib/utils";
import React, { useRef, useState, useEffect } from "react";
import {
  // eslint-disable-next-line no-unused-vars
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
  useVelocity,
  useAnimationControls,
} from "motion/react";

export const DraggableCardBody = ({ className, children }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cardRef = useRef(null);
  const controls = useAnimationControls();
  const [constraints, setConstraints] = useState({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  });

  // Enhanced physics for speed and smoothness
  const velocityX = useVelocity(mouseX);
  const velocityY = useVelocity(mouseY);

  // Faster, more responsive spring config
  const springConfig = {
    stiffness: 120,      // Increased from 50
    damping: 25,         // Increased from 20
    mass: 0.3,           // Reduced from 0.5
    velocity: 2,         // Added velocity
  };

  // Reduced rotation sensitivity for smoother feel
  const rotateX = useSpring(
    useTransform(mouseY, [-200, 200], [15, -15]), // Reduced from [-300, 300] and [25, -25]
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-200, 200], [-15, 15]),
    springConfig
  );

  // Smoother opacity transitions
  const opacity = useSpring(
    useTransform(mouseX, [-200, 0, 200], [0.9, 1, 0.9]), // Less dramatic opacity change
    springConfig
  );

  // Subtle glare effect
  const glareOpacity = useSpring(
    useTransform(mouseX, [-200, 0, 200], [0.1, 0, 0.1]), // Reduced glare intensity
    springConfig
  );

  useEffect(() => {
    // Optimized constraints update
    const updateConstraints = () => {
      if (typeof window !== "undefined") {
        const { innerWidth, innerHeight } = window;
        setConstraints({
          top: -innerHeight * 0.4,    // Reduced constraint area
          left: -innerWidth * 0.4,
          right: innerWidth * 0.4,
          bottom: innerHeight * 0.4,
        });
      }
    };

    updateConstraints();

    // Throttled resize listener for better performance
    let timeoutId;
    const throttledResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateConstraints, 100);
    };

    window.addEventListener("resize", throttledResize);
    return () => {
      window.removeEventListener("resize", throttledResize);
      clearTimeout(timeoutId);
    };
  }, []);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    const { width, height, left, top } = rect;
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;
    
    // Set with reduced sensitivity for smoother movement
    mouseX.set(deltaX * 0.8);
    mouseY.set(deltaY * 0.8);
  };

  const handleMouseLeave = () => {
    // Faster return to center
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      drag
      dragConstraints={constraints}
      dragElastic={0.1}        // Added for smoother drag boundaries
      dragTransition={{        // Enhanced drag physics
        power: 0.3,
        timeConstant: 150,
        bounceDamping: 40,
        bounceStiffness: 300,
        modifyTarget: (target) => Math.round(target / 5) * 5, // Snap to grid for smoother movement
      }}
      onDragStart={() => {
        document.body.style.cursor = "grabbing";
      }}
      onDragEnd={(event, info) => {
        document.body.style.cursor = "default";

        // Faster rotation reset
        controls.start({
          rotateX: 0,
          rotateY: 0,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 0.3,      // Faster reset
          },
        });

        const currentVelocityX = velocityX.get();
        const currentVelocityY = velocityY.get();

        const velocityMagnitude = Math.sqrt(
          currentVelocityX * currentVelocityX +
            currentVelocityY * currentVelocityY
        );

        // Enhanced momentum with better physics
        const momentumFactor = Math.min(1.2, velocityMagnitude / 800); // Increased momentum
        const bounce = Math.min(0.6, velocityMagnitude / 1200);        // Reduced bounce

        // Smoother momentum animation
        animate(info.point.x, info.point.x + currentVelocityX * 0.4, {
          duration: 0.6,        // Faster momentum
          ease: [0.25, 0.1, 0.25, 1], // Better easing curve
          bounce,
          type: "spring",
          stiffness: 80,        // Increased stiffness
          damping: 20,          // Increased damping
          mass: 0.6,
        });

        animate(info.point.y, info.point.y + currentVelocityY * 0.4, {
          duration: 0.6,
          ease: [0.25, 0.1, 0.25, 1],
          bounce,
          type: "spring",
          stiffness: 80,
          damping: 20,
          mass: 0.6,
        });
      }}
      style={{
        rotateX,
        rotateY,
        opacity,
        willChange: "transform",
        backfaceVisibility: "hidden", // Better rendering performance
        perspective: "1000px",        // Improved 3D rendering
      }}
      animate={controls}
      whileHover={{ 
        scale: 1.03,              // Slightly more scale
        transition: { 
          duration: 0.2,          // Faster hover response
          ease: "easeOut" 
        }
      }}
      whileTap={{ 
        scale: 0.98,              // Quick tap feedback
        transition: { 
          duration: 0.1 
        }
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative min-h-96 w-80 overflow-hidden rounded-md bg-neutral-100 p-6 shadow-2xl cursor-grab active:cursor-grabbing transform-gpu", // Added transform-gpu for better performance
        className
      )}
      initial={{ scale: 0.95, opacity: 0 }}  // Added entrance animation
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        duration: 0.4, 
        ease: [0.25, 0.1, 0.25, 1],
        delay: Math.random() * 0.2  // Staggered entrance
      }}
    >
      {children}
      <motion.div
        style={{
          opacity: glareOpacity,
        }}
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-transparent to-transparent select-none" // Better glare gradient
      />
    </motion.div>
  );
};

export const DraggableCardContainer = ({ className, children }) => {
  return (
    <div 
      className={cn(
        "[perspective:2000px] transform-gpu will-change-transform", // Optimized perspective and performance
        className
      )}
      style={{
        transformStyle: "preserve-3d", // Better 3D rendering
      }}
    >
      {children}
    </div>
  );
};