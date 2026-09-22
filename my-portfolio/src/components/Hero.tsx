function Hero() {
 return (
 <section id="home" className="relative overflow-hidden px-5 pb-20 pt-16 sm:pb-28 sm:pt-24 lg:px-8">
  <div className="absolute -right-24 -top-28 size-80 rounded-full bg-[#c8efff] opacity-70 blur-3xl dark:bg-[#174561]" />
  <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
   <div>
    <p className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.24em] text-[#267ca8]">
     <span className="h-px w-10 bg-[#267ca8]" /> Hee Ndaa!, I'm
    </p>
    <h1 className="max-w-3xl font-serif text-5xl font-bold leading-[1.03] tracking-tight text-[#12304a] sm:text-7xl dark:text-[#e5f5ff]">
     Fhulufhedzani <span className="text-[#267ca8]">Nndwamato.</span>
    </h1>
    <p className="mt-7 max-w-2xl text-lg leading-8 text-[#41657d] dark:text-[#a8c8d9]">
     Full Stack Developer Intern at ITThynk, passionate about learning more and improving my skills in development.
    </p>
    <div className="mt-9 flex flex-wrap gap-4">
     <a href="#projects" className="rounded-full bg-[#267ca8] px-6 py-3.5 font-bold text-white shadow-lg shadow-[#267ca8]/20 transition hover:-translate-y-1 hover:bg-[#1d668d]">View my projects</a>
    <a href="/Fhulu_CV.pdf" download className="rounded-full border border-[#8fc6dc] bg-white/60 px-6 py-3.5 font-bold text-[#267ca8] transition hover:-translate-y-1 hover:bg-white dark:border-[#41657d] dark:bg-[#132b3e] dark:text-[#9edcf3]">Download CV</a>
    </div>
    <div className="mt-10 flex items-center gap-5 text-sm font-semibold text-[#41657d] dark:text-[#a8c8d9]">
     <span>HTML</span><span className="size-1 rounded-full bg-[#79bdd5]" /><span>CSS</span><span className="size-1 rounded-full bg-[#79bdd5]" /><span>SQL</span>
    </div>
   </div>
   <div className="relative mx-auto w-full max-w-sm">
    <div className="absolute inset-5 rounded-[2.5rem] bg-[#bcecff] rotate-6 dark:bg-[#174561]" />
    <div className="relative overflow-hidden rounded-[2.5rem] border-8 border-white bg-[#d7f4ff] shadow-2xl shadow-[#267ca8]/20 dark:border-[#1c3447]">
     <img src="https://media.licdn.com/dms/image/v2/D4E03AQEscvEihMJ9DA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1688751073801?e=1791417600&v=beta&t=-6-iwajxqUnqDQwd1ST88Zhcy56Iyf3pdzOyBCqEtZk" alt="Portrait of Fhulufhedzani Nndwamato" className="aspect-[4/5] w-full object-cover" />
    </div>
    <div className="absolute -bottom-5 -left-5 rounded-2xl border border-[#b9ddec] bg-white px-5 py-4 shadow-xl dark:border-[#41657d] dark:bg-[#183047]">
     <p className="text-xs font-bold uppercase tracking-widest text-[#6b91a6]">Currently</p>
     <p className="mt-1 font-bold text-[#12304a] dark:text-[#e5f5ff]">Learning & building</p>
    </div>
   </div>
  </div>
 </section>
 )
}
export default Hero
