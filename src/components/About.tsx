import { motion } from "motion/react";
import { Star } from "lucide-react";

// External Devicon URLs
const icons = {
  figma: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  sketch: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sketch/sketch-original.svg",
  xd: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-original.svg",
  ps: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg",
  ai: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-original.svg",
  id: "https://cdn.simpleicons.org/adobeindesign/FF3366",
  canva: "https://cdn.simpleicons.org/canva/00C4CC",
  html: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  css: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  js: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  bs: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
  python: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
};

export function About() {
  return (
    <section className="py-24 px-4 bg-[#050505] text-white overflow-hidden relative">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D9FF00]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* HEADER: ABOUT ME */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row gap-12 items-start">
           <div className="flex-1">
              <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="inline-block mb-4"
              >
                 <div className="flex items-center gap-2 text-[#D9FF00] font-mono text-sm font-bold uppercase tracking-widest mb-2">
                    <span className="w-2 h-2 bg-[#D9FF00] rounded-full animate-pulse" />
                    Who I Am
                 </div>
              </motion.div>
              
              <motion.h2 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.1 }}
                 className="text-4xl md:text-5xl font-black leading-tight mb-8"
              >
                 Passionate designer creating <span className="text-transparent text-stroke-yellow">meaningful</span> digital experiences.
              </motion.h2>

              <motion.div 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
                 className="text-gray-400 leading-relaxed font-mono text-sm space-y-4 max-w-2xl"
              >
                 <p>
                    I'm <strong className="text-white">Aevlin Prince</strong>, a passionate designer from Kottayam, Kerala, currently pursuing my studies at Amal Jyothi College of Engineering. I specialize in creating meaningful digital experiences that blend aesthetics with functionality.
                 </p>
                 <p>
                    With experience in UI/UX design, web development, and brand identity, I bring a holistic approach to every project. My journey in design has been shaped by various leadership roles in IEEE, ACM, NSS, and LEO Club International.
                 </p>
                 <p>
                    I believe in design that tells stories, solves problems, and creates lasting impact. Whether it's crafting intuitive interfaces, building responsive websites, or developing brand identities, I approach each project with attention to detail and user-centered thinking.
                 </p>
              </motion.div>
           </div>
        </div>


        {/* MAIN CONTENT GRID: Education (Sticky) + Experience (Receipt) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
           
           {/* LEFT COLUMN: Education & Skills */}
           <div className="md:col-span-5 flex flex-col gap-8">
              
              {/* EDUCATION STICKY NOTE */}
              <motion.div 
                 initial={{ rotate: -2, scale: 0.9, opacity: 0 }}
                 whileInView={{ rotate: -2, scale: 1, opacity: 1 }}
                 viewport={{ once: true }}
                 whileHover={{ rotate: 0, scale: 1.02 }}
                 className="bg-[#D9FF00] text-black p-8 shadow-[0_10px_40px_rgba(217,255,0,0.2)] relative"
                 style={{ 
                    clipPath: "polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0 100%)" // Folded corner effect
                 }}
              >
                 <h3 className="text-4xl font-black mb-8 tracking-tighter">education</h3>
                 
                 <div className="space-y-6 font-mono text-sm">
                    <div className="border-b border-black/10 pb-4">
                       <div className="flex justify-between font-bold mb-1">
                          <span>Amal Jyothi College of Engineering</span>
                          <span>2027</span>
                       </div>
                       <p className="text-black/70 text-xs">Computer Science & Engineering</p>
                    </div>

                    <div className="border-b border-black/10 pb-4">
                       <div className="flex justify-between font-bold mb-1">
                          <span>Girideepam Bethany</span>
                          <span>2022-23</span>
                       </div>
                       <p className="text-black/70 text-xs">Higher Secondary School</p>
                    </div>
                 </div>

                 {/* Tape graphic at top */}
                 <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/30 backdrop-blur-sm rotate-1 shadow-sm" />
              </motion.div>


              {/* SKILLS SECTION */}
              <div className="mt-8">
                 <h3 className="text-2xl font-black text-white uppercase mb-6 flex items-center gap-2">
                    <Star className="text-[#D9FF00] fill-[#D9FF00]" /> My Tools
                 </h3>
                 
                 <div className="grid grid-cols-4 gap-2">
                    {/* Compact boxes with visible real actual icons */}
                    <SkillIcon image={icons.ps} name="Ps" />
                    <SkillIcon image={icons.figma} name="Figma" />
                    <SkillIcon image={icons.ai} name="Ai" />
                    <SkillIcon image={icons.sketch} name="Sketch" />
                    <SkillIcon image={icons.xd} name="Adobe XD" />
                    <SkillIcon image={icons.id} name="Id" />
                    <SkillIcon image={icons.canva} name="Canva" />
                    <SkillIcon image={icons.html} name="HTML" />
                    <SkillIcon image={icons.css} name="CSS" />
                    <SkillIcon image={icons.js} name="JS" />
                    <SkillIcon image={icons.bs} name="Bs" />
                    <SkillIcon image={icons.python} name="Python" />
                 </div>
              </div>

           </div>


           {/* RIGHT COLUMN: Experience Receipt */}
           <div className="md:col-span-7">
              <motion.div 
                 initial={{ y: 50, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 viewport={{ once: true }}
                 className="bg-white text-black p-6 md:p-10 relative shadow-2xl mx-auto max-w-lg rotate-1 origin-top-left"
              >
                 {/* Receipt Header */}
                 <div className="text-center border-b-2 border-dashed border-black/20 pb-6 mb-8">
                    <h3 className="text-5xl font-black tracking-tighter mb-2">experience</h3>
                    <p className="font-mono text-xs text-gray-500 uppercase tracking-widest">Official Record • Aevlin Prince</p>
                 </div>

                 {/* List */}
                 <div className="space-y-8 relative">
                    {/* Vertical Dotted Line */}
                    <div className="absolute left-[7px] top-2 bottom-2 w-[2px] border-l-2 border-dotted border-black/20 hidden md:block" />
                    <ExperienceItem 
                       role="Graphic Designer" 
                       org="Dreamztree Training Academy and Consultancy" 
                       date="June 2026 - Present" 
                       duration="Current"
                       isCurrent
                    />
                    <ExperienceItem 
                       role="UI/UX Developer" 
                       org="NOVIQ LABS" 
                       date="March 2026 - Present" 
                       duration="Current"
                       isCurrent
                    />
                    <ExperienceItem 
                       role="Media Lead" 
                       org="National Service Scheme" 
                       date="July 2025 - Present" 
                       duration="8 months"
                       isCurrent
                    />
                    <ExperienceItem 
                       role="Design Co-Lead" 
                       org="IEEE SB AJCE" 
                       date="March 2025 - March 2026" 
                       duration="1 year"
                    />
                    <ExperienceItem 
                       role="Web Design Intern" 
                       org="Tisser Technologies LLP" 
                       date="April 2025" 
                       duration="1 month"
                       desc="Built responsive web pages using HTML, CSS, Bootstrap, & JS."
                    />
                    <ExperienceItem 
                       role="Graphic Designer" 
                       org="TEDx AJCE" 
                       date="May 2026" 
                       duration="May 2026"
                    />
                    <ExperienceItem 
                       role="Sub Committee Lead" 
                       org="NASA Space Apps" 
                       date="2025 - 2026" 
                       duration="Completed"
                    />
                    <ExperienceItem 
                       role="Design Lead-W" 
                       org="ACM AJCE STUDENT CHAPTER" 
                       date="Apr 2024 - Mar 2025" 
                       duration="1 year"
                    />
                     <ExperienceItem 
                       role="Arts Captain" 
                       org="Girideepam Bethany HSS" 
                       date="2022 - 2023" 
                       duration="1 year"
                    />
                    <ExperienceItem 
                       role="Club President" 
                       org="LEO Club International" 
                       date="2020 - 2023" 
                       duration="3 years"
                       desc="Leo Club of Kottayam Buds (District 318 B)"
                    />
                    <ExperienceItem 
                       role="MD Vice President" 
                       org="LEO Club International" 
                       date="2020 - 2022" 
                       duration="2 years"
                       desc="Secured 'Multiple District Vice President' position throughout Kerala."
                    />
                 </div>

                 {/* Receipt Footer / Barcode */}
                 <div className="mt-12 pt-8 border-t-2 border-dashed border-black/20 flex flex-col items-center gap-4">
                    <div className="w-full h-12 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/UPC-A-036000291452.svg/1200px-UPC-A-036000291452.svg.png')] bg-cover opacity-80 mix-blend-multiply" />
                    <p className="font-mono text-[10px] text-center text-gray-400">
                       THANK YOU FOR VISITING • AUTHENTICATED
                    </p>
                 </div>

                 {/* Paper Texture Overlay */}
                 <div className="absolute inset-0 bg-[#f0f0f0] opacity-30 mix-blend-multiply pointer-events-none" />
                 
                 {/* Top Jagged Edge (CSS Trick) */}
                 <div className="absolute -top-2 left-0 w-full h-4 bg-transparent" 
                      style={{ 
                         background: "linear-gradient(135deg, transparent 33%, #fff 33%, #fff 66%, transparent 66%)", 
                         backgroundSize: "20px 40px" 
                      }} 
                 />
                 {/* Bottom Jagged Edge */}
                 <div className="absolute -bottom-2 left-0 w-full h-4 bg-transparent rotate-180" 
                      style={{ 
                         background: "linear-gradient(135deg, transparent 33%, #fff 33%, #fff 66%, transparent 66%)", 
                         backgroundSize: "20px 40px" 
                      }} 
                 />
              </motion.div>
           </div>

        </div>

      </div>

      <style>{`
         .text-stroke-yellow {
             -webkit-text-stroke: 1px #D9FF00;
         }
      `}</style>
    </section>
  );
}

function ExperienceItem({ role, org, date, duration, desc, isCurrent }: any) {
   return (
      <div className="relative pl-0 md:pl-8 group">
         {/* Timeline Dot */}
         <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-black bg-white group-hover:bg-[#D9FF00] transition-colors hidden md:block z-10" />
         
         <div className="flex justify-between items-baseline mb-1">
            <h4 className="font-bold text-lg leading-none">{role}</h4>
            <span className="font-mono text-[10px] text-gray-500 whitespace-nowrap">{duration}</span>
         </div>
         
         <p className="font-black text-xs uppercase tracking-wide mb-1 text-black/80">{org}</p>
         
         <div className="flex items-center gap-2 mb-2">
            <span className="bg-black text-white text-[10px] px-2 py-0.5 rounded-sm font-mono">
               {date}
            </span>
            {isCurrent && (
               <span className="bg-[#D9FF00] text-black text-[10px] px-2 py-0.5 rounded-sm font-bold animate-pulse">
                  NOW
               </span>
            )}
         </div>

         {desc && (
            <p className="text-xs text-gray-500 font-mono leading-relaxed mt-2 border-l-2 border-gray-200 pl-2">
               {desc}
            </p>
         )}
      </div>
   );
}

function SkillIcon({ image, name, scale = 1, svgIcon: SvgIcon }: { image?: string, name: string, scale?: number, svgIcon?: React.ElementType }) {
   return (
      <div 
         className="flex flex-col items-center justify-center gap-2 p-3 bg-[#111111] rounded-lg border border-white/10 hover:border-[#D9FF00] hover:bg-[#1A1A1A] transition-all group cursor-default min-h-[96px]"
      >
         <div className="transition-transform duration-300 group-hover:scale-110 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-md bg-black/20 p-2">
            {image ? (
               <img 
                  src={image} 
                  alt={name} 
                  className="w-8 h-8 md:w-10 md:h-10 object-contain" 
                  style={{ transform: `scale(${scale})` }}
               />
            ) : SvgIcon ? (
               <SvgIcon />
            ) : null}
         </div>
         <span className="text-[9px] md:text-[10px] font-bold text-gray-500 uppercase tracking-wider group-hover:text-white text-center whitespace-nowrap">
            {name}
         </span>
      </div>
   );
}
