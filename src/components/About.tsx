import { motion } from "motion/react";
import { Star, Award } from "lucide-react";

// External Devicon URLs
const icons = {
  figma: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  sketch: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sketch/sketch-original.svg",
  xd: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-original.svg",
  ps: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg",
  ai: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-original.svg",
  id: "https://upload.wikimedia.org/wikipedia/commons/4/48/Adobe_InDesign_CC_icon.svg",
  canva: "/canva-icon.png",
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
                    With experience in UI/UX design, web development, and brand identity, I bring a holistic approach to every project. My journey in design has been shaped by various leadership roles in IEEE, ACM, and NSS.
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
                       <p className="text-black/70 text-xs">B.Tech in Computer Science & Engineering</p>
                    </div>

                    <div className="border-b border-black/10 pb-4">
                       <div className="flex justify-between font-bold mb-1">
                          <span>Girideepam Bethany</span>
                          <span>2023</span>
                       </div>
                       <p className="text-black/70 text-xs">Class XII — Computer Science — Kottayam</p>
                    </div>
                 </div>

                 {/* Tape graphic at top */}
                 <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/30 backdrop-blur-sm rotate-1 shadow-sm" />
              </motion.div>


              {/* SKILLS SECTION */}
              <div className="mt-4">
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

              {/* CERTIFICATIONS SECTION */}
              <div className="bg-[#111111] p-6 rounded-xl border border-white/10">
                 <h3 className="text-xl font-black text-white uppercase mb-4 flex items-center gap-2">
                    <Award className="text-[#D9FF00]" /> Certifications
                 </h3>
                 <ul className="space-y-2 font-mono text-xs text-gray-300">
                    <li className="flex items-start gap-2"><span className="text-[#D9FF00]">•</span> Google UX Design Professional Certificate — Google</li>
                    <li className="flex items-start gap-2"><span className="text-[#D9FF00]">•</span> Complete Front-End Development Journey — Infosys Springboard</li>
                    <li className="flex items-start gap-2"><span className="text-[#D9FF00]">•</span> Creating Responsive Web Pages using Bootstrap 4 — Infosys Springboard</li>
                    <li className="flex items-start gap-2"><span className="text-[#D9FF00]">•</span> Introduction to UI/UX Design — Infosys Springboard</li>
                    <li className="flex items-start gap-2"><span className="text-[#D9FF00]">•</span> Programming for Everybody (Python) — University of Michigan</li>
                    <li className="flex items-start gap-2"><span className="text-[#D9FF00]">•</span> AI Fundamentals & Introduction to AI — IBM</li>
                    <li className="flex items-start gap-2"><span className="text-[#D9FF00]">•</span> Foundations of Cybersecurity — Google</li>
                    <li className="flex items-start gap-2"><span className="text-[#D9FF00]">•</span> Cybersecurity Analyst Job Simulation — Tata Group via Forage</li>
                 </ul>
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
                           org="Dreamztree Training Academy" 
                           date="Jun 2026 - Aug 2026" 
                           startDate="June 2026"
                           endDate="August 2026"
                        />
                        <ExperienceItem 
                           role="Graphic Designer (Freelance)" 
                           org="Hexa Apiarium Pvt. Ltd" 
                           date="May 2026 - Aug 2026" 
                           startDate="May 2026"
                           endDate="August 2026"
                        />
                        <ExperienceItem 
                           role="UI/UX Developer Intern" 
                           org="NOVIQ LABS" 
                           date="Jan 2026 - Jul 2026" 
                           startDate="January 2026"
                           endDate="July 2026"
                        />
                        <ExperienceItem 
                           role="Graphic Designer" 
                           org="TEDx AJCE" 
                           date="May 2026" 
                           startDate="May 2026"
                           endDate="May 2026"
                        />
                        <ExperienceItem 
                           role="Media Lead & Volunteer" 
                           org="NSS, Amal Jyothi College" 
                           date="Jul 2025 - Apr 2026" 
                           startDate="July 2025"
                           endDate="April 2026"
                        />
                        <ExperienceItem 
                           role="Design Co-Lead" 
                           org="IEEE SB AJCE" 
                           date="Mar 2025 - Mar 2026" 
                           startDate="March 2025"
                           endDate="March 2026"
                        />
                        <ExperienceItem 
                           role="Committee Lead" 
                           org="NASA Space Apps Challenge" 
                           date="Oct 2025" 
                           startDate="October 2025"
                           endDate="October 2025"
                        />
                        <ExperienceItem 
                           role="Web Design Intern" 
                           org="Tisser Technologies" 
                           date="Apr 2025" 
                           startDate="April 2025"
                           endDate="April 2025"
                        />
                        <ExperienceItem 
                           role="Design Lead (Women's Chapter)" 
                           org="ACM AJCE Student Chapter" 
                           date="Apr 2024 - Mar 2025" 
                           startDate="April 2024"
                           endDate="March 2025"
                        />
                     </div>

                     {/* Receipt Footer / Barcode */}
                     <div className="mt-12 pt-8 border-t-2 border-dashed border-black/20 flex flex-col items-center gap-4">
                        <div className="w-full h-12 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/UPC-A-036000291452.svg/1200px-UPC-A-036000291452.svg.png')] bg-cover opacity-80 mix-blend-multiply" />
                        <p className="font-mono text-[10px] text-center text-gray-400">
                           THANK YOU FOR VISITING • AUTHENTICATED RECORD
                        </p>
                     </div>

                     {/* Paper Texture Overlay */}
                     <div className="absolute inset-0 bg-[#f0f0f0] opacity-30 mix-blend-multiply pointer-events-none" />
                     
                     {/* Top Jagged Edge */}
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

function parseMonthYear(value: string) {
   const [monthRaw, yearRaw] = value.trim().split(/\s+/);
   const months: Record<string, number> = {
      jan: 0, january: 0,
      feb: 1, february: 1,
      mar: 2, march: 2,
      apr: 3, april: 3,
      may: 4,
      jun: 5, june: 5,
      jul: 6, july: 6,
      aug: 7, august: 7,
      sep: 8, sept: 8, september: 8,
      oct: 9, october: 9,
      nov: 10, november: 10,
      dec: 11, december: 11,
   };

   const month = months[monthRaw.toLowerCase()];
   const year = Number(yearRaw);
   if (month === undefined || Number.isNaN(year)) return null;
   return { month, year };
}

function formatDuration(startDate?: string, endDate?: string) {
   if (!startDate) return null;

   const start = parseMonthYear(startDate);
   if (!start) return null;

   const end = endDate ? parseMonthYear(endDate) : { month: new Date().getMonth(), year: new Date().getFullYear() };
   if (!end) return null;

   let totalMonths = (end.year - start.year) * 12 + (end.month - start.month);
   if (totalMonths <= 0) totalMonths = 1;

   if (totalMonths < 12) {
      return `${totalMonths} month${totalMonths === 1 ? "" : "s"}`;
   }

   const years = Math.floor(totalMonths / 12);
   const months = totalMonths % 12;

   if (months === 0) {
      return `${years} year${years === 1 ? "" : "s"}`;
   }

   return `${years} year${years === 1 ? "" : "s"} ${months} month${months === 1 ? "" : "s"}`;
}

function ExperienceItem({ role, org, date, duration, startDate, endDate, isCurrent }: any) {
   const computedDuration = formatDuration(startDate, endDate);
   const displayDuration = computedDuration ?? duration;

   return (
      <div className="relative pl-0 md:pl-8 group">
         {/* Timeline Dot */}
         <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-black bg-white group-hover:bg-[#D9FF00] transition-colors hidden md:block z-10" />
         
         <div className="flex justify-between items-baseline mb-1">
            <h4 className="font-bold text-lg leading-none">{role}</h4>
            <span className="font-mono text-[10px] text-gray-500 whitespace-nowrap">{displayDuration}</span>
         </div>
         
         <p className="font-black text-xs uppercase tracking-wide mb-1 text-black/80">{org}</p>
         
         <div className="flex items-center gap-2">
            <span className="bg-black text-white text-[10px] px-2 py-0.5 rounded-sm font-mono">
               {date}
            </span>
            {isCurrent && (
               <span className="bg-[#D9FF00] text-black text-[10px] px-2 py-0.5 rounded-sm font-bold animate-pulse">
                  NOW
               </span>
            )}
         </div>
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
