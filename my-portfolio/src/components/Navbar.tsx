import { useState } from 'react'

type NavbarProps = {
 darkMode: boolean
 onToggleTheme: () => void
}

function Navbar({ darkMode, onToggleTheme }: NavbarProps) {
 const [menuOpen, setMenuOpen] = useState(false)

 return (
 <nav className="sticky top-0 z-50 border-b border-[#b9ddec]/80 bg-[#eef9ff]/90 backdrop-blur-md dark:border-[#29445a] dark:bg-[#0d1c2b]/90">
  <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
   <a href="#home" className="font-serif text-lg font-bold tracking-tight text-[#12304a] dark:text-[#e5f5ff]">
    Fhulufhedzani <span className="text-[#267ca8]">Nndwamato.</span>
   </a>
   <div className="hidden items-center gap-7 md:flex">
    <div className="flex gap-7 text-sm font-semibold text-[#41657d] dark:text-[#a8c8d9]">
     <a className="transition-colors hover:text-[#267ca8]" href="#about">About</a>
     <a className="transition-colors hover:text-[#267ca8]" href="#skills">Skills</a>
     <a className="transition-colors hover:text-[#267ca8]" href="#projects">Projects</a>
     <a className="transition-colors hover:text-[#267ca8]" href="#contact">Contact</a>
    </div>
    <button onClick={onToggleTheme} aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'} className="grid size-9 place-items-center rounded-full border border-[#b9ddec] text-lg transition hover:-translate-y-0.5 hover:bg-white dark:border-[#41657d] dark:hover:bg-[#183047]">
     {darkMode ? '☀' : '☾'}
    </button>
   </div>
   <button onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} className="grid size-10 place-items-center rounded-lg border border-[#b9ddec] text-xl md:hidden dark:border-[#41657d]">
    {menuOpen ? '×' : '≡'}
   </button>
  </div>
  {menuOpen && <div className="border-t border-[#b9ddec] px-5 py-4 md:hidden dark:border-[#29445a]">
   <div className="flex flex-col gap-4 text-sm font-semibold text-[#41657d] dark:text-[#a8c8d9]">
    {['about', 'skills', 'projects', 'contact'].map((item) => <a key={item} className="capitalize" href={`#${item}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
    <button onClick={onToggleTheme} className="flex items-center gap-2 text-left">{darkMode ? '☀ Light mode' : '☾ Dark mode'}</button>
   </div>
  </div>}
 </nav>
 )
}
export default Navbar
