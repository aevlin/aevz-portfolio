import { motion } from "motion/react";
import { ArrowUpRight, Sticker } from "lucide-react";
import toneUpHero from "../../projects/Design.png";
import pgconnectHero from "../../projects/pgconnect.png";
import whatsappUI from "../../projects/Whatsapp 1990s UI.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects({ onProjectClick }: { onProjectClick: (id: string) => void }) {
  
  const projects = [
    {
       id: "toneup",
       title: "ToneUp App",
       category: "Mobile Design",
       image: toneUpHero,
       rotation: -2,
       year: "2025"
    },
    {
       id: "pgconnect",
       title: "PGConnect",
       category: "Web App • Accommodation Finder",
       image: pgconnectHero,
       rotation: 1,
       year: "2025-2026",
       href: "https://aevz-pg-connect.vercel.app"
    },
    {
       id: "whatsapp1990s",
       title: "WhatsApp 90s",
       category: "Concept UI",
       image: whatsappUI,
       rotation: 2,
       year: "2025"
    }
  ];

  return (
    <section className="bg-[#D9FF00] text-black pt-24 pb-32 px-4 relative overflow-hidden transform-gpu">
      
      {/* Background Grid Pattern (Subtle) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

      {/* HEADER SECTION */}
      <div className="max-w-7xl mx-auto mb-20 relative z-10">
         <div className="flex flex-col md:flex-row items-end justify-between gap-8">
            <div>
               <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 mb-4"
               >
                  <Sticker className="w-6 h-6 animate-spin-slow" />
                  <span className="font-mono text-xs font-bold uppercase tracking-widest bg-black text-[#D9FF00] px-2 py-1">Selected Works</span>
               </motion.div>
               
               <h2 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.8]">
                  PROJECTS
                </h2>
            </div>

            <div className="max-w-xs pb-4">
               <p className="font-mono text-xs md:text-sm font-bold leading-relaxed">
                  A collection of digital experiences, brand identities, and visual experiments crafted with precision and passion.
               </p>
            </div>
         </div>
      </div>

      {/* MASONRY-STYLE GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 px-2 md:px-8">
         {projects.map((project, index) => (
            <ProjectCard 
               key={project.id}
               {...project}
               index={index}
               onClick={() => {
                  if (project.href) {
                    window.open(project.href, "_blank", "noopener,noreferrer");
                    return;
                  }
                  onProjectClick(project.id);
               }}
            />
         ))}
      </div>
      
      {/* Marquee Footer - Simplified for performance */}
      <div className="absolute bottom-0 left-0 w-full bg-black text-[#D9FF00] py-3 overflow-hidden whitespace-nowrap border-t-4 border-white">
          <div className="animate-marquee inline-block text-2xl font-black italic tracking-widest">
             AVAILABLE FOR FREELANCE WORK • LET'S BUILD SOMETHING COOL • AVAILABLE FOR FREELANCE WORK • LET'S BUILD SOMETHING COOL • AVAILABLE FOR FREELANCE WORK • LET'S BUILD SOMETHING COOL • 
          </div>
      </div>

      <style>{`
         .text-stroke-black {
             -webkit-text-stroke: 2px black;
             color: transparent;
         }
         @keyframes marquee {
             0% { transform: translateX(0); }
             100% { transform: translateX(-50%); }
         }
         .animate-marquee {
             animation: marquee 20s linear infinite;
         }
      `}</style>
    </section>
  );
}

function ProjectCard({ title, category, image, rotation, index, onClick, year, tag, subtitle, line1, line2 }: any) {
   return (
      <motion.div 
         initial={{ opacity: 0, y: 50, rotate: rotation }}
         whileInView={{ opacity: 1, y: 0, rotate: rotation }}
         whileHover={{ scale: 1.02, rotate: 0, zIndex: 20 }}
         viewport={{ once: true, margin: "-10%" }}
         transition={{ duration: 0.5, ease: "easeOut" }}
         onClick={onClick}
         className={`relative group cursor-pointer ${index % 2 !== 0 ? 'md:mt-24' : ''} will-change-transform`} 
      >
         {/* Tape Element */}
         <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/60 shadow-sm z-20 rotate-1" />

         {/* Card Container */}
         <div className="bg-white p-3 md:p-4 pb-12 shadow-[0_20px_50px_rgba(0,0,0,0.15)] group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.3)] transition-all duration-300">
            
            {/* Image Wrapper */}
            <div className="relative aspect-[4/3] bg-black overflow-hidden mb-4 border border-black/5">
               {/* Pre-load image placeholder */}
               <div className="w-full h-full bg-gray-200 absolute inset-0 animate-pulse" /> 

               {image ? (
                 <ImageWithFallback 
                    src={image} 
                    alt={title}
                    className="w-full h-full object-cover relative z-10 transition-all duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0 will-change-transform"
                 />
               ) : (
                 <div className="relative z-10 flex h-full w-full flex-col justify-between bg-[radial-gradient(circle_at_top,rgba(217,255,0,0.18),transparent_45%),linear-gradient(135deg,#1a1a1a,#090909)] p-6 md:p-8 text-white">
                    <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-[#D9FF00]">
                       <span>{tag || "Case Study"}</span>
                       <span>{year || "2026"}</span>
                    </div>
                    <div>
                       <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.35em] text-gray-400">{subtitle || "Featured Project"}</p>
                       <div className="text-4xl font-black uppercase tracking-tighter leading-none md:text-5xl">{line1 || title}</div>
                       <div className="font-editorial-italic text-4xl leading-none text-[#D9FF00] md:text-5xl">{line2 || ""}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                       <div className="rounded-lg border border-white/10 bg-black/20 p-3">
                          <div className="mb-2 h-2 w-12 rounded-full bg-[#D9FF00]/60" />
                          <div className="space-y-1">
                             <div className="h-2 w-full rounded-full bg-white/10" />
                             <div className="h-2 w-4/5 rounded-full bg-white/10" />
                          </div>
                       </div>
                       <div className="rounded-lg border border-white/10 bg-black/20 p-3">
                          <div className="mb-2 h-2 w-10 rounded-full bg-white/20" />
                          <div className="grid grid-cols-3 gap-1">
                             <div className="aspect-square rounded bg-[#D9FF00]/40" />
                             <div className="aspect-square rounded bg-white/10" />
                             <div className="aspect-square rounded bg-white/10" />
                          </div>
                       </div>
                    </div>
                 </div>
               )}
               
               {/* Hover Overlay with Icon */}
               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center z-20">
                  <div className="w-16 h-16 bg-[#D9FF00] rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-300 shadow-xl">
                     <ArrowUpRight size={32} className="text-black" />
                  </div>
               </div>
            </div>

            {/* Typography */}
            <div className="flex flex-col items-start px-2">
               <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none mb-1 group-hover:text-[#D9FF00] group-hover:bg-black group-hover:px-2 -ml-1 transition-all duration-200">
                  {title}
               </h3>
               <span className="font-mono text-xs font-bold text-gray-400 uppercase tracking-widest border-t border-gray-200 pt-2 w-full mt-2">
                  {category} • {year || "2026"}
               </span>
            </div>

            {/* Sticker Graphic */}
            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-black rounded-full flex items-center justify-center text-white font-bold text-[10px] uppercase rotate-12 group-hover:rotate-180 transition-transform duration-500 border-2 border-white shadow-lg">
               <div className="text-center leading-tight">
                  View<br/>Project
               </div>
            </div>
         </div>
      </motion.div>
   );
}
