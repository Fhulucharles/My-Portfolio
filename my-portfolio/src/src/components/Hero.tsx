function Hero() {
 return (
 <section
 id="home"
 className="mx-auto flex min-h-[70vh] max-w-6xl items-center px-6 py-20"
 >
 <div>
 <p className="mb-3 text-sm font-semibold uppercase tracking-widest">
 Hello, I'm
 </p>
 <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
 Fhulufhedzani Nndwamato
 </h1>
 <p className="mt-6 max-w-2xl text-lg text-gray-600">
 I am a Full Stack Developer Intern at ITThynk, passionate about learning more and improving my skills in web development.<br />
 I have a background in Database Adnistration with Bachelor's degree in Information Technology.
 </p>
 <div className="mt-8 flex gap-4">
 <a
 href="#projects"
 className="rounded-lg bg-black px-5 py-3 text-white"
 >
 View my projects
 </a>
 <a
 href="#contact"
 className="rounded-lg border px-5 py-3"
 >
 Contact me
 </a>
 </div>
 </div>
 </section>
 )
}
export default Hero
