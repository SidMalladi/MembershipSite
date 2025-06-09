'use client';

export default function ActionsBar() {
  return (
    <section className="bg-white py-8 px-6 rounded-xl shadow-sm text-center mt-16">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Manage Your Membership</h2>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button className="bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition">
          Enroll Now
        </button>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition">
          Upgrade / Downgrade
        </button>
        <button className="bg-red-500 text-white px-6 py-3 rounded-full font-medium hover:bg-red-600 transition">
          Cancel Membership
        </button>
      </div>
    </section>
  );
}
