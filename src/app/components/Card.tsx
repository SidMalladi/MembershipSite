// components/Card.tsx
import React from 'react';

interface MembershipCardProps {
  level: 'Bronze' | 'Silver' | 'Gold' | 'Diamond';
  price: string;
  dailyRate: string;
  benefits: string[];
  highlight: boolean;
}

const emojiMap: { [key: string]: string } = {
  Calendar: '🗓️',
  Books: '📚',
  Yoga: '🧘',
  Archana: '🙏',
  Poojas: '🎉',
  Abhishekam: '🪔',
  Welcome: '🎁',
  Camp: '🏕️',
  Hall: '🏛️',
  Youth: '🧒',
  Sadhana: '🕉️',
};

const getEmojiForBenefit = (benefit: string): string => {
  for (const keyword in emojiMap) {
    if (benefit.includes(keyword)) return emojiMap[keyword];
  }
  return '✅';
};

const Card: React.FC<MembershipCardProps> = ({ level, price, dailyRate, benefits, highlight }) => {
  return (
    <div
      className={`bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 border ${
        highlight ? 'border-yellow-400' : 'border-gray-200'
      } flex flex-col justify-between`}
    >
      <div>
        <h3 className="text-xl font-bold text-center mb-1">{level}</h3>
        <p className="text-center text-gray-600 text-sm mb-1">{dailyRate}</p>
        <p className="text-center text-2xl font-semibold text-yellow-600">{price}</p>

        <ul className="mt-4 space-y-2 text-sm">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-2">
              <span>{getEmojiForBenefit(benefit)}</span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        className={`mt-6 w-full ${
          highlight ? 'bg-yellow-500' : 'bg-gray-200'
        } text-black font-semibold py-2 rounded-full hover:scale-105 hover:shadow-md transition`}
      >
        {highlight ? 'Join Gold Tier' : 'Select Plan'}
      </button>
    </div>
  );
};

export default Card;
