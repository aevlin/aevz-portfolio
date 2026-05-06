import { motion } from "motion/react";
import { useRef } from "react";

// Official Brand Icons (SVG Paths)

const FigmaIcon = () => (
  <svg viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M19 28.5C19 25.874 21.129 23.75 23.75 23.75H28.5V28.5C28.5 31.126 26.371 33.25 23.75 33.25C21.129 33.25 19 31.126 19 28.5Z" fill="#0ACF83"/>
    <path d="M9.5 28.5C9.5 25.874 11.629 23.75 14.25 23.75H19V33.25H14.25C11.629 33.25 9.5 31.126 9.5 28.5Z" fill="#A259FF"/>
    <path d="M9.5 19C9.5 16.374 11.629 14.25 14.25 14.25H19V23.75H14.25C11.629 23.75 9.5 21.626 9.5 19Z" fill="#F24E1E"/>
    <path d="M19 14.25V23.75H23.75C26.371 23.75 28.5 21.626 28.5 19C28.5 16.374 26.371 14.25 23.75 14.25H19Z" fill="#FF7262"/>
    <path d="M19 42.75C19 45.374 16.871 47.5 14.25 47.5C11.629 47.5 9.5 45.374 9.5 42.75C9.5 40.126 11.629 38 14.25 38H19V42.75Z" fill="#1ABCFE"/>
  </svg>
);

const FramerIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-black">
    <path d="M4 0H12H20V8H12L4 16V24L12 16H20V8H12V0H4Z" fill="currentColor"/>
    <path d="M12 8H20V16H12V8Z" fill="white" fillOpacity="0.2"/> 
    <path d="M4 0h16v8h-8l8 8h-8v8l-8-8v-8h8v-8h-8z" fill="black"/>
  </svg>
);

const PhotoshopIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="24" height="24" rx="4" fill="#001E36"/>
    <text x="12" y="16.5" fontFamily="sans-serif" fontSize="12" fontWeight="bold" fill="#31A8FF" textAnchor="middle">Ps</text>
    <rect x="0.5" y="0.5" width="23" height="23" rx="3.5" stroke="#31A8FF" strokeOpacity="0.3"/>
  </svg>
);

const XDIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="24" height="24" rx="4" fill="#2E001F"/>
    <text x="12" y="16.5" fontFamily="sans-serif" fontSize="12" fontWeight="bold" fill="#FF61F6" textAnchor="middle">Xd</text>
    <rect x="0.5" y="0.5" width="23" height="23" rx="3.5" stroke="#FF61F6" strokeOpacity="0.3"/>
  </svg>
);

const SketchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M2.99121 7.625L11.9996 2.125L21.008 7.625L11.9996 22.875L2.99121 7.625Z" fill="#FDB300"/>
    <path d="M3 7.625L7.5 2.125H16.5L21 7.625H3Z" fill="#EA6C00" fillOpacity="0.1"/>
    <path d="M3 7.625L12 22.875L21 7.625H3Z" fill="#FDAD00"/>
    <path d="M7.5 2.125L3 7.625H12L7.5 2.125Z" fill="#FDD231"/>
    <path d="M16.5 2.125L21 7.625H12L16.5 2.125Z" fill="#FDD231"/>
    <path d="M7.5 2.125H16.5L12 7.625L7.5 2.125Z" fill="#FDAD00"/>
  </svg>
);

const HTMLIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M4 2L20 2L18.5 19L12 22L5.5 19L4 2Z" fill="#E34F26"/>
        <path d="M12 4V19.9L16.9 17.8L18 5H12Z" fill="#EF652A"/>
        <text x="12" y="16.5" fill="white" fontSize="12" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">5</text>
    </svg>
)

const CSSIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M4 2L20 2L18.5 19L12 22L5.5 19L4 2Z" fill="#1572B6"/>
        <path d="M12 4V19.9L16.9 17.8L18 5H12Z" fill="#33A9DC"/>
        <text x="12" y="16.5" fill="white" fontSize="12" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">3</text>
    </svg>
)

const JSIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect width="24" height="24" fill="#F7DF1E"/>
        <text x="18" y="20" fill="black" fontSize="14" fontWeight="bold" fontFamily="sans-serif" textAnchor="end">JS</text>
    </svg>
)

const BootstrapIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect width="24" height="24" rx="4" fill="#7952B3"/>
        <path d="M7 6H13C15.5 6 17 7.5 17 9.5C17 11 16 12 15 12.5C16.5 13 17.5 14 17.5 16C17.5 18.5 15.5 20 12.5 20H7V6ZM10 8.5V11.5H12.5C13.5 11.5 14.5 11 14.5 10C14.5 9 13.5 8.5 12.5 8.5H10ZM10 14V17.5H12.5C14 17.5 15 17 15 15.5C15 14.5 14 14 12.5 14H10Z" fill="white"/>
    </svg>
)

const PythonIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M12 2C8.686 2 8 3.5 8 3.5L7.99 7.5H16V9.5H8C5.5 9.5 4 11 4 13.5C4 16 5.5 17 5.5 17L8.5 17V15C8.5 13.343 9.843 12 11.5 12H16C17.657 12 19 10.657 19 9V4.5C19 2.5 15.314 2 12 2ZM10.5 4C10.776 4 11 4.224 11 4.5C11 4.776 10.776 5 10.5 5C10.224 5 10 4.776 10 4.5C10 4.224 10.224 4 10.5 4Z" fill="#3776AB"/>
        <path d="M12 22C15.314 22 16 20.5 16 20.5L16.01 16.5H8V14.5H16C18.5 14.5 20 13 20 10.5C20 8 18.5 7 18.5 7L15.5 7V9C15.5 10.657 14.157 12 12.5 12H8C6.343 12 5 13.343 5 15V19.5C5 21.5 8.686 22 12 22ZM13.5 20C13.224 20 13 19.776 13 19.5C13 19.224 13.224 19 13.5 19C13.776 19 14 19.224 14 19.5C14 19.776 13.776 20 13.5 20Z" fill="#FFD43B"/>
    </svg>
)

const CIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z" fill="#00599C"/>
        <path d="M15.4 16.5C14.5 17.5 13.3 18 12 18C8.7 18 6 15.3 6 12C6 8.7 8.7 6 12 6C13.3 6 14.5 6.5 15.4 7.5L13.3 9.6C13 9.2 12.5 9 12 9C10.3 9 9 10.3 9 12C9 13.7 10.3 15 12 15C12.5 15 13 14.8 13.3 14.4L15.4 16.5Z" fill="white"/>
    </svg>
)

export function Skills() {
  const containerRef = useRef(null);
  
  const skills = [
    { name: "FIGMA", level: 95, icon: FigmaIcon, category: "UI/UX" },
    { name: "FRAMER", level: 85, icon: FramerIcon, category: "NO-CODE" },
    { name: "PHOTOSHOP", level: 80, icon: PhotoshopIcon, category: "EDITING" },
    { name: "ADOBE XD", level: 75, icon: XDIcon, category: "UI/UX" },
    { name: "SKETCH", level: 70, icon: SketchIcon, category: "UI" },
    { name: "HTML5", level: 90, icon: HTMLIcon, category: "FRONTEND" },
    { name: "CSS3", level: 88, icon: CSSIcon, category: "FRONTEND" },
    { name: "JAVASCRIPT", level: 75, icon: JSIcon, category: "SCRIPTING" },
    { name: "BOOTSTRAP", level: 85, icon: BootstrapIcon, category: "FRAMEWORK" },
    { name: "PYTHON", level: 80, icon: PythonIcon, category: "BACKEND" },
    { name: "C", level: 75, icon: CIcon, category: "SYSTEMS" },
  ];

  return (
    <section ref={containerRef} className="py-32 px-6 bg-white text-black overflow-hidden relative">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-20 text-center">
           <h2 className="text-7xl md:text-8xl font-bebas mb-4">TECHNICAL STACK</h2>
           <p className="font-mono text-gray-500 text-sm max-w-md uppercase tracking-wider">
             Tools & Technologies
           </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16 justify-items-center">
           {skills.map((skill, i) => (
              <SkillItem key={skill.name} skill={skill} index={i} />
           ))}
        </div>
      </div>
    </section>
  );
}

function SkillItem({ skill, index }: { skill: any, index: number }) {
  const Icon = skill.icon;
  const maxRotation = 270;
  const startRotation = -135;
  const currentRotation = (skill.level / 100) * maxRotation + startRotation;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="flex flex-col items-center group w-full"
    >
      {/* Gauge Container */}
      <div className="relative w-28 h-28 mb-4">
         {/* Ticks Ring */}
         {[...Array(9)].map((_, i) => (
            <div 
              key={i} 
              className={`absolute top-0 left-1/2 w-0.5 h-1.5 bg-gray-300 origin-bottom ${i % 2 === 0 ? 'h-2.5 bg-gray-400' : ''}`}
              style={{ 
                 transform: `translateX(-50%) rotate(${(i * (270/8)) - 135}deg) translateY(4px) translateZ(0)` 
              }} 
            />
         ))}

         {/* Icon */}
         <div className="absolute inset-0 m-auto w-12 h-12 flex items-center justify-center drop-shadow-md group-hover:drop-shadow-xl transition-all duration-300 group-hover:scale-110">
            <Icon />
         </div>

         {/* Needle */}
         <motion.div 
            initial={{ rotate: startRotation }}
            whileInView={{ rotate: currentRotation }}
            transition={{ type: "spring", stiffness: 50, damping: 15, delay: 0.2 + (index * 0.1) }}
            className="absolute top-0 left-1/2 w-0.5 h-[50%] origin-bottom"
         >
            <div className="w-full h-8 bg-black mt-1 rounded-full" />
         </motion.div>
      </div>

      {/* Label */}
      <div className="text-center">
         <span className="block font-bebas text-xl tracking-wide">{skill.name}</span>
         <span className="block font-mono text-[10px] text-gray-400">{skill.category}</span>
      </div>
    </motion.div>
  );
}
