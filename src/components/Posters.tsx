import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Sparkles, Mouse, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Import Poster Assets
import agmPoster from "../../agm.png";
import arcadePoster from "../../arcade.png";
import bestActressPoster from "../../best actress.png";
import bugsToBucksPoster from "../../BUGS TO BUCKS.png";
import dykkkPoster from "../../dykkk.png";
import firewallGardenPoster from "../../Firewall Garden.png";
import groupDancePoster from "../../group dance.png";
import jajaPoster from "../../jaja.png";
import mehendiPoster from "../../mehendi.png";
import mimePoster from "../../mime.png";
import nilavilakuPoster from "../../nilavilaku.png";
import pothichoruPoster from "../../pothichoru.png";
import sameSamePoster from "../../same same but diffelent.png";
import scrapClassicPoster from "../../scrap.png";
import scrapPoster from "../../scrap2.png";
import voiceOfAzurePoster from "../../voice of azure.png";

const posters = [
   { id: "01", src: voiceOfAzurePoster, title: "Voice of Azure", tag: "Show Poster" },
   { id: "02", src: bestActressPoster, title: "Best Actress", tag: "Award Poster" },
   { id: "03", src: firewallGardenPoster, title: "Firewall Garden", tag: "Editorial Poster" },
   { id: "04", src: bugsToBucksPoster, title: "Bugs to Bucks", tag: "Promo Poster" },
   { id: "05", src: sameSamePoster, title: "Same Same but Different", tag: "Campaign Poster" },
   { id: "06", src: arcadePoster, title: "Arcade", tag: "Event Poster" },
   { id: "07", src: scrapPoster, title: "Scrap 2", tag: "Experimental Poster" },
   { id: "08", src: groupDancePoster, title: "Group Dance", tag: "Fest Poster" },
   { id: "09", src: mehendiPoster, title: "Mehendi", tag: "Cultural Poster" },
   { id: "10", src: mimePoster, title: "Mime", tag: "Event Poster" },
   { id: "11", src: nilavilakuPoster, title: "Nilavilaku", tag: "Cultural Poster" },
   { id: "12", src: pothichoruPoster, title: "Pothichoru", tag: "Campaign Poster" },
   { id: "13", src: agmPoster, title: "AGM", tag: "Event Poster" },
   { id: "14", src: dykkkPoster, title: "DYKKK", tag: "Experimental Poster" },
   { id: "15", src: jajaPoster, title: "Jaja", tag: "Poster Design" },
   { id: "16", src: scrapClassicPoster, title: "Scrap", tag: "Poster Design" },
];

export function Posters() {
  const targetRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Background Parallax
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section ref={targetRef} className="py-24 bg-[#050505] text-white overflow-hidden relative min-h-screen flex flex-col">
      
      {/* BACKGROUND CHAOS */}
      <div className="absolute inset-0 flex flex-col justify-center opacity-10 pointer-events-none select-none overflow-hidden mix-blend-color-dodge">
        <motion.div style={{ x }} className="whitespace-nowrap flex gap-8">
           {[...Array(4)].map((_, i) => (
             <h1 key={i} className="text-[25vw] font-black leading-none text-transparent stroke-text uppercase italic tracking-tighter">
               RAW DATA 
             </h1>
           ))}
        </motion.div>
      </div>

      {/* MAIN CONTENT WRAPPER */}
      <div className="relative z-10 flex flex-col h-full justify-center">
         
         {/* HEADER */}
         <div className="container mx-auto px-6 mb-12 md:mb-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
               <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D9FF00] text-black font-bold font-mono text-xs uppercase -rotate-2 mb-4">
                     <Sparkles size={12} className="fill-black" />
                     Archive_2024
                  </div>
                  <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85]">
                     Poster <br/>
                     <span className="text-[#D9FF00] selection:bg-white selection:text-black">Archives</span>
                  </h2>
               </div>
               
               <div className="flex items-center gap-3 text-[#666] font-mono text-xs uppercase tracking-widest border-l-2 border-[#333] pl-4">
                  <Mouse size={16} className="animate-pulse text-[#D9FF00]" />
                  <span>Scroll to browse</span>
               </div>
            </div>
         </div>

         {/* HORIZONTAL SCROLL WRAPPER */}
         <div 
            ref={containerRef} 
            className="poster-scroll w-full overflow-x-auto overflow-y-visible pl-[5vw] pr-[5vw] pb-6"
         >
            <div className="flex w-max gap-4 pr-[10vw] md:gap-8">
               {posters.map((poster, index) => (
                  <GenZCard key={index} poster={poster} index={index} />
               ))}
            </div>
         </div>

      </div>

      <style>{`
        .stroke-text {
          -webkit-text-stroke: 2px #333;
        }
        .poster-scroll {
          scrollbar-width: thin;
          scrollbar-color: rgba(217, 255, 0, 0.45) rgba(255, 255, 255, 0.08);
        }
        .poster-scroll::-webkit-scrollbar {
          height: 10px;
        }
        .poster-scroll::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.08);
          border-radius: 999px;
        }
        .poster-scroll::-webkit-scrollbar-thumb {
          background: rgba(217, 255, 0, 0.45);
          border-radius: 999px;
        }
      `}</style>
    </section>
  );
}

function GenZCard({ poster, index }: { poster: any, index: number }) {
   // Random rotation
   const rotation = (index % 2 === 0 ? 3 : -3) * ((index % 3) + 0.5);
   
   return (
      <motion.div 
         className="relative group min-w-[280px] md:min-w-[340px] aspect-[3/4] flex-shrink-0 select-none"
         initial={{ rotate: rotation }}
         whileHover={{ 
            rotate: 0, 
            scale: 1.05, 
            zIndex: 50,
            transition: { type: "spring", stiffness: 400, damping: 25 }
         }}
      >
         {/* The Card Structure */}
         <div className="w-full h-full bg-[#0a0a0a] border border-[#333] group-hover:border-[#D9FF00] transition-colors duration-200 relative">
            
            {/* Top Tape Strip */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-white/10 backdrop-blur-sm transform rotate-1 z-20" />

            {/* Image Area */}
            <div className="absolute inset-2 bg-[#111] overflow-hidden">
               <ImageWithFallback 
                  src={poster.src} 
                  alt={poster.title} 
                  className="w-full h-full object-cover group-hover:contrast-110 transition-all duration-500 pointer-events-none"
               />
               
               {/* Scanlines Overlay */}
               <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[size:100%_4px] opacity-20 pointer-events-none" />
            </div>

            {/* Floating Info Tag */}
            <div className="absolute bottom-4 left-0 w-full px-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-30">
               <div className="bg-[#D9FF00] p-3 text-black shadow-[4px_4px_0px_#000]">
                  <h3 className="font-black text-xl uppercase leading-none tracking-tight">
                     {poster.title}
                  </h3>
                  <div className="flex justify-between items-center mt-1 border-t border-black/20 pt-1">
                     <span className="font-mono text-[10px] font-bold">{poster.tag}</span>
                     <ArrowRight size={12} />
                  </div>
               </div>
            </div>

            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 p-2 opacity-50 group-hover:opacity-100">
               <div className="w-2 h-2 bg-[#D9FF00]" />
            </div>

         </div>
      </motion.div>
   );
}
