"use client";
import React from "react";
import Image from "next/image";
import { Poppins } from 'next/font/google';
import RollingGallery from "@/components/ui/rollingGallery";
import Header from "@/components/ui/header";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { TextRevealCard } from "@/components/ui/text-reveal-card";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
    display: 'swap',
});

const HomePage = () => {
    // Data arrays
    const companies = [
        { name: "Browserbase", src: "/images/BROWSERBASE.png" },
        { name: "Inngest", src: "/images/INGEST.png" },
        { name: "Braintrust", src: "/images/BRAINTRUST.png" },
        { name: "Suno", src: "/images/SUNO.png" },
        { name: "Durable", src: "/images/DURABLE.png" },
        { name: "OpenRouter", src: "/images/OPENROUTER.png" },
        { name: "Higgsfield", src: "/images/HIGGSFIELD.png" },
        { name: "Upstash", src: "/images/UPSTASH.png" },
    ];

    const cards = [
        ["Leakage Issues", "Distributors may unintentionally push fakes."],
        ["Non‑Compliance", "Failed authenticity means failed exports."],
        ["Revenue Loss", "Fakes undercut your profits and harm your brand."],
        ["Brand Damage", "Counterfeits erode consumer trust."]
    ];

    return (
        <>
            <Header />

            {/* Hero Section */}
            <section className="w-full bg-[url('/images/Background.png')] bg-cover bg-center bg-no-repeat">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-between gap-8 py-10 lg:flex-row lg:py-10">
                        {/* Left Content */}
                        <div className="flex flex-col lg:w-1/2 lg:pr-8">
                            <p className="md:mt-4  mb-2 text-base text-[#131316] sm:text-lg md:ml-[-5px]  md:text-[18px] lg:ml-7.5">
                                Eliminate Forgery with One Scan
                            </p>

                            <h1 className="mb-4 text-[17px] font-extrabold leading-tight text-[#131316] md:text-[22px] md:leading-normal md:ml-[-2px] lg:ml-8 lg:text-[50px] lg:leading-[1.2] md:whitespace-nowrap">
                                Smart QR Security Stickers to<br className="hidden md:block" /> Protect Your Products
                            </h1>

                            <p className="mb-6 text-[15px] text-[#131316] md:ml-[-8px] lg:ml-9 md:whitespace-nowrap">
                                Prevent counterfeits with our tamper-proof, scan-to-verify QR labels tailored for your brand.
                            </p>

                            <button className="w-fit rounded-md bg-[#3B5FF0] px-6 py-3 text-sm font-medium text-white transition-colors duration-200  md:ml-4 lg:ml-9">
                                Request Sample
                            </button>
                        </div>

                        {/* Right Image */}
                        <div className="relative lg:w-1/2">
                            <img
                                src="/images/Group 1000003013.png"
                                alt="QR Scan Phone"
                                width={420}
                                height={420}
                                className="w-full max-w-[280px] sm:max-w-[320px] md:ml-53 md:max-w-[380px] lg:max-w-[420px]"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Companies Section */}
            <section className="py-8 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-start">
                        <p className={`${poppins.className} mx-5 text-[15px] font-medium text-[#131316] sm:mx-7 md:mx-8 lg:mx-9`}>
                            Trusted by companies <br className="hidden sm:block" />around the globe
                        </p>

                        <div className="flex flex-wrap justify-center gap-7 lg:justify-start">
                            {companies.map((company) => (
                                <div key={company.name} className="h-6 w-[90px]">
                                    <Image
                                        src={company.src}
                                        alt={company.name}
                                        height={24}
                                        width={100}
                                        className="h-full w-auto object-contain"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* Counterfeits Section */}
            <section
                className="w-full py-16 px-4 md:px-8 bg-[url('/images/BGIMAGE.png')] bg-cover bg-no-repeat bg-center"
            >
                <div className="max-w-6xl mx-auto pt-8">
                    <h2 className="ml-1 text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                        Counterfeits are Costing You.
                    </h2>

                    <div className="flex flex-wrap  gap-0 mb-12  justify-center lg:justify-start">
                        {cards.map(([title, text], i) => (
                            <div
                                key={`card-${i}`}
                                className={`
                        relative group/card flex border border-gray-100 bg-white overflow-hidden shadow-sm
                        w-[255px] h-[124px] flex-shrink-0 transition-all duration-300
                        ${i === 0 ? 'rounded-l-lg' : ''}
                        ${i === cards.length - 1 ? 'rounded-r-lg' : ''}
                    `}
                            >
                                <div className="opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 absolute inset-0 h-full w-full bg-gradient-to-t from-gray-100 to-transparent pointer-events-none" />

                                {/* Side Accent - optimized for performance */}
                                <div className="w-2 flex-none relative">
                                    <div
                                        className="absolute top-6 w-2 h-[25px] -left-px
                                bg-gradient-to-r from-[#D9D6FF] to-[#D0EAF5]
                                group-hover/card:bg-blue-500
                                group-hover/card:from-blue-500 group-hover/card:to-blue-500
                                rounded-tr-[15px] rounded-br-[15px]
                                transition-colors duration-300"
                                    />
                                </div>

                                {/* Text Content */}
                                <div className="pl-3 pr-2 py-3 flex-1">
                                    <h3 className="font-semibold text-sm text-gray-900 mb-1 leading-tight pt-4 transition-transform duration-200 group-hover/card:translate-x-1">
                                        {title}
                                    </h3>
                                    <p className="text-xs text-gray-600 leading-tight">{text}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center md:text-left">
                        <TextRevealCard
                            className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${poppins.className}`}
                            text="We Help You Fight Back!"
                            revealText="We Help You Fight Back!"
                        />
                    </div>
                </div>
            </section>
            {/* One Product Section */}
            <section className="relative w-full bg-[#F3F4F6] py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto flex flex-col items-center">
                    {/* Heading */}
                    <div className="w-full text-center mb-6 sm:mb-8">
                        <h2 className={`text-2xl sm:text-3xl font-semibold text-[#2C2121] ${poppins.className}`}>
                            One Product. One Secure Sticker.
                        </h2>
                    </div>

                    {/* Description */}
                    <div className="w-full max-w-3xl text-center mb-10 sm:mb-12">
                        <p className={`text-sm sm:text-base leading-relaxed text-[#2C2121] ${poppins.className}`}>
                            We offer real-time global product verification with tamper-proof stickers that alert you instantly
                            whenever your product is scanned — anywhere in the world. Our easy-to-integrate solution builds trust,
                            protects your brand, and gives you full visibility over your supply chain.
                        </p>
                    </div>

                    {/* Content Row */}
                    <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                        {/* Left: Features */}
                        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                            <div className="flex items-start gap-4">
                                <span className="text-blue-600 text-2xl mt-1 font-bold">•</span>
                                <div>
                                    <h2 className="text-lg font-semibold text-[#2C2121] mb-2">Unique QR Code</h2>
                                    <p className="text-[#2C2121] text-sm opacity-80">Every item carries a tamper-proof digital identity.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <span className="text-blue-600 text-2xl mt-1 font-bold">•</span>
                                <div>
                                    <h2 className="text-lg font-semibold text-[#2C2121] mb-2">Live Tracking</h2>
                                    <p className="text-[#2C2121] text-sm opacity-80">Real-time scan data and usage heatmaps.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <span className="text-blue-600 text-2xl mt-1 font-bold">•</span>
                                <div>
                                    <h2 className="text-lg font-semibold text-[#2C2121] mb-2">Consumer Scan</h2>
                                    <p className="text-[#2C2121] text-sm opacity-80">Instant verification of product authenticity.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <span className="text-blue-600 text-2xl mt-1 font-bold">•</span>
                                <div>
                                    <h2 className="text-lg font-semibold text-[#2C2121] mb-2">Manufacturer Dashboard</h2>
                                    <p className="text-[#2C2121] text-sm opacity-80">Insights, alerts and product control at your fingertips.</p>
                                </div>
                            </div>
                        </div>

                        {/* Right: Image */}
                        <div className="w-full lg:w-1/2 flex ml-4 md:mr-[-52px] justify-center px-4 sm:px-0">
                            <Image
                                src="/images/fakeguard.png"
                                alt="Secure Sticker"
                                width={600}
                                height={400}
                                priority
                                className="w-full max-w-[540px] h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Control Section */}
            <section className="py-16 md:py-24">
                {/* Main container to center content with horizontal padding */}
                <div className="container mx-auto px-4 text-center">

                    {/* Text Content Wrapper */}
                    <div className="mx-auto max-w-4xl">
                        <h2
                            className={`text-3xl font-semibold text-[#000000] md:text-4xl ${poppins.className}`}
                        >
                            Total Control. Full Transparency.
                        </h2>
                        <p
                            className={`mx-auto mt-4 max-w-2xl text-base font-normal text-gray-600 md:text-lg ${poppins.className}`}
                        >
                            Track every unit sold, scanned, and verified. Monitor locations, batches, and consumer
                            feedback with our easy-to-use dashboard.
                        </p>
                    </div>

                    {/* Logos Wrapper */}
                    <div className="my-12 flex flex-wrap items-center justify-center gap-10 md:gap-16">
                        <div className="relative h-6 w-32">
                            <Image
                                src="/images/real.png"
                                alt="Real logo"
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                        <div className="relative h-6 w-32">
                            <Image
                                src="/images/track.png"
                                alt="Track logo"
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                        <div className="relative h-6 w-32">
                            <Image
                                src="/images/instant.png"
                                alt="Instant logo"
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                    </div>

                    {/* Dashboard Image */}
                    <div className="mt-8">
                        <Image
                            src="/images/image30.png"
                            alt="Dashboard providing analytics and tracking"
                            width={894}
                            height={483}
                            className="mx-auto h-auto w-full max-w-5xl rounded-lg shadow-xl"
                        />
                    </div>

                </div>
            </section>
            {/* Features Section */}
            <section className="relative w-full min-h-[1000px] md:min-h-[900px] lg:min-h-[600px] xl:min-h-[500px] 2xl:min-h-[400px]">
                {/* This container ensures the content starts far down the section,
          similar to the original absolute top-[760px], but responsively. */}
                {/* We use `top` with a percentage or vh unit to push it down,
          and then flexbox for internal layout */}
                <div className="absolute top-[2%]   left-1/2 -translate-x-1/2 w-full max-w-[1100px] px-4">
                    <div className="flex flex-col lg:flex-row justify-center items-start gap-8 lg:gap-16">
                        {/* Card 1: Built for Real-World Challenges */}
                        <div className="w-full max-w-sm md:max-w-md lg:max-w-[531px] min-h-[210px] border-[2px] rounded-[10px] bg-transparent relative p-4">
                            <p className={`${poppins.className} font-semibold text-md md:text-2xl text-black leading-snug tracking-normal whitespace-nowrap align-middle mb-4`}>
                                Built for Real-World Challenges
                            </p>
                            <div className="w-full">
                                <RollingGallery
                                    autoplay={true}
                                    pauseOnHover={true}
                                />
                            </div>
                        </div>

                        {/* Card 2: Why Brands Trust ForgeryShield */}
                        <CardSpotlight className="w-full max-w-sm md:max-w-md lg:max-w-[340px] min-h-[212px] bg-black border-[2px] rounded-[10px] p-4 relative">
                            <p className={`${poppins.className} font-semibold text-md md:text-lg mb-3 whitespace-nowrap text-white`}>
                                Why Brands Trust ForgeryShield
                            </p>
                            <p className={`${poppins.className} font-semibold text-xs md:text-xs text-white whitespace-nowrap leading-[2]`}>
                                🔒 Multi-layered QR + hologram protection<br />
                                🌍 Global-ready tech for any region<br />
                                💬 Custom language and branding<br />
                                📲 Easy API and factory integration<br />
                                🧠 Consumer engagement tools<br />
                                🪙 Affordable for all business sizes
                            </p>
                        </CardSpotlight>
                    </div>
                </div>
            </section>        {/* CTA Section */}
            <section className="relative w-full px-4 py-12 sm:px-6 md:px-12 lg:px-0 lg:py-0">
                {/* Background Image - Absolute on desktop */}
                <div
                    className="hidden lg:block absolute top-[1000px] left-[153px] w-[1011px] h-[266px] rounded-[20px] bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/images/last.png')" }}
                />

                {/* Mobile/Tablet Stacked Layout */}
                <div className="flex flex-col items-start lg:hidden gap-4 bg-cover bg-center bg-no-repeat rounded-[20px] py-6 px-4"
                    style={{ backgroundImage: "url('/images/last.png')" }}>
                    <p className={`${poppins.className} font-medium text-[20px] text-black`}>
                        Ready To Protect Your Brand?
                    </p>
                    <p className={`${poppins.className} text-[12px] leading-[20px] text-black`}>
                        Integrate complete user management in minutes. Free for your first 10,000 monthly active users and 100 monthly active orgs. No credit card required.
                    </p>
                    <button className="bg-[#3B5FF0] text-white text-[14px] px-4 py-2 rounded-[6px]">
                        Request Sample
                    </button>
                    <img
                        src="/images/Group1000003014.png"
                        alt="CTA Image"
                        className="w-[200px] h-[200px] self-center"
                    />
                </div>

                {/* Absolute-positioned Desktop Layout */}
                <div className="hidden lg:block">
                    <p className={`${poppins.className} font-medium text-[24px] text-black absolute left-[287px] top-[1044px]`}>
                        Ready To Protect Your Brand?
                    </p>
                    <p className={`${poppins.className} font-medium text-[12px] leading-[24px] absolute left-[286px] top-[1085px] whitespace-nowrap`}>
                        Integrate complete user management in minutes. Free for<br />
                        your first 10,000 monthly active users and 100 monthly<br />
                        active orgs. No credit card required.
                    </p>
                    <button className="bg-[#3B5FF0] text-white absolute top-[1175px] left-[285px] w-[140px] h-[40px] text-[14px] px-3 rounded-[6px]">
                        Request Sample
                    </button>
                    <img
                        src="/images/Group1000003014.png"
                        alt="CTA Image"
                        className="w-[342px] h-[342px] absolute top-[968px] left-[814px]"
                    />
                </div>
            </section>
        </>
    );
};


export default HomePage;