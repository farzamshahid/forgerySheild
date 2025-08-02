'use client';
import { useState } from 'react';
import Link from 'next/link';
import TopBanner from './topBanner';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'; // optional icons

const navItems = [
    {
        key: 'product',
        label: 'Product',
        children: [
            {
                title: 'User Authentication',
                href: '/user-authentication',
                description: 'Powerful options to securely authenticate and manage your users',
                badge: null,
            },
            {
                title: 'B2B SaaS Suite',
                href: '/b2b-saas-suite',
                description: 'Add-on features built specifically for B2B applications',
                badge: null,
            },
            {
                title: 'Billing',
                href: '/billing',
                description: 'The easiest way to implement subscriptions for applications',
                badge: 'Beta',
            },
        ],
    },
    {
        key: 'solutions',
        label: 'Solutions',
        children: [
            {
                title: 'React Components',
                href: '/react-components',
                description: 'Embeddable prebuilt UI components for quick and seamless integrations',
            },
            {
                title: 'Next.js Authentication',
                href: '/nextjs-authentication',
                description: 'The fastest and most seamless authentication solution for Next.js',
            },
            {
                title: 'Expo',
                href: '/expo',
                description: 'Implement cross-platform authentication the React way',
            },
            {
                title: 'Authentication for AI',
                href: '/ai-authentication',
                description: 'Authentication and abuse protection tailored to AI applications',
            },
        ],
    },
    {
        key: 'docs',
        label: 'Docs',
        children: [
            { title: 'Next.js', href: '/docs/quickstarts/nextjs' },
            { title: 'React', href: '/docs/quickstarts/react' },
            { title: 'Expo', href: '/docs/quickstarts/expo' },
            // ... add others
        ],
    },
    {
        key: 'company',
        label: 'Company',
        children: [
            {
                title: 'About',
                href: '/company',
                description: 'Everything you need to know about Clerk',
            },
            { title: 'Partnership Program', href: '/creators' },
            { title: 'Blog', href: '/blog' },
            { title: 'Careers', href: '/careers' },
            { title: 'Contact', href: '/contact' },
        ],
    },
    {
        key: 'pricing',
        label: 'Pricing',
        href: '/pricing',
    },
];

const Header = () => {
    const [hovered, setHovered] = useState(null); // for desktop hover
    const [mobileExpanded, setMobileExpanded] = useState({}); // { product: true, solutions: false, ... }
    const [isOpen, setIsOpen] = useState(false);

    const toggleMobileSection = (key) =>
        setMobileExpanded((prev) => ({ ...prev, [key]: !prev[key] }));

    return (
        <>
            <div className="hidden lg:block">
                <TopBanner />
            </div>
            {!isOpen && <div className="block lg:hidden"><TopBanner /></div>}

            <header className="sticky top-0 z-40 w-full pointer-events-none">
                <div className="relative z-40 bg-gray-50/80 dark:bg-gray-950/[0.01] backdrop-blur-md">
                    <div className="pointer-events-auto relative mx-auto flex h-16 items-center px-6 lg:max-w-[60rem] lg:px-0 xl:max-w-[76rem]">
                        <Link aria-label="Home" href="/" className="select-none">
                            {/* logo placeholder */}
                            <div className="font-bold">Logo</div>
                        </Link>

                        {/* Desktop nav */}
                        <nav className="ml-7 hidden lg:block">
                            <ul className="flex gap-6 text-gray-950 dark:text-white">
                                {navItems.map((item) => (
                                    <li
                                        key={item.key}
                                        className="relative"
                                        onMouseEnter={() => setHovered(item.key)}
                                        onMouseLeave={() => setHovered(null)}
                                    >
                                        {item.children ? (
                                            <>
                                                <button
                                                    aria-expanded={hovered === item.key}
                                                    className="flex items-center gap-1 rounded-md px-2 py-0.5 text-sm font-medium transition-colors hover:bg-gray-950/5 dark:hover:bg-white/10"
                                                >
                                                    {item.label}
                                                    <ChevronDownIcon size={12} />
                                                </button>
                                                {hovered === item.key && (
                                                    <div className="absolute top-full mt-2 w-max rounded-xl bg-gray-50 p-3 shadow-lg">
                                                        <ul className="space-y-2">
                                                            {item.children.map((child) => (
                                                                <li key={child.title}>
                                                                    <Link
                                                                        href={child.href}
                                                                        className="block rounded-lg p-2 hover:bg-gray-100"
                                                                    >
                                                                        <div className="flex items-start gap-3">
                                                                            <div>
                                                                                <div className="font-medium text-sm">{child.title}{child.badge && (
                                                                                    <span className="ml-2 inline-block rounded bg-blue-50 px-2 text-xs font-semibold text-blue-600">
                                                                                        {child.badge}
                                                                                    </span>
                                                                                )}</div>
                                                                                {child.description && (
                                                                                    <div className="text-xs text-gray-600">
                                                                                        {child.description}
                                                                                    </div>
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                className="rounded-md px-2 py-0.5 text-sm font-medium hover:bg-gray-950/5 dark:hover:bg-white/10"
                                            >
                                                {item.label}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Right-side CTAs */}
                        <div className="ml-auto flex items-center gap-6 font-medium">
                            <div className="hidden sm:flex gap-4">
                                <button className="text-sm px-2 py-1 rounded-md hover:bg-gray-950/5">
                                    Sign in
                                </button>
                                <Link
                                    href="https://clerk.com/docs/quickstart"
                                    target="_blank"
                                    className="rounded-md bg-gray-900 px-3 py-1 text-white text-sm"
                                >
                                    Start building
                                </Link>
                            </div>
                        </div>

                        {/* Mobile toggle */}
                        <button
                            aria-label="Toggle menu"
                            onClick={() => setIsOpen((o) => !o)}
                            className="ml-auto lg:hidden p-3 rounded-full"
                        >
                            {isOpen ? 'Close' : 'Menu'}
                        </button>
                    </div>

                    {/* Mobile menu */}
                    {isOpen && (
                        <div className="lg:hidden bg-gray-50/[0.92] backdrop-blur-md">
                            <div className="px-6 py-4">
                                {navItems.map((item) => (
                                    <div key={item.key} className="border-t border-gray-300 py-2">
                                        {item.children ? (
                                            <>
                                                <button
                                                    onClick={() => toggleMobileSection(item.key)}
                                                    className="flex w-full justify-between font-semibold text-left"
                                                >
                                                    {item.label}
                                                    {mobileExpanded[item.key] ? (
                                                        <ChevronUpIcon size={16} />
                                                    ) : (
                                                        <ChevronDownIcon size={16} />
                                                    )}
                                                </button>
                                                {mobileExpanded[item.key] && (
                                                    <ul className="mt-2 space-y-1 pl-4">
                                                        {item.children.map((child) => (
                                                            <li key={child.title}>
                                                                <Link href={child.href} className="block py-2">
                                                                    <div className="flex justify-between">
                                                                        <div>{child.title}</div>
                                                                        {child.badge && (
                                                                            <div className="text-xs font-semibold">{child.badge}</div>
                                                                        )}
                                                                    </div>
                                                                    {child.description && (
                                                                        <div className="text-xs text-gray-600">
                                                                            {child.description}
                                                                        </div>
                                                                    )}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </>
                                        ) : (
                                            <Link href={item.href} className="block py-2 font-semibold">
                                                {item.label}
                                            </Link>
                                        )}
                                    </div>
                                ))}

                                {/* Mobile CTAs */}
                                <div className="mt-4 flex flex-col gap-2">
                                    <button className="w-full text-left font-medium">Sign in</button>
                                    <Link
                                        href="https://clerk.com/docs/quickstart"
                                        target="_blank"
                                        className="w-full inline-block rounded-md bg-gray-900 px-4 py-2 text-center text-white"
                                    >
                                        Start building
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </header>
        </>
    );
};

export default Header;
