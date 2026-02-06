"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

// -------------------------
// All Services + Packages
// -------------------------
const servicesData = {
  "Website Development": [
    { name: "Basic", price: "$99", features: ["1-page static website", "Responsive design", "Basic contact form"], highlight: false },
    { name: "Starter", price: "$199", features: ["Up to 3 pages", "Mobile-friendly design", "Basic SEO setup", "Contact form"], highlight: false },
    { name: "Standard", price: "$399", features: ["Up to 5 pages", "Custom design", "SEO optimization", "Image slider"], highlight: true },
    { name: "Professional", price: "$699", features: ["Up to 8 pages", "Animations", "Blog integration", "Google Analytics setup"], highlight: false },
    { name: "Premium", price: "$999", features: ["10+ pages", "E-commerce setup", "Payment gateway", "Speed optimization"], highlight: false },
    { name: "Enterprise", price: "$1499+", features: ["Fully customized web solution", "API integrations", "Priority support"], highlight: false },
  ],

  "UI/UX Design": [
    { name: "Basic", price: "$149", features: ["Wireframe for 1 screen", "Basic UI elements", "1 revision"], highlight: false },
    { name: "Starter", price: "$299", features: ["Wireframes for 3 screens", "Basic UX flow", "2 revisions"], highlight: false },
    { name: "Standard", price: "$499", features: ["5 screens", "Interactive prototypes", "3 revisions"], highlight: true },
    { name: "Professional", price: "$799", features: ["10 screens", "High-fidelity designs", "User testing"], highlight: false },
    { name: "Premium", price: "$1199", features: ["20+ screens", "Full app design", "Design system"], highlight: false },
    { name: "Enterprise", price: "$1999+", features: ["Enterprise UI/UX", "Custom components", "Dedicated designer"], highlight: false },
  ],

  "Mobile App Development": [
    { name: "Basic", price: "$199", features: ["Simple Android app", "Up to 3 screens", "Basic UI", "Form submission"], highlight: false },
    { name: "Starter", price: "$399", features: ["Android & iOS", "Up to 5 screens", "Responsive UI", "Basic API integration"], highlight: false },
    { name: "Standard", price: "$699", features: ["Android & iOS", "Up to 8 screens", "Modern UI/UX", "Push notifications"], highlight: true },
    { name: "Professional", price: "$999", features: ["Android & iOS", "10+ screens", "Database integration", "Advanced features"], highlight: false },
    { name: "Premium", price: "$1499", features: ["Custom mobile app", "Payment gateway", "Live chat", "Cloud integration"], highlight: false },
    { name: "Enterprise", price: "$2499+", features: ["Enterprise-level app", "Multi-user roles", "Advanced security", "Ongoing support"], highlight: false },
  ],

  "3D Design & Visualization": [
    { name: "Basic", price: "$99", features: ["Single 3D model", "1 revision", "Standard lighting & textures"], highlight: false },
    { name: "Starter", price: "$199", features: ["Up to 3 3D models", "2 revisions", "Basic rendering setup"], highlight: false },
    { name: "Standard", price: "$399", features: ["Product visualization", "Realistic lighting & materials", "3 revisions included"], highlight: true },
    { name: "Professional", price: "$699", features: ["Architectural visualization", "Custom textures & environments", "High-resolution renders"], highlight: false },
    { name: "Premium", price: "$999", features: ["3D animation (up to 30 sec)", "Advanced motion graphics", "Unlimited revisions"], highlight: false },
    { name: "Enterprise", price: "$1499+", features: ["Full 3D project pipeline", "Dedicated 3D artist & animator", "Priority support"], highlight: false },
  ],

  "Graphic Designing": [
    { name: "Basic", price: "$49", features: ["Logo design", "1 revision", "High-quality JPG/PNG"], highlight: false },
    { name: "Starter", price: "$99", features: ["Social media posts", "2 revisions", "Basic branding"], highlight: false },
    { name: "Standard", price: "$199", features: ["Brochures & Flyers", "3 revisions", "Print-ready designs"], highlight: true },
    { name: "Professional", price: "$399", features: ["Full Branding Package", "Unlimited revisions", "Source files included"], highlight: false },
    { name: "Premium", price: "$699", features: ["UI Graphics", "Custom Illustrations", "High-res assets"], highlight: false },
    { name: "Enterprise", price: "$999+", features: ["Enterprise-level graphics", "Dedicated designer", "Priority support"], highlight: false },
  ],

  "Advertising Management": [
    { name: "Basic", price: "$149", features: ["Ad setup (1 platform)", "Basic targeting", "Monthly performance report"], highlight: false },
    { name: "Starter", price: "$299", features: ["Facebook & Instagram ads", "Audience research", "A/B testing"], highlight: false },
    { name: "Standard", price: "$499", features: ["Google + Meta ads", "Conversion tracking", "Bi-weekly optimization"], highlight: true },
    { name: "Professional", price: "$799", features: ["Multi-channel campaigns", "Retargeting setup", "Ad creative management"], highlight: false },
    { name: "Premium", price: "$1199", features: ["Full-funnel strategy", "Landing page optimization", "Advanced analytics"], highlight: false },
    { name: "Enterprise", price: "$1999+", features: ["Enterprise ad management", "High-budget optimization", "Dedicated ad strategist"], highlight: false },
  ],

  "Social Media Management": [
    { name: "Basic", price: "$99", features: ["8 posts/month", "1 platform", "Basic reporting"], highlight: false },
    { name: "Starter", price: "$199", features: ["12 posts/month", "2 platforms", "Hashtag strategy"], highlight: false },
    { name: "Standard", price: "$399", features: ["16 posts/month", "3 platforms", "Monthly insights report"], highlight: true },
    { name: "Professional", price: "$699", features: ["20+ posts/month", "Community management", "Ad integration"], highlight: false },
    { name: "Premium", price: "$999", features: ["Full content strategy", "Advanced engagement", "Influencer collaboration"], highlight: false },
    { name: "Enterprise", price: "$1499+", features: ["Custom campaigns", "Team management", "24/7 brand monitoring"], highlight: false },
  ],

  "Email Marketing": [
    { name: "Basic", price: "$79", features: ["1 campaign/month", "Template design", "Basic analytics"], highlight: false },
    { name: "Starter", price: "$149", features: ["2 campaigns/month", "A/B testing", "List segmentation"], highlight: false },
    { name: "Standard", price: "$299", features: ["4 campaigns/month", "Automated flows", "Conversion tracking"], highlight: true },
    { name: "Professional", price: "$499", features: ["Full email funnel", "Copywriting & design", "Advanced automation"], highlight: false },
    { name: "Premium", price: "$799", features: ["Behavioral targeting", "Custom templates", "Priority support"], highlight: false },
    { name: "Enterprise", price: "$1299+", features: ["Enterprise-scale automation", "CRM integration", "Dedicated email strategist"], highlight: false },
  ],

  "Content Writing & Copywriting": [
    { name: "Basic", price: "$99", features: ["2 blog posts (500 words)", "SEO optimization", "Proofreading"], highlight: false },
    { name: "Starter", price: "$199", features: ["4 blog posts (800 words)", "Keyword research", "Meta tags"], highlight: false },
    { name: "Standard", price: "$399", features: ["8 content pieces", "Ad & social copy", "Editing & revisions"], highlight: true },
    { name: "Professional", price: "$699", features: ["Website content", "Email + ad copy", "Brand voice alignment"], highlight: false },
    { name: "Premium", price: "$999", features: ["Full content strategy", "Long-form articles", "Copywriting for campaigns"], highlight: false },
    { name: "Enterprise", price: "$1499+", features: ["Enterprise brand content", "Team collaboration", "Dedicated content manager"], highlight: false },
  ],

  "SEO Optimization": [
    { name: "Basic", price: "$99", features: ["Website audit", "Basic keyword research", "On-page SEO"], highlight: false },
    { name: "Starter", price: "$199", features: ["Meta tags optimization", "3 keywords targeting", "Monthly report"], highlight: false },
    { name: "Standard", price: "$399", features: ["10 keywords", "Content optimization", "Backlink setup"], highlight: true },
    { name: "Professional", price: "$699", features: ["30 keywords", "Technical SEO", "Analytics tracking"], highlight: false },
    { name: "Premium", price: "$999", features: ["50 keywords", "Local SEO", "Advanced reporting"], highlight: false },
    { name: "Enterprise", price: "$1499+", features: ["Enterprise SEO", "Global targeting", "Dedicated SEO manager"], highlight: false },
  ],
};

// -------------------------

export default function page() {
  const serviceNames = Object.keys(servicesData);
  const [activeService, setActiveService] = useState(serviceNames[0]);
  const packages = servicesData[activeService];

  return (
    <section className="py-28 bg-linear-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900">{activeService} Packages</h2>
          <p className="text-gray-500 mt-2 text-lg">
            Choose a plan that fits your business goals
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {serviceNames.map((service) => (
            <button
              key={service}
              onClick={() => setActiveService(service)}
              className={`py-2 px-6 rounded-full font-medium transition-all ${
                activeService === service
                  ? "bg-blue-600 text-white"
                  : "bg-white border border-gray-300 text-gray-600 hover:bg-gray-100"
              }`}
            >
              {service}
            </button>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className={`rounded-2xl p-6 flex flex-col border transition-all duration-300 shadow-lg ${
                pkg.highlight
                  ? "bg-linear-to-b from-blue-600 to-blue-500 text-white border-blue-500 shadow-blue-300"
                  : "bg-white border-gray-200 hover:border-blue-500"
              }`}
            >
              <h3 className={`text-2xl font-semibold mb-2 ${
                pkg.highlight ? "text-white" : "text-gray-800"
              }`}>
                {pkg.name}
              </h3>

              <p className={`text-3xl font-bold mb-4 ${
                pkg.highlight ? "text-white" : "text-blue-600"
              }`}>
                {pkg.price}
              </p>

              <ul className="space-y-2 flex-1">
                {pkg.features.map((feature, i) => (
                  <li
                    key={i}
                    className={`flex items-center ${
                      pkg.highlight ? "text-blue-100" : "text-gray-600"
                    }`}
                  >
                    <FaCheckCircle
                      className={`mr-2 ${
                        pkg.highlight ? "text-white" : "text-green-500"
                      }`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Fixed Next.js Routing */}
              <Link
                href="/Contact"
                className={`mt-6 font-medium py-2 px-4 rounded-xl text-center transition-all duration-300 ${
                  pkg.highlight
                    ? "bg-white text-blue-600 hover:bg-gray-100"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Get Started
              </Link>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
