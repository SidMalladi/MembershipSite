'use client';

export default function PromoSection() {
  return (
    <section className="mt-12">
      <div className="max-w-3xl mx-auto bg-orange-50 border border-orange-200 rounded-xl p-6 shadow-md text-center animate-pulse-slow">
        <h3 className="text-lg font-semibold text-orange-600 mb-2 flex items-center justify-center gap-2">
          <span className="text-2xl">🎁</span> This Month’s Special Benefit
        </h3>
        <p className="text-gray-700 text-sm">
          Free access to the <strong>Full Daily Sadhana Library</strong> for all new Gold & Diamond members this month.
        </p>
      </div>
    </section>
  );
}
