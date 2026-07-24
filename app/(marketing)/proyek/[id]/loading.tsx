export default function ProjectLoading() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 w-full pt-20 pb-20 animate-pulse">
      {/* Breadcrumb Skeleton */}
      <div className="h-4 w-48 bg-emerald-900/10 rounded-md mb-8" />

      {/* Main Grid Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
        {/* Left Gallery Skeleton */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="w-full aspect-[4/3] bg-emerald-900/15 rounded-3xl" />
          <div className="grid grid-cols-4 gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="aspect-[4/3] bg-emerald-900/10 rounded-xl" />
            ))}
          </div>
        </div>

        {/* Right Info Skeleton */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="flex gap-2">
            <div className="h-6 w-20 bg-emerald-900/15 rounded-full" />
            <div className="h-6 w-24 bg-emerald-900/10 rounded-full" />
          </div>

          <div className="h-10 w-3/4 bg-emerald-900/20 rounded-xl" />
          <div className="h-16 w-full bg-emerald-900/10 rounded-xl" />

          {/* Pricing box skeleton */}
          <div className="h-28 w-full bg-emerald-950/20 rounded-2xl" />

          {/* Buttons skeleton */}
          <div className="flex gap-3">
            <div className="h-14 flex-1 bg-emerald-900/25 rounded-2xl" />
            <div className="h-14 flex-1 bg-emerald-900/15 rounded-2xl" />
          </div>

          {/* Features skeleton */}
          <div className="h-32 w-full bg-emerald-900/10 rounded-2xl" />
        </div>
      </div>

      {/* Testimonial Section Skeleton */}
      <div className="h-64 w-full bg-emerald-900/10 rounded-3xl" />
    </div>
  );
}
