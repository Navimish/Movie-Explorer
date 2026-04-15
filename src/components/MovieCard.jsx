const MovieCard = ({ movie, onSelect }) => {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/500x750?text=No+Image';

  return (
    <div 
      onClick={() => onSelect(movie)}
      className="group relative flex flex-col bg-white/[0.03] backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 transition-all duration-700 ease-out hover:-translate-y-4 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] hover:border-indigo-500/40 hover:bg-white/[0.06] cursor-pointer"
    >
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={imageUrl}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          loading="lazy"
        />
        
        <div className="absolute top-4 right-4 translate-z-10">
          <div className="bg-indigo-600/90 backdrop-blur-md text-white px-3 py-1 rounded-lg text-xs font-black shadow-2xl border border-white/20">
            {movie.vote_average ? movie.vote_average.toFixed(1) : 'NR'}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#060b16] via-transparent to-transparent opacity-60"></div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-bold text-lg mb-2 text-white line-clamp-1 group-hover:text-indigo-400 transition-colors duration-300">
          {movie.title}
        </h3>
        <p className="text-slate-400/80 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed font-light">
          {movie.overview || 'The story remains untold...'}
        </p>
        <div className="flex justify-between items-center mt-auto">
           <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
            {movie.release_date ? new Date(movie.release_date).getFullYear() : 'TBA'}
          </span>
          <div className="h-[1px] w-8 bg-indigo-500/30 group-hover:w-12 group-hover:bg-indigo-500 transition-all duration-500"></div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;