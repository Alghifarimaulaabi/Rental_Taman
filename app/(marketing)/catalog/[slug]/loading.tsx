import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F4F7F4] text-emerald-950 font-sans">
      <Navbar />

      <main className="flex-1 py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Skeleton */}
          <div className="h-4 w-48 rounded bg-emerald-900/10 mb-8 animate-pulse" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-emerald-900/10 shadow-lg">
            
            {/* Left Image Skeleton */}
            <div className="lg:col-span-6 space-y-4">
              <div className="aspect-[4/3] sm:aspect-square w-full rounded-2xl bg-emerald-900/10 animate-pulse" />
              <div className="flex gap-3">
                <div className="h-20 w-20 rounded-xl bg-emerald-900/10 animate-pulse" />
                <div className="h-20 w-20 rounded-xl bg-emerald-900/10 animate-pulse" />
              </div>
            </div>

            {/* Right Info Skeleton */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <div className="h-6 w-28 rounded-full bg-emerald-900/10 animate-pulse" />
                <div className="h-4 w-36 rounded bg-emerald-900/10 animate-pulse" />
                <div className="h-10 w-3/4 rounded bg-emerald-900/15 animate-pulse" />
                <div className="h-16 w-full rounded-2xl bg-emerald-900/10 animate-pulse" />
              </div>

              <div className="grid grid-cols-4 gap-3">
                <div className="h-16 rounded-xl bg-emerald-900/10 animate-pulse" />
                <div className="h-16 rounded-xl bg-emerald-900/10 animate-pulse" />
                <div className="h-16 rounded-xl bg-emerald-900/10 animate-pulse" />
                <div className="h-16 rounded-xl bg-emerald-900/10 animate-pulse" />
              </div>

              <div className="space-y-2">
                <div className="h-4 w-full rounded bg-emerald-900/10 animate-pulse" />
                <div className="h-4 w-5/6 rounded bg-emerald-900/10 animate-pulse" />
                <div className="h-4 w-4/6 rounded bg-emerald-900/10 animate-pulse" />
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
