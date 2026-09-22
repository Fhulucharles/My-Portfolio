import ProjectCard from './ProjectCard'

const projects = [{
 title: 'A thoughtful digital workspace',
 description: 'A responsive interface concept focused on making everyday workflows calmer, clearer, and easier to navigate.',
 technologies: ['React', 'TypeScript', 'Tailwind'],
 githubUrl: 'https://github.com/Fhulucharles',
 liveUrl: 'https://github.com/Fhulucharles/My-Portfolio',
}]

function Projects() {
 return (
 <section id="projects" className="bg-[#dff5ff] px-5 py-20 dark:bg-[#102c41] lg:px-8">
  <div className="mx-auto max-w-6xl">
   <div className="max-w-2xl">
    <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#267ca8]">Selected work</p>
    <h2 className="mt-3 font-serif text-4xl font-bold text-[#12304a] dark:text-[#e5f5ff]">Projects with a point of view</h2>
   </div>
   <div className="mt-10">
    {projects.map((project) => <ProjectCard key={project.title} {...project} />)}
   </div>
  </div>
 </section>
 )
}
export default Projects
