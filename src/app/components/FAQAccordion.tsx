'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Can I upgrade my membership later?',
    answer: 'Yes! You can upgrade anytime by paying the difference. The new level starts immediately.',
  },
  {
    question: 'When does my membership expire?',
    answer: 'One-time memberships expire one year from the sign-up date. Recurring ones renew automatically.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes. Your membership will remain active until the current year ends.',
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-10 px-6 rounded-xl shadow-sm mb-12">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Frequently Asked Questions</h2>
      <div className="max-w-2xl mx-auto">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b py-4">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full text-left font-semibold text-gray-700"
            >
              {faq.question}
            </button>
            {openIndex === i && (
              <p className="mt-2 text-gray-600 text-sm">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
