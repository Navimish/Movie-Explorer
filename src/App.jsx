import { useState } from 'react';
import { useMovies } from './hooks/useMovies';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';
import SkeletonGrid from './components/SkeletonGrid';
import Error from './components/Error';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { movies, loading, error } = useMovies(searchTerm);

  return (
    <div className="min-h-screen bg-[#060b16] text-slate-100 selection:bg-indigo-500/30 overflow-x-hidden">
     
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-purple-600/10 blur-[100px] rounded-full"></div>
      </div>

      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        
        <header className="text-center mb-16 space-y-6">
          <h1 className="text-6xl md:text-7xl font-black tracking-tighter mt-4">
            <span className="bg-gradient-to-b from-white via-white to-slate-500 bg-clip-text text-transparent">
              Movie Explorer
            </span>
          </h1>

          <p className="text-slate-500 max-w-md mx-auto text-sm uppercase tracking-[0.4em] font-light">
            Perspective Cinema
          </p>

          <div className="pt-4 max-w-2xl mx-auto">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>
        </header>

        <section className="min-h-[400px]">
          {loading && <SkeletonGrid />}
          {error && <Error message={error} />}

          {!loading && !error && movies.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-slate-500 space-y-4">
              <span className="text-6xl opacity-20 italic font-black">Empty</span>
              <p className="text-xl font-medium tracking-widest">NO RESULTS FOUND</p>
            </div>
          )}

          {!loading && !error && movies.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default App;