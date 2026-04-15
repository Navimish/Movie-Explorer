const MovieDetail = ({ movie, onClose }) => {
  if (!movie) return null;

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/500x750?text=No+Image';

  const trailerUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(movie.title + ' official trailer')}`;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6">
      
      <div 
        className="absolute inset-0 bg-[#060b16]/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>

      <div className="relative bg-gradient-to-br from-[#131c31] to-[#0f172a] border border-white/10 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-[0_0_50px_rgba(0,0,0,0.5)] animate-in fade-in zoom-in-95 duration-300">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 z-20 w-10 h-10 rounded-full bg-black/40 text-white border border-white/10 hover:bg-indigo-500 hover:scale-110 transition-all flex items-center justify-center backdrop-blur-md"
        >
          ✕
        </button>

        <div className="flex flex-col md:flex-row">
          
          <div className="w-full md:w-2/5 shrink-0">
            <img 
              src={imageUrl} 
              alt={movie.title}
              className="w-full h-full object-cover md:rounded-l-3xl aspect-[2/3] md:aspect-auto"
            />
          </div>

          <div className="p-8 md:p-10 w-full md:w-3/5 flex flex-col justify-center">
            
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4 tracking-tight">
                {movie.title}
              </h2>
              <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-indigo-400 uppercase tracking-widest">
                <span className="bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                  {movie.release_date?.split('-')[0] || 'TBA'}
                </span>
                <span className="flex items-center gap-1 bg-white/5 px-3 py-1 rounded-full border border-white/10 text-white">
                  <span className="text-yellow-500">★</span> 
                  {movie.vote_average ? movie.vote_average.toFixed(1) : 'NR'}
                </span>
                <span className="text-slate-500">
                  {movie.original_language?.toUpperCase()}
                </span>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed font-light mb-8 text-sm md:text-base">
              {movie.overview || 'No overview available for this title.'}
            </p>

            <div className="mt-auto">
               <a 
                 href={trailerUrl}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-black hover:bg-indigo-500 hover:text-white rounded-full text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 shadow-lg hover:shadow-indigo-500/25"
               >
                 Watch Trailer
               </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;