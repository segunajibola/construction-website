"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

export function Contact() {
  const socialLinks = [
    {
      icon: Twitter,
      href: "https://twitter.com/yourcompany",
      label: "Twitter",
    },
    {
      icon: Facebook,
      href: "https://facebook.com/yourcompany",
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/yourcompany",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/yourcompany",
      label: "LinkedIn",
    },
  ];
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // You can integrate an API here (e.g. Firebase, Formspree, or custom backend)
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-10" id="contact">
      <div className="container mx-auto px-3">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-300">
          Contact Us
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-10">
          Have a project in mind? We'd love to hear from you. Fill out the form
          below and we'll get back to you.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-900 p-3 rounded-sm shadow-sm space-y-3"
        >
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              required
              rows={5}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-700 dark:bg-gray-300 text-white dark:text-gray-900 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="my-6 mx-3 px-3 bg-white dark:bg-gray-900 rounded-sm dark:border-gray-300 border shadow-sm p-3 space-y-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 text-center">
          Contact Information
        </h3>

        {/* Email */}
        <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
          <Mail className="w-6 h-6 text-blue-700" />
          <a href="mailto:info@buildpro.com" className="hover:underline">
            info@buildpro.com
          </a>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
          <Phone className="w-6 h-6 text-blue-700" />
          <a href="tel:+1234567890" className="hover:underline">
            +1 (234) 567-890
          </a>
        </div>

        {/* Location */}
        <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
          <MapPin className="w-6 h-6 text-blue-700" />
          <span>123 Main Street, City, Country</span>
        </div>

        {/* Social Media */}
        <div className="flex items-center justify-center gap-6 mt-4">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-700 transition"
                aria-label={social.label}
              >
                <Icon className="w-6 h-6" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
