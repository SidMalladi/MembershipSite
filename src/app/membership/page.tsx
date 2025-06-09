import React from 'react';
import Card from '../components/Card';
import CTAHero from '../components/CTAHero';
import WhyJoin from '../components/WhyJoin';
import PromoSection from '../components/PromoSection';
import ActionBar from '../components/ActionsBar';
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
      'Temple Calendar: Included',
      'Welcome Package: Yes',
      'Abhishekam: 4 times/year',
      'Archana: 4 times/year',
      'Special Poojas: 4 times/year',
      'Daily Sadhana: 1-month access',
      'Yoga: 1-month basic plan',
      'Youth Club: 5% discount',
      'Books: 5% discount',
    ],
  },
  {
    level: 'Silver',
    price: '$730 / year',
    dailyRate: '$2 a Day',
    highlight: false,
    benefits: [
      'Temple Calendar: Included',
      'Welcome Package: Yes',
      'Abhishekam: 6 times/year',
      'Archana: 6 times/year',
      'Special Poojas: 6 times/year',
      'Daily Sadhana: 2-month access',
      'Yoga: 2-month basic plan',
      'Youth Club: 10% discount',
      'Books: 5% discount',
    ],
  },
  {
    level: 'Gold',
    price: '$1825 / year',
    dailyRate: '$5 a Day',
    highlight: true,
    benefits: [
      'Temple Calendar: Included',
      'Welcome Package: Yes',
      'Abhishekam: 8 times/year',
      'Archana: 8 times/year',
      'Special Poojas: 8 times/year',
      'Daily Sadhana: 6-month access',
      'Yoga: 6-month basic plan',
      'Youth Club: 10% discount',
      'Books: 10% discount',
      'Family Camp: 5% off',
      'CICE Hall: 5% off',
    ],
  },
  {
    level: 'Diamond',
    price: '$3650 / year',
    dailyRate: '$10 a Day',
    highlight: false,
    benefits: [
      'Temple Calendar: Included',
      'Welcome Package: Yes',
      'Abhishekam: 10 times/year',
      'Archana: 10 times/year',
      'Special Poojas: 10 times/year',
      'Daily Sadhana: 1-year access',
      'Yoga: 1-year basic plan',
      'Youth Club: 10% discount',
      'Books: 10% discount',
      'Family Camp: 10% off',
      'CICE Hall: 8% off',
    ],
  },
];

const MembershipPage = () => {
  return (
    <main className="min-h-screen p-8 bg-gray-50 space-y-16">
      <CTAHero />
      <WhyJoin />
      <PromoSection />

      <section id="memberships">
        <h1 className="text-4xl font-bold text-center mb-10">RKT Membership Levels</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      <FAQAccordion />
      <EnrollForm />
      <ActionBar />
      <Terms />
    </main>
  );
};

export default MembershipPage;
