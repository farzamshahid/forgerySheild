"use client"
import { useState } from "react"
import TopBanner from "./topBanner"
const navItems = [
    {
        key: "product",
        label: "Product",
        triggerId: "radix-product-trigger",
        contentId: "radix-product-content",
        children: [
            {
                title: "User Authentication",
                href: "/user-authentication",
                description: "Powerful options to securely authenticate and manage your users",
            },
            {
                title: "B2B SaaS Suite",
                href: "/b2b-saas-suite",
                description: "Add-on features built specifically for B2B applications",
            },
            {
                title: "Billing",
                href: "/billing",
                description: "The easiest way to implement subscriptions for applications",
                badge: "Beta",
            },
        ],
    },
    {
        key: "solutions",
        label: "Solutions",
        triggerId: "radix-solution-trigger",
        contentId: "radix-solution-content",
        children: [
            {
                title: "React Components",
                href: "/react-components",
                description: "Embeddable prebuilt UI components for quick and seamless integrations",
            },
            {
                title: "Next.js Authentication",
                href: "/nextjs-authentication",
                description: "The fastest and most seamless authentication solution for Next.js",
            },
            {
                title: "Expo",
                href: "/expo",
                description: "Implement cross-platform authentication the React way",
            },
            {
                title: "Authentication for AI",
                href: "/ai-authentication",
                description: "Authentication and abuse protection tailored to AI applications",
            },
        ],
    },
    {
        key: "docs",
        label: "Docs",
        triggerId: "radix-docs-trigger",
        contentId: "radix-docs-content",
        children: [
            { title: "Next.js", href: "/docs/quickstarts/nextjs" },
            { title: "React", href: "/docs/quickstarts/react" },
            { title: "Expo", href: "/docs/quickstarts/expo" },
        ],
    },
    {
        key: "pricing", label: "Pricing", href: "/pricing", triggerId: "radix-pricing-trigger",
        contentId: "radix-pricing-content",
    },
    {
        key: "company",
        label: "Company",
        triggerId: "radix-company-trigger",
        contentId: "radix-company-content",
        children: [
            { title: "About", href: "/company", description: "Everything you need to know about Clerk" },
            { title: "Partnership Program", href: "/creators" },
            { title: "Blog", href: "/blog" },
            { title: "Careers", href: "/careers" },
            { title: "Contact", href: "/contact" },
        ],
    },
]

const Header = () => {
    const [hovered, setHovered] = useState({})
    const [isOpen, setIsOpen] = useState(false)
    const [expanded, setExpanded] = useState({})

    const toggleMenu = () => setIsOpen((o) => !o)

    const toggleMobileSection = (key) => {
        console.log(`Toggling ${key}, current state:`, expanded[key])
        setExpanded((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    return (
        <>
            {/* Top Banner - simplified for demo */}
            <div className="hidden lg:block">
                <TopBanner />
            </div>
            {!isOpen && (
                <div className="block lg:hidden">
                    <TopBanner />
                </div>
            )}

            <header className="sticky top-0 z-40 w-full">
                <div className="relative z-40 bg-white shadow-sm">
                    <div className="relative mx-auto flex h-16 items-center px-6 lg:max-w-[60rem] lg:px-0 xl:max-w-[76rem]">
                        <a href="/" className="select-none">
                            <div className="font-bold text-xl">Logo</div>
                        </a>

                        {/* Desktop Navigation */}
                        <nav className="ml-7 hidden lg:block">
                            <ul className="flex text-gray-950" dir="ltr">
                                {navItems.map((item) => (
                                    <li
                                        key={item.key}
                                        className="relative flex"
                                        onMouseEnter={() => setHovered((h) => ({ ...h, [item.key]: true }))}
                                        onMouseLeave={() => setHovered((h) => ({ ...h, [item.key]: false }))}
                                    >
                                        {item.children ? (
                                            <>
                                                <button
                                                    id={item.triggerId}
                                                    data-state={hovered[item.key] ? "open" : "closed"}
                                                    aria-expanded={!!hovered[item.key]}
                                                    aria-controls={item.contentId}
                                                    className="group cursor-pointer rounded-md px-2 py-1 text-sm font-medium transition-colors hover:bg-gray-100 flex items-center"
                                                >
                                                    {item.label}
                                                    <svg
                                                        className={`ml-1 h-4 w-4 transition-transform duration-200`}
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>
                                                {hovered[item.key] && (
                                                    <div
                                                        id={item.contentId}
                                                        className="absolute top-full mt-2 w-max rounded-xl bg-white border p-3 shadow-lg"
                                                    >
                                                        <ul className="space-y-2">
                                                            {item.children.map((child) => (
                                                                <li key={child.title}>
                                                                    <a href={child.href} className="block rounded-lg p-2 hover:bg-gray-100">
                                                                        <div className="flex flex-col">
                                                                            <div className="font-medium text-sm flex items-center gap-2">
                                                                                {child.title}
                                                                                {child.badge && (
                                                                                    <span className="inline-block rounded bg-blue-50 px-2 text-xs font-semibold text-blue-600">
                                                                                        {child.badge}
                                                                                    </span>
                                                                                )}
                                                                            </div>
                                                                            {child.description && (
                                                                                <div className="text-xs text-gray-600">{child.description}</div>
                                                                            )}
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </>
                                        ) : (
                                            item.href && (
                                                <a
                                                    href={item.href}
                                                    className="rounded-md px-2 py-0.5 text-sm font-medium hover:bg-gray-100"
                                                >
                                                    {item.label}
                                                </a>
                                            )
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* CTAs */}
                        <div className="ml-auto flex items-center gap-6 font-medium">
                            <div className="hidden sm:flex gap-4">
                                <button className="text-sm px-2 py-1 rounded-md hover:bg-gray-100">Sign in</button>
                                <a
                                    href="https://clerk.com/docs/quickstart"
                                    target="_blank"
                                    className="rounded-md bg-gray-900 px-3 py-1 text-white text-sm hover:bg-gray-800"
                                >
                                    Start building
                                </a>
                            </div>
                        </div>

                        {/* Mobile toggle */}
                        <button
                            aria-label="Toggle menu"
                            onClick={toggleMenu}
                            className="ml-auto lg:hidden p-2 rounded-md hover:bg-gray-100"
                        >
                            <div className="w-6 h-6 flex flex-col justify-center items-center">
                                {isOpen ? (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )}
                            </div>
                        </button>
                    </div>

                    {/* Mobile menu */}
                    {isOpen && (
                        <div className="lg:hidden bg-white border-t border-gray-200">
                            <div className="px-6 py-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
                                {navItems.map((item) => (
                                    <div key={item.key} className="border-b border-gray-200 last:border-b-0">
                                        {item.children ? (
                                            <>
                                                <button
                                                    onClick={() => toggleMobileSection(item.key)}
                                                    className="flex w-full justify-between items-center py-4 font-semibold text-left text-gray-900 hover:text-gray-600 transition-colors"
                                                    aria-expanded={expanded[item.key]}
                                                >
                                                    <span>{item.label}</span>
                                                    <svg
                                                        className={`w-5 h-5 transition-transform duration-300 ${expanded[item.key] ? "rotate-180" : "rotate-0"}`}
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>

                                                {/* Submenu - only shows when expanded */}
                                                {expanded[item.key] && (
                                                    <div className="pb-4 animate-in slide-in-from-top-2 duration-300">
                                                        <ul className="space-y-1 pl-4">
                                                            {item.children.map((child) => (
                                                                <li key={child.title}>
                                                                    <a
                                                                        href={child.href}
                                                                        className="block py-3 rounded-md transition-colors hover:bg-gray-100"
                                                                        onClick={() => setIsOpen(false)}
                                                                    >
                                                                        <div className="flex justify-between items-start">
                                                                            <div className="flex flex-col flex-1">
                                                                                <div className="font-medium text-gray-900 flex items-center gap-2">
                                                                                    {child.title}
                                                                                    {child.badge && (
                                                                                        <span className="inline-block rounded bg-blue-50 px-2 py-0.5 text-xs font-semibold text-blue-600">
                                                                                            {child.badge}
                                                                                        </span>
                                                                                    )}
                                                                                </div>
                                                                                {child.description && (
                                                                                    <div className="text-sm text-gray-600 mt-1">{child.description}</div>
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </>
                                        ) : (
                                            item.href && (
                                                <a
                                                    href={item.href}
                                                    className="block py-4 font-semibold text-gray-900 hover:text-gray-600 transition-colors"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {item.label}
                                                </a>
                                            )
                                        )}
                                    </div>
                                ))}

                                {/* Mobile CTAs */}
                                <div className="mt-6 pt-4 border-t border-gray-200 flex flex-col gap-3">
                                    <button className="w-full text-left font-medium text-gray-900 py-2 hover:text-gray-600 transition-colors">
                                        Sign in
                                    </button>
                                    <a
                                        href="https://clerk.com/docs/quickstart"
                                        target="_blank"
                                        className="w-full inline-block rounded-md bg-gray-900 px-4 py-3 text-center text-white font-medium hover:bg-gray-800 transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Start building
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </header>

        </>
    )
}

export default Header