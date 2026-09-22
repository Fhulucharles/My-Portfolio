function Contact() {
 return (
 <section id="contact" className="px-5 py-24 lg:px-8">
  <div className="mx-auto grid max-w-6xl gap-10 rounded-[2rem] bg-[#12304a] p-8 text-white shadow-2xl shadow-[#267ca8]/20 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-end">
   <div>
    <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#9edcf3]">Let&apos;s connect</p>
    <h2 className="mt-4 max-w-xl font-serif text-4xl font-bold leading-tight sm:text-5xl">You wanna have a chat?</h2>
    <p className="mt-5 max-w-xl leading-7 text-[#b9ddec]">I&apos;m always open to learning, collaborating, and hearing about thoughtful ideas. Reach out and let&apos;s start a conversation.</p>
   </div>
   <div className="flex flex-wrap gap-3 lg:max-w-xs lg:justify-end">
    <a href="mailto:fhulucharles14@gmail.com" className="rounded-full bg-[#9edcf3] px-5 py-3 font-bold text-[#12304a] transition hover:-translate-y-1 hover:bg-white">Email me</a>
    <a href="/Fhulu_CV.pdf" download className="rounded-full border border-[#6faec7] px-5 py-3 font-bold text-white transition hover:-translate-y-1 hover:bg-[#1d4760]">Download CV</a>
    <a href="https://github.com/Fhulucharles" target="_blank" rel="noreferrer" className="rounded-full border border-[#6faec7] px-5 py-3 font-bold text-white transition hover:-translate-y-1 hover:bg-[#1d4760]">GitHub ↗</a>
   </div>
  </div>
 </section>
 )
}
export default Contact
