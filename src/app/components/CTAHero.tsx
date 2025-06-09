'use client';

export default function CTAHero() {
  return (
    <section className="relative h-[400px] rounded-xl overflow-hidden mb-12 shadow-md">
      <img
        src="/images/hero.jpg"
        alt="RKT Membership Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-yellow-400 px-6">
        <h1 className="text-4xl font-bold mb-4">Become a Member of Radha Krishna Temple</h1>
        <p className="text-lg max-w-xl mx-auto mb-6">
          Support the temple and enjoy exclusive spiritual benefits for you and your family.
        </p>
        <a
          href="#memberships"
          className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
        >
          JOIN NOW
        </a>
      </div>
    </section>
  );
}
