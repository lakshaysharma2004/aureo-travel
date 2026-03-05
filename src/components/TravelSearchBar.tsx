"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function TravelSearchBar() {
  const router = useRouter();
  const [searchData, setSearchData] = useState({
    destination: "",
    duration: "",
    budget: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build query params
    const params = new URLSearchParams();
    if (searchData.destination) params.append("destination", searchData.destination);
    if (searchData.duration) params.append("duration", searchData.duration);
    if (searchData.budget) params.append("budget", searchData.budget);
    
    // Redirect to packages page with filters
    router.push(`/packages?${params.toString()}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSearchData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="rounded-xl bg-white p-8 shadow-2xl"
      >
        <div className="grid gap-4 md:grid-cols-4 md:gap-6">
          {/* Destination Input */}
          <div className="md:col-span-1">
            <label
              htmlFor="destination"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Destination
            </label>
            <input
              type="text"
              id="destination"
              name="destination"
              value={searchData.destination}
              onChange={handleChange}
              placeholder="Where to?"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 transition-colors focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Duration Dropdown */}
          <div className="md:col-span-1">
            <label
              htmlFor="duration"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Duration
            </label>
            <select
              id="duration"
              name="duration"
              value={searchData.duration}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 transition-colors focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="">Any Duration</option>
              <option value="3-5">3-5 Days</option>
              <option value="5-7">5-7 Days</option>
              <option value="7-10">7-10 Days</option>
            </select>
          </div>

          {/* Budget Dropdown */}
          <div className="md:col-span-1">
            <label
              htmlFor="budget"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Budget
            </label>
            <select
              id="budget"
              name="budget"
              value={searchData.budget}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 transition-colors focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="">Any Budget</option>
              <option value="budget">Budget</option>
              <option value="standard">Standard</option>
              <option value="luxury">Luxury</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-1">
            <label className="mb-2 block text-sm font-semibold text-transparent md:invisible">
              Search
            </label>
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-teal-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-300"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span>Plan My Trip</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
