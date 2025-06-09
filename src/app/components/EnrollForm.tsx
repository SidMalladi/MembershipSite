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
  <Terms />

{/* Submit Button */}
<div className="text-center">
  <button
    type="submit"
    className="bg-orange-500 text-white px-8 py-3 rounded-full font-medium hover:bg-orange-600 transition"
  >
    Submit Enrollment
  </button>
</div>

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
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">New Member Enrollment</h2>
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Membership Type */}
        <div>
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
        <div className="grid sm:grid-cols-2 gap-6">
          <Input name="name" placeholder="Full Name" required />
          <Input name="email" type="email" placeholder="Email" required />
          <Input name="phone" type="tel" placeholder="Mobile Number" />
          <Input name="startDate" type="date" placeholder="Membership Start Date" required />
        </div>

        {/* Address */}
        <div className="grid sm:grid-cols-2 gap-6">
          <Input name="address" placeholder="Home Address" />
          <Input name="city" placeholder="City" />
          <Input name="state" placeholder="State" />
          <Input name="country" placeholder="Country" />
          <Input name="zip" placeholder="Zip Code" />
        </div>

        {/* Family Info */}
        <div className="grid sm:grid-cols-2 gap-6">
          <Input name="birthday" type="date" placeholder="Birth Date" />
          <Input name="anniversary" type="date" placeholder="Anniversary (Optional)" />
          <Input name="gotra" placeholder="Gotra (for Poojas)" />
          <Input name="familyNames" placeholder="Names of Spouse & Children" />
        </div>

        {/* Membership Type */}
        <div>
          <Label required>Payment Type</Label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="type"
                value="one-time"
                checked={form.type === 'one-time'}
                onChange={handleChange}
              />
              One-Time
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="type"
                value="recurring"
                checked={form.type === 'recurring'}
                onChange={handleChange}
              />
              Recurring
            </label>
          </div>
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-orange-500 text-white px-8 py-3 rounded-full font-medium hover:bg-orange-600 transition"
          >
            Submit Enrollment
          </button>
        </div>
      </form>
    </section>
  );
}
