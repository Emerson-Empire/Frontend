

import { useState } from "react";
import { useClients } from "../context/ClientContext";
import type { LeadStatus } from "../types/client";

interface FormData {
  name: string;
  email: string;
  phone: string;
  serviceNeeded: string;
}

const IntakeForm = () => {
  const { addClient } = useClients();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    serviceNeeded: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");

  const services = [
    "Tax Filing",
    "Financial Planning",
    "Insurance Policy",
    "Retirement Planning",
    "Business Consultation",
    "Other",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.serviceNeeded) {
      setMessage("Please fill in all fields");
      return;
    }

    // Add client to dashboard
    addClient({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      serviceNeeded: formData.serviceNeeded,
      stage: "lead",
      status: "new_lead" as LeadStatus,
      notes: `Intake form submitted on ${new Date().toLocaleDateString()}`,
    });

    // Reset form and show success message
    setFormData({
      name: "",
      email: "",
      phone: "",
      serviceNeeded: "",
    });
    setSubmitted(true);
    setMessage("✓ Successfully added! New lead is now in your dashboard.");
    
    setTimeout(() => {
      setSubmitted(false);
      setMessage("");
    }, 5000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-lg space-y-5"
        >
          <div>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
              New Client Intake
            </h2>
            <p className="text-center text-gray-600 text-sm">
              Enter your information to become a lead
            </p>
          </div>

          {message && (
            <div className={`p-4 rounded-lg ${
              submitted
                ? "bg-green-50 text-green-800 border border-green-200"
                : "bg-red-50 text-red-800 border border-red-200"
            }`}>
              <p className="text-sm font-medium">{message}</p>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="(555) 123-4567"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Service Needed *
            </label>
            <select
              name="serviceNeeded"
              value={formData.serviceNeeded}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            >
              <option value="">Select a service...</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 shadow-md"
          >
            Submit & Add to Dashboard
          </button>

          <p className="text-center text-xs text-gray-500 mt-4">
            Your information will be added to our dashboard as a new lead.
          </p>
        </form>
      </div>
    </div>
  );
};

export default IntakeForm;