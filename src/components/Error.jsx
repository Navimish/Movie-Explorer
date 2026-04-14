const Error = ({ message }) => {
  return (
    <div className="flex justify-center py-20 px-4">
      <div className="max-w-md w-full bg-[#0f172a]/80 backdrop-blur-md border border-red-500/20 rounded-2xl p-8 text-center">
        <div className="text-red-500 text-2xl mb-4 font-light">!</div>
        <h3 className="text-white font-bold text-lg mb-2">Something went wrong</h3>
        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
          {message || "An unexpected error occurred while fetching movies."}
        </p>
        <button 
          onClick={() => window.location.reload()}
          className="text-[10px] uppercase tracking-widest text-slate-400 hover:text-white transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default Error;