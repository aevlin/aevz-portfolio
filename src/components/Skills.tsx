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
    <text x="3" y="16" fontFamily="sans-serif" fontSize="13" fontWeight="bold" fill="#31A8FF">Ps</text>
    <rect x="0.5" y="0.5" width="23" height="23" rx="3.5" stroke="#31A8FF" strokeOpacity="0.3"/>
  </svg>
);

const XDIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="24" height="24" rx="4" fill="#2E001F"/>
    <text x="3" y="16" fontFamily="sans-serif" fontSize="13" fontWeight="bold" fill="#FF61F6">Xd</text>
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
        <path d="M2.5 2.5h19l-1.7 18.2L12 23.5l-7.8-2.8L2.5 2.5z" fill="#E34F26"/>
        <path d="M12 21.5v-17h7l-1.3 14.5-5.7 2.5z" fill="#EF652A"/>
        <path d="M12 13.5v2.8h-4l-.4-4.2h4.4zm0-6v2.8H7.3l.4 4.2h4.3v-2.8H8.8l-.2-1.4h3.4z" fill="#FFF"/>
        <path d="M12 16.3l-2.4-.9-.2-2h-2.8l.3 4 5.1 1.6v-2.7zm4.3-2.8l.2-2.8H12v2.8h4.3zm.5-6H12V10h4.6l.2-2.5z" fill="#EBEBEB"/>
    </svg>
)

const CSSIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M2.5 2.5h19l-1.7 18.2L12 23.5l-7.8-2.8L2.5 2.5z" fill="#1572B6"/>
        <path d="M12 21.5v-17h7l-1.3 14.5-5.7 2.5z" fill="#33A9DC"/>
        <path d="M12 16.3l-2.4-.9-.2-2h-2.8l.3 4 5.1 1.6v-2.7zm4.3-2.8l.2-2.8H12v2.8h4.3zm.5-6H12V10h4.6l.2-2.5z" fill="#FFF"/>
        <path d="M12 13.5v2.8h-4l-.4-4.2h4.4zm0-6v2.8H7.3l.4 4.2h4.3v-2.8H8.8l-.2-1.4h3.4z" fill="#EBEBEB"/>
    </svg>
)

const JSIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect width="24" height="24" rx="2" fill="#F7DF1E"/>
        <path d="M12.235 17.584c-.38-.28-.845-.55-1.425-.55-.655 0-1.165.25-1.165.73 0 .44.38.65 1.05.85.99.3 2.14.71 2.14 2.17 0 1.25-1.02 2.216-2.6 2.216-1.57 0-2.43-.88-2.76-1.55l1.62-.97c.2.45.65.92 1.25.92.56 0 1.01-.25 1.01-.73 0-.48-.42-.64-1.09-.85-.98-.3-2.1-.73-2.1-2.16 0-1.28 1.06-2.15 2.53-2.15 1.2 0 2.06.6 2.45 1.2l-1.5.89zm-5.46.74c-.38-.3-.88-.58-1.51-.58-.8 0-1.34.34-1.34.92 0 .49.42.71 1.23.94 1.11.31 2.37.75 2.37 2.3 0 1.48-1.21 2.48-2.92 2.48-1.78 0-2.82-1-3.23-1.78l1.83-1.05c.23.5.76 1.04 1.47 1.04.66 0 1.2-.28 1.2-.82 0-.54-.48-.74-1.28-.97-1.1-.32-2.31-.76-2.31-2.28 0-1.42 1.21-2.41 2.84-2.41 1.34 0 2.34.68 2.76 1.36l-1.68.99z" fill="black"/>
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
    <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg" alt="C" className="w-full h-full object-contain" />
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
