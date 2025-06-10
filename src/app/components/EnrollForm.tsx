'use client';

import { useState } from 'react';
import Terms from './Terms';

export default function EnrollForm() {
  const [form, setForm] = useState({
    level: '',
    name: '',
    email: '',
    phone: '',
    startDate: '',
    address: '',
    city: '',
    state: '',
    country: '',
    zip: '',
    birthday: '',
    anniversary: '',
    gotra: '',
    familyNames: '',
    type: 'one-time',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  const Label = ({ children, required = false }: { children: string; required?: boolean }) => (
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {children} {required && <span className="text-red-500">*</span>}
    </label>
  );

  const Input = ({
    name,
    type = 'text',
    placeholder,
    required = false,
  }: {
    name: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
  }) => (
    <div>
      <Label required={required}>{placeholder || name}</Label>
      <input
        name={name}
        type={type}
        value={(form as any)[name]}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
        required={required}
      />
    </div>
  );

  return (
    <section className="bg-white py-12 px-6 rounded-xl shadow-sm mb-16 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">📝 New Member Enrollment</h2>
      <form onSubmit={handleSubmit} className="space-y-12">

        {/* Membership Selection */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-orange-600">Membership Plan</h3>
          <Label required>Select Membership Level</Label>
          <select
            name="level"
            value={form.level}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
          >
            <option value="">Select a level</option>
            <option value="Diamond">Diamond ($3650)</option>
            <option value="Gold">Gold ($1825)</option>
            <option value="Silver">Silver ($730)</option>
            <option value="Bronze">Bronze ($365)</option>
          </select>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-orange-600">Personal Details</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            <Input name="name" placeholder="Full Name" required />
            <Input name="email" type="email" placeholder="Email" required />
            <Input name="phone" type="tel" placeholder="Mobile Number" />
            <Input name="startDate" type="date" placeholder="Membership Start Date" required />
          </div>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-orange-600">Address</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            <Input name="address" placeholder="Home Address" />
            <Input name="city" placeholder="City" />
            <Input name="state" placeholder="State" />
            <Input name="country" placeholder="Country" />
            <Input name="zip" placeholder="Zip Code" />
          </div>
        </div>

        {/* Family Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-orange-600">Family Information</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            <Input name="birthday" type="date" placeholder="Birth Date" />
            <Input name="anniversary" type="date" placeholder="Anniversary (Optional)" />
            <Input name="gotra" placeholder="Gotra (e.g., Kashyap)" />
            <Input name="familyNames" placeholder="Spouse & Children Names (comma-separated)" />
          </div>
        </div>

        {/* Payment Type */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-orange-600">Payment Preference</h3>
          <Label required>Choose Payment Type</Label>
          <div className="flex gap-6 mt-2">
            {['one-time', 'recurring'].map((option) => (
              <label
                key={option}
                className={`cursor-pointer px-4 py-2 rounded-full border ${
                  form.type === option
                    ? 'bg-orange-500 text-white border-orange-600'
                    : 'bg-white border-gray-300 text-gray-700'
                } transition`}
              >
                <input
                  type="radio"
                  name="type"
                  value={option}
                  checked={form.type === option}
                  onChange={handleChange}
                  className="hidden"
                />
                {option === 'one-time' ? 'One-Time' : 'Recurring'}
              </label>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center mt-10">
          <button
            type="submit"
            className="bg-orange-500 text-white px-10 py-3 rounded-full font-semibold hover:bg-orange-600 transition shadow-md"
          >
            Submit Enrollment
          </button>
        </div>
      </form>

      {/* Terms */}
      <div className="mt-12">
        <Terms />
      </div>

      {/* Manage Membership CTA */}
      <div className="mt-16 p-6 border rounded-lg bg-orange-50 text-center">
        <h4 className="text-lg font-semibold mb-3">Already a Member?</h4>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/upgrade" className="px-5 py-2 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition">Upgrade/Downgrade</a>
          <a href="/cancel" className="px-5 py-2 bg-gray-300 text-gray-800 rounded-full hover:bg-gray-400 transition">Cancel Membership</a>
        </div>
      </div>
    </section>
  );
}
