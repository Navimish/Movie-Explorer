const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] backdrop-blur-md bg-[#060b16]/70 border-b border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        <div className="flex items-center gap-2 cursor-pointer group">
          <span className="text-2xl font-black tracking-tighter text-white uppercase italic">
            M<span className="text-indigo-500 group-hover:text-white transition-colors duration-500">E</span>
          </span>
          <span className="hidden sm:block text-sm font-bold tracking-[0.3em] text-white uppercase ml-2">
            Movie Explorer
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <div className="flex flex-col items-end">
            <p className="text-[9px] uppercase tracking-[0.4em] text-slate-500 leading-none mb-1">
              Crafted by
            </p>
            <span className="text-xs font-bold text-slate-200 tracking-widest hover:text-indigo-400 transition-colors duration-300 cursor-pointer">
              NAVNEET MISHRA
            </span>
          </div>
          
          <a 
            href="https://github.com/Navimish/Movie-Explorer" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 text-xs font-bold tracking-widest text-indigo-400 uppercase border border-indigo-500/30 rounded-md hover:bg-indigo-500 hover:text-white transition-all duration-300"
          >
            GitHub
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;