'use client';

import { useState } from 'react';

export default function Terms() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="mt-10 max-w-3xl mx-auto text-sm text-gray-700 px-6">
      {/* Summary Box */}
      <div className="bg-[#fdfdfd] border border-gray-200 rounded-md p-4 mb-4 text-center shadow-sm">
        <p>
          <strong>Summary:</strong> Auto-renews yearly · In-person gift shop only · Applies to spouse & kids in same household
        </p>
      </div>

      {/* Toggle Button */}
      <div
        className="flex justify-center items-center gap-2 cursor-pointer select-none text-gray-600 hover:text-gray-800 font-medium transition"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? 'Hide Full Terms' : 'View Full Terms'}
        <span className="text-lg">{expanded ? '–' : '+'}</span>
      </div>

      {/* Collapsible Terms */}
      {expanded && (
        <div className="mt-6 bg-gray-50 border border-gray-100 rounded-md p-6 space-y-4 leading-relaxed shadow-sm">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Auto-renews:</strong> Membership renews annually on your sign-up date.</li>
            <li><strong>In-person only:</strong> Book discounts apply only at the temple gift shop.</li>
            <li><strong>Family eligibility:</strong> Benefits apply to spouse and children living in the same household (up to 4).</li>
            <li><strong>Abhisheks:</strong> Members may use tokens; call ahead to confirm priest availability.</li>
            <li><strong>Event Poojas:</strong> Book 1 day in advance (or 1 week for Holi & Rakshabandhan). First-come, first-serve.</li>
            <li><strong>Yoga access:</strong> Includes 5 online classes/month. Booking through portal is required.</li>
            <li><strong>No stacking discounts:</strong> Membership discounts apply to regular pricing only.</li>
            <li><strong>Policy changes:</strong> Benefits may be updated annually; changes apply at next renewal.</li>
          </ul>
          <p className="text-xs text-gray-400 text-center mt-4">Contact the temple front desk for any clarifications.</p>
        </div>
      )}
    </section>
  );
}
