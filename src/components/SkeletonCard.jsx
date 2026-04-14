const SkeletonCard = () => {
  return (
    <div className="animate-pulse rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03]">
      
      
      <div className="aspect-[2/3] bg-slate-800/60"></div>

      
      <div className="p-4 space-y-3">
        <div className="h-4 bg-slate-700/60 rounded w-3/4"></div>
        <div className="h-3 bg-slate-700/50 rounded w-full"></div>
        <div className="h-3 bg-slate-700/50 rounded w-5/6"></div>
      </div>

    </div>
  );
};

export default SkeletonCard;