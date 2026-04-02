"use client";

import { useState } from "react";
import Image from "next/image";

const managedTiers = [
  {
    name: "Single Brand",
    platformFee: "$1,500",
    trafficMin: "$5,000",
    total: "$6,500+",
  },
  {
    name: "Multi-Brand",
    platformFee: "$3,500",
    trafficMin: "$5,000",
    total: "$8,500+",
    popular: true,
  },
  {
    name: "Full Portfolio",
    platformFee: "$7,500",
    trafficMin: "$5,000",
    total: "$12,500+",
  },
];

const platformOnlyTiers = [
  { name: "Single Brand", fee: "$3,000/mo" },
  { name: "Multi-Brand", fee: "$5,000/mo" },
  { name: "Full Portfolio", fee: "$10,000/mo" },
];

const partners = [
  {
    name: "Foley Family Wines",
    description: "80+ wines, Date Night Collection",
  },
{
    name: "Corks & Cheers (WX Brands)",
    description: "Full catalog experience",
  },
  {
    name: "Bar Dog",
    description: "Single brand, multi-campaign experience",
  },
];

export default function Home() {
  const [pricingTab, setPricingTab] = useState<"managed" | "platform">(
    "managed"
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Image
            src="/images/DALogon.png"
            alt="DrinkAgents"
            width={120}
            height={40}
            className="h-8 w-auto"
          />
          <a
            href="#pricing"
            className="bg-gray-900 text-white text-sm px-5 py-2 rounded-full hover:bg-gray-800 transition-colors"
            style={{ fontWeight: "500" }}
          >
            View Pricing
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <Image
              src="/images/DALogon.png"
              alt="DrinkAgents"
              width={180}
              height={130}
              className="brightness-0 invert"
            />
          </div>
          <h1
            className="text-4xl md:text-6xl mb-6"
            style={{
              fontWeight: "300",
              letterSpacing: "-0.03em",
              lineHeight: "1.1",
            }}
          >
            The AI-Powered Beverage
            <br />
            <span style={{ fontWeight: "700" }}>Discovery Platform</span>
          </h1>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-10"
            style={{ fontWeight: "300", color: "rgba(255,255,255,0.7)" }}
          >
            DrinkAgents is the independent discovery platform where consumers
            interact with expert AI guides to find their next favorite drink.
            Get your own branded experience page and turn every visitor into a
            qualified, data-rich engagement.
          </p>
          <a
            href="#pricing"
            className="inline-block bg-white text-gray-900 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors"
            style={{ fontWeight: "500" }}
          >
            View Pricing
          </a>
        </div>
      </section>

      {/* What You Get */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-gray-900 text-center mb-4"
            style={{ fontWeight: "300", letterSpacing: "-0.02em" }}
          >
            What You <span style={{ fontWeight: "700" }}>Get</span>
          </h2>
          <p
            className="text-center mb-14 max-w-2xl mx-auto"
            style={{ fontWeight: "300", color: "#888" }}
          >
            A branded AI-powered consumer discovery experience on DrinkAgents
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Branded Experience Page",
                desc: "Custom page with your imagery, products, and story on the DrinkAgents platform.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A8.966 8.966 0 0 1 3 12c0-1.264.26-2.466.732-3.558" />
                  </svg>
                ),
              },
              {
                title: "AI Finder Quiz",
                desc: "60-second guided quiz that matches consumers to products across your full portfolio.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                ),
              },
              {
                title: "Video Avatar",
                desc: "Professional HeyGen video avatar narrating the discovery experience for your brand.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                ),
              },
              {
                title: "AI Chat Expert",
                desc: "An AI persona available on every page with full session memory and product knowledge.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                  </svg>
                ),
              },
              {
                title: "Where to Buy",
                desc: "Integration with major retailers so consumers can be directed to your preferred retailers directly from the experience.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                  </svg>
                ),
              },
              {
                title: "Full Analytics",
                desc: "Consumer preferences, product engagement, retailer click-outs, and natural language insights.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-gray-900 mb-4">{item.icon}</div>
                <h3
                  className="text-lg text-gray-900 mb-2"
                  style={{ fontWeight: "500" }}
                >
                  {item.title}
                </h3>
                <p
                  style={{ fontWeight: "300", color: "#666", fontSize: "15px" }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-gray-900 text-center mb-14"
            style={{ fontWeight: "300", letterSpacing: "-0.02em" }}
          >
            How It <span style={{ fontWeight: "700" }}>Works</span>
          </h2>

          <div className="space-y-10">
            {[
              {
                step: "01",
                title: "We Build Your Experience",
                desc: "We create your custom branded page on DrinkAgents with your products, imagery, AI persona, and video avatar.",
              },
              {
                step: "02",
                title: "Consumers Discover Your Products",
                desc: "Visitors take a 60-second AI-guided finder quiz. Our engine scores your full catalog and surfaces personalized recommendations with match reasoning.",
              },
              {
                step: "03",
                title: "Engage and Convert",
                desc: "Consumers explore products, chat with AI experts, and click through to buy at their preferred retailer.",
              },
              {
                step: "04",
                title: "You Get the Data",
                desc: "Full reporting on every interaction — what consumers want, how they discover your products, and where they buy.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div
                  className="shrink-0 w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm"
                  style={{ fontWeight: "600" }}
                >
                  {item.step}
                </div>
                <div>
                  <h3
                    className="text-xl text-gray-900 mb-1"
                    style={{ fontWeight: "500" }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ fontWeight: "300", color: "#666" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Examples */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-gray-900 text-center mb-4"
            style={{ fontWeight: "300", letterSpacing: "-0.02em" }}
          >
            Current <span style={{ fontWeight: "700" }}>Partners</span>
          </h2>
          <p
            className="text-center mb-14 max-w-2xl mx-auto"
            style={{ fontWeight: "300", color: "#888" }}
          >
            See who is already on the platform
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="border border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
                  </svg>
                </div>
                <h3
                  className="text-gray-900 mb-1"
                  style={{ fontWeight: "500", fontSize: "16px" }}
                >
                  {partner.name}
                </h3>
                <p
                  style={{ fontWeight: "300", color: "#888", fontSize: "14px" }}
                >
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-gray-50 px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-gray-900 text-center mb-4"
            style={{ fontWeight: "300", letterSpacing: "-0.02em" }}
          >
            Partner <span style={{ fontWeight: "700" }}>Pricing</span>
          </h2>
          <p
            className="text-center mb-10 max-w-2xl mx-auto"
            style={{ fontWeight: "300", color: "#888" }}
          >
            Simple, transparent pricing based on your portfolio size
          </p>

          {/* One-Time Build */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-10 text-center">
            <div
              className="text-sm uppercase tracking-wider text-gray-500 mb-2"
              style={{ fontWeight: "500" }}
            >
              One-Time Experience Build
            </div>
            <div
              className="text-5xl text-gray-900 mb-3"
              style={{ fontWeight: "300" }}
            >
              $5,000
            </div>
            <p
              className="max-w-lg mx-auto"
              style={{ fontWeight: "300", color: "#666", fontSize: "15px" }}
            >
              Everything included — branded page, AI finder quiz, video avatar,
              product catalog setup, and persona configuration.
            </p>
          </div>

          {/* Monthly Program Toggle */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-white border border-gray-200 rounded-full p-1">
              <button
                onClick={() => setPricingTab("managed")}
                className={`px-6 py-2 rounded-full text-sm transition-colors ${
                  pricingTab === "managed"
                    ? "bg-gray-900 text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                style={{ fontWeight: "500" }}
              >
                Managed Program
              </button>
              <button
                onClick={() => setPricingTab("platform")}
                className={`px-6 py-2 rounded-full text-sm transition-colors ${
                  pricingTab === "platform"
                    ? "bg-gray-900 text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                style={{ fontWeight: "500" }}
              >
                Platform Only
              </button>
            </div>
          </div>

          {pricingTab === "managed" ? (
            <>
              <p
                className="text-center mb-8 max-w-lg mx-auto"
                style={{ fontWeight: "300", color: "#666", fontSize: "15px" }}
              >
                We drive qualified consumers to your experience and report back
                the results. Includes platform access, analytics, AI persona,
                ongoing optimization, and managed traffic.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {managedTiers.map((tier) => (
                  <div
                    key={tier.name}
                    className={`bg-white rounded-2xl p-8 text-center relative ${
                      tier.popular
                        ? "border-2 border-gray-900 shadow-lg"
                        : "border border-gray-200"
                    }`}
                  >
                    {tier.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-4 py-1 rounded-full">
                        Most Popular
                      </div>
                    )}
                    <h3
                      className="text-lg text-gray-900 mb-6"
                      style={{ fontWeight: "500" }}
                    >
                      {tier.name}
                    </h3>
                    <div className="space-y-3 mb-6">
                      <div>
                        <div
                          className="text-xs uppercase tracking-wider text-gray-500 mb-1"
                          style={{ fontWeight: "500" }}
                        >
                          Platform Fee
                        </div>
                        <div
                          className="text-2xl text-gray-900"
                          style={{ fontWeight: "300" }}
                        >
                          {tier.platformFee}
                          <span className="text-sm text-gray-500">/mo</span>
                        </div>
                      </div>
                      <div className="border-t border-gray-100 pt-3">
                        <div
                          className="text-xs uppercase tracking-wider text-gray-500 mb-1"
                          style={{ fontWeight: "500" }}
                        >
                          Traffic Program
                        </div>
                        <div
                          className="text-2xl text-gray-900"
                          style={{ fontWeight: "300" }}
                        >
                          {tier.trafficMin}
                          <span className="text-sm text-gray-500">/mo min</span>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-100 pt-4">
                      <div
                        className="text-xs uppercase tracking-wider text-gray-500 mb-1"
                        style={{ fontWeight: "500" }}
                      >
                        Total Monthly
                      </div>
                      <div
                        className="text-3xl text-gray-900"
                        style={{ fontWeight: "700" }}
                      >
                        {tier.total}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p
                className="text-center mt-6"
                style={{ fontWeight: "300", color: "#888", fontSize: "14px" }}
              >
                Scale your traffic investment above the minimum at any time.
                Traffic you drive on your own rides free alongside managed
                traffic.
              </p>
            </>
          ) : (
            <>
              <p
                className="text-center mb-8 max-w-lg mx-auto"
                style={{ fontWeight: "300", color: "#666", fontSize: "15px" }}
              >
                You drive your own audience to your experience. We provide the
                platform, AI, and full analytics.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {platformOnlyTiers.map((tier) => (
                  <div
                    key={tier.name}
                    className="bg-white border border-gray-200 rounded-2xl p-8 text-center"
                  >
                    <h3
                      className="text-lg text-gray-900 mb-6"
                      style={{ fontWeight: "500" }}
                    >
                      {tier.name}
                    </h3>
                    <div
                      className="text-3xl text-gray-900"
                      style={{ fontWeight: "300" }}
                    >
                      {tier.fee}
                    </div>
                    <p
                      className="mt-3"
                      style={{
                        fontWeight: "300",
                        color: "#888",
                        fontSize: "14px",
                      }}
                    >
                      Self-driven traffic
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Founding Partner */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white rounded-3xl p-10 md:p-14">
            <div
              className="text-sm uppercase tracking-wider mb-4"
              style={{ fontWeight: "500", color: "rgba(255,255,255,0.5)" }}
            >
              Limited Availability
            </div>
            <h2
              className="text-3xl md:text-4xl mb-4"
              style={{ fontWeight: "300", letterSpacing: "-0.02em" }}
            >
              Founding Partner{" "}
              <span style={{ fontWeight: "700" }}>Program</span>
            </h2>
            <p
              className="mb-8 max-w-2xl"
              style={{ fontWeight: "300", color: "rgba(255,255,255,0.7)" }}
            >
              For our first partners, we are removing all barriers to get
              started.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 rounded-xl p-6">
                <div
                  className="text-sm text-white/50 mb-3"
                  style={{ fontWeight: "500" }}
                >
                  Standard
                </div>
                <ul
                  className="space-y-2 text-sm"
                  style={{ fontWeight: "300" }}
                >
                  <li>Experience build: $5,000</li>
                  <li>Platform fee: Included in monthly</li>
                  <li>Monthly program: $5,000/mo minimum</li>
                  <li>Commitment: Month-to-month</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-xl p-6 ring-1 ring-white/30">
                <div
                  className="text-sm text-amber-400 mb-3"
                  style={{ fontWeight: "500" }}
                >
                  Founding Partner
                </div>
                <ul
                  className="space-y-2 text-sm"
                  style={{ fontWeight: "300" }}
                >
                  <li>
                    Experience build:{" "}
                    <span className="line-through text-white/40">$5,000</span>{" "}
                    <span className="text-amber-400">Waived</span>
                  </li>
                  <li>
                    Platform fee:{" "}
                    <span className="text-amber-400">Waived for 6 months</span>
                  </li>
                  <li>Monthly program: $5,000/mo</li>
                  <li>Commitment: 6 months</li>
                </ul>
              </div>
            </div>
            <p
              className="text-sm"
              style={{ fontWeight: "300", color: "rgba(255,255,255,0.5)" }}
            >
              Total investment: $5,000/mo for 6 months. After 6 months, platform
              fee begins based on portfolio size. We ask for permission to use
              anonymized results as a case study.
            </p>
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl text-gray-900 text-center mb-8"
            style={{ fontWeight: "300" }}
          >
            Add-Ons
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-gray-900 mb-1" style={{ fontWeight: "500" }}>
                Additional Experience Page
              </h3>
              <p
                className="text-sm mb-3"
                style={{ fontWeight: "300", color: "#888" }}
              >
                Sub-brand or product line
              </p>
              <div
                className="text-2xl text-gray-900"
                style={{ fontWeight: "300" }}
              >
                $3,000
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-gray-900 mb-1" style={{ fontWeight: "500" }}>
                Campaign Build
              </h3>
              <p
                className="text-sm mb-3"
                style={{ fontWeight: "300", color: "#888" }}
              >
                Seasonal, holiday, or co-brand partnership
              </p>
              <div
                className="text-2xl text-gray-900"
                style={{ fontWeight: "300" }}
              >
                $2,500
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes This Different */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-gray-900 text-center mb-14"
            style={{ fontWeight: "300", letterSpacing: "-0.02em" }}
          >
            What Makes This{" "}
            <span style={{ fontWeight: "700" }}>Different</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-8">
            {[
              {
                title: "Independent Third-Party Trust",
                desc: "When DrinkAgents recommends your wine, it carries the credibility of a trusted expert — not your brand selling itself.",
              },
              {
                title: "Consumer Intelligence",
                desc: "Preference profiles, natural language intent, cross-category behavior, and portfolio gaps — generated passively with every interaction.",
              },
              {
                title: "Always-On, Always-On-Brand",
                desc: "Unlike influencer posts that disappear or trade shows that last a weekend, your experience runs 24/7 and every interaction is measurable.",
              },
              {
                title: "Full Funnel, Single Report",
                desc: "From first touchpoint to retailer click-out, you see exactly how your investment converts into consumer engagement and purchase intent.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 items-start">
                <div className="shrink-0 mt-1.5 w-2 h-2 rounded-full bg-gray-900" />
                <div>
                  <h3
                    className="text-gray-900 mb-1"
                    style={{ fontWeight: "500" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontWeight: "300",
                      color: "#666",
                      fontSize: "15px",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <section className="bg-gray-900 text-white px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl mb-4"
            style={{ fontWeight: "300", letterSpacing: "-0.02em" }}
          >
            Ready to get started?
          </h2>
          <p
            className="mb-8"
            style={{ fontWeight: "300", color: "rgba(255,255,255,0.6)" }}
          >
            Where consumers discover their next favorite drink.
          </p>
          <a
            href="mailto:partners@drinkagents.com"
            className="inline-block bg-white text-gray-900 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors"
            style={{ fontWeight: "500" }}
          >
            Get in Touch
          </a>
          <p
            className="mt-12 text-sm"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            drinkagents.com
          </p>
        </div>
      </section>
    </div>
  );
}
