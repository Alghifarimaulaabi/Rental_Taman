export default function LoadingServiceDetail() {
  return (
    <div className="min-h-screen bg-[#F4F7F4] animate-pulse">
      {/* Header Skeleton */}
      <div className="h-20 w-full bg-emerald-900/5 border-b border-emerald-900/10" />

      {/* Hero Skeleton */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="flex flex-col gap-4 lg:col-span-7">
            <div className="h-6 w-32 rounded-full bg-emerald-900/10" />
            <div className="h-12 w-3/4 rounded-2xl bg-emerald-900/10" />
            <div className="h-20 w-full rounded-2xl bg-emerald-900/10" />
            <div className="h-12 w-48 rounded-2xl bg-emerald-900/15" />
          </div>
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[400px] aspect-[4/5] rounded-[32px] bg-emerald-900/10" />
          </div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="h-48 rounded-3xl bg-emerald-900/5" />
        <div className="h-48 rounded-3xl bg-emerald-900/5" />
        <div className="h-48 rounded-3xl bg-emerald-900/5" />
      </div>
    </div>
  );
}
