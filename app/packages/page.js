"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaClock, FaUserTie, FaCode, FaWhatsapp } from "react-icons/fa";

const servicesData = {
  "Custom Website Development": [
    { 
      name: "Quick Launch", 
      usd: "$90",
      pkrOld: "PKR 25,500",
      pkr: "PKR 22,000",
      timeline: "5-7 Days",
      idealFor: "Freelancers & Personal Brands",
      techStack: "Next.js • Tailwind CSS",
      features: [
        "Ultra-Fast Single Page Design", 
        "Conversion-Ready WhatsApp Button", 
        "Mobile-First Responsive Layout", 
        "SEO Meta Tags Optimization", 
        "Google Search Console Setup", // Naya
        "02 Revision Rounds"
      ],
      extras: ["Extra Section: +$20", "Fast 48h Delivery: +$35"]
    },
    { 
      name: "Web Presence", 
      usd: "$180",
      pkrOld: "PKR 50,000",
      pkr: "PKR 35,000",
      timeline: "7-10 Days",
      idealFor: "Clinics & Small Retail",
      techStack: "Next.js • Sanity CMS",
      features: [
        "03 High-End Professional Pages", 
        "Google Maps & Contact Integration", 
        "Easy-to-Use Content Editor (CMS)", 
        "Premium Framer Motion Animations", 
        "Advanced On-Page SEO", 
        "30 Days Post-Launch Support",
        "Speed Grade A+ Guarantee" // Naya
      ],
      extras: ["Extra Page: +$30", "Live Chat Setup: +$20"]
    },
    { 
      name: "Growth Pro", 
      isPopular: true, // MARKED AS MOST POPULAR ⭐
      usd: "$250",
      pkrOld: "PKR 70,000",
      pkr: "PKR 54,000",
      timeline: "2-3 Weeks",
      idealFor: "SMEs & Educational Institutes",
      techStack: "Next.js • PostgreSQL",
      features: [
        "Up to 06 Custom Dynamic Pages", 
        "Full Admin Power-Dashboard", 
        "Advanced Analytics & Tracking", 
        "Professional Technical SEO", 
        "Database Integration (User Data)", 
        "Email Marketing Integration", // Naya
        "Priority Mobile Optimization",
        "Unlimited Revisions" // Naya
      ],
      extras: ["User Authentication: +$60", "Newsletter Setup: +$40"]
    },
    { 
      name: "Business Elite", 
      usd: "$399",
      pkrOld: "PKR 111,000",
      pkr: "PKR 90,000",
      timeline: "3 Weeks+",
      idealFor: "Real Estate & Law Firms",
      techStack: "Next.js • Supabase",
      features: [
        "10+ Premium Custom Pages", 
        "Facebook Pixel & CAPI Setup", 
        "Business Process Sync (Forms)", 
        "Advanced UI Component Library", 
        "Secure User Authentication", // Naya
        "Automated PDF Invoicing", // Naya
        "Complete Staff Training Session",
        "60 Days VIP Support"
      ],
      extras: ["Google Ads Setup: +$100", "Multi-Language Support: +$80"]
    },
    { 
      name: "Custom Enterprise", 
      usd: "Let's Talk", 
      pkr: "Contact Us",
      pkrOld: "",
      timeline: "Custom",
      idealFor: "SaaS Startups & Scale-ups",
      techStack: "Full Stack (AWS / Vercel)",
      features: [
        "Scalable Software Solution", 
        "Enterprise-Grade Data Security", 
        "Third-Party API Integration", 
        "Real-time Data Dashboards", 
        "Custom Workflow Automation", 
        "Lifetime Critical Support", // Naya
        "Dedicated Project Manager"
      ],
      extras: ["Mobile App (Add-on): +$1500", "Dedicated Server Setup: +$200"]
    }
],

  "Shopify Stores": [
    { 
      name: "Shopify Dropshipping Launch", 
      usd: "$120", pkrOld: "PKR 45,000", pkr: "PKR 35,000", 
      timeline: "4 Days", idealFor: "Beginner Dropshippers", techStack: "Shopify • Free Theme", 
      features: [
        "Store Setup & Branding", 
        "10 Trending Products Import", 
        "Conversion-Ready Product Pages", 
        "Trust Badges & Sales Apps",
        "WhatsApp Order Integration",
        "Expected: Professional Store Ready for Ads"
      ],
      extras: ["24h Fast Delivery: +$30", "Logo Design: +$25"]
    },
    { 
      name: "Standard Brand Store", 
      isPopular: true, // MARKED AS MOST POPULAR ⭐
      usd: "$250", pkrOld: "PKR 85,000", pkr: "PKR 69,999", 
      timeline: "1 Week", idealFor: "Local Clothing/Product Brands", techStack: "Shopify • Premium Theme", 
      features: [
        "Premium Theme Customization", 
        "Up to 30 Products Upload", 
        "Advanced Category Mega-Menu", 
        "Automated Discount System", 
        "Shipping & Tax Configuration",
        "Inventory Management Setup",
        "Expected: High-End Brand Experience"
      ],
      extras: ["Product Copywriting: +$50", "Payment Gateway Fix: +$60"]
    },
    { 
      name: "Shopify Scaling Pro", 
      usd: "$400", pkrOld: "PKR 140,000", pkr: "PKR 115,000", 
      timeline: "2 Weeks", idealFor: "Scaling E-com Businesses", techStack: "Shopify • Advanced Apps", 
      features: [
        "Full Funnel Store Design", 
        "Abandoned Cart Recovery System", 
        "Upsell & Cross-sell Workflows", 
        "Customer Loyalty Program Setup", 
        "Multi-Currency Support",
        "Speed Optimization (Mobile focus)",
        "Expected: Massive Conversion Boost"
      ],
      extras: ["Custom Landing Page: +$80", "App Integration (Custom): +$100"]
    },
    { 
      name: "Elite Enterprise Shopify", 
      usd: "$700", pkrOld: "PKR 250,000", pkr: "PKR 199,000", 
      timeline: "3 Weeks+", idealFor: "International Stores", techStack: "Shopify Plus / Custom", 
      features: [
        "End-to-End Enterprise Design", 
        "Custom Liquid Coding (If needed)", 
        "Advanced Analytics & Tracking", 
        "Wholesale/B2B Section Setup", 
        "CRM & Email Marketing Sync",
        "Priority Support (30 Days)",
        "Expected: Global Market Dominance"
      ],
      extras: ["SEO Audit & Fix: +$120", "Dedicated Developer/mo: +$500"]
    }
  ],

  "WordPress Solutions": [
    { 
      name: "WP Starter / Landing Page", 
      usd: "$90", pkrOld: "PKR 35,000", pkr: "PKR 25,000", 
      timeline: "5 Days", idealFor: "Portfolios & Service Ads", techStack: "WP • Elementor", 
      features: [
        "05 Modern Professional Pages", 
        "Mobile Responsive Design", 
        "Contact & Lead Gen Forms", 
        "Social Media & Map Integration", 
        "Fast Page Loading Setup",
        "Expected: Professional Digital Profile"
      ],
      extras: ["Extra Page: +$15", "Live Chat: +$15"]
    },
    { 
      name: "Business Growth Site", 
      isPopular: true, // MARKED AS MOST POPULAR ⭐
      usd: "$180", pkrOld: "PKR 60,000", pkr: "PKR 49,999", 
      timeline: "10 Days", idealFor: "SMEs & Corporate Offices", techStack: "WP • Astra Pro / Divi", 
      features: [
        "Up to 10 Detailed Pages", 
        "Blog/Article Section Setup", 
        "Advanced Security Firewalls", 
        "SEO Meta Tags & Structure", 
        "Professional Email Setup",
        "Speed Grade A+ Guarantee",
        "Expected: Strong Corporate Authority"
      ],
      extras: ["Newsletter Integration: +$30", "Logo Design: +$30"]
    },
    { 
      name: "WooCommerce Starter", 
      usd: "$280", pkrOld: "PKR 95,000", pkr: "PKR 79,999", 
      timeline: "2 Weeks", idealFor: "Low-Cost E-com Stores", techStack: "WP • WooCommerce", 
      features: [
        "Store Setup (No Monthly Fees)", 
        "Product Management Dashboard", 
        "Standard Payment Gateway", 
        "Coupons & Orders Tracking", 
        "Automated Invoice Emails",
        "Expected: Self-Hosted Sales Machine"
      ],
      extras: ["Extra 20 Products: +$40", "Speed Optimization: +$50"]
    },
    { 
      name: "Custom WP Powerhouse", 
      usd: "$500", pkrOld: "PKR 180,000", pkr: "PKR 145,000", 
      timeline: "3-4 Weeks", idealFor: "High-Traffic Custom Sites", techStack: "WP • Custom Theme/Code", 
      features: [
        "Advanced Custom Functionality", 
        "Membership / Course Portal Setup", 
        "API Third-Party Integrations", 
        "Weekly Backup & Maintenance", 
        "Priority Security Hardening",
        "Advanced Marketing Pixel Setup",
        "Expected: Ultimate Business Asset"
      ],
      extras: ["LMS Integration: +$150", "Server Management (3mo): +$120"]
    }
  ],

  "UI/UX Design": [
    { 
      name: "Basic UI Audit & Strategy", 
      usd: "$30", pkrOld: "PKR 8,000", pkr: "PKR 5,999", 
      timeline: "2 Days", idealFor: "Existing Apps", techStack: "Figma • Loom", 
      features: [
        "Design Mistake Report", 
        "Improvement Video Guide", 
        "UX Strategy Tips",
        "2 Revisions"
      ],
      extras: "Extra Revision: +$10 | Fast 1-Day Delivery: +$15"
    },
    
    { 
      name: "High-Converting Landing Page",
      isPopular:true, 
      usd: "$90", pkrOld: "PKR 25,000", pkr: "PKR 22,000", 
      timeline: "5 Days", idealFor: "Sales & Marketing", techStack: "Figma • Adobe XD", 
      features: [
        "Modern Custom Layout", 
        "Mobile Responsive Version", 
        "Editable Source File", 
        "Premium Assets & Images", 
        "6 Revisions",
        "No Code Included",
        "Mockups"
      ],
      extras: "Additional Section: +$35 | Custom Illustrations: +$40"
    },

    { 
      name: "Standard Wireframe Mockups", 
      usd: "$160", pkrOld: "PKR 44,000", pkr: "PKR 40,000", 
      timeline: "7 Days", idealFor: "Idea Validation", techStack: "Figma • FigJam", 
      features: [
        "5 High-Fidelity Screens",
        "User Journey Mapping", 
        "Interactive Clickable Link",
        "Source File (Figma)",
        "6 Revisions",
        "No Code Included"
      ],
      extras: "Extra Screen: +$25"
    },

    { 
      name: "Pro Mobile App UI/UX Design", 
      usd: "$350", pkrOld: "PKR 98,000", pkr: "PKR 95,000", 
      timeline: "2 Weeks", idealFor: "App Startups", techStack: "Figma • Prototype", 
      features: [
        "Up to 15 Premium Screens", 
        "Fully Interactive Prototype", 
        "Dark & Light Mode UI", 
        "Custom SVG Icon Set", 
        "Screen Prototype",
        "Professional Design System", 
        "Unlimited Revisions",
        "No Code Included",
        "Screen Mockups"
      ],
      extras: "App Store Screenshots: +$50 | User Testing Video: +$70"
    },

    { 
      name: "Premium SaaS Dashboard UI", 
      usd: "$550", pkrOld: "PKR 160,000", pkr: "PKR 152,000", 
      timeline: "3 Weeks", idealFor: "Software Owners", techStack: "Figma • Components", 
      features: [
        "8 High-Fidelity Screens",
        "Complete Web App UI", 
        "Advanced Admin Dashboard", 
        "Complex Data Visuals", 
        "Wireframe and Prototype",
        "Reusable Component Library", 
        "Developer Handover File", 
        "Post-Delivery Support",
        "08 Revisions",
        "No Code Included",
        "Screen Mockups"
      ],
      extras: "Live Presentation: +$60 | Documentation: +$80 | Revisions +5$"
    },

    { 
      name: "Ultimate Full Product Design", 
      usd: "$1250", pkrOld: "PKR 350,000", pkr: "PKR 340,000", 
      timeline: "4 Weeks+", idealFor: "Enterprises", techStack: "Figma + Adobe XD + Components", 
      features: [
        "20 High-Fidelity Screens",
        "Full End-to-End UX Research", 
        "Web & Mobile UI Ecosystem", 
        "Advanced Motion Prototype", 
        "Branding & Marketing Kit", 
        "Wireframe and Prototype",
        "User Feedback Testing", 
        "Maintenance & Updates", 
        "Lifetime File Access",
        "15 Revisions",
        "No Code Included",
        "Screen Mockups"
      ],
      extras: "Pitch Deck Design: +$100 | Multi-Language Support: +$150 | Revision +5$"
    }
  ],

  "Mobile App Development": [
    { 
      name: "Lite MVP Prototype", usd: "$300", pkrOld: "PKR 100,000", pkr: "PKR 85,000", 
      timeline: "2-3 Weeks", idealFor: "Small Ideas", techStack: "Flutter / Expo", 
      features: ["Android APK", "Clean Modern UI", "3-5 Screens", "App Icon", "1 Revision", "Basic Bug Fixes", "Source Code Handover"],
      extras: ["iOS Version: +$100", "Play Store Upload: +$40"]
    },
    { 
      name: "MVP Plus (Starter)", usd: "$500", pkrOld: "PKR 150,000", pkr: "PKR 135,000", 
      timeline: "4 Weeks", idealFor: "Startups", techStack: "React Native • Expo", 
      features: ["iOS & Android", "User Authentication", "8 Basic Screens", "App Icon", "3 Revisions", "15 Days Support", "Push Notifications"],
      extras: ["Fast Delivery: +$150", "Social Login: +$50"]
    },
    { 
      name: "Standard Business App",
      isPopular: true,
      usd: "$850", pkrOld: "PKR 250,000", pkr: "PKR 230,000", 
      timeline: "6-8 Weeks", idealFor: "Local Business", techStack: "Flutter • Firebase", 
      features: ["Push Notifications", "Google Maps Integration", "Admin Dashboard", "Payment Gateway", "3 Months Support", "Free Store Deployment", "SEO/ASO Basic"],
      extras: ["API Integration: +$80", "Dark Mode UI: +$40"]
    },
    { 
      name: "E-Com Mobile Store", usd: "$1350", pkrOld: "PKR 400,000", pkr: "PKR 380,000", 
      timeline: "8-10 Weeks", idealFor: "Online Stores", techStack: "React Native • Stripe", 
      features: ["Product Catalog", "Cart & Checkout", "Order Tracking", "Admin Inventory Panel", "Multi-Language", "Free Store Deployment", "Analytics Integration"],
      extras: ["Wishlist: +$50", "Discount Coupons System: +$70"]
    },
    { 
      name: "Social Media / Community", usd: "$2100", pkrOld: "PKR 650,000", pkr: "PKR 590,000", 
      timeline: "12-15 Weeks", idealFor: "Communities", techStack: "Flutter • Node.js", 
      features: ["Real-time Chat", "Media Sharing", "Friend Requests", "Activity Feed", "Live Notifications", "Admin Control Panel", "6 Months Support"],
      extras: ["Video Calling: +$350", "AI Content Filter: +$200"]
    },
    { 
      name: "Fitness / Health Pro", usd: "$2800", pkrOld: "PKR 850,000", pkr: "PKR 780,000", 
      timeline: "4-5 Months", idealFor: "Health Tech", techStack: "Swift • Kotlin", 
      features: ["Sensor Integration", "Data Visualizations", "Wearable Sync", "Personal Trainer Panel", "Monthly Health Reports", "Custom UI Animations", "Lifetime Bug Fixes"],
      extras: ["AI Meal Planner: +$250", "Workout Voice Coach: +$180"]
    },
    { 
      name: "Custom Enterprise", usd: "Custom", pkr: "Contact Us", pkrOld: "", 
      timeline: "Custom", idealFor: "Scale-ups", techStack: "Full Native Stack", 
      features: ["Scalable Architecture", "Bank-Level Security", "Multiple Integrations", "Dedicated Project Manager", "Team Training", "Source Code Access", "Full Deployment"],
      extras: ["AWS Setup: +$300", "24/7 Priority Support: Contact"]
    }
  ],

  "3D Design & Visualization": [
    { 
      name: "3D Asset & Icon Pack", usd: "$100", pkrOld: "PKR 35,000", pkr: "PKR 28,000", 
      timeline: "4-6 Days", idealFor: "Web & UI/UX", techStack: "Blender • Spline", 
      features: ["Up to 8 Custom 3D Icons", "High-Res 2K Renders", "Transparent (PNG/WebP)", "Source Files (.blend)", "Unlimited Color Revisions"],  
      extras: ["Animated Loop: +$40", "Extra Icon: +$20"]
    },
    { 
      name: "Realistic Product Mockup", isPopular:true, usd: "$180", pkrOld: "PKR 60,000", pkr: "PKR 50,000", 
      timeline: "7-10 Days", idealFor: "E-commerce Brands", techStack: "Blender • C4D", 
      features: ["Photorealistic Textures", "Studio Lighting Setup", "5 Camera Angles", "4K Ultra HD Renders", "Label & Packaging Design", "Source Files"],
      extras: ["360° Rotation Video: +$60", "Complex Geometry: +$40"]
    },
    { 
      name: "Interior Visualization", usd: "$450", pkrOld: "PKR 140,000", pkr: "PKR 125,000", 
      timeline: "10-14 Days", idealFor: "Architects / Home Owners", techStack: "3ds Max • V-Ray / Corona", 
      features: ["Full Room Concept Design", "Photo-Real Materials", "10 High-Res Renders", "Furniture & Decor Layout", "Day & Night Lighting", "Final Post-Processing"],
      extras: ["360° Panorama View: +$100", "VR Walkthrough: +$150"]
    },
    { 
      name: "3D Product Motion Ad", usd: "$650", pkrOld: "PKR 200,000", pkr: "PKR 185,000", 
      timeline: "2-3 Weeks", idealFor: "Social Media Ads", techStack: "After Effects • Cinema 4D", 
      features: ["15-30 Sec Cinematic Ad", "Dynamic Product Animation", "Exploded View Animation", "Sound Design & SFX", "Storyboarding", "4K High-End Export"],
      extras: ["AI Voiceover: +$30", "Extra 15 Sec: +$150"]
    },
    { 
      name: "3D Character & Game Assets", usd: "$950", pkrOld: "PKR 300,000", pkr: "PKR 265,000", 
      timeline: "3-4 Weeks", idealFor: "Game Devs / Animation", techStack: "ZBrush • Maya • Substance", 
      features: ["Pixar/Stylized Character", "Full Body & Face Rigging", "High-End PBR Texturing", "Ready for Unreal/Unity", "Basic Animation (Walk/Idle)", "Source Files (.fbx/.obj)"],
      extras: ["Extra Clothing Set: +$100", "Custom Action Sequence: +$120"]
    },
    { 
      name: "Premium Walkthrough", usd: "$1800", pkrOld: "PKR 550,000", pkr: "PKR 495,000", 
      timeline: "4-6 Weeks", idealFor: "Real Estate Projects", techStack: "Unreal Engine 5 • Lumion", 
      features: ["Photoreal 4K Walkthrough", "Cinematic Environment Design", "Up to 15 Render Angles", "Commercial/Residential Scale", "Advanced Lighting & Foliage", "Full CGI Animation", "Background Music & VO"],
      extras: ["Interactive 3D Tour: +$400", "Drone Style Shots: +$150"]
    }
  ],

  "Graphic Designing": [
    { 
      name: "Basic Logo Package", usd: "$55", pkrOld: "PKR 16,800", pkr: "PKR 13,500", 
      timeline: "2-3 Days", idealFor: "Personal Brands", techStack: "Adobe Illustrator", 
      features: ["02 Professional Concepts", "Transparent PNG / High-Res Files", "Color Palette Guide", "Social Media Profile Sizes", "3 Revisions"],
      extras: ["Social Media Kit: +$15", "Fast 24h Delivery: +$10"]
    },
    { 
      name: "Social Media Graphics Pack", usd: "$65", pkrOld: "PKR 21,000", pkr: "PKR 16,500", 
      timeline: "4 Days", idealFor: "Businesses & Influencers", techStack: "Photoshop • Illustrator", 
      features: ["10 Custom Design Posts", "Ad Creatives Included", "Free Content/Caption Writing", "Story Templates", "Editable Source Files (PSD/AI)", "Brand-Consistent Design"],
      extras: ["Carousel Post: +$10", "Reel Cover Design: +$10"]
    },
    { 
      name: "Complete Branding Kit",isPopular:true, usd: "$95", pkrOld: "PKR 29,000", pkr: "PKR 24,000", 
      timeline: "5 Days", idealFor: "Startups • New Brands", techStack: "Full Adobe Suite", 
      features: ["Primary Logo + 1 Sub-mark", "Business Cards & Letterhead", "Brand Color Palette", "Font Files Selection", "Brand Usage Guide (PDF)"],
      extras: ["Email Signature: +$12", "Vector Source File: +$20"]
    },
    { 
      name: "Print & Marketing Media", usd: "$135", pkrOld: "PKR 42,000", pkr: "PKR 35,000", 
      timeline: "5-6 Days", idealFor: "Events & Retail", techStack: "InDesign • Illustrator", 
      features: ["Brochure Design (Up to 4 Pages)", "Flyers & Posters", "Standy & Banner Design", "Print Ready Files (CMYK + Bleed)", "Custom Layouts"],
      extras: ["Extra Brochure Page: +$25", "Vector Tracing: +$15"]
    },
    { 
      name: "Pro Pitch Deck", usd: "$190", pkrOld: "PKR 58,000", pkr: "PKR 52,000", 
      timeline: "7 Days", idealFor: "Corporate & Pitching", techStack: "PPT • Keynote", 
      features: ["Up to 18 Custom Slides", "Data Visualizations / Charts", "Icons & Imagery Sourcing", "Fully Brand Consistent", "PDF & Source Files"],
      extras: ["Slide Animations: +$35", "Market Research Layout: +$80"]
    },
    { 
      name: "Corporate Identity Pack", usd: "$420", pkrOld: "PKR 130,000", pkr: "PKR 115,000", 
      timeline: "12 Days", idealFor: "Corporate / Enterprise", techStack: "Full Adobe Suite", 
      features: ["Full Brand Guideline Book", "Office Stationery", "Vehicle Wrap Design", "Staff ID Cards & Uniform Guide", "Billboard & Signage Design", "Creative Ad Design"],
      extras: ["Website UI Mockup: +$120", "Social Templates Pack: +$40"]
    }
],

  "Advertising Management": [
    { 
      name: "Meta Ads Launch Campaign", 
      usd: "$45", pkrOld: "PKR 15,000", pkr: "PKR 12,000", 
      timeline: "14 Days (One-Time)", idealFor: "Local Shops & New Brands", techStack: "Meta Ads Manager", 
      features: [
        "01 Targeted Ad Campaign (WhatsApp/Call objective)", 
        "01 Professional Ad Creative (Image+Copy)", 
        "Audience Interest & Behavior Research", 
        "Budget Optimization Strategy",
        "Basic Performance Report",
        "Expected: 15k–35k Reach | 60–120 Clicks | 5–15 Leads"
      ],
      extras: ["Ad Account Setup: +$10", "Extra Graphic: +$15", "Video Ad/Reel: +$25"]
    },
    { 
      name: "Meta Ads Growth Campaign", 
      usd: "$65", pkrOld: "PKR 20,000", pkr: "PKR 16,500", 
      timeline: "14-21 Days (One-Time)", idealFor: "SMEs & Service Businesses", techStack: "Meta Ads Manager", 
      features: [
        "Full Ad Campaign Setup", 
        "02 Ad Creatives A/B Tested", 
        "02 Audience Sets Tested", 
        "Week 2 Retargeting Included",
        "Winning Audience Identified",
        "Expected: 35k–70k Reach | 150–300 Clicks | 15–35 Leads"
      ],
      extras: ["Carousel Ad (3 slides): +$15", "Facebook Pixel Setup: +$12", "Next Strategy Call: +$10"]
    },
    { 
      name: "Meta Starter Retainer", 
      isPopular: true, // Most Popular
      usd: "$90", pkrOld: "PKR 30,000", pkr: "PKR 25,000", 
      timeline: "Monthly Retainer", idealFor: "Small Businesses Ready for Monthly Ads", techStack: "Meta Business Suite", 
      features: [
        "Full Monthly Management", 
        "01 Active Campaign Managed Monthly", 
        "02 Ad Creatives Refreshed (New copy + image)", 
        "Audience Monitoring + Weekly Bid Adjustments", 
        "Facebook Pixel Setup + Basic Event Tracking",
        "Monthly Performance Report with Next-Month Plan",
        "Ad Budget: PKR 10k-20k/month (Paid directly to Meta)"
      ],
      extras: ["Retargeting Campaign: +$20", "Instagram Stories Ads: +$15"]
    },
    { 
      name: "Meta & Google Growth Pro", 
      usd: "$180", pkrOld: "PKR 60,000", pkr: "PKR 50,000", 
      timeline: "Monthly Retainer", idealFor: "Scaling E-com & Services", techStack: "Meta & Google Ads", 
      features: [
        "Multi-Platform Ad Funnel", 
        "A/B Testing (Creatives & Audiences)", 
        "Lookalike & Custom Audience Setup", 
        "Retargeting (Losing Lead Recovery)", 
        "06 High-End Creatives/Month",
        "Detailed Bi-Weekly ROI Reports",
        "Ad Budget: PKR 20k-50k/month (Paid directly to Meta)"
      ],
      extras: ["Landing Page Audit: +$15", "CAPI Implementation: +$25", "Competitor Hijacking: +$20"]
    },
    { 
      name: "Omni-Channel Enterprise", 
      usd: "$850", pkrOld: "PKR 280,000", pkr: "PKR 250,000", 
      timeline: "Monthly Retainer", idealFor: "Global Corporate Brands", techStack: "Full Management Stack", 
      features: [
        "Full Funnel (Awareness → Purchase)", 
        "LinkedIn/Meta/Google Ads", 
        "Advanced Conversion API (CAPI)", 
        "Strategic ROI/ROAS Optimization", 
        "CRM & Sales Pipeline Integration",
        "Dedicated Priority Account Manager",
        "Quarterly Business Growth Workshop"
      ],
      extras: ["High-Ticket Copywriting: +$60", "Automation Funnel Setup: +$80"]
    }
],

"Social Media Management": [
  { 
    name: "Basic SM Starter", 
    usd: "$85", pkrOld: "PKR 25,000", pkr: "PKR 22,500", 
    timeline: "Monthly", idealFor: "Individuals & Beginners", techStack: "Illustrator • Photoshop", 
    features: [
      "12 Custom Posts/Month", 
      "Standard Engaging Captions", 
      "02 Professional Reels Edits", 
      "Ready-to-Post High-Res Files", 
      "Full Account Setup & Optimization", 
      "Keyword Rich Bio Writing", 
      "Weekly Hashtag Plan", 
      "01 Story Design Per Week", 
      "Monthly Performance Report", 
      "03 Revision Rounds"
    ],
    extras: [
      "2 Extra Posts: +$20", 
      "DM Auto-Reply Setup: +$15", 
      "Fast 24h Setup: +$30",
      "Extra Revision: +$5"
    ]
  },
  { 
    name: "Business Growth Pack", 
    isPopular: true, // Most Popular
    usd: "$180", pkrOld: "PKR 55,000", pkr: "PKR 48,000", 
    timeline: "Monthly", idealFor: "Local Shops & Service Biz", techStack: "Illustrator • Photoshop", 
    features: [
      "20 Premium Posts/Month", 
      "06 High-End Reels Edits", 
      "Monthly Content Calendar", 
      "01 Strategy & Approval Round", 
      "Direct Page Scheduling", 
      "Comments & Spam Management", 
      "Audience Engagement (Likes/Interactions)", 
      "Competitor Tracking & Analysis", 
      "Professional Highlight Cover Designs", 
      "Monthly Performance Intelligence Report",
      "Basic Meta Ads Setup (Excl. Budget)", 
      "02 Strategy Calls Per Month"
    ],
    extras: [
      "Daily Story Posting: +$30", 
      "Community Building: +$50", 
      "Customer Lead Tracking: +$40",
      "Extra Revision: +$5"
    ]
  },
  { 
    name: "Influencer Pro", 
    usd: "$360", 
    pkrOld: "PKR 120,000", 
    pkr: "PKR 98,000", 
    timeline: "Monthly", 
    idealFor: "Public Figures", 
    techStack: "Meta • TikTok", 
    features: [
      "Viral Content Strategy & Planning", 
      "15 Professional Video Scripts", 
      "Brand Collaboration Outreach", 
      "Active DMs & Comment Management", 
      "Organic Growth Hacking (Tips & Tricks)", 
      "Weekly Performance Analytics", 
      "Daily Trend & Audio Tracking", 
      "Content Calendar Management", 
      "SEO Optimized Captions & Hashtags", 
      "Profile Bio & Linktree Setup"
    ],
    extras: [
      "Extra 5 Reels Editing: +$50", 
      "Media Kit Design (PDF): +$40", 
      "Global PR Outreach: +$100",
      "Verified Badge Guide: +$30",
      "Thumbnail/Cover Designs: +$25"
    ]
  },
  { 
    name: "Elite Brand Management", 
    usd: "$680", 
    pkrOld: "PKR 200,000", 
    pkr: "PKR 165,000", 
    timeline: "Monthly", 
    idealFor: "Brands & High-End Stars", 
    techStack: "Sprout Social • Meta Business Suite", 
    features: [
      "Daily Multi-Platform Posting", 
      "12 High-End Edited Reels/Shorts", 
      "Daily Story Series & Interactive Polls", 
      "Paid Ad Campaign Setup & Monitoring", 
      "Weekly Performance Strategy Calls", 
      "24/7 Crisis & Reputation Management", 
      "Advanced Community Engagement (DMs/Comments)", 
      "Creative Direction & Photoshoot Planning", 
      "Competitor Benchmarking & Analysis", 
      "Monthly ROI & Growth Intelligence Report", 
      "Influencer Coordination (Up: 3/mo)", 
      "Custom Social Media Style Guide"
    ],
    extras: [
      "Additional 5 Professional Reels: +$80", 
      "Email Marketing Integration: +$100", 
      "Professional Photography Session: +$250",
      "LinkedIn Ghostwriting: +$150",
      "Brand Protection (Copyright Setup): +$70"
    ]
  },
  { 
    name: "Global Digital Presence", 
    usd: "$1,500", 
    pkrOld: "PKR 420,000", 
    pkr: "PKR 260,000", 
    timeline: "Monthly", 
    idealFor: "Inter Enterprises & Large Brands", 
    techStack: "Full Stack Management • AI Analytics", 
    features: [
      "Multi-Language Content (Global Reach)", 
      "Priority 24/7 Crisis & PR Management", 
      "Full-Scale SEO & Search Dominance", 
      "Global PR Outreach & Media Placements", 
      "Round-the-Clock Social Monitoring", 
      "Premium Influencer Network Access", 
      "Monthly Strategy & Growth Workshops", 
      "Knowledge Graph & Google Panel Setup", 
      "Global Trend Mapping & Market Hijacking", 
      "Conversion Rate Optimization (CRO)", 
      "Brand Protection & Trademark Monitoring", 
      "Omni-channel Ad Management (Google/Meta/LI)"
    ],
    extras: [
      "Podcast Production (Full Set): +$200", 
      "Official Wiki Page Creation: +$300", 
      "Verified Badge Acquisition Help: +$150",
      "Extra Revision Loop: +$5",
      "Custom Monthly Video Ad: +$120"
    ]
  }
],

  "Email Marketing": [
    { 
      name: "Newsletter Starter Pack", 
      usd: "$70", pkrOld: "PKR 19,500", pkr: "PKR 18,000", 
      timeline: "Monthly", idealFor: "Bloggers & Content Creators", techStack: "Mailchimp • Sendinblue", 
      features: [
        "Professional Newsletter Setup", 
        "Existing List Import & Cleanup", 
        "01 Custom Branded Template", 
        "Spam Filter Optimization", 
        "Basic Audience Segmentation", 
        "Campaign Performance Analytics",
        "Subject Line A/B Testing", 
        "02 Revision Rounds"
      ],
      extras: ["Fast 24h Setup: +$30", "Custom Email Footer: +$15", "Extra Template: +$25"]
    },
    { 
      name: "E-Com Automation Mastery", 
      isPopular: true, // Most Popular
      usd: "$180", pkrOld: "PKR 50,000", pkr: "PKR 47,000", 
      timeline: "Monthly", idealFor: "E-commerce & Shopify Stores", techStack: "Klaviyo • Omnisend", 
      features: [
        "High-Converting Abandon Cart Flow", 
        "Branded Welcome Email Series", 
        "Post-Purchase Review Request", 
        "VIP Customer Segmentation", 
        "Dynamic Discount Coupon Setup", 
        "Weekly Revenue & Sales Report",
        "Email List Growth Pop-up", 
        "Unlimited Revisions"
      ],
      extras: ["SMS Marketing Sync: +$50", "Pop-up Form Design: +$40", "Holiday Promo Flow: +$60"]
    },
    { 
      name: "B2B Sales Funnel Architect", 
      usd: "$520", 
      pkrOld: "PKR 165,000", 
      pkr: "PKR 145,000", 
      timeline: "3-4 Weeks", 
      idealFor: "SaaS, Agencies & B2B Exporters", 
      techStack: "HubSpot • ActiveCampaign", 
      features: [
        "Complete High-Ticket Sales Funnel Design", 
        "15-Email Cold Outreach & Nurture Sequence", 
        "Lead Magnet & Opt-in Page Strategy", 
        "Advanced Lead Scoring & Tagging", 
        "CRM Workflow & Pipeline Automation", 
        "LinkedIn Sales Navigator Integration Help", 
        "Behavior-Based Dynamic Content", 
        "Detailed Weekly Funnel Audit & ROI Tracking", 
        "Appointment Booking System Integration", 
        "Priority 1-on-1 Support Call"
      ],
      extras: [
        "Targeted B2B Lead List (250 Leads): +$150", 
        "White-paper/E-book Writing: +$120", 
        "Webinar Automation Setup: +$100",
        "Extra Revision: +$10"
      ]
    }
],
  
  "Content & Copywriting": [
    { 
      name: "SEO Blog Strategy Pack", 
      usd: "$90", pkrOld: "PKR 27,000", pkr: "PKR 18,000", 
      timeline: "5-7 Days", idealFor: "Bloggers & Niche Sites", techStack: "Grammarly • SurferSEO", 
      features: [
        "4 SEO-Optimized Articles (1000+ words)", 
        "LSI Keyword Integration", 
        "Human-Written (Zero AI Vibe)", 
        "Click-Worthy Meta Titles", 
        "Copyright-Free Image Sourcing",
        "Readability & Flow Check", 
        "02 Revision Rounds"
      ],
      extras: ["Content Upload to WordPress: +$20", "Fast 48h Delivery: +$30", "Internal Linking: +$15"]
    },
    { 
      name: "High-Conversion Ad Content", 
      isPopular: true, // Most Popular
      usd: "$150", pkrOld: "PKR 42,000", pkr: "PKR 40,000", 
      timeline: "3-5 Days", idealFor: "E-com & Paid Ads", techStack: "Psychological Triggers", 
      features: [
        "10 Multi-Platform Ad Variations", 
        "Psychological Hook Writing", 
        "Benefit-Driven Headlines Pack", 
        "Strong Call-to-Actions (CTAs)", 
        "A/B Testing Content Variations",
        "Competitor Ad Copy Analysis", 
        "Audience Persona Research", 
        "Unlimited Revisions"
      ],
      extras: ["Matching Graphic Design: +$40", "Video Ad Script: +$50", "Landing Page Hook: +$30"]
    },
    { 
      name: "Complete Website Sales Content", 
      usd: "$300", pkrOld: "PKR 83,500", pkr: "PKR 80,000", 
      timeline: "7-10 Days", idealFor: "New Brands & Rebranding", techStack: "Story-Selling Framework", 
      features: [
        "5 Main Sales Pages (Home, About, etc.)", 
        "Unique Brand Voice Development", 
        "Persuasive Story-telling Flow", 
        "Competitor Content Auditing", 
        "SEO-Integrated Writing", 
        "Conversion Funnel Strategy", 
        "UX Writing (Micro-copy)", 
        "Post-Launch Content Tweaks" 
      ],
      extras: ["Legal/Privacy Pages: +$40", "Catchy Brand Tagline: +$30", "Email Welcome Sequence: +$60"]
    }
],

  "SEO Optimization": [
    { 
      name: "SEO Quick Health Check", 
      usd: "$18", pkrOld: "PKR 5,500", pkr: "PKR 5,000", 
      timeline: "3–5 Days", idealFor: "New & Small Sites", techStack: "Ahrefs • Screaming Frog", 
      features: [
        "Full Technical SEO Scan (Broken links, speed, mobile issues)", 
        "Top 5 Critical Pages Analyzed", 
        "Google Business Profile Quick Audit", 
        "1-Page Priority Fix List (Top 5 quick wins)", 
        "10-Minute WhatsApp Results Walkthrough", 
        "PDF Report Delivered via Email"
      ],
      extras: ["This is a diagnostic only. Done-for-you fixes: +$35"]
    },
    { 
      name: "SEO Kickstart (Audit + Fixes)", 
      isPopular: true, // Most Popular
      usd: "$35", pkrOld: "PKR 12,500", pkr: "PKR 9,999", 
      timeline: "7–10 Days", idealFor: "SMEs wanting immediate fixes", techStack: "GSC • GMB • On-page", 
      features: [
        "Everything included in the Quick Health Check", 
        "GBP Profile Fully Optimized", 
        "Meta Tags Fixed (up to 5 pages)", 
        "On-Page SEO Basics (Headings, alt text)", 
        "Google Search Console Setup + Sitemap Submission", 
        "20-Minute Results Walkthrough"
      ],
      extras: ["Extra Page: +$7", "Backlink Starter (3 links): +$15", "Local Citations: +$12"]
    },
    { 
      name: "Local SEO Starter", 
      usd: "$88", pkrOld: "PKR 28,000", pkr: "PKR 25,000", 
      timeline: "Monthly", idealFor: "Clinics, Shops & Gyms", techStack: "GMB • Citations • Semrush", 
      features: [
        "8–10 Local Keywords Targeting", 
        "Google Business Profile Optimization + 3 Posts/Month", 
        "On-Page SEO for 5 Key Pages", 
        "Local Citations (10–15/Month)", 
        "Google Review Generation Strategy + Templates", 
        "Search Console + Analytics Monitoring", 
        "Monthly Ranking Progress Report",
        "WhatsApp Support (24h response)"
      ],
      extras: ["Extra Page: +$7", "Review Campaign: +$15"]
    },
    { 
      name: "Business Growth SEO", 
      usd: "$133", pkrOld: "PKR 45,000", pkr: "PKR 38,000", 
      timeline: "Monthly", idealFor: "SMEs targeting Punjab / Pakistan", techStack: "Semrush • Full SEO Stack", 
      features: [
        "12–15 Keywords (Local + Regional)", 
        "Full Technical SEO + Ongoing Fixes", 
        "On-Page SEO (up to 10 pages)", 
        "2 SEO Blog Articles/Month (800–1000 words)", 
        "5 Quality Backlinks/Month (DA 20+)", 
        "Competitor Keyword Tracking", 
        "Bi-Weekly Ranking Reports",
        "Monthly Strategy Call"
      ],
      extras: ["Extra Blog: +$11", "Extra Backlinks: +$29/mo"]
    },
    { 
      name: "Advanced SEO", 
      usd: "$203", pkrOld: "PKR 65,000", pkr: "PKR 58,000", 
      timeline: "Monthly", idealFor: "E-commerce & Competitive Industries", techStack: "Advanced SEO Tools", 
      features: [
        "20–25 Competitive Keywords", 
        "Advanced Technical SEO + Core Web Vitals", 
        "4 Long-Form Articles/Month (1000–1500 words)", 
        "10 Premium Backlinks/Month (DA 30+)", 
        "E-commerce SEO (Products + Categories)", 
        "Schema Markup (FAQ, Product, Local)",
        "Conversion Optimization Suggestions",
        "Weekly Ranking Dashboard",
        "Monthly Strategy Call (45 min)",
        "Priority WhatsApp Support (4h response)"
      ],
      extras: ["Extra Article: +$11", "Extra Backlinks: +$29/mo"]
    }
]
};


export default function PricingSection() {
  const serviceNames = Object.keys(servicesData);
  const [activeService, setActiveService] = useState(serviceNames[0]);
  const packages = servicesData[activeService];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-900/30 via-black to-cyan-500/10 min-h-screen text-white font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-center mb-4 text-left">
            <span className="bg-blue-600/20 text-blue-400 px-6 py-2 rounded-full text-xs font-bold border border-blue-500/30 uppercase">
              Global Standards
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-black mb-4 uppercase">
            Transparent <span className="text-blue-500 italic">Pricing</span>
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto text-lg leading-relaxed">
            High-end Next.js solutions for local and international markets.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 p-3 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 w-fit mx-auto shadow-2xl">
          {serviceNames.map((service) => (
            <button
              key={service}
              onClick={() => setActiveService(service)}
              className={`py-2 px-6 rounded-xl text-sm font-bold transition-all duration-300 ${
                activeService === service ? "bg-blue-600 text-white shadow-xl shadow-blue-800/40" : "text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {service}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="wait">
            {packages.map((pkg, index) => {
              // Check if this package is marked as popular
              const isPopular = pkg.isPopular;

              return (
                <motion.div
                  key={`${activeService}-${pkg.name}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`relative flex flex-col p-8 rounded-[1.2rem] transition-all duration-300 backdrop-blur-md border-2 
                    ${isPopular 
                      ? "border-blue-500 bg-white/6 shadow-2xl shadow-blue-500/20 z-10" 
                      : "border-white/15 bg-white/6 hover:border-blue-500"
                    }`}
                >
                  {/* POPULAR TAG */}
                  {isPopular && (
                    <div className="absolute -top-0 right-0">
                      <span className="bg-blue-600 text-white px-4 py-1.5 rounded-bl-2xl rounded-tr-2xl text-[12px] font-black uppercase shadow-lg shadow-blue-500/40 border border-blue-400/50">
                        Most Popular
                      </span>
                    </div>  
                  )}

                  {/* Top Section: Price & Name */}
                  <div className={`mb-8 text-left ${isPopular ? 'mt-2' : ''}`}>
                    <h3 className="text-2xl font-black mb-3 uppercase leading-none">{pkg.name}</h3>
                    <div className="flex flex-col gap-1">
                      <span className="text-4xl font-black italic">{pkg.usd}</span>
                      <div className="flex items-center gap-3 mt-1">
                        {pkg.pkrOld && (
                          <span className="text-sm font-bold text-white/40 line-through decoration-red-500/50 decoration-2">
                            {pkg.pkrOld}
                          </span>
                        )}
                        <span className="text-xl font-black text-blue-400">
                          {pkg.pkr}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Middle Section: Features */}
                  <ul className="space-y-4 mb-8 flex-1 text-left">
                    {pkg.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-4 text-sm font-medium">
                        <FaCheckCircle className="shrink-0 text-blue-500 text-lg" />
                        <span className="text-white/90 leading-tight">{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Decision Box */}
                  <div className="mb-6 p-5 rounded-2xl border border-white/5 bg-black/40 space-y-4 text-left">
                    <div className="flex justify-between items-center">
                      <p className="text-[12px] font-bold uppercase text-white/40">Tech</p>
                      <span className="text-[11px] font-bold text-gray-300 uppercase">{pkg.techStack}</span>
                    </div>
                    <div className="flex justify-between items-center border-t border-white/5 pt-3">
                      <div className="flex items-center gap-2 text-xs font-bold text-blue-400">
                        <FaClock /> <span className="uppercase">{pkg.timeline}</span>
                      </div>
                      <div className="flex items-center gap-2 text-right">
                        <FaUserTie className="text-cyan-400 text-xs" />
                        <span className="text-[11px] font-bold text-white/90">{pkg.idealFor}</span>
                      </div>
                    </div>
                  </div>

                  {/* SAFE EXTRAS SECTION */}
                  {pkg.extras && (
                    <div className="mb-6 p-4 rounded-xl border border-blue-500/20 bg-blue-500/5 text-left">
                      <p className="text-[10px] font-black uppercase tracking-wider mb-2 text-blue-400">
                        💡 Add-ons (Optional)
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {Array.isArray(pkg.extras) ? (
                          pkg.extras.map((extra, i) => (
                            <span key={i} className="text-[9px] font-bold bg-white/5 border border-white/10 px-2 py-1 rounded-md text-white/70">
                              {extra}
                            </span>
                          ))
                        ) : (
                          <span className="text-[9px] font-bold bg-white/5 border border-white/10 px-2 py-1 rounded-md text-white/70">
                            {pkg.extras}
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Bottom Section: Buttons */}
                  <div className="flex flex-col gap-3">
                    <Link
                      href="/Contact"
                      className={`py-5 rounded-2xl font-black text-xs text-center transition-all duration-300 uppercase shadow-lg
                        ${isPopular 
                          ? "bg-white text-blue-600 hover:bg-gray-100 shadow-white/10" 
                          : "bg-blue-600 text-white hover:bg-blue-700 shadow-blue-600/30"}`}
                    >
                      Get Started
                    </Link>
                    
                    <Link
                      href="https://wa.me/3248188272" 
                      className="py-4 rounded-2xl font-bold text-xs text-center flex items-center justify-center gap-3 transition-all duration-300 border border-white/20 hover:bg-white/10 uppercase"
                    >
                      <FaWhatsapp className="text-green-400 text-xl" />
                      Discuss on WhatsApp
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

// const servicesData = {
//  "Website Development": [
//     { 
//       name: "Quick Launch", 
//       price: "$149", // Value increased (Premium Next.js)
//       timeline: "5-7 Days",
//       idealFor: "Freelancers, Personal Brands",
//       techStack: "Next.js, Tailwind CSS, Vercel",
//       features: ["Single Page Custom UI", "Next.js High Performance", "WhatsApp & Contact Integration", "Mobile First Design", "SEO Ready Structure"],
//       highlight: false 
//     },
//     { 
//       name: "Web Presence", 
//       price: "$299", 
//       timeline: "7-10 Days",
//       idealFor: "Clinics, Retail, Service Business",
//       techStack: "Next.js, Framer Motion, Sanity CMS",
//       features: ["Everything in Quick Launch", "3 Professional Pages", "Google Maps Integration", "Dynamic Content Management", "Advanced Animations", "30 Days Support"],
//       highlight: false 
//     },
//     { 
//       name: "Growth Pro", 
//       price: "$499", 
//       timeline: "2-3 Weeks",
//       idealFor: "SMEs, Schools, Corporate Agencies",
//       availability: "Only 2 slots left this month!",
//       techStack: "Next.js, PostgreSQL, Payload CMS",
//       features: ["Everything in Web Presence", "Up to 6 Custom Pages", "On-Page SEO Dominance", "Google Analytics 4 & GSC", "Full CMS Admin Access", "Speed Grade: 95+ Score"],
//       highlight: true 
//     },
//     { 
//       name: "Business Elite", 
//       price: "$799", 
//       timeline: "3 Weeks+",
//       idealFor: "Real Estate, Law Firms, Medical Centers",
//       techStack: "Next.js, Supabase, TypeSafe API",
//       features: ["Everything in Growth Pro", "10+ Custom Pages", "Advanced Schema Markup", "Google Business Profile Sync", "Facebook Pixel & Tracking", "Custom UI Components", "30-min Admin Training"],
//       highlight: false 
//     },
//     { 
//       name: "Shopify/E-Commerce", 
//       price: "$1200", 
//       timeline: "3-4 Weeks",
//       idealFor: "Clothing Brands, High-Volume Stores",
//       techStack: "Shopify Engine / Next.js Commerce",
//       features: ["Premium Store Setup", "50+ Product Uploads", "JazzCash/EasyPaisa Integration", "Order Tracking & Customer Portal", "Abandoned Cart Recovery", "Inventory Management", "WhatsApp Order Alerts"],
//       highlight: false 
//     },
//     { 
//       name: "Custom Enterprise", 
//       price: "Let's Talk", 
//       timeline: "On Demand",
//       idealFor: "SaaS Startups, Scale-ups",
//       techStack: "Full Stack (Next.js, Node.js, AWS)",
//       features: ["Complex SaaS Solution", "Scalable Infrastructure", "Third-party API Integration", "Advanced Database Security", "Real-time Dashboards", "24/7 Priority Maintenance"],
//       highlight: false 
//     }
//   ],

//   "UI/UX Design": [
//     { name: "Basic", price: "$79", features: ["Hero Section UI", "Color Palette", "Font Style", "2 Revisions"], highlight: false },
//     { name: "Starter", price: "$179", features: ["Everything in Basic", "5 High-Fi Screens", "Interactive Prototype", "Figma Source File", "Mobile Responsive UI"], highlight: false },
//     { name: "Standard", price: "$329", features: ["Everything in Starter", "10 Full Web Screens", "User Flow Mapping", "Unlimited Revisions", "Custom Iconography", "Competitor Research"], highlight: true },
//     { name: "Professional", price: "$549", features: ["Everything in Standard", "Mobile App UI (15 Screens)", "Design System", "Dev Handoff Guide", "Advanced Micro-interactions", "User Testing", "Clickable Wireframes"], highlight: false },
//     { name: "Premium", price: "$849", features: ["Everything in Professional", "Full Brand Identity", "UX Audit", "Custom Illustrations", "3D UI Elements", "Moodboards", "Accessibility Check", "Commercial Rights"], highlight: false },
//     { name: "Enterprise", price: "Let's Talk", features: ["Complex Dashboard UI", "Multi-platform Strategy", "Dedicated Senior Designer", "Product Roadmap", "Usability Lab Testing", "Ongoing Design Support", "Design-to-Code Audit", "Stakeholder Presentation", "Market Analysis"], highlight: false },
//   ],

//   "Mobile App Development": [
//     { name: "Basic", price: "$299", features: ["MVP (3 Screens)", "Cross-platform Tech", "Sleek Modern UI", "Basic Auth"], highlight: false },
//     { name: "Starter", price: "$549", features: ["Everything in Basic", "7 Screens", "API Integration", "Push Notifications", "Splash Screen"], highlight: false },
//     { name: "Standard", price: "$899", features: ["Everything in Starter", "12 Screens", "Database Integration", "Social Login", "App Store Setup", "User Profile Mgmt"], highlight: true },
//     { name: "Professional", price: "$1499", features: ["Everything in Standard", "Admin Dashboard", "GPS/Maps Support", "In-App Search", "Payment Integration", "Analytics Dashboard", "Bug Support"], highlight: false },
//     { name: "Premium", price: "$2299", features: ["Everything in Professional", "Real-time Chat", "Subscription Model", "Advanced Security", "Offline Mode", "Multi-role Access", "Deep Linking", "Performance Tuning"], highlight: false },
//     { name: "Enterprise", price: "Get a Quote", features: ["Enterprise Grade App", "Scalable Backend", "DevOps Integration", "AI-driven Features", "Biometric Security", "White Labeling", "Automated Testing", "24/7 Support", "Annual Maintenance"], highlight: false },
//   ],

//   "Graphic Designing": [
//     { name: "Basic", price: "$39", features: ["2 Logo Concepts", "High-res PNG/JPG", "Vector Files", "2 Revisions"], highlight: false },
//     { name: "Starter", price: "$89", features: ["Everything in Basic", "Business Card", "Letterhead", "Social Media Kit", "Source Files"], highlight: false },
//     { name: "Standard", price: "$179", features: ["Everything in Starter", "Full Branding Guide", "Brochure Design", "Unlimited Revisions", "Print-ready Files", "Email Signature"], highlight: true },
//     { name: "Professional", price: "$349", features: ["Everything in Standard", "Custom Illustration", "10 Ad Creatives", "Commercial License", "Stationery Design", "Presentation Deck", "Social Media Ads"], highlight: false },
//     { name: "Premium", price: "$649", features: ["Everything in Professional", "PowerPoint Master", "Event Signage", "Brand Strategy", "Package Design", "Logo Animation", "Iconography Set", "3D Mockups"], highlight: false },
//     { name: "Enterprise", price: "On Demand", features: ["Monthly Retainer", "Priority Turnaround", "Unlimited Support", "Dedicated Creative Lead", "Corporate Rebranding", "UI Assets Library", "Motion Graphics", "Annual Design Plan", "Brand Audit"], highlight: false },
//   ],

//   "SEO Optimization": [
//     { name: "Basic", price: "$129", features: ["Full Website Audit", "Google Search Console", "Meta Tags Fix", "Robots.txt Setup"], highlight: false },
//     { name: "Starter", price: "$249", features: ["Everything in Basic", "15 Keywords", "Competitor Research", "Google Maps SEO", "XML Sitemap"], highlight: false },
//     { name: "Standard", price: "$449", features: ["Everything in Starter", "30 Keywords", "Backlink Strategy", "Content Optimization", "Broken Link Fix", "Monthly Report"], highlight: true },
//     { name: "Professional", price: "$749", features: ["Everything in Standard", "Technical SEO Fixes", "High-DA Link Building", "Weekly Tracking", "Alt Text Opt", "Schema Markup", "Competitor Gap Analysis"], highlight: false },
//     { name: "Premium", price: "$1199", features: ["Everything in Professional", "E-commerce SEO", "Global Targeting", "Weekly Strategy", "Toxic Link Removal", "Local Citations", "Core Web Vitals Opt", "Content Gap Strategy"], highlight: false },
//     { name: "Enterprise", price: "Let's Talk", features: ["Global Market Dominance", "Dedicated SEO Lead", "PR Backlinks", "Competitor Hijack Strategy", "Multilingual SEO", "E-A-T Optimization", "Advanced Data Tracking", "Negative SEO Protection", "Quarterly ROI Analysis"], highlight: false },
//   ],

//   "Advertising Management": [
//     { name: "Basic", price: "$149", features: ["1 Campaign Setup", "Audience Targeting", "Basic Report", "Ad Copy"], highlight: false },
//     { name: "Starter", price: "$299", features: ["Everything in Basic", "Meta Ads (FB/IG)", "Ad Copywriting", "Pixel Setup", "A/B Testing"], highlight: false },
//     { name: "Standard", price: "$499", features: ["Everything in Starter", "Google + Meta Ads", "Landing Page Audit", "Weekly Optimization", "Keyword Research", "Bid Management"], highlight: true },
//     { name: "Professional", price: "$799", features: ["Everything in Standard", "Retargeting Funnel", "Ad Strategy", "ROI Dashboard", "Creative Oversight", "Conversion Tracking", "Competitor Ad Audit"], highlight: false },
//     { name: "Premium", price: "$1199", features: ["Everything in Professional", "High-budget Scaling", "YouTube/LinkedIn Ads", "Weekly Call", "Copywriting Polish", "Lookalike Audiences", "Multi-stage Funnel", "Landing Page Design"], highlight: false },
//     { name: "Enterprise", price: "On Demand", features: ["Omni-channel Dominance", "Lead Gen Automation", "Dedicated Manager", "Marketing Strategy", "Video Ad Production", "Brand Awareness Campaign", "Fraud Protection", "Full Funnel CRM", "Custom Reporting"], highlight: false },
//   ],

//   "Social Media Management": [
//     { name: "Basic", price: "$99", features: ["10 Posts/Month", "1 Platform", "Bio Optimization", "Hashtag Setup"], highlight: false },
//     { name: "Starter", price: "$199", features: ["Everything in Basic", "15 Posts + 2 Reels", "2 Platforms", "Engagement Growth", "Caption Writing"], highlight: false },
//     { name: "Standard", price: "$399", features: ["Everything in Starter", "20 Posts + 4 Reels", "3 Platforms", "Hashtag Strategy", "Monthly Analytics", "Comment Management"], highlight: true },
//     { name: "Professional", price: "$649", features: ["Everything in Standard", "Daily Posting", "Community Management", "Influencer Outreach", "Trend Monitoring", "Graphic Design", "Growth Strategy"], highlight: false },
//     { name: "Premium", price: "$999", features: ["Everything in Professional", "Viral Content Strategy", "Video Production", "24/7 Monitoring", "Content Calendar", "Engagement Blitz", "Influencer Collabs", "Monthly Video Call"], highlight: false },
//     { name: "Enterprise", price: "Let's Talk", features: ["Full Brand Takeover", "Creator Partnerships", "Crisis Management", "Reputation Management", "Paid Ad Integration", "Event Live Coverage", "Market Listening", "Monthly Brand Audit", "Dedicated Social Team"], highlight: false },
//   ],

//   "3D Design & Viz": [
//     { name: "Basic", price: "$89", features: ["Single 3D Icon", "Glassmorphism Look", "Transparent PNG", "1 Revision"], highlight: false },
//     { name: "Starter", price: "$169", features: ["Everything in Basic", "Product Packshot", "Realistic Texturing", "Source File", "2 Views"], highlight: false },
//     { name: "Standard", price: "$349", features: ["Everything in Starter", "Promo Video (10s)", "Cinematic Camera", "4K Rendering", "Lighting Setup", "Post-processing"], highlight: true },
//     { name: "Professional", price: "$599", features: ["Everything in Standard", "Architectural Render", "Environment Design", "Complex Simulations", "Material Study", "Unlimited Revisions", "360 Degree View"], highlight: false },
//     { name: "Premium", price: "$949", features: ["Everything in Professional", "Character Rigging", "3D Short Ad (30s)", "SFX Music", "Visual Effects", "Particle Simulations", "Commercial License", "High-Poly Modeling"], highlight: false },
//     { name: "Enterprise", price: "Get a Quote", features: ["Game Asset Workflow", "AR/VR Optimization", "Full Pipeline Mgmt", "Product Configurator", "Interactive 3D", "Real-time Unreal Render", "Dedicated Artist", "Cloud Rendering", "Bulk Asset Creation"], highlight: false },
//   ],

//   "Email Marketing": [
//     { name: "Basic", price: "$69", features: ["2 Campaigns/Month", "Template Setup", "Basic Analytics", "List Clean"], highlight: false },
//     { name: "Starter", price: "$139", features: ["Everything in Basic", "4 Campaigns", "Welcome Flow", "Subject Testing", "Newsletter Design"], highlight: false },
//     { name: "Standard", price: "$279", features: ["Everything in Starter", "Weekly Emails", "Segmentation", "A/B Testing", "ROI Tracking", "Brand Consistency"], highlight: true },
//     { name: "Professional", price: "$499", features: ["Everything in Standard", "Abandonment Flows", "CRM Integration", "Sales Funnel", "Behavioral Targeting", "Dynamic Content", "Performance Audit"], highlight: false },
//     { name: "Premium", price: "$799", features: ["Everything in Professional", "Conversion Strategy", "SMS Integration", "Full Reporting", "Custom HTML Coding", "Lead Magnet Creation", "Email Copywriting", "Engagement Re-capture"], highlight: false },
//     { name: "Enterprise", price: "On Demand", features: ["Full CRM Management", "Lifecycle Automation", "Database Strategy", "Deliverability Audit", "Mass Mail Strategy", "Dedicated Strategist", "List Acquisition Adv", "Multi-language Emails", "Real-time Dashboards"], highlight: false },
//   ],

//   "Content & Copywriting": [
//     { name: "Basic", price: "$69", features: ["2 SEO Articles", "Topic Research", "1 Revision", "Meta Description"], highlight: false },
//     { name: "Starter", price: "$149", features: ["Everything in Basic", "4 Blog Posts", "Keyword Research", "Plagiarism Report", "Headline Testing"], highlight: false },
//     { name: "Standard", price: "$329", features: ["Everything in Starter", "8 Articles + Ad Copy", "Social Captions", "Content Calendar", "Editing & Proofing", "Internal Linking"], highlight: true },
//     { name: "Professional", price: "$549", features: ["Everything in Standard", "Sales Page Copy", "Email Sequence", "Brand Voice Dev", "Case Studies", "Competitor Content Audit", "Image Alt Text Writing"], highlight: false },
//     { name: "Premium", price: "$849", features: ["Everything in Professional", "Complete Web Copy", "E-book Creation", "PR Articles", "Whitepapers", "Video Scripts", "Landing Page Polish", "Interview Based Content"], highlight: false },
//     { name: "Enterprise", price: "Let's Talk", features: ["Full Editorial Team", "Multi-language Support", "Strategy Consulting", "Content Distribution", "Ghostwriting", "Brand Storytelling", "Press Release Dist", "Content Refresh Strategy", "Annual Content Plan"], highlight: false },
//   ],
// };

// export default function page() {
//   const serviceNames = Object.keys(servicesData);
//   const [activeService, setActiveService] = useState(serviceNames[0]);
//   const packages = servicesData[activeService];

//   return (
//     <section className="py-24 bg-gradient-to-br from-blue-900/20 via-black to-cyan-500/10 min-h-screen">
//       <div className="max-w-7xl mx-auto px-6">
        
//         {/* Heading */}
//         <div className="text-center mb-16">
//           <motion.h2 
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-5xl font-extrabold text-white mb-4 tracking-tight"
//           >
//             Flexible <span className="text-blue-500">Packages</span>
//           </motion.h2>
//           <p className="text-gray-300 max-w-2xl mx-auto text-lg">
//             Elevate your digital presence with our transparent, industry-standard pricing. 
//             Choose the perfect plan for your agency's needs.
//           </p>
//         </div>

//         {/* Custom Toggle Buttons */}
//         <div className="flex flex-wrap justify-center gap-3 mb-16 bg-white/5 p-2 rounded-2xl backdrop-blur-md w-fit mx-auto border border-white/10">
//           {serviceNames.map((service) => (
//             <button
//               key={service}
//               onClick={() => setActiveService(service)}
//               className={`py-2.5 px-6 rounded-xl font-semibold transition-all duration-300 text-sm md:text-base ${
//                 activeService === service
//                   ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
//                   : "text-gray-400 hover:text-white hover:bg-white/5"
//               }`}
//             >
//               {service}
//             </button>
//           ))}
//         </div>

//         {/* Pricing Cards Grid */}
//         <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//           <AnimatePresence mode="wait">
//             {packages.map((pkg, index) => (
//               <motion.div
//                 key={`${activeService}-${pkg.name}`}
//                 initial={{ opacity: 0, scale: 0.9, y: 20 }}
//                 animate={{ opacity: 1, scale: 1, y: 0 }}
//                 exit={{ opacity: 0, scale: 0.9, y: -20 }}
//                 transition={{ duration: 0.3, delay: index * 0.1 }}
//                 whileHover={{ y: -10 }}
//                 className={`relative group flex flex-col p-8 rounded-3xl border transition-all duration-500 ${
//                   pkg.highlight
//                     ? "bg-blue-600 border-blue-400 shadow-2xl shadow-blue-600/20 text-white"
//                     : "bg-white/5 border-white/10 hover:border-blue-500/50 text-gray-200 backdrop-blur-sm"
//                 }`}
//               >
//                 {pkg.highlight && (
//                   <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-400 text-blue-900 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
//                     Most Popular
//                   </span>
//                 )}

//                 <div className="mb-8">
//                   <h3 className="text-xl font-bold mb-2 tracking-wide uppercase opacity-80">{pkg.name}</h3>
//                   <div className="flex items-baseline gap-1">
//                     <span className="text-4xl font-black">{pkg.price}</span>
//                     {pkg.price !== "Custom" && <span className="text-sm opacity-60">/ project</span>}
//                   </div>
//                 </div>

//                 <ul className="space-y-4 mb-8 flex-1">
//                   {pkg.features.map((feature, i) => (
//                     <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
//                       <FaCheckCircle className={`mt-1 flex-shrink-0 ${pkg.highlight ? "text-white" : "text-blue-500"}`} />
//                       <span className={pkg.highlight ? "text-blue-50" : "text-gray-300"}>{feature}</span>
//                     </li>
//                   ))}
//                 </ul>

//                 <Link
//                   href="/Contact"
//                   className={`group/btn flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-bold transition-all duration-300 ${
//                     pkg.highlight
//                       ? "bg-white text-blue-600 hover:bg-blue-50 shadow-xl"
//                       : "bg-blue-600/10 border border-blue-600/50 text-white hover:bg-blue-600"
//                   }`}
//                 >
//                   Get Started 
//                   <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
//                 </Link>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { FaCheckCircle } from "react-icons/fa";

// // -------------------------
// // All Services + Packages
// // -------------------------
// const servicesData = {
//   "Website Development": [
//     { name: "Basic", price: "$99", features: ["1-page static website", "Responsive design", "Basic contact form"], highlight: false },
//     { name: "Starter", price: "$199", features: ["Up to 3 pages", "Mobile-friendly design", "Basic SEO setup", "Contact form"], highlight: false },
//     { name: "Standard", price: "$399", features: ["Up to 5 pages", "Custom design", "SEO optimization", "Image slider"], highlight: true },
//     { name: "Professional", price: "$699", features: ["Up to 8 pages", "Animations", "Blog integration", "Google Analytics setup"], highlight: false },
//     { name: "Premium", price: "$999", features: ["10+ pages", "E-commerce setup", "Payment gateway", "Speed optimization"], highlight: false },
//     { name: "Enterprise", price: "$1499+", features: ["Fully customized web solution", "API integrations", "Priority support"], highlight: false },
//   ],

//   "UI/UX Design": [
//     { name: "Basic", price: "$149", features: ["Wireframe for 1 screen", "Basic UI elements", "1 revision"], highlight: false },
//     { name: "Starter", price: "$299", features: ["Wireframes for 3 screens", "Basic UX flow", "2 revisions"], highlight: false },
//     { name: "Standard", price: "$499", features: ["5 screens", "Interactive prototypes", "3 revisions"], highlight: true },
//     { name: "Professional", price: "$799", features: ["10 screens", "High-fidelity designs", "User testing"], highlight: false },
//     { name: "Premium", price: "$1199", features: ["20+ screens", "Full app design", "Design system"], highlight: false },
//     { name: "Enterprise", price: "$1999+", features: ["Enterprise UI/UX", "Custom components", "Dedicated designer"], highlight: false },
//   ],

//   "Mobile App Development": [
//     { name: "Basic", price: "$199", features: ["Simple Android app", "Up to 3 screens", "Basic UI", "Form submission"], highlight: false },
//     { name: "Starter", price: "$399", features: ["Android & iOS", "Up to 5 screens", "Responsive UI", "Basic API integration"], highlight: false },
//     { name: "Standard", price: "$699", features: ["Android & iOS", "Up to 8 screens", "Modern UI/UX", "Push notifications"], highlight: true },
//     { name: "Professional", price: "$999", features: ["Android & iOS", "10+ screens", "Database integration", "Advanced features"], highlight: false },
//     { name: "Premium", price: "$1499", features: ["Custom mobile app", "Payment gateway", "Live chat", "Cloud integration"], highlight: false },
//     { name: "Enterprise", price: "$2499+", features: ["Enterprise-level app", "Multi-user roles", "Advanced security", "Ongoing support"], highlight: false },
//   ],

//   "3D Design & Visualization": [
//     { name: "Basic", price: "$99", features: ["Single 3D model", "1 revision", "Standard lighting & textures"], highlight: false },
//     { name: "Starter", price: "$199", features: ["Up to 3 3D models", "2 revisions", "Basic rendering setup"], highlight: false },
//     { name: "Standard", price: "$399", features: ["Product visualization", "Realistic lighting & materials", "3 revisions included"], highlight: true },
//     { name: "Professional", price: "$699", features: ["Architectural visualization", "Custom textures & environments", "High-resolution renders"], highlight: false },
//     { name: "Premium", price: "$999", features: ["3D animation (up to 30 sec)", "Advanced motion graphics", "Unlimited revisions"], highlight: false },
//     { name: "Enterprise", price: "$1499+", features: ["Full 3D project pipeline", "Dedicated 3D artist & animator", "Priority support"], highlight: false },
//   ],

//   "Graphic Designing": [
//     { name: "Basic", price: "$49", features: ["Logo design", "1 revision", "High-quality JPG/PNG"], highlight: false },
//     { name: "Starter", price: "$99", features: ["Social media posts", "2 revisions", "Basic branding"], highlight: false },
//     { name: "Standard", price: "$199", features: ["Brochures & Flyers", "3 revisions", "Print-ready designs"], highlight: true },
//     { name: "Professional", price: "$399", features: ["Full Branding Package", "Unlimited revisions", "Source files included"], highlight: false },
//     { name: "Premium", price: "$699", features: ["UI Graphics", "Custom Illustrations", "High-res assets"], highlight: false },
//     { name: "Enterprise", price: "$999+", features: ["Enterprise-level graphics", "Dedicated designer", "Priority support"], highlight: false },
//   ],

//   "Advertising Management": [
//     { name: "Basic", price: "$149", features: ["Ad setup (1 platform)", "Basic targeting", "Monthly performance report"], highlight: false },
//     { name: "Starter", price: "$299", features: ["Facebook & Instagram ads", "Audience research", "A/B testing"], highlight: false },
//     { name: "Standard", price: "$499", features: ["Google + Meta ads", "Conversion tracking", "Bi-weekly optimization"], highlight: true },
//     { name: "Professional", price: "$799", features: ["Multi-channel campaigns", "Retargeting setup", "Ad creative management"], highlight: false },
//     { name: "Premium", price: "$1199", features: ["Full-funnel strategy", "Landing page optimization", "Advanced analytics"], highlight: false },
//     { name: "Enterprise", price: "$1999+", features: ["Enterprise ad management", "High-budget optimization", "Dedicated ad strategist"], highlight: false },
//   ],

//   "Social Media Management": [
//     { name: "Basic", price: "$99", features: ["8 posts/month", "1 platform", "Basic reporting"], highlight: false },
//     { name: "Starter", price: "$199", features: ["12 posts/month", "2 platforms", "Hashtag strategy"], highlight: false },
//     { name: "Standard", price: "$399", features: ["16 posts/month", "3 platforms", "Monthly insights report"], highlight: true },
//     { name: "Professional", price: "$699", features: ["20+ posts/month", "Community management", "Ad integration"], highlight: false },
//     { name: "Premium", price: "$999", features: ["Full content strategy", "Advanced engagement", "Influencer collaboration"], highlight: false },
//     { name: "Enterprise", price: "$1499+", features: ["Custom campaigns", "Team management", "24/7 brand monitoring"], highlight: false },
//   ],

//   "Email Marketing": [
//     { name: "Basic", price: "$79", features: ["1 campaign/month", "Template design", "Basic analytics"], highlight: false },
//     { name: "Starter", price: "$149", features: ["2 campaigns/month", "A/B testing", "List segmentation"], highlight: false },
//     { name: "Standard", price: "$299", features: ["4 campaigns/month", "Automated flows", "Conversion tracking"], highlight: true },
//     { name: "Professional", price: "$499", features: ["Full email funnel", "Copywriting & design", "Advanced automation"], highlight: false },
//     { name: "Premium", price: "$799", features: ["Behavioral targeting", "Custom templates", "Priority support"], highlight: false },
//     { name: "Enterprise", price: "$1299+", features: ["Enterprise-scale automation", "CRM integration", "Dedicated email strategist"], highlight: false },
//   ],

//   "Content Writing & Copywriting": [
//     { name: "Basic", price: "$99", features: ["2 blog posts (500 words)", "SEO optimization", "Proofreading"], highlight: false },
//     { name: "Starter", price: "$199", features: ["4 blog posts (800 words)", "Keyword research", "Meta tags"], highlight: false },
//     { name: "Standard", price: "$399", features: ["8 content pieces", "Ad & social copy", "Editing & revisions"], highlight: true },
//     { name: "Professional", price: "$699", features: ["Website content", "Email + ad copy", "Brand voice alignment"], highlight: false },
//     { name: "Premium", price: "$999", features: ["Full content strategy", "Long-form articles", "Copywriting for campaigns"], highlight: false },
//     { name: "Enterprise", price: "$1499+", features: ["Enterprise brand content", "Team collaboration", "Dedicated content manager"], highlight: false },
//   ],

//   "SEO Optimization": [
//     { name: "Basic", price: "$99", features: ["Website audit", "Basic keyword research", "On-page SEO"], highlight: false },
//     { name: "Starter", price: "$199", features: ["Meta tags optimization", "3 keywords targeting", "Monthly report"], highlight: false },
//     { name: "Standard", price: "$399", features: ["10 keywords", "Content optimization", "Backlink setup"], highlight: true },
//     { name: "Professional", price: "$699", features: ["30 keywords", "Technical SEO", "Analytics tracking"], highlight: false },
//     { name: "Premium", price: "$999", features: ["50 keywords", "Local SEO", "Advanced reporting"], highlight: false },
//     { name: "Enterprise", price: "$1499+", features: ["Enterprise SEO", "Global targeting", "Dedicated SEO manager"], highlight: false },
//   ],
// };

// // -------------------------

// export default function page() {
//   const serviceNames = Object.keys(servicesData);
//   const [activeService, setActiveService] = useState(serviceNames[0]);
//   const packages = servicesData[activeService];

//   return (
//     <section className="py-28 bg-linear-to-b from-blue-50 to-white">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <div className="text-center mb-10">
//           <h2 className="text-4xl font-bold text-gray-900">{activeService} Packages</h2>
//           <p className="text-gray-500 mt-2 text-lg">
//             Choose a plan that fits your business goals
//           </p>
//         </div>

//         {/* Toggle Buttons */}
//         <div className="flex flex-wrap justify-center gap-4 mb-14">
//           {serviceNames.map((service) => (
//             <button
//               key={service}
//               onClick={() => setActiveService(service)}
//               className={`py-2 px-6 rounded-full font-medium transition-all ${
//                 activeService === service
//                   ? "bg-blue-600 text-white"
//                   : "bg-white border border-gray-300 text-gray-600 hover:bg-gray-100"
//               }`}
//             >
//               {service}
//             </button>
//           ))}
//         </div>

//         {/* Pricing Cards */}
//         <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//           {packages.map((pkg, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.05 }}
//               className={`rounded-2xl p-6 flex flex-col border transition-all duration-300 shadow-lg ${
//                 pkg.highlight
//                   ? "bg-linear-to-b from-blue-600 to-blue-500 text-white border-blue-500 shadow-blue-300"
//                   : "bg-white border-gray-200 hover:border-blue-500"
//               }`}
//             >
//               <h3 className={`text-2xl font-semibold mb-2 ${
//                 pkg.highlight ? "text-white" : "text-gray-800"
//               }`}>
//                 {pkg.name}
//               </h3>

//               <p className={`text-3xl font-bold mb-4 ${
//                 pkg.highlight ? "text-white" : "text-blue-600"
//               }`}>
//                 {pkg.price}
//               </p>

//               <ul className="space-y-2 flex-1">
//                 {pkg.features.map((feature, i) => (
//                   <li
//                     key={i}
//                     className={`flex items-center ${
//                       pkg.highlight ? "text-blue-100" : "text-gray-600"
//                     }`}
//                   >
//                     <FaCheckCircle
//                       className={`mr-2 ${
//                         pkg.highlight ? "text-white" : "text-green-500"
//                       }`}
//                     />
//                     {feature}
//                   </li>
//                 ))}
//               </ul>

//               {/* Fixed Next.js Routing */}
//               <Link
//                 href="/Contact"
//                 className={`mt-6 font-medium py-2 px-4 rounded-xl text-center transition-all duration-300 ${
//                   pkg.highlight
//                     ? "bg-white text-blue-600 hover:bg-gray-100"
//                     : "bg-blue-600 text-white hover:bg-blue-700"
//                 }`}
//               >
//                 Get Started
//               </Link>

//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }
