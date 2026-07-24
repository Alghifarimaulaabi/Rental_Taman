"use client";

interface PlantSkeletonProps {
  count?: number;
}

export default function PlantSkeleton({ count = 8 }: PlantSkeletonProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={idx}
          className="flex flex-col justify-between overflow-hidden rounded-2xl bg-white border border-emerald-900/10 p-0 shadow-sm animate-pulse"
        >
          {/* Top Image Skeleton */}
          <div className="aspect-[4/3] w-full bg-emerald-950/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite]" />
          </div>

          {/* Body Skeleton */}
          <div className="p-5 space-y-4">
            <div className="space-y-2">
              <div className="h-3 w-1/3 rounded bg-emerald-900/10" />
              <div className="h-5 w-3/4 rounded bg-emerald-900/15" />
              <div className="h-3 w-full rounded bg-emerald-900/10" />
              <div className="h-3 w-4/5 rounded bg-emerald-900/10" />
            </div>

            <div className="pt-3 border-t border-emerald-900/10 flex items-center justify-between">
              <div className="space-y-1">
                <div className="h-2 w-12 rounded bg-emerald-900/10" />
                <div className="h-5 w-24 rounded bg-emerald-900/15" />
              </div>
              <div className="h-8 w-20 rounded-xl bg-emerald-900/15" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
