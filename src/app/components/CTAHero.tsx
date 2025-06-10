'use client';

export default function CTAHero() {
  return (
    <section className="relative h-[500px] rounded-xl overflow-hidden mb-20 shadow-lg">
      <img
        src="/images/hero.jpg"
        alt="Radha Krishna Temple"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-yellow-100 px-6">
        <h1 className="text-4xl font-bold mb-4 leading-tight drop-shadow-lg">
          Join the Radha Krishna Temple Family
        </h1>

        <p className="text-lg max-w-xl mx-auto mb-6 leading-relaxed drop-shadow">
          Your membership is more than a donation — it’s a sacred offering. Support a space of
          <span className="text-yellow-300 font-medium"> devotion, celebration, and service.</span>
        </p>

        <a
          href="#memberships"
          className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:scale-105 transition-transform duration-200"
        >
          View Membership Options
        </a>

        <a
          href="#why"
          className="mt-3 inline-block text-sm text-yellow-100 hover:text-white underline transition"
        >
          Learn Membership Benefits
        </a>

        <a
          href="#memberships"
          className="mt-6 px-4 py-2 border border-yellow-300 rounded-full text-yellow-200 text-sm hover:bg-yellow-300 hover:text-black transition"
        >
          ↓ Explore Membership Tiers
        </a>
      </div>
    </section>
  );
}
