'use client';

import React from 'react';

type MembershipLevel = 'Bronze' | 'Silver' | 'Gold' | 'Diamond';

interface MembershipCardProps {
  level: MembershipLevel;
  price: string;
  dailyRate: string;
  benefits: string[];
  highlight?: boolean;
}

const Card: React.FC<MembershipCardProps> = ({
  level,
  price,
  dailyRate,
  benefits,
  highlight = false,
}) => {
  return (
    <div
      className={`rounded-xl shadow-md p-6 transition-all transform hover:scale-105 ${
        highlight ? 'border-4 border-yellow-400' : 'bg-white'
      }`}
    >
      {highlight && (
        <div className="text-xs uppercase font-bold text-yellow-600 mb-2">Most Popular</div>
      )}
      <h3 className="text-2xl font-bold mb-1">{level} Membership</h3>
      <p className="text-green-700 text-lg font-semibold">{dailyRate}</p>
      <p className="text-sm text-gray-500 mb-4">{price}</p>
      <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
        {benefits.map((benefit, idx) => (
          <li key={idx}>👉 {benefit}</li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
