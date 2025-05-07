// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { cn } from "../lib/utils";

// export const PinContainer = ({
//   children,
//   title,
//   className,
//   containerClassName
// }) => {
//   const [transform, setTransform] = useState("translate(-50%,-50%) rotateX(0deg)");

//   const onMouseEnter = () => {
//     setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
//   };
//   const onMouseLeave = () => {
//     setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
//   };

//   return (
//     <div
//       className={cn("relative group/pin z-50 cursor-pointer", containerClassName)}
//       onMouseEnter={onMouseEnter}
//       onMouseLeave={onMouseLeave}>
//       <div
//         style={{
//           perspective: "1000px",
//           transform: "rotateX(70deg) translateZ(0deg)",
//         }}
//         className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2">
//         <div
//           style={{ transform: transform }}
//           className="absolute left-1/2 p-4 top-1/2 flex justify-start items-start rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-black border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden">
//           <div className={cn("relative z-50", className)}>{children}</div>
//         </div>
//       </div>
//       <PinPerspective title={title} />
//     </div>
//   );
// };

// export const PinPerspective = ({ title }) => {
//   return (
//     <motion.div
//       className="pointer-events-none w-96 h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500">
//       <div className="w-full h-full -mt-7 flex-none inset-0">
//         <div className="absolute top-0 inset-x-0 flex justify-center">
//           <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
//             <span className="relative z-20 text-white text-xs font-bold inline-block py-0.5">
//               {title}
//             </span>
//             <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { cn } from "../lib/utils";

// export const PinContainer = ({
//   children,
//   title,
//   className,
//   containerClassName,
// }) => {
//   const [rotateX, setRotateX] = useState(0);
//   const [rotateY, setRotateY] = useState(0);
//   const [scale, setScale] = useState(1);

//   const handleMouseMove = (e) => {
//     const { clientX, clientY, currentTarget } = e;
//     const { width, height, left, top } = currentTarget.getBoundingClientRect();

//     // Calculate rotation based on mouse position
//     const x = (clientX - left) / width - 0.5;
//     const y = (clientY - top) / height - 0.5;

//     setRotateX(y * -15); // Invert Y-axis rotation
//     setRotateY(x * 15);
//     setScale(1.05);
//   };

//   const resetTransform = () => {
//     setRotateX(0);
//     setRotateY(0);
//     setScale(1);
//   };

//   return (
//     <motion.div
//       className={cn(
//         "relative group/pin z-50 cursor-pointer transform-gpu",
//         containerClassName
//       )}
//       style={{
//         perspective: "1200px",
//       }}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={resetTransform}
//     >
//       <motion.div
//         style={{
//           transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
//         }}
//         transition={{ type: "spring", stiffness: 100, damping: 10 }}
//         className="relative flex justify-start items-start p-4 rounded-2xl shadow-lg bg-black/80 border border-white/10 group-hover/pin:border-white/30 transition duration-700 overflow-hidden"
//       >
//         <div className={cn("relative z-50", className)}>{children}</div>
//         <HoverGlowEffect />
//       </motion.div>
//       <PinPerspective title={title} />
//     </motion.div>
//   );
// };

// const HoverGlowEffect = () => {
//   return (
//     <motion.div
//       className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-indigo-500/10 
//       opacity-0 group-hover/pin:opacity-30 transition duration-700"
//     ></motion.div>
//   );
// };

// export const PinPerspective = ({ title }) => {
//   return (
//     <motion.div
//       className="pointer-events-none w-96 h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500"
//     >
//       <div className="absolute top-0 inset-x-0 flex justify-center">
//         <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
//           <span className="relative z-20 text-white text-xs font-bold inline-block py-0.5">
//             {title}
//           </span>
//         </div>
//       </div>
//     </motion.div>
//   );
// };
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

export const PinContainer = ({
  children,
  title,
  className,
  containerClassName,
}) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [scale, setScale] = useState(1);

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();

    // Calculate rotation based on mouse position (restricted angles)
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;

    setRotateX(y * -10); // Reduced rotation
    setRotateY(x * 10);
    setScale(1.03);
  };

  const resetTransform = () => {
    setRotateX(0);
    setRotateY(0);
    setScale(1);
  };

  return (
    <motion.div
      className={cn(
        "relative group/pin z-10 cursor-pointer transform-gpu",
        containerClassName
      )}
      style={{
        perspective: "1000px",
        overflow: "hidden", // Prevents overflow
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTransform}
    >
      <motion.div
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
        }}
        transition={{ type: "spring", stiffness: 80, damping: 12 }}
        className="relative flex justify-start items-start p-4 rounded-2xl shadow-lg bg-black/80 border border-white/10 
        group-hover/pin:border-white/30 transition duration-700 overflow-hidden"
      >
        <div className={cn("relative z-50", className)}>{children}</div>
        <HoverGlowEffect />
      </motion.div>
      <PinPerspective title={title} />
    </motion.div>
  );
};

const HoverGlowEffect = () => {
  return (
    <motion.div
      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-indigo-500/10 
      opacity-0 group-hover/pin:opacity-30 transition duration-700"
    ></motion.div>
  );
};

export const PinPerspective = ({ title }) => {
  return (
    <motion.div
      className="pointer-events-none w-full h-full flex items-center justify-center opacity-0 group-hover/pin:opacity-100 
      z-0 transition duration-500"
    >
      <div className="absolute top-0 inset-x-0 flex justify-center">
        <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
          <span className="relative z-20 text-white text-xs font-bold inline-block py-0.5">
            {title}
          </span>
        </div>
      </div>
    </motion.div>
  );
};
