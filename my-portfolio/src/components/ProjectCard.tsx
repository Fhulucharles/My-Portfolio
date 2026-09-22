type ProjectCardProps = {
 title: string
 description: string
 technologies: string[]
 githubUrl: string
 liveUrl?: string
}

function ProjectCard({ title, description, technologies, githubUrl, liveUrl }: ProjectCardProps) {
 return (
 <article className="grid overflow-hidden rounded-[2rem] border border-[#b9ddec] bg-white shadow-xl shadow-[#267ca8]/10 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#267ca8]/15 dark:border-[#41657d] dark:bg-[#183047] lg:grid-cols-[1.05fr_0.95fr]">
  <div className="relative min-h-[280px] overflow-hidden bg-[#bcecff] p-6 dark:bg-[#174561]">
   <div className="absolute -right-16 -top-16 size-44 rounded-full bg-white/30" />
   <div className="relative flex h-full flex-col justify-between rounded-2xl border border-white/70 bg-[#eef9ff]/80 p-5 shadow-lg dark:border-[#80b9d0]/30 dark:bg-[#0d1c2b]/70">
    <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-[#41657d] dark:text-[#a8c8d9]"><span>Project preview</span><span>01</span></div>
    <img src="/Project.png" alt="Project screenshot" className="mx-auto my-5 h-36 object-contain transition duration-500 hover:scale-105" />
    <div className="flex gap-2"><span className="h-2 w-16 rounded-full bg-[#267ca8]" /><span className="h-2 w-8 rounded-full bg-[#9edcf3]" /><span className="h-2 w-12 rounded-full bg-[#9edcf3]" /></div>
   </div>
  </div>
  <div className="flex flex-col justify-between p-7 sm:p-9">
   <div>
    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#267ca8]">Projects build</p>
    <h3 className="mt-3 font-serif text-3xl font-bold text-[#12304a] dark:text-[#e5f5ff]">{title}</h3>
    <p className="mt-4 leading-7 text-[#41657d] dark:text-[#a8c8d9]">{description}</p>
    <div className="mt-6 flex flex-wrap gap-2">{technologies.map((technology) => <span key={technology} className="rounded-full bg-[#e5f7ff] px-3 py-1.5 text-xs font-bold text-[#267ca8] dark:bg-[#234a63] dark:text-[#b6e9fa]">{technology}</span>)}</div>
   </div>
    <div className="mt-8 rounded-xl bg-[#f1fbff] p-4 font-mono text-xs leading-6 text-[#267ca8] dark:bg-[#102536] dark:text-[#a8c8d9]">
     <div>SELECT * FROM projects;</div>
    </div>
   <div className="mt-8 flex gap-5 text-sm font-bold"><a className="text-[#267ca8] underline-offset-4 transition hover:underline" href={githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a>{liveUrl && <a className="text-[#267ca8] underline-offset-4 transition hover:underline" href={liveUrl} target="_blank" rel="noreferrer">Live demo ↗</a>}</div>
  </div>
 </article>
 )
}
export default ProjectCard
