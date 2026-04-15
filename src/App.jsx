import { useState } from 'react';
import { useMovies } from './hooks/useMovies';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';
import SkeletonGrid from './components/SkeletonGrid';
import Error from './components/Error';
import MovieDetail from './components/MovieDetail';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');
  
  const { movies, loading, error } = useMovies(searchTerm);

  const handleSearchChange = (newTerm) => {
    setSearchTerm(newTerm);
    setActiveFilter('All');
  };

  const getFilteredMovies = () => {
    if (!movies) return [];
    
    switch (activeFilter) {
      case 'Top Rated':
        return movies.filter(movie => movie.vote_average >= 7.5);
      case 'Recent':
        return movies.filter(movie => {
          if (!movie.release_date) return false;
          return parseInt(movie.release_date.split('-')[0]) >= 2023;
        });
      
      default:
        return movies;
    }
  };

  const displayedMovies = getFilteredMovies();
  const filters = ['All', 'Top Rated', 'Recent', ];

  return (
    <div className="min-h-screen bg-[#060b16] text-slate-100 selection:bg-indigo-500/30 overflow-x-hidden relative">
      
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-purple-600/10 blur-[100px] rounded-full"></div>
      </div>

      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        
        <header className="text-center mb-12 space-y-6">
          <h1 className="text-6xl md:text-7xl font-black tracking-tighter mt-4">
            <span className="bg-gradient-to-b from-white via-white to-slate-500 bg-clip-text text-transparent">
              Movie Explorer
            </span>
          </h1>

          <p className="text-slate-500 max-w-md mx-auto text-sm uppercase tracking-[0.4em] font-light">
            Perspective Cinema
          </p>

          <div className="pt-4 max-w-2xl mx-auto">
            <SearchBar searchTerm={searchTerm} setSearchTerm={handleSearchChange} />
          </div>

          {!loading && !error && movies.length > 0 && (
            <div className="flex flex-wrap justify-center gap-3 pt-2 animate-in fade-in duration-500">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.15em] transition-all duration-300 border ${
                    activeFilter === filter
                      ? 'bg-indigo-500 border-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]'
                      : 'bg-white/[0.03] border-white/10 text-slate-400 hover:text-white hover:border-white/30 hover:bg-white/[0.05]'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          )}
        </header>

        <section className="min-h-[400px]">
          {loading && <SkeletonGrid />}
          {error && <Error message={error} />}

          {!loading && !error && movies.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-slate-500 space-y-4 animate-in fade-in">
              <span className="text-6xl opacity-20 italic font-black">Empty</span>
              <p className="text-xl font-medium tracking-widest">NO MOVIES FOUND</p>
            </div>
          )}

          {!loading && !error && movies.length > 0 && displayedMovies.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-slate-500 space-y-4 animate-in fade-in">
              <p className="text-lg font-medium tracking-widest">NO MATCHES FOR "{activeFilter.toUpperCase()}"</p>
              <button 
                onClick={() => setActiveFilter('All')}
                className="text-[10px] uppercase tracking-widest text-indigo-400 hover:text-indigo-300"
              >
                Clear Filter
              </button>
            </div>
          )}

          {!loading && !error && displayedMovies.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 animate-in fade-in duration-700">
              {displayedMovies.map((movie) => (
                <MovieCard 
                  key={movie.id} 
                  movie={movie} 
                  onSelect={setSelectedMovie} 
                />
              ))}
            </div>
          )}
        </section>
      </main>

      {selectedMovie && (
        <MovieDetail 
          movie={selectedMovie} 
          onClose={() => setSelectedMovie(null)} 
        />
      )}
    </div>
  );
};

export default App;