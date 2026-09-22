const skills = ['JavaScript', 'TypeScript', 'React', 'HTML', 'CSS', 'Tailwind CSS', 'Git', 'SQL', 'GitHub', 'Technical Support', 'Radio Frequency and Telecommunication']

function Skills() {
 return (
 <section id="skills" className="px-5 py-20 lg:px-8">
  <div className="mx-auto max-w-6xl">
   <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
    <div>
     <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#267ca8]">The skills that I have and developing</p>
     <h2 className="mt-3 font-serif text-4xl font-bold text-[#12304a] dark:text-[#e5f5ff]">Skills that drive my work</h2>
    </div>
    <p className="max-w-xs text-sm leading-6 text-[#6b91a6] dark:text-[#88aabd]">The skillset shaped by practice, curiosity, and problem solving. This is what defines my abilities.</p>
   </div>
   <div className="mt-10 flex flex-wrap gap-3">
    {skills.map((skill) => <span key={skill} className="rounded-full border border-[#b9ddec] bg-white/70 px-4 py-2.5 text-sm font-semibold text-[#41657d] transition hover:-translate-y-1 hover:border-[#267ca8] hover:text-[#267ca8] dark:border-[#41657d] dark:bg-[#132b3e] dark:text-[#a8c8d9]">{skill}</span>)}
   </div>
  </div>
 </section>
 )
}
export default Skills
