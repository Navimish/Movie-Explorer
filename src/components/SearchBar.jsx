const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="w-full max-w-2xl mx-auto my-8 relative group">
      <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 font-light text-xl pointer-events-none group-focus-within:text-indigo-400 transition-colors duration-300">
        ⌕
      </div>

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search movies..."
        className="w-full pl-14 pr-6 py-4 rounded-full border border-slate-800 bg-[#0f172a] text-slate-100 placeholder-slate-600 outline-none transition-all duration-500 focus:border-indigo-500/40 focus:bg-[#131c31] focus:ring-8 focus:ring-indigo-500/5 focus:shadow-[0_0_25px_rgba(99,102,241,0.08)]"
      />
    </div>
  );
};

export default SearchBar;