function About() {
 return (
 <section id="about" className="border-y border-[#cce8f2] bg-white/60 px-5 py-20 dark:border-[#29445a] dark:bg-[#112536]">
  <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
   <div>
    <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#267ca8]">A little context</p>
    <h2 className="mt-3 font-serif text-4xl font-bold text-[#12304a] dark:text-[#e5f5ff]">About me</h2>
   </div>
   <div className="max-w-3xl text-lg leading-8 text-[#41657d] dark:text-[#a8c8d9]">
    <p>I am Nndwamato Fhulufhedzani, a developer intern learning to make full-stack products that feel simple and useful to everyday's users operations.</p>
    <p className="mt-5">With a background in data and business analysis and a Bachelor's degree in Information Technology, I enjoy providing solutions to everyday challenges.</p>
   </div>
  </div>
 </section>
 )
}
export default About
