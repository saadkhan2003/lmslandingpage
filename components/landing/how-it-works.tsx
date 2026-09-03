import { Badge } from "@/components/ui/badge";

export function HowItWorks() {
  return (
    <section
      id="blueprint"
      className="relative w-full overflow-hidden bg-neutral-950 py-20 md:py-28"
    >
      <div className="bg-grid-subtle pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
      <div className="pointer-events-none absolute -top-20 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-red-600/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge className="mx-auto w-fit rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-sm font-semibold text-red-400 hover:bg-red-500/10">
            The System
          </Badge>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            Your 3-Day Side Hustle{" "}
            <span className="text-gradient">Blueprint</span>
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Watch the full blueprint walkthrough below.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="glow-red relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 p-2 sm:p-3">
            <div className="relative w-full overflow-hidden rounded-xl" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://www.youtube.com/embed/jE9AfrMEcEk?si=FiWVE2OPtHkPgPxe"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 h-full w-full rounded-xl border-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
