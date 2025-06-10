'use client';

import React from 'react';
import Card from '../components/Card';
import CTAHero from '../components/CTAHero';
import WhyJoin from '../components/WhyJoin';
import PromoSection from '../components/PromoSection';
import FAQAccordion from '../components/FAQAccordion';
import Terms from '../components/Terms';
import EnrollForm from '../components/EnrollForm';

type MembershipLevel = 'Bronze' | 'Silver' | 'Gold' | 'Diamond';

const membershipLevels = [
  {
    level: 'Bronze',
    price: '$365 / year',
    dailyRate: '$1 a Day',
    highlight: false,
    benefits: [
      '🗓️ Temple Calendar: Included',
      '🎁 Welcome Package: Yes',
      '🕉️ Abhishekam: 4 times/year',
      '🌺 Archana: 4 times/year',
      '🙏 Special Poojas: 4 times/year',
      '📿 Daily Sadhana: 1-month access',
      '🧘 Yoga: 1-month basic plan',
      '👨‍👩‍👧‍👦 Youth Club: 5% discount',
      '📚 Books: 5% discount',
    ],
  },
  {
    level: 'Silver',
    price: '$730 / year',
    dailyRate: '$2 a Day',
    highlight: false,
    benefits: [
      '🗓️ Temple Calendar: Included',
      '🎁 Welcome Package: Yes',
      '🕉️ Abhishekam: 6 times/year',
      '🌺 Archana: 6 times/year',
      '🙏 Special Poojas: 6 times/year',
      '📿 Daily Sadhana: 2-month access',
      '🧘 Yoga: 2-month basic plan',
      '👨‍👩‍👧‍👦 Youth Club: 10% discount',
      '📚 Books: 5% discount',
    ],
  },
  {
    level: 'Gold',
    price: '$1825 / year',
    dailyRate: '$5 a Day',
    highlight: true,
    benefits: [
      '🗓️ Temple Calendar: Included',
      '🎁 Welcome Package: Yes',
      '🕉️ Abhishekam: 8 times/year',
      '🌺 Archana: 8 times/year',
      '🙏 Special Poojas: 8 times/year',
      '📿 Daily Sadhana: 6-month access',
      '🧘 Yoga: 6-month basic plan',
      '👨‍👩‍👧‍👦 Youth Club: 10% discount',
      '📚 Books: 10% discount',
      '🏕️ Family Camp: 5% off',
      '🏛️ CICE Hall: 5% off',
    ],
  },
  {
    level: 'Diamond',
    price: '$3650 / year',
    dailyRate: '$10 a Day',
    highlight: false,
    benefits: [
      '🗓️ Temple Calendar: Included',
      '🎁 Welcome Package: Yes',
      '🕉️ Abhishekam: 10 times/year',
      '🌺 Archana: 10 times/year',
      '🙏 Special Poojas: 10 times/year',
      '📿 Daily Sadhana: 1-year access',
      '🧘 Yoga: 1-year basic plan',
      '👨‍👩‍👧‍👦 Youth Club: 10% discount',
      '📚 Books: 10% discount',
      '🏕️ Family Camp: 10% off',
      '🏛️ CICE Hall: 8% off',
    ],
  },
];

const MembershipPage = () => {
  return (
    <main className="min-h-screen bg-[#f8f6f3]">
      <CTAHero />

      <section>
        <WhyJoin />
      </section>

      <PromoSection />

      <section id="memberships" className="py-12 md:py-20 px-6 md:px-12 bg-[#f8f6f3]">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">🎁 Choose Your Membership Level</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {membershipLevels.map((data) => (
            <Card
              key={data.level}
              level={data.level as MembershipLevel}
              price={data.price}
              dailyRate={data.dailyRate}
              benefits={data.benefits}
              highlight={data.highlight}
            />
          ))}
        </div>
      </section>

      <EnrollForm />

      <FAQAccordion />

      <Terms />
    </main>
  );
};

export default MembershipPage;