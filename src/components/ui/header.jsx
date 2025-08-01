'use client';
import { React, useState } from 'react'
import TopBanner from './topBanner';
const Header = () => {
    const [isProductExpanded, setIsProductExpanded] = useState(false);
    const [isSolutionsExpanded, setIsSolutionsExpanded] = useState(false);
    const [isDocsExpanded, setIsDocsExpanded] = useState(false);
    const [isCompanyExpanded, setIsCompanyExpanded] = useState(false);
    const [isProductHovered, setIsProductHovered] = useState(false);
    const [isSolutionHovered, setIsSolutionHovered] = useState(false);
    const [isDocsHovered, setIsDocsHovered] = useState(false);
    const [isCompanyHovered, setIsCompanyHovered] = useState(false);

    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <>
                <div className="hidden lg:block">
                    <TopBanner />
                </div>

                {!isOpen && (
                    <div className="block lg:hidden">
                        <TopBanner />
                    </div>
                )}
            </>

            <header
                id="header"
                className="pointer-events-none sticky top-0  z-40  w-full"
            >
                <div className="relative z-40 bg-gray-50/80 dark:bg-gray-950/[0.01] backdrop-blur-md">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute inset-x-0 top-[-138px] -z-10 flex justify-center overflow-hidden opacity-80">
                            <div
                                className="h-[400px] w-[1280px] flex-none rounded-[50%] [display:var(--light,block)_var(--dark,none)]"
                                style={{
                                    background: "radial-gradient(50% 50% at 50% 50%, #f5f6f7 0%, rgb(245 246 247 / 0) 100%)",
                                }}
                            ></div>
                        </div >
                    </div >
                    <div className="pointer-events-auto relative mx-auto flex h-16 items-center px-6 lg:max-w-[60rem] lg:px-0 xl:max-w-[76rem]">
                        <div className="absolute inset-x-0 top-full h-px bg-gray-500/10 dark:bg-white/10"></div>
                        <a
                            aria-label="Clerk Home Page"
                            className="select-none"
                            data-state="closed"
                            style={{ WebkitTouchCallout: 'none' }}
                            href="/"
                        >
                            <svg viewBox="0 0 62 18" fill="none" aria-hidden="true" className="mr-auto h-[1.125rem] fill-[#654BF6] dark:fill-white">
                                <ellipse cx="8.99999" cy="9" rx="2.81249" ry="2.8125" className="fill-[#654BF6] dark:fill-white"></ellipse>
                                <path d="M14.0674 15.6591C14.3067 15.8984 14.2827 16.2945 14.0015 16.4829C12.571 17.4411 10.8504 17.9999 8.9993 17.9999C7.14818 17.9999 5.42758 17.4411 3.99704 16.4829C3.71589 16.2945 3.69186 15.8984 3.93115 15.6591L5.98648 13.6037C6.17225 13.418 6.46042 13.3886 6.69424 13.5084C7.3856 13.8626 8.16911 14.0624 8.9993 14.0624C9.82948 14.0624 10.613 13.8626 11.3044 13.5084C11.5382 13.3886 11.8263 13.418 12.0121 13.6037L14.0674 15.6591Z" className="fill-[#654BF6] dark:fill-white"></path>
                                <path d="M14.0022 1.51706C14.2834 1.70539 14.3074 2.10155 14.0681 2.34084L12.0128 4.39619C11.827 4.58195 11.5388 4.61129 11.305 4.49151C10.6136 4.13733 9.83014 3.9375 8.99996 3.9375C6.20403 3.9375 3.93748 6.20406 3.93748 9C3.93748 9.83018 4.13731 10.6137 4.49149 11.3051C4.61127 11.5389 4.58193 11.827 4.39617 12.0128L2.34083 14.0682C2.10154 14.3074 1.70538 14.2834 1.51705 14.0023C0.558857 12.5717 0 10.8511 0 9C0 4.02944 4.02942 0 8.99996 0C10.8511 0 12.5717 0.55886 14.0022 1.51706Z" fillOpacity="0.5" className="fill-[#654BF6] dark:fill-white"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M29.3906 1.82813C29.3906 1.75046 29.4535 1.6875 29.5312 1.6875H31.6406C31.7182 1.6875 31.7812 1.75046 31.7812 1.82813V16.1719C31.7812 16.2495 31.7182 16.3125 31.6406 16.3125H29.5312C29.4535 16.3125 29.3906 16.2495 29.3906 16.1719V1.82813ZM26.4137 13.2701C26.3577 13.2217 26.2739 13.2253 26.2201 13.2761C25.8913 13.5864 25.5063 13.8347 25.0843 14.0078C24.6215 14.1979 24.1239 14.2936 23.622 14.2891C23.1982 14.3016 22.7762 14.2291 22.3821 14.076C21.988 13.9229 21.63 13.6925 21.3303 13.3989C20.7859 12.8431 20.4726 12.0496 20.4726 11.1037C20.4726 9.2101 21.7324 7.91491 23.622 7.91491C24.1289 7.90793 24.631 8.01058 25.0926 8.21543C25.5111 8.40122 25.8869 8.66683 26.1982 8.99629C26.2514 9.05264 26.3398 9.05916 26.3985 9.00842L27.8225 7.7762C27.8807 7.72586 27.8877 7.63797 27.8364 7.58065C26.7653 6.38368 25.0872 5.76563 23.4914 5.76563C20.2783 5.76563 18 7.93299 18 11.1217C18 12.6988 18.5662 14.0268 19.5211 14.9645C20.476 15.9023 21.8363 16.4531 23.4059 16.4531C25.3741 16.4531 26.9582 15.6984 27.8869 14.7302C27.9414 14.6734 27.9354 14.583 27.8758 14.5315L26.4137 13.2701ZM43.401 11.8056C43.3931 11.876 43.3332 11.9287 43.2623 11.9287H35.8731C35.7833 11.9287 35.7164 12.012 35.7398 12.0986C36.1074 13.4614 37.2035 14.286 38.6995 14.286C39.2038 14.2966 39.7037 14.1928 40.1605 13.9827C40.5862 13.787 40.9639 13.5038 41.2682 13.1528C41.305 13.1104 41.3691 13.1041 41.4122 13.1401L42.8978 14.4335C42.9547 14.483 42.9626 14.5687 42.9138 14.6262C42.0169 15.6843 40.5637 16.4531 38.5695 16.4531C35.5016 16.4531 33.1874 14.3286 33.1874 11.1009C33.1874 9.51732 33.7326 8.18944 34.6412 7.25179C35.1209 6.76963 35.6959 6.38911 36.3307 6.13368C36.9656 5.87826 37.6469 5.75332 38.3327 5.76658C41.4422 5.76658 43.453 7.95343 43.453 10.973C43.4491 11.2512 43.4317 11.5291 43.401 11.8056ZM35.7842 9.84589C35.7581 9.93268 35.8251 10.0172 35.9158 10.0172H40.829C40.9198 10.0172 40.9869 9.93217 40.9617 9.84491C40.6268 8.68592 39.7772 7.91244 38.4577 7.91244C38.0696 7.90013 37.6834 7.97039 37.3254 8.11832C36.9675 8.26633 36.6462 8.48856 36.3836 8.76977C36.1075 9.08283 35.9034 9.44988 35.7842 9.84589ZM50.7639 5.76717C50.8422 5.76632 50.9061 5.82952 50.9061 5.90779V8.26951C50.9061 8.35135 50.8365 8.41586 50.7548 8.40981C50.5269 8.39291 50.3114 8.37856 50.1701 8.37856C48.3301 8.37856 47.2499 9.67359 47.2499 11.3735V16.1719C47.2499 16.2495 47.1869 16.3125 47.1092 16.3125H44.9999C44.9222 16.3125 44.8592 16.2495 44.8592 16.1719V6.05379C44.8592 5.97613 44.9222 5.91317 44.9999 5.91317H47.1092C47.1869 5.91317 47.2499 5.97613 47.2499 6.05379V7.47394C47.2499 7.48196 47.2563 7.48845 47.2644 7.48845C47.2689 7.48845 47.2733 7.48627 47.276 7.48261C48.1006 6.38146 49.3176 5.76892 50.6033 5.76892L50.7639 5.76717ZM56.4778 11.9525C56.4864 11.9432 56.4985 11.938 56.5112 11.938C56.5269 11.938 56.5415 11.9461 56.5498 11.9595L59.217 16.2462C59.2426 16.2874 59.2878 16.3125 59.3364 16.3125L61.7342 16.3125C61.8445 16.3125 61.9118 16.1915 61.8538 16.0978L58.1947 10.1939C58.1616 10.1406 58.1679 10.0719 58.21 10.0254L61.7355 6.13573C61.8174 6.04534 61.7533 5.90066 61.6313 5.90066H59.1298C59.0904 5.90066 59.0528 5.91719 59.0261 5.94622L54.9472 10.3925C54.8605 10.487 54.7029 10.4257 54.7029 10.2974V1.82812C54.7029 1.75046 54.64 1.6875 54.5623 1.6875H52.453C52.3753 1.6875 52.3123 1.75046 52.3123 1.82812V16.1719C52.3123 16.2495 52.3753 16.3125 52.453 16.3125L54.5623 16.3125C54.64 16.3125 54.7029 16.2495 54.7029 16.1719V13.9147C54.7029 13.8792 54.7164 13.8449 54.7406 13.8189L56.4778 11.9525Z" className="fill-current"></path>
                            </svg>

                        </a>
                        <nav
                            aria-label="Main"
                            data-orientation="horizontal"
                            dir="ltr"
                            className="ml-7 hidden lg:block"
                        >
                            <div style={{ position: "relative" }}>
                                <ul
                                    data-orientation="horizontal"
                                    className="flex text-gray-950 dark:text-white"
                                    dir="ltr"
                                >
                                    <li
                                        className="relative flex"
                                        onMouseEnter={() => setIsProductHovered(true)}
                                        onMouseLeave={() => setIsProductHovered(false)}
                                    >
                                        <button
                                            id="radix-product-trigger"
                                            data-state={isProductHovered ? "open" : "closed"}
                                            aria-expanded={isProductHovered}
                                            aria-controls="radix-product-content"
                                            className="group cursor-pointer flex px-1 data-[state=open]:after:absolute data-[state=open]:after:top-full data-[state=open]:after:h-4 data-[state=open]:after:w-full"
                                            data-radix-collection-item=""
                                        >
                                            <span className="flex items-center gap-x-2 rounded-md px-2 py-0.5 text-sm font-medium transition-colors group-hover:bg-gray-950/5 dark:group-hover:bg-white/10">
                                                Product
                                                <svg
                                                    aria-hidden="true"
                                                    viewBox="0 0 10 10"
                                                    fill="none"
                                                    className="size-2.5 flex-none text-gray-400 transition-colors group-data-[state=open]:text-[var(--light,theme(colors.gray.600))_var(--dark,theme(colors.gray.200))]"
                                                >
                                                    <path
                                                        d="M1.75 3.75L5 7.25L8.25 3.75"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </span>
                                        </button>

                                        {isProductHovered && (
                                            <>
                                                <span
                                                    aria-hidden="true"
                                                    tabIndex="0"
                                                    style={{
                                                        position: "absolute",
                                                        border: "0px",
                                                        width: "1px",
                                                        height: "1px",
                                                        padding: "0px",
                                                        margin: "-1px",
                                                        overflow: "hidden",
                                                        clip: "rect(0px, 0px, 0px, 0px)",
                                                        whiteSpace: "nowrap",
                                                        overflowWrap: "normal"
                                                    }}
                                                />
                                                <div
                                                    className="absolute top-full mt-2.5 -left-3"
                                                    id="radix-product-content"
                                                    aria-labelledby="radix-product-trigger"
                                                    data-orientation="horizontal"
                                                    data-state="open"
                                                    dir="ltr"
                                                    style={{ opacity: 1, transform: "translateY(0px)" }}
                                                >
                                                    <div
                                                        className="rounded-xl bg-gray-50 p-1 text-gray-950"
                                                        style={{
                                                            boxShadow: "rgba(25, 28, 33, 0.06) 0px 0px 0px 1px, rgba(25, 28, 33, 0.2) 0px 16px 36px -6px, rgba(0, 0, 0, 0.08) 0px 8px 16px -3px"
                                                        }}
                                                    >
                                                        <ul
                                                            className="w-max max-w-xl rounded-lg bg-white p-3"
                                                            style={{
                                                                boxShadow: "rgba(25, 28, 33, 0.06) 0px 0px 0px 1px, rgba(106, 115, 133, 0.12) 0px 5px 10px -2px, rgba(0, 0, 0, 0.12) 0px 2px 6px -2px"
                                                            }}
                                                        >
                                                            <li>
                                                                <a
                                                                    className="group block py-2.5 lg:p-1"
                                                                    data-radix-collection-item=""
                                                                    href="/user-authentication"
                                                                    data-tabindex=""
                                                                    tabIndex="-1"
                                                                >
                                                                    <div className="rounded-lg transition-colors lg:p-2 lg:group-hover:bg-gray-50">
                                                                        <div className="flex gap-x-4">
                                                                            <div className="size-10 flex-none overflow-hidden rounded bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                                                                                <svg viewBox="0 0 40 40" fill="none" className="size-10" aria-hidden="true">
                                                                                    {/* SVG content for User Authentication */}
                                                                                </svg>
                                                                            </div>
                                                                            <div>
                                                                                <div className="flex items-center gap-1.5">
                                                                                    <div className="text-[0.875rem]/5 font-medium text-gray-950">User Authentication</div>
                                                                                </div>
                                                                                <div className="mt-1 text-xs text-gray-600">Powerful options to securely authenticate and manage your users</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="group block py-2.5 lg:p-1"
                                                                    data-radix-collection-item=""
                                                                    href="/b2b-saas"
                                                                    data-tabindex=""
                                                                    tabIndex="-1"
                                                                >
                                                                    <div className="rounded-lg transition-colors lg:p-2 lg:group-hover:bg-gray-50">
                                                                        <div className="flex gap-x-4">
                                                                            <div className="size-10 flex-none overflow-hidden rounded bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                                                                                <svg viewBox="0 0 40 40" fill="none" className="size-10" aria-hidden="true">
                                                                                    {/* SVG content for B2B SaaS Suite */}
                                                                                </svg>
                                                                            </div>
                                                                            <div>
                                                                                <div className="flex items-center gap-1.5">
                                                                                    <div className="text-[0.875rem]/5 font-medium text-gray-950">B2B SaaS Suite</div>
                                                                                </div>
                                                                                <div className="mt-1 text-xs text-gray-600">Add-on features built specifically for B2B applications</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="group block py-2.5 lg:p-1"
                                                                    data-radix-collection-item=""
                                                                    href="/billing"
                                                                    data-tabindex=""
                                                                    tabIndex="-1"
                                                                >
                                                                    <div className="rounded-lg transition-colors lg:p-2 lg:group-hover:bg-gray-50">
                                                                        <div className="flex gap-x-4">
                                                                            <div className="size-10 flex-none overflow-hidden rounded bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                                                                                <svg fill="none" viewBox="0 0 40 40" className="size-10" aria-hidden="true">
                                                                                    {/* SVG content for Billing */}
                                                                                </svg>
                                                                            </div>
                                                                            <div>
                                                                                <div className="flex items-center gap-1.5">
                                                                                    <div className="text-[0.875rem]/5 font-medium text-gray-950">Billing</div>
                                                                                    <div className="relative inline-block bg-blue-50 px-[0.21875rem] py-[0.09375rem] text-[0.625rem]/[0.875rem] font-medium text-blue-500">
                                                                                        Beta
                                                                                        <span className="block transform-gpu absolute -inset-x-[0.21875rem] -top-px text-blue-600/60">
                                                                                            <svg width="100%" height="1" strokeLinecap="round">
                                                                                                <line x1="0" y1="0.5" x2="100%" y2="0.5" style={{ stroke: "currentcolor", strokeWidth: 1, strokeDasharray: "0.5, 2" }} />
                                                                                            </svg>
                                                                                        </span>
                                                                                        <span className="block transform-gpu absolute -inset-x-[0.21875rem] -bottom-px text-blue-600/60">
                                                                                            <svg width="100%" height="1" strokeLinecap="round">
                                                                                                <line x1="0" y1="0.5" x2="100%" y2="0.5" style={{ stroke: "currentcolor", strokeWidth: 1, strokeDasharray: "0.5, 2" }} />
                                                                                            </svg>
                                                                                        </span>
                                                                                        <span className="block transform-gpu absolute -inset-y-[0.21875rem] -left-px text-blue-600/60">
                                                                                            <svg width="1" height="100%" strokeLinecap="round">
                                                                                                <line x1="0.5" y1="0" x2="0.5" y2="100%" style={{ stroke: "currentcolor", strokeWidth: 1, strokeDasharray: "0.5, 2" }} />
                                                                                            </svg>
                                                                                        </span>
                                                                                        <span className="block transform-gpu absolute -inset-y-[0.21875rem] -right-px text-blue-600/60">
                                                                                            <svg width="1" height="100%" strokeLinecap="round">
                                                                                                <line x1="0.5" y1="0" x2="0.5" y2="100%" style={{ stroke: "currentcolor", strokeWidth: 1, strokeDasharray: "0.5, 2" }} />
                                                                                            </svg>
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="mt-1 text-xs text-gray-600">The easiest way to implement subscriptions for applications</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </li>
                                    {/* Solutions */}

                                    <li className="relative flex"
                                        onMouseEnter={() => setIsSolutionHovered(true)}
                                        onMouseLeave={() => setIsSolutionHovered(false)}>
                                        <button
                                            id="radix-_R_eiveivb_-trigger-Solutions"
                                            data-state={isSolutionHovered ? "open" : "closed"}
                                            aria-expanded={isSolutionHovered}
                                            aria-controls="radix-_R_eiveivb_-content-Solutions"
                                            className="group cursor-pointer flex px-1 data-[state=open]:after:absolute data-[state=open]:after:top-full data-[state=open]:after:h-4 data-[state=open]:after:w-full"
                                            data-radix-collection-item=""
                                        >
                                            <span className="flex items-center gap-x-2 rounded-md px-2 py-0.5 text-sm font-medium transition-colors group-hover:bg-gray-950/5 dark:group-hover:bg-white/10">
                                                Solutions
                                                <svg
                                                    aria-hidden="true"
                                                    viewBox="0 0 10 10"
                                                    fill="none"
                                                    className="size-2.5 flex-none text-gray-400 transition-colors group-data-[state=open]:text-[var(--light,theme(colors.gray.600))_var(--dark,theme(colors.gray.200))]"
                                                >
                                                    <path
                                                        d="M1.75 3.75L5 7.25L8.25 3.75"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                </svg>
                                            </span>
                                        </button>
                                        {isSolutionHovered && (
                                            <><span
                                                aria-hidden="true"
                                                tabIndex="0"
                                                style={{
                                                    position: "absolute",
                                                    border: "0px",
                                                    width: "1px",
                                                    height: "1px",
                                                    padding: "0px",
                                                    margin: "-1px",
                                                    overflow: "hidden",
                                                    clip: "rect(0px, 0px, 0px, 0px)",
                                                    whiteSpace: "nowrap",
                                                    overflowWrap: "normal",
                                                }}
                                            ></span><div
                                                className="absolute top-full mt-2.5 -left-3"
                                                id="radix-_R_eiveivb_-content-Solutions"
                                                aria-labelledby="radix-_R_eiveivb_-trigger-Solutions"
                                                data-orientation="horizontal"
                                                data-state="open"
                                                dir="ltr"
                                                style={{
                                                    opacity: 1,
                                                    transform: "translateY(0px)",
                                                }}
                                            >
                                                    <div
                                                        className="rounded-xl bg-gray-50 p-1 text-gray-950"
                                                        style={{
                                                            boxShadow: "rgba(25, 28, 33, 0.06) 0px 0px 0px 1px, rgba(25, 28, 33, 0.2) 0px 16px 36px -6px, rgba(0, 0, 0, 0.08) 0px 8px 16px -3px",
                                                        }}
                                                    >
                                                        <ul
                                                            className="w-max max-w-xl rounded-lg bg-white p-3"
                                                            style={{
                                                                boxShadow: "rgba(25, 28, 33, 0.06) 0px 0px 0px 1px, rgba(106, 115, 133, 0.12) 0px 5px 10px -2px, rgba(0, 0, 0, 0.12) 0px 2px 6px -2px",
                                                            }}
                                                        >
                                                            <div className="p-1 text-xs font-medium text-gray-600">Technology</div>
                                                            <li>
                                                                <a
                                                                    className="group block py-2.5 lg:p-1"
                                                                    data-radix-collection-item=""
                                                                    href="/react-authentication"
                                                                >
                                                                    <div className="rounded-lg transition-colors lg:p-2 lg:group-hover:bg-gray-50">
                                                                        <div className="flex gap-x-4">
                                                                            <div className="size-10 flex-none overflow-hidden rounded bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                                                                                <svg viewBox="0 0 40 40" className="size-10" aria-hidden="true">
                                                                                    <svg width="24" height="24" x="8" y="8" viewBox="-10.5 -9.45 21 18.9">
                                                                                        <circle cx="0" cy="0" r="2" fill="#087EA4"></circle>
                                                                                        <g stroke="#087EA4" strokeWidth="1" fill="none">
                                                                                            <ellipse rx="10" ry="4.5"></ellipse>
                                                                                            <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
                                                                                            <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
                                                                                        </g>
                                                                                    </svg>
                                                                                </svg>
                                                                            </div>
                                                                            <div>
                                                                                <div className="flex items-center gap-1.5">
                                                                                    <div className="text-[0.875rem]/5 font-medium text-gray-950">
                                                                                        React Components
                                                                                    </div>
                                                                                </div>
                                                                                <div className="mt-1 text-xs text-gray-600">
                                                                                    Embeddable prebuilt UI components for quick and seamless integrations
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="group block py-2.5 lg:p-1"
                                                                    data-radix-collection-item=""
                                                                    href="/nextjs-authentication"
                                                                >
                                                                    <div className="rounded-lg transition-colors lg:p-2 lg:group-hover:bg-gray-50">
                                                                        <div className="flex gap-x-4">
                                                                            <div className="size-10 flex-none overflow-hidden rounded bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                                                                                <svg viewBox="-60 -60 300 300" className="size-10" aria-hidden="true">
                                                                                    <mask
                                                                                        height="180"
                                                                                        id=":r8:mask0_408_134"
                                                                                        maskUnits="userSpaceOnUse"
                                                                                        width="180"
                                                                                        x="0"
                                                                                        y="0"
                                                                                        style={{ maskType: "alpha" }}
                                                                                    >
                                                                                        <circle cx="90" cy="90" fill="black" r="90"></circle>
                                                                                    </mask>
                                                                                    <g mask="url(#:r8:mask0_408_134)">
                                                                                        <circle cx="90" cy="90" data-circle="true" fill="black" r="90"></circle>
                                                                                        <path
                                                                                            d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
                                                                                            fill="url(#:r8:paint0_linear_408_134)"
                                                                                        ></path>
                                                                                        <rect
                                                                                            fill="url(#:r8:paint1_linear_408_134)"
                                                                                            height="72"
                                                                                            width="12"
                                                                                            x="115"
                                                                                            y="54"
                                                                                        ></rect>
                                                                                    </g>
                                                                                    <defs>
                                                                                        <linearGradient
                                                                                            gradientUnits="userSpaceOnUse"
                                                                                            id=":r8:paint0_linear_408_134"
                                                                                            x1="109"
                                                                                            x2="144.5"
                                                                                            y1="116.5"
                                                                                            y2="160.5"
                                                                                        >
                                                                                            <stop stopColor="white"></stop>
                                                                                            <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                                                                                        </linearGradient>
                                                                                        <linearGradient
                                                                                            gradientUnits="userSpaceOnUse"
                                                                                            id=":r8:paint1_linear_408_134"
                                                                                            x1="121"
                                                                                            x2="120.799"
                                                                                            y1="54"
                                                                                            y2="106.875"
                                                                                        >
                                                                                            <stop stopColor="white"></stop>
                                                                                            <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                                                                                        </linearGradient>
                                                                                    </defs>
                                                                                </svg>
                                                                            </div>
                                                                            <div>
                                                                                <div className="flex items-center gap-1.5">
                                                                                    <div className="text-[0.875rem]/5 font-medium text-gray-950">
                                                                                        Next.js Authentication
                                                                                    </div>
                                                                                </div>
                                                                                <div className="mt-1 text-xs text-gray-600">
                                                                                    The fastest and most seamless authentication solution for Next.js
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="group block py-2.5 lg:p-1"
                                                                    data-radix-collection-item=""
                                                                    href="/expo-authentication"
                                                                >
                                                                    <div className="rounded-lg transition-colors lg:p-2 lg:group-hover:bg-gray-50">
                                                                        <div className="flex gap-x-4">
                                                                            <div className="size-10 flex-none overflow-hidden rounded bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                                                                                <svg viewBox="0 0 40 40" className="size-10" aria-hidden="true">
                                                                                    <path d="M19.425 17.378c.18-.264.376-.298.537-.298.16 0 .425.034.605.298 2.344 3.22 7.206 11.715 7.655 12.177.666.685 1.58.258 2.11-.519.523-.765.668-1.302.668-1.875 0-.39-7.57-14.475-8.334-15.648-.733-1.128-.972-1.413-2.226-1.413H19.5c-1.252 0-1.433.285-2.166 1.412C16.572 12.687 9 26.772 9 27.162c0 .574.145 1.11.668 1.876.53.776 1.444 1.204 2.11.518.45-.462 5.304-8.957 7.647-12.176v-.002Z"></path>
                                                                                </svg>
                                                                            </div>
                                                                            <div>
                                                                                <div className="flex items-center gap-1.5">
                                                                                    <div className="text-[0.875rem]/5 font-medium text-gray-950">Expo</div>
                                                                                </div>
                                                                                <div className="mt-1 text-xs text-gray-600">
                                                                                    Implement cross-platform authentication the React way
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <div className="p-1 text-xs font-medium text-gray-600">Use case</div>
                                                            <li>
                                                                <a
                                                                    className="group block py-2.5 lg:p-1"
                                                                    data-radix-collection-item=""
                                                                    href="/ai-authentication"
                                                                >
                                                                    <div className="rounded-lg transition-colors lg:p-2 lg:group-hover:bg-gray-50">
                                                                        <div className="flex gap-x-4">
                                                                            <div className="size-10 flex-none overflow-hidden rounded bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                                                                                <svg viewBox="0 0 40 40" fill="none" className="size-10" aria-hidden="true">
                                                                                    <path
                                                                                        d="M36 0H4C1.79086 0 0 1.79086 0 4V36C0 38.2091 1.79086 40 4 40H36C38.2091 40 40 38.2091 40 36V4C40 1.79086 38.2091 0 36 0Z"
                                                                                        fill="white"
                                                                                    ></path>
                                                                                    <g opacity="0.1">
                                                                                        <path
                                                                                            d="M20.0005 23.75C22.0715 23.75 23.7505 22.0711 23.7505 20C23.7505 17.9289 22.0715 16.25 20.0005 16.25C17.9294 16.25 16.2505 17.9289 16.2505 20C16.2505 22.0711 17.9294 23.75 20.0005 23.75Z"
                                                                                            fill="#2563EB"
                                                                                        ></path>
                                                                                        <path
                                                                                            d="M26.7667 28.8786C27.0858 29.1977 27.0538 29.7259 26.6789 29.977C24.7715 31.2546 22.4774 31.9998 20.0092 31.9998C17.5411 31.9998 15.2469 31.2546 13.3395 29.977C12.9647 29.7259 12.9326 29.1977 13.2517 28.8787L15.9921 26.1382C16.2398 25.8905 16.6241 25.8514 16.9358 26.0111C17.8576 26.4833 18.9023 26.7498 20.0092 26.7498C21.1161 26.7498 22.1608 26.4833 23.0826 26.0111C23.3944 25.8514 23.7786 25.8905 24.0263 26.1382L26.7667 28.8786Z"
                                                                                            fill="#2563EB"
                                                                                        ></path>
                                                                                        <path
                                                                                            opacity="0.5"
                                                                                            d="M26.6696 10.0228C27.0445 10.2739 27.0765 10.8021 26.7575 11.1211L24.017 13.8616C23.7693 14.1093 23.3851 14.1484 23.0733 13.9887C22.1515 13.5164 21.1068 13.25 19.9999 13.25C16.272 13.25 13.25 16.2721 13.25 20C13.25 21.1069 13.5164 22.1516 13.9887 23.0734C14.1484 23.3852 14.1092 23.7694 13.8616 24.0171L11.1211 26.7575C10.8021 27.0766 10.2738 27.0446 10.0227 26.6697C8.7451 24.7623 8 22.4682 8 20C8 13.3726 13.3726 8 19.9999 8C22.4681 8 24.7622 8.7451 26.6696 10.0228Z"
                                                                                            fill="#2563EB"
                                                                                        ></path>
                                                                                    </g>
                                                                                    {/* All the other path elements */}
                                                                                    {/* ... */}
                                                                                </svg>
                                                                            </div>
                                                                            <div>
                                                                                <div className="flex items-center gap-1.5">
                                                                                    <div className="text-[0.875rem]/5 font-medium text-gray-950">
                                                                                        Authentication for AI
                                                                                    </div>
                                                                                </div>
                                                                                <div className="mt-1 text-xs text-gray-600">
                                                                                    Authentication and abuse protection tailored to AI applications
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div></>
                                        )}
                                    </li>
                                    <li className="relative flex" onMouseEnter={() => setIsDocsHovered(true)}
                                        onMouseLeave={() => setIsDocsHovered(false)}>
                                        <button
                                            id="radix-_R_eiveivb_-trigger-Docs"
                                            data-state={isDocsHovered ? "open" : "closed"}
                                            aria-expanded={isDocsHovered}
                                            aria-controls="radix-_R_eiveivb_-content-Docs"
                                            className="group cursor-pointer flex px-1 data-[state=open]:after:absolute data-[state=open]:after:top-full data-[state=open]:after:h-4 data-[state=open]:after:w-full"
                                            data-radix-collection-item=""
                                        >
                                            <span className="flex items-center gap-x-2 rounded-md px-2 py-0.5 text-sm font-medium transition-colors group-hover:bg-gray-950/5 dark:group-hover:bg-white/10">
                                                Docs
                                                <svg
                                                    aria-hidden="true"
                                                    viewBox="0 0 10 10"
                                                    fill="none"
                                                    className="size-2.5 flex-none text-gray-400 transition-colors group-data-[state=open]:text-[var(--light,theme(colors.gray.600))_var(--dark,theme(colors.gray.200))]"
                                                >
                                                    <path
                                                        d="M1.75 3.75L5 7.25L8.25 3.75"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                </svg>
                                            </span>
                                        </button>
                                        {isDocsHovered && (
                                            <>
                                                <span
                                                    aria-hidden="true"
                                                    tabIndex="0"
                                                    style={{
                                                        position: "absolute",
                                                        border: "0px",
                                                        width: "1px",
                                                        height: "1px",
                                                        padding: "0px",
                                                        margin: "-1px",
                                                        overflow: "hidden",
                                                        clip: "rect(0px, 0px, 0px, 0px)",
                                                        whiteSpace: "nowrap",
                                                        overflowWrap: "normal",
                                                    }}
                                                ></span>
                                                <div
                                                    className="absolute top-full mt-2.5 left-1/2"
                                                    id="radix-_R_eiveivb_-content-Docs"
                                                    aria-labelledby="radix-_R_eiveivb_-trigger-Docs"
                                                    data-orientation="horizontal"
                                                    data-state="open"
                                                    dir="ltr"
                                                    style={{
                                                        opacity: 1,
                                                        transform: "translate(-50%, 0px)",
                                                    }}
                                                >
                                                    <div className="light isolate mb-4 mt-4 md:mb-6 md:grid md:grid-cols-2 lg:mt-0 lg:w-[42rem] lg:overflow-hidden lg:rounded-xl lg:bg-gray-50 lg:shadow-[0_0_0_1px_rgba(25,28,33,0.06),0_16px_36px_-6px_rgba(25,28,33,0.2),0_8px_16px_-3px_rgba(0,0,0,0.08)]">
                                                        <div className="flex flex-col items-start md:pr-6 lg:my-1 lg:ml-1 lg:rounded-lg lg:bg-white lg:p-6 lg:shadow-[0_0_0_1px_rgba(25,28,33,0.06),0_5px_10px_-2px_rgba(106,115,133,0.12),0_2px_6px_-2px_rgba(0,0,0,0.12)]">
                                                            <div className="text-xs font-medium text-gray-600">Top SDKs</div>
                                                            <div className="my-3 grid w-full grid-cols-2 text-[0.875rem]/5 font-medium text-gray-950 lg:text-[0.875rem]/5">
                                                                <div>
                                                                    <a
                                                                        className="group flex py-3 pr-3"
                                                                        data-radix-collection-item=""
                                                                        href="/docs/quickstarts/nextjs"
                                                                    >
                                                                        <span className="mr-3 flex-none [&>img]:size-5 [&>svg]:size-5">
                                                                            <svg viewBox="0 0 180 180">
                                                                                <mask
                                                                                    height="180"
                                                                                    id="_r_2r_-mask"
                                                                                    maskUnits="userSpaceOnUse"
                                                                                    width="180"
                                                                                    x="0"
                                                                                    y="0"
                                                                                    style={{ maskType: "alpha" }}
                                                                                >
                                                                                    <circle
                                                                                        cx="90"
                                                                                        cy="90"
                                                                                        r="90"
                                                                                        style={{ fill: "var(--light, black) var(--dark, white)" }}
                                                                                    ></circle>
                                                                                </mask>
                                                                                <g mask="url(#_r_2r_-mask)">
                                                                                    <circle
                                                                                        cx="90"
                                                                                        cy="90"
                                                                                        r="90"
                                                                                        style={{ fill: "var(--light, black) var(--dark, white)" }}
                                                                                    ></circle>
                                                                                    <path
                                                                                        d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
                                                                                        fill="url(#_r_2r_-gradient-1)"
                                                                                    ></path>
                                                                                    <rect
                                                                                        fill="url(#_r_2r_-gradient-2)"
                                                                                        height="72"
                                                                                        width="12"
                                                                                        x="115"
                                                                                        y="54"
                                                                                    ></rect>
                                                                                </g>
                                                                                <defs>
                                                                                    <linearGradient
                                                                                        gradientUnits="userSpaceOnUse"
                                                                                        id="_r_2r_-gradient-1"
                                                                                        x1="109"
                                                                                        x2="144.5"
                                                                                        y1="116.5"
                                                                                        y2="160.5"
                                                                                    >
                                                                                        <stop
                                                                                            style={{
                                                                                                stopColor: "var(--light, white) var(--dark, black)",
                                                                                            }}
                                                                                        ></stop>
                                                                                        <stop
                                                                                            offset="1"
                                                                                            stopOpacity="0"
                                                                                            style={{
                                                                                                stopColor: "var(--light, white) var(--dark, black)",
                                                                                            }}
                                                                                        ></stop>
                                                                                    </linearGradient>
                                                                                    <linearGradient
                                                                                        gradientUnits="userSpaceOnUse"
                                                                                        id="_r_2r_-gradient-2"
                                                                                        x1="121"
                                                                                        x2="120.799"
                                                                                        y1="54"
                                                                                        y2="106.875"
                                                                                    >
                                                                                        <stop
                                                                                            style={{
                                                                                                stopColor: "var(--light, white) var(--dark, black)",
                                                                                            }}
                                                                                        ></stop>
                                                                                        <stop
                                                                                            offset="1"
                                                                                            stopOpacity="0"
                                                                                            style={{
                                                                                                stopColor: "var(--light, white) var(--dark, black)",
                                                                                            }}
                                                                                        ></stop>
                                                                                    </linearGradient>
                                                                                </defs>
                                                                            </svg>
                                                                        </span>
                                                                        Next.js
                                                                        <span className="relative">
                                                                            <svg
                                                                                viewBox="0 0 16 16"
                                                                                fill="none"
                                                                                aria-hidden="true"
                                                                                className="absolute left-0.5 top-[0.1875rem] size-4 -translate-x-2 stroke-gray-400 opacity-0 transition duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:translate-x-0 group-hover:stroke-gray-950 group-hover:opacity-100"
                                                                            >
                                                                                <path
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    strokeWidth="1.5"
                                                                                    d="M6.75 4.75 10.25 8l-3.5 3.25"
                                                                                ></path>
                                                                            </svg>
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                                <div>
                                                                    <a
                                                                        className="group flex py-3 pl-3"
                                                                        data-radix-collection-item=""
                                                                        href="/docs/quickstarts/react"
                                                                    >
                                                                        <span className="mr-3 flex-none [&>img]:size-5 [&>svg]:size-5">
                                                                            <svg viewBox="0 0 22 20" fill="none">
                                                                                <path
                                                                                    d="M11 11.91a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                                                                                    style={{
                                                                                        fill: "var(--light, #087EA4) var(--dark, #58C4DC)",
                                                                                    }}
                                                                                ></path>
                                                                                <g
                                                                                    style={{
                                                                                        stroke: "var(--light, #087EA4) var(--dark, #58C4DC)",
                                                                                    }}
                                                                                >
                                                                                    <path d="M11 14.41c5.523 0 10-2.014 10-4.5 0-2.485-4.477-4.5-10-4.5S1 7.425 1 9.91c0 2.486 4.477 4.5 10 4.5Z"></path>
                                                                                    <path d="M7.102 12.16c2.762 4.783 6.745 7.653 8.897 6.41 2.153-1.242 1.659-6.127-1.103-10.91C12.136 2.877 8.152.007 6 1.25 3.847 2.493 4.341 7.377 7.102 12.16Z"></path>
                                                                                    <path d="M7.102 7.66C4.341 12.443 3.847 17.328 6 18.57c2.153 1.243 6.136-1.627 8.898-6.41 2.76-4.783 3.255-9.667 1.102-10.91C13.847.007 9.864 2.877 7.102 7.66Z"></path>
                                                                                </g>
                                                                            </svg>
                                                                        </span>
                                                                        React
                                                                        <span className="relative">
                                                                            <svg
                                                                                viewBox="0 0 16 16"
                                                                                fill="none"
                                                                                aria-hidden="true"
                                                                                className="absolute left-0.5 top-[0.1875rem] size-4 -translate-x-2 stroke-gray-400 opacity-0 transition duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:translate-x-0 group-hover:stroke-gray-950 group-hover:opacity-100"
                                                                            >
                                                                                <path
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    strokeWidth="1.5"
                                                                                    d="M6.75 4.75 10.25 8l-3.5 3.25"
                                                                                ></path>
                                                                            </svg>
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                                <div>
                                                                    <a
                                                                        className="group flex py-3 pr-3"
                                                                        data-radix-collection-item=""
                                                                        href="/docs/quickstarts/expo"
                                                                    >
                                                                        <span className="mr-3 flex-none [&>img]:size-5 [&>svg]:size-5">
                                                                            <svg
                                                                                viewBox="0 0 32 32"
                                                                                style={{ fill: "var(--light, #000020) var(--dark, white)" }}
                                                                            >
                                                                                <path d="M0 26.778c.057.707.307 1.417.957 2.37.774 1.133 2.102 1.754 3.071.757.653-.674 7.725-13.035 11.133-17.72a1.016 1.016 0 0 1 1.664 0c3.408 4.685 10.48 17.046 11.134 17.72.969.997 2.297.376 3.07-.756.76-1.114.971-1.894.971-2.728 0-.568-11.013-21.064-12.123-22.77-1.066-1.64-1.392-1.998-3.196-2.057h-1.376c-1.804.059-2.129.415-3.197 2.056C11.023 5.32.44 25.01 0 26.36v.418Z"></path>
                                                                            </svg>
                                                                        </span>
                                                                        Expo
                                                                        <span className="relative">
                                                                            <svg
                                                                                viewBox="0 0 16 16"
                                                                                fill="none"
                                                                                aria-hidden="true"
                                                                                className="absolute left-0.5 top-[0.1875rem] size-4 -translate-x-2 stroke-gray-400 opacity-0 transition duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:translate-x-0 group-hover:stroke-gray-950 group-hover:opacity-100"
                                                                            >
                                                                                <path
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    strokeWidth="1.5"
                                                                                    d="M6.75 4.75 10.25 8l-3.5 3.25"
                                                                                ></path>
                                                                            </svg>
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                                <div>
                                                                    <a
                                                                        className="group flex py-3 pl-3"
                                                                        data-radix-collection-item=""
                                                                        href="/docs/quickstarts/react-router"
                                                                    >
                                                                        <span className="mr-3 flex-none [&>img]:size-5 [&>svg]:size-5">
                                                                            <svg viewBox="0 0 32 32">
                                                                                <path
                                                                                    fill="#F44250"
                                                                                    d="M25.6 15.568a3.196 3.196 0 0 1-3.2 3.19 3.193 3.193 0 0 0-3.2 3.189 3.196 3.196 0 0 1-3.2 3.19 3.193 3.193 0 0 1-2.263-.935 3.172 3.172 0 0 1-.937-2.255 3.193 3.193 0 0 1 3.2-3.19 3.196 3.196 0 0 0 3.2-3.189 3.194 3.194 0 0 0-3.2-3.19 3.193 3.193 0 0 1-3.2-3.189A3.193 3.193 0 0 1 16 6c1.767.001 3.2 1.429 3.2 3.19a3.193 3.193 0 0 0 3.2 3.19c1.768 0 3.2 1.427 3.2 3.19Z"
                                                                                ></path>
                                                                                <path
                                                                                    d="M12.8 15.568a3.195 3.195 0 0 0-3.2-3.19 3.195 3.195 0 0 0-3.2 3.19 3.195 3.195 0 0 0 3.2 3.19c1.767 0 3.2-1.428 3.2-3.19ZM6.4 21.947a3.195 3.195 0 0 0-3.2-3.19 3.195 3.195 0 0 0-3.2 3.19 3.195 3.195 0 0 0 3.2 3.19c1.767 0 3.2-1.429 3.2-3.19ZM32 21.947a3.195 3.195 0 0 0-3.2-3.19 3.195 3.195 0 0 0-3.2 3.19 3.195 3.195 0 0 0 3.2 3.19c1.767 0 3.2-1.429 3.2-3.19Z"
                                                                                    style={{
                                                                                        fill: "var(--light, #121212) var(--dark, #fff)",
                                                                                    }}
                                                                                ></path>
                                                                            </svg>
                                                                        </span>
                                                                        React Router
                                                                        <span className="relative">
                                                                            <svg
                                                                                viewBox="0 0 16 16"
                                                                                fill="none"
                                                                                aria-hidden="true"
                                                                                className="absolute left-0.5 top-[0.1875rem] size-4 -translate-x-2 stroke-gray-400 opacity-0 transition duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:translate-x-0 group-hover:stroke-gray-950 group-hover:opacity-100"
                                                                            >
                                                                                <path
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    strokeWidth="1.5"
                                                                                    d="M6.75 4.75 10.25 8l-3.5 3.25"
                                                                                ></path>
                                                                            </svg>
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                                <div>
                                                                    <a
                                                                        className="group flex py-3 pr-3"
                                                                        data-radix-collection-item=""
                                                                        href="/docs/quickstarts/tanstack-react-start"
                                                                    >
                                                                        <span className="mr-3 flex-none [&>img]:size-5 [&>svg]:size-5">
                                                                            <img
                                                                                alt=""
                                                                                src="data:image/webp;base64,UklGRu4JAABXRUJQVlA4TOEJAAAvP8APEM8Hu9r2tM0n/1KSMjNze8UzdNWu0duOwMzMlfXTGnBt204b3SczDjPU0+Vr5j+nnZ6Zp2dm0vjJ0oUc2bZqZZ1z3rX/cXcdQphEQgoWB0TgMHOHa3JEASCA6mXbtl1bY02NHcC+gJtq6gS2j+Aa/Sf7/8nY7ADw+MR//od0UAdVqEIUojCFeOEKdZ2TC6d7an1+DTIlHUShDur0v2kPEIX1/ZF5rZCuYct/87xXJc3Jdcw4BHhRxdJqF9PdrdRpi51GGXWq0NbpSINW7nVWUXczcgDDExNiEfXqZnAy7g9PvOkcndL6ndA2FYTZ0e8waiGBcsekHQvyZJbM2C5dIKjFQE9hqRgZowLYZ5RSB00iBaNgKQx8DtQvIjlPAAWYEBECKCAEwEeBpigqfJvUv+k1pq4ajyduRLjbAe2/hCJ8eA5ejtzrLD3L+S1LJiwHtfy3qRsMF6O5Zs3w+OdGQFuYDmjCTUfIq2jCRruMVca0QtDGxEN73TM9m9mVTwTQlWqXKebbnReuFRAsKaMztr8sBDF4XQiCZf2gyhm+evx475T/bMXkJ/P/bH7sn4/fpvxg5xfdVOv/C1DP+5nOBtpF8V51yL7Hp19nN/1fWo2BdPkhPBQTrqPW+58ZI04aj9D8dcriIDYfPs2PeQKY0xtmlRvzW5u3wjVx+VkW8V3c9Bcz/d68ppcUT7NN5BwXMtrfxltpLS6TnfpxZ65i9Jva4/F09xKHDn33UUc9g2Lsa8dmfGDtesPbS7Q+O2PMJOiThnjBUOGBPkhPBomjsrRXRWakM5V5K+byF0kO8uIPPOcl/mupUf4X+Q+g+66zmdB050bbJVvZst3+2OJJd7s3ax939pabr/0Tagr9c9w69ufp30Cs+xcogWqHv6AEedBreClwp6kGmkJSOyjPr6vh72iOy4jMPEacH9WAtuOxwWx1qDE9nwH2MhCgNB9uLeTdml/ZZaWrxv9MWjrSMfjLmHJTb50zARERTEvbtrVt5K0IDGF0mDkb6FLaMDPYwxBmzuBRmSF84GFmxkj25WOBISv4v++T/j+i/w7ctnGk0FOwe8XvoKz9f2KnO/V25pQexx1WfZ5zGTjUXY7U3ff4yh32haU7VwF/vYjCtrJNMplMryD55Zckov8O3LaNpCiDFTqX926/4ElBrkDDz3//8+8P//OfGOfufyB+tjW6CgJR/PyL+yNLgruEZqMrucV//eF7w3cAQEAE1gbEyP01jijSv/3Gv2XfGFgyv//B+Lc/ijQvAtH9/esUfXtzaDDyx7d4/TCdCLz/w1dp+OP2PH69dgMO3k81AvHpl19A6swHADs3AFJ9KBAffJGW2wYhzAHYSyUC8eHn6fjs9tAg9t51jekAgv3kEYiP7qXpjutyxnagw9BJKQQfPk7ujutCcjsdZEvS88GTZJ65eeGBlzCh4vVteLLaQV2dln0v4SHw6bOkCqcHNJb3nCewMBRZPOfUsdtlc5ggAu8/fyEgscIBSVX080RFRLDMrHax02GZXk7X3090PT6yOS8qFHRE57rq55oeBsgWF0cWL4BOVstAdOz2EhmL6CDRsxOr82x9gLFozkV+LCDrpDkO9bNw0dEJceK8OjK4ekTLRmzsj+KnljkqGuhXfRy4CAOXomAhc43lW2qdRZaA86PTnS5r+qgnbj1LmU2BpgRcvw+0qOPoIKk+4LLkAyNmqyDnfHX59Mzp4sbNZP6gwHjxmQ0rDutS1HHIccghcjQ1gwdc7teLmdkKoHZwGRis7hoXU3fcI4zzLAgIAAiYP6MTWUIagaQ5ks8fyMi8RLMUQs3Q4hmUrYJY2d7t6OKduGUeJUGbsqwBDXSIEtGUI5MGROCE2LTUz4IW5Y1BxMh2EM+wfNVQVpLrwY0yu5wBVdZIlzSASUGcy6BwKbxWDmtQZhFEgc2D1cHyZUBERCE2PFgKAAIAxFpUVTQOQEAwNQ6aD7jE/f3ZZQazmtXgkhArfasClpkAKPVgBQBUAwDkxHySynVFBseY0dmYP+AzHvfPW2ox29QygKUIAOtbAQaVuFHFbEKXPsUvayoRl6bGJt7M7g9kuH7uDVfb1TCryFI5w8FFxljVxmaNzfqMP+CqUcUncZ80Ozbxek228GZkci7mMak6RKyNLFYj4uZWrRXOSYEM7/SM4pOBzbwxOgaNNfOhmHHxf4y1KWkk01Z9nRXNaZl+fT7k9cmBy9DCKIyL2jp3/mNNuZypS0d9A1q5c3IgOoezXp/qxt5EY94y2+DC3MchB9PQ0NZk1TgX1eewKeTN4P7pBecTGPvQVgiddGBba7PNnO40ue7HxsTecJo/HBv9xL0SrS227XNCCPeNy8zA9EJL82tjI6PXWq7E+RDc85Ny89mZ8+7F7Zvw5AzuBmcvhNCtT9+9YC2SuvUUbXQunj13yYVw7+oL55wl5f5TNIGLyLleFUL/83tKKXWx69ZNp+TFS5d7VERMX/9lPrIbtNZadt10N2696ZeP/5f9OhJ9r6+E0YIUptxHjfhFP+7HCLS8ftUiBnY5Y8x/rdaihqEWi4hWkFfrbVKIdqZuPW6xHZ++wOiQbR8wLUL52tZjvZrQQdFcHtNyT3TH56+a9M9f8i8YYFKFxOyNQd8gYuc3SicSOphQbJmPPU+s1mTXwJD9+QuMaTeDITH7YrD+YwN/L68AKIP4g6YhNfD45gd8p5Qf9wD+MR+6Oj6rTmMGyLEhMddjkF9b5bLyW30bHAD5PJ1giFP8BuV96BmAwW8/zAo/5Vo+5uDP8tLC/NyshCWnFB3YePlPMmWtTZDr1RMUWvQUmJcbdGRZLTkm5sKS+hPLO9geHpGlotYoZWFybml1ZSubTslkvKGuprrKVZoK42Sd56PCnZXVpbnJAifm8HaMPkzNzrO4mYmC2mpOp5QkVotYA9V0oIIg633Pvd0qjE/McGJOsROH7cUFHg+zGZ1OeA2q3tUZRqqYw7WW3hsFD7gRF7cD85bpmUmKMXPzD7LGpMlNUEzq7BvVPD83E4g5HZw4uXKRUsLC/Zy16WQC4wJSSQV80oUSMjHLvGnf9gTLndw+myFXEJDqgEj/jdccCEnPgeAQUw/3AWQzaRVFKhynmTFOjxXHC4/2IykjInXGBD8CRlofHxbGC2OxMHTJHNhPOmdtNsMXjxXOhwgTfuJRKXTLA5Tv7GcaSAclEZR6nlTWJ/x7ZaGJ/7EDxvCFDoqJ9BN7BBceRw6pEEkLCzYJL3yOHhKWuPV5guJLNwfvD4eLFvgQNXLWbYKDB4OyT+yAhjd0NOK69UgkedvEzHQBosphjoR8DBuJQX531u3vjx0+yBcy0Nj0Ps/aLjQT7v3RI+RQt3+f2yuPHbHv6T4nsgEA"
                                                                            />
                                                                        </span>
                                                                        TanStack
                                                                        <span className="relative">
                                                                            <svg
                                                                                viewBox="0 0 16 16"
                                                                                fill="none"
                                                                                aria-hidden="true"
                                                                                className="absolute left-0.5 top-[0.1875rem] size-4 -translate-x-2 stroke-gray-400 opacity-0 transition duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:translate-x-0 group-hover:stroke-gray-950 group-hover:opacity-100"
                                                                            >
                                                                                <path
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    strokeWidth="1.5"
                                                                                    d="M6.75 4.75 10.25 8l-3.5 3.25"
                                                                                ></path>
                                                                            </svg>
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                                <div>
                                                                    <a
                                                                        className="group flex py-3 pl-3"
                                                                        data-radix-collection-item=""
                                                                        href="/docs/quickstarts/astro"
                                                                    >
                                                                        <span className="mr-3 flex-none [&>img]:size-5 [&>svg]:size-5">
                                                                            <svg viewBox="0 0 95 107">
                                                                                <path
                                                                                    fill="url(#_r_2s_)"
                                                                                    d="M32.589 91.136c-4.834-4.418-6.245-13.703-4.231-20.429 3.492 4.24 8.33 5.584 13.342 6.343 7.737 1.17 15.335.732 22.523-2.804.822-.405 1.582-.944 2.48-1.489.675 1.957.85 3.932.615 5.942-.573 4.897-3.01 8.679-6.885 11.546-1.55 1.146-3.19 2.171-4.79 3.253-4.917 3.323-6.248 7.22-4.4 12.888.044.139.083.277.183.614-2.51-1.124-4.345-2.76-5.742-4.911-1.476-2.27-2.178-4.781-2.215-7.498-.018-1.323-.018-2.657-.196-3.96-.434-3.178-1.926-4.602-4.737-4.683-2.885-.085-5.166 1.699-5.772 4.507-.046.216-.113.428-.18.679l.005.002Z"
                                                                                ></path>
                                                                                <path
                                                                                    d="M5 69.587s14.314-6.973 28.668-6.973L44.49 29.12c.405-1.62 1.588-2.72 2.924-2.72 1.335 0 2.518 1.1 2.924 2.72L61.16 62.614c17 0 28.668 6.973 28.668 6.973S65.514 3.352 65.467 3.219C64.769 1.261 63.591 0 62.003 0H32.827c-1.588 0-2.718 1.261-3.464 3.22C29.311 3.35 5 69.586 5 69.586Z"
                                                                                    style={{
                                                                                        fill: "var(--light, #17191E) var(--dark, white)",
                                                                                    }}
                                                                                ></path>
                                                                                <defs>
                                                                                    <linearGradient
                                                                                        id="_r_2s_"
                                                                                        x1="27.47"
                                                                                        x2="74.145"
                                                                                        y1="107"
                                                                                        y2="84.947"
                                                                                        gradientUnits="userSpaceOnUse"
                                                                                    >
                                                                                        <stop stopColor="#D83333"></stop>
                                                                                        <stop offset="1" stopColor="#F041FF"></stop>
                                                                                    </linearGradient>
                                                                                </defs>
                                                                            </svg>
                                                                        </span>
                                                                        Astro
                                                                        <span className="relative">
                                                                            <svg
                                                                                viewBox="0 0 16 16"
                                                                                fill="none"
                                                                                aria-hidden="true"
                                                                                className="absolute left-0.5 top-[0.1875rem] size-4 -translate-x-2 stroke-gray-400 opacity-0 transition duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:translate-x-0 group-hover:stroke-gray-950 group-hover:opacity-100"
                                                                            >
                                                                                <path
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    strokeWidth="1.5"
                                                                                    d="M6.75 4.75 10.25 8l-3.5 3.25"
                                                                                ></path>
                                                                            </svg>
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                                <div>
                                                                    <a
                                                                        className="group flex py-3 pr-3"
                                                                        data-radix-collection-item=""
                                                                        href="/docs/quickstarts/chrome-extension"
                                                                    >
                                                                        <span className="mr-3 flex-none [&>img]:size-5 [&>svg]:size-5">
                                                                            <svg viewBox="0 0 63 63" fill="none">
                                                                                <linearGradient
                                                                                    id="_r_2t_-a"
                                                                                    x1="34.909"
                                                                                    x2="7.632"
                                                                                    y1="61.029"
                                                                                    y2="13.785"
                                                                                    gradientUnits="userSpaceOnUse"
                                                                                >
                                                                                    <stop offset="0" stopColor="#1e8e3e"></stop>
                                                                                    <stop offset="1" stopColor="#34a853"></stop>
                                                                                </linearGradient>
                                                                                <linearGradient
                                                                                    id="_r_2t_-b"
                                                                                    x1="26.904"
                                                                                    x2="54.181"
                                                                                    y1="63.079"
                                                                                    y2="15.835"
                                                                                    gradientUnits="userSpaceOnUse"
                                                                                >
                                                                                    <stop offset="0" stopColor="#fcc934"></stop>
                                                                                    <stop offset="1" stopColor="#fbbc04"></stop>
                                                                                </linearGradient>
                                                                                <linearGradient
                                                                                    id="_r_2t_-c"
                                                                                    x1="4.221"
                                                                                    x2="58.775"
                                                                                    y1="19.688"
                                                                                    y2="19.688"
                                                                                    gradientUnits="userSpaceOnUse"
                                                                                >
                                                                                    <stop offset="0" stopColor="#d93025"></stop>
                                                                                    <stop offset="1" stopColor="#ea4335"></stop>
                                                                                </linearGradient>
                                                                                <path
                                                                                    fill="#fff"
                                                                                    d="M31.499 47.247c8.698 0 15.75-7.052 15.75-15.75s-7.052-15.75-15.75-15.75-15.75 7.051-15.75 15.75 7.051 15.75 15.75 15.75z"
                                                                                ></path>
                                                                                <path
                                                                                    fill="url(#_r_2t_-a)"
                                                                                    d="M17.86 39.375 4.22 15.754a31.492 31.492 0 0 0 27.28 47.242l13.638-23.62v-.005a15.746 15.746 0 0 1-27.28.004z"
                                                                                ></path>
                                                                                <path
                                                                                    fill="url(#_r_2t_-b)"
                                                                                    d="M45.138 39.374 31.5 62.995A31.491 31.491 0 0 0 58.773 15.75H31.498l-.003.002a15.747 15.747 0 0 1 13.643 23.623z"
                                                                                ></path>
                                                                                <path
                                                                                    fill="#1a73e8"
                                                                                    d="M31.499 43.969c6.886 0 12.469-5.583 12.469-12.469s-5.583-12.469-12.469-12.469S19.03 24.614 19.03 31.5 24.613 43.969 31.5 43.969z"
                                                                                ></path>
                                                                                <path
                                                                                    fill="url(#_r_2t_-c)"
                                                                                    d="M31.5 15.75h27.274a31.493 31.493 0 0 0-54.553.004L17.86 39.375l.004.002A15.747 15.747 0 0 1 31.499 15.75z"
                                                                                ></path>
                                                                            </svg>
                                                                        </span>
                                                                        Chrome
                                                                        <span className="relative">
                                                                            <svg
                                                                                viewBox="0 0 16 16"
                                                                                fill="none"
                                                                                aria-hidden="true"
                                                                                className="absolute left-0.5 top-[0.1875rem] size-4 -translate-x-2 stroke-gray-400 opacity-0 transition duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:translate-x-0 group-hover:stroke-gray-950 group-hover:opacity-100"
                                                                            >
                                                                                <path
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    strokeWidth="1.5"
                                                                                    d="M6.75 4.75 10.25 8l-3.5 3.25"
                                                                                ></path>
                                                                            </svg>
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                                <div>
                                                                    <a
                                                                        className="group flex py-3 pl-3"
                                                                        data-radix-collection-item=""
                                                                        href="/docs/quickstarts/express"
                                                                    >
                                                                        <span className="mr-3 flex-none [&>img]:size-5 [&>svg]:size-5">
                                                                            <svg
                                                                                viewBox="0 0 20 20"
                                                                                style={{ fill: "var(--light, black) var(--dark, white)" }}
                                                                            >
                                                                                <path d="M6.504 7.181c1.47 0 1.812 1.29 1.812 2.108H4.5c.103-.906.683-2.108 2.004-2.108Z"></path>
                                                                                <path
                                                                                    fillRule="evenodd"
                                                                                    d="M10 20a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm-3.05-7.291c-1.321 0-2.438-.728-2.464-2.492l5.032.013c.04-.2.062-.405.058-.61 0-1.32-.621-3.37-2.955-3.37-2.109 0-3.385 1.737-3.385 3.875 0 2.137 1.328 3.625 3.535 3.625a5.738 5.738 0 0 0 2.39-.475l-.223-.938a4.65 4.65 0 0 1-1.988.372Zm5.833-4.78L11.759 6.4h-1.455l2.437 3.505-2.555 3.666h1.439l1.04-1.604a26.7 26.7 0 0 1 .261-.425c.171-.274.336-.538.494-.837h.031l.023.037c.245.413.479.807.75 1.225l1.067 1.604h1.471L14.238 9.86l2.45-3.46h-1.425l-.995 1.514c-.096.157-.194.312-.293.47-.146.231-.294.465-.435.704h-.03l-.165-.273c-.176-.291-.35-.58-.563-.887Z"
                                                                                ></path>
                                                                            </svg>
                                                                        </span>
                                                                        Express
                                                                        <span className="relative">
                                                                            <svg
                                                                                viewBox="0 0 16 16"
                                                                                fill="none"
                                                                                aria-hidden="true"
                                                                                className="absolute left-0.5 top-[0.1875rem] size-4 -translate-x-2 stroke-gray-400 opacity-0 transition duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:translate-x-0 group-hover:stroke-gray-950 group-hover:opacity-100"
                                                                            >
                                                                                <path
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                    strokeWidth="1.5"
                                                                                    d="M6.75 4.75 10.25 8l-3.5 3.25"
                                                                                ></path>
                                                                            </svg>
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="mt-auto w-full lg:grid lg:grid-cols-1">
                                                                <a
                                                                    className="group relative isolate inline-flex items-center justify-center overflow-hidden text-left font-medium transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)] before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)] before:transtion-opacity rounded-md shadow-[0_1px_theme(colors.white/0.07)_inset,0_1px_3px_theme(colors.gray.900/0.2)] before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-md before:bg-gradient-to-b before:from-white/20 before:opacity-50 hover:before:opacity-100 after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:rounded-md after:bg-gradient-to-b after:from-white/10 after:from-[46%] after:to-[54%] after:mix-blend-overlay text-sm h-[1.875rem] px-3 ring-1 bg-white text-gray-950 ring-[#191C21]/[8%]"
                                                                    target=""
                                                                    data-radix-collection-item=""
                                                                    href="/docs"
                                                                >
                                                                    Go to Docs
                                                                    <svg
                                                                        viewBox="0 0 10 10"
                                                                        aria-hidden="true"
                                                                        className="ml-2 h-2.5 w-2.5 flex-none opacity-60 group-hover:translate-x-6 group-hover:opacity-0 transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)] before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)] before:transtion-opacity"
                                                                    >
                                                                        <path
                                                                            fill="currentColor"
                                                                            stroke="currentColor"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            strokeWidth="1.5"
                                                                            d="m7.25 5-3.5-2.25v4.5L7.25 5Z"
                                                                        ></path>
                                                                    </svg>
                                                                    <svg
                                                                        viewBox="0 0 10 10"
                                                                        aria-hidden="true"
                                                                        className="-ml-2.5 h-2.5 w-2.5 flex-none -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)] before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)] before:transtion-opacity"
                                                                    >
                                                                        <path
                                                                            fill="currentColor"
                                                                            stroke="currentColor"
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            strokeWidth="1.5"
                                                                            d="m7.25 5-3.5-2.25v4.5L7.25 5Z"
                                                                        ></path>
                                                                    </svg>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="relative mt-6 border-t border-gray-400/15 pt-6 md:mt-0 md:border-t-0 md:pb-[2.875rem] md:pl-6 md:pt-0 lg:px-6 lg:py-7">
                                                            <div className="absolute bottom-[3.375rem] left-0 top-0 hidden w-px bg-gray-400/15 md:block lg:hidden"></div>
                                                            <div className="flex justify-between text-xs font-medium">
                                                                <div className="text-gray-600">Changelog</div>
                                                                <a
                                                                    className="text-gray-950 transition hover:opacity-80"
                                                                    data-radix-collection-item=""
                                                                    href="/changelog"
                                                                >
                                                                    View all
                                                                </a>
                                                            </div>
                                                            <ul role="list" className="mt-4">
                                                                <li className="relative flex flex-col-reverse gap-y-1 py-2 lg:rounded-lg lg:px-2 lg:transition lg:hover:bg-gray-950/[0.04] lg:hover:backdrop-blur-[2.5px]">
                                                                    <a
                                                                        className="block truncate text-[0.875rem]/5 font-medium text-gray-950"
                                                                        data-radix-collection-item=""
                                                                        href="/changelog/2025-07-23-shadcn-theme"
                                                                    >
                                                                        shadcn/ui theme compatibility
                                                                        <span className="absolute inset-0 lg:-inset-y-1"></span>
                                                                    </a>
                                                                    <div className="flex items-baseline justify-between">
                                                                        <time
                                                                            dateTime="2025-07-23"
                                                                            className="text-xs text-gray-600"
                                                                        >
                                                                            Jul 23, 2025
                                                                        </time>
                                                                        <div className="rounded-full bg-gray-950 px-2 py-1 text-2xs/[0.875rem] font-medium text-white">
                                                                            Product
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li className="relative flex flex-col-reverse gap-y-1 py-2 lg:rounded-lg lg:px-2 lg:transition lg:hover:bg-gray-950/[0.04] lg:hover:backdrop-blur-[2.5px] lg:mt-2">
                                                                    <a
                                                                        className="block truncate text-[0.875rem]/5 font-medium text-gray-950"
                                                                        data-radix-collection-item=""
                                                                        href="/changelog/2025-07-22-dashboard-dark-mode"
                                                                    >
                                                                        Dark Mode for the Clerk Dashboard
                                                                        <span className="absolute inset-0 lg:-inset-y-1"></span>
                                                                    </a>
                                                                    <div className="flex items-baseline justify-between">
                                                                        <time
                                                                            dateTime="2025-07-22"
                                                                            className="text-xs text-gray-600"
                                                                        >
                                                                            Jul 22, 2025
                                                                        </time>
                                                                        <div className="rounded-full bg-gray-950 px-2 py-1 text-2xs/[0.875rem] font-medium text-white">
                                                                            Dashboard
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li className="relative flex flex-col-reverse gap-y-1 py-2 lg:rounded-lg lg:px-2 lg:transition lg:hover:bg-gray-950/[0.04] lg:hover:backdrop-blur-[2.5px] lg:mt-2">
                                                                    <a
                                                                        className="block truncate text-[0.875rem]/5 font-medium text-gray-950"
                                                                        data-radix-collection-item=""
                                                                        href="/changelog/2025-07-15-clerk-css-variables-support"
                                                                    >
                                                                        Clerk CSS variables support
                                                                        <span className="absolute inset-0 lg:-inset-y-1"></span>
                                                                    </a>
                                                                    <div className="flex items-baseline justify-between">
                                                                        <time
                                                                            dateTime="2025-07-15"
                                                                            className="text-xs text-gray-600"
                                                                        >
                                                                            Jul 15, 2025
                                                                        </time>
                                                                        <div className="rounded-full bg-gray-950 px-2 py-1 text-2xs/[0.875rem] font-medium text-white">
                                                                            Product
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                            <svg
                                                                viewBox="0 0 447 387"
                                                                fill="none"
                                                                aria-hidden="true"
                                                                className="absolute -right-14 -top-16 -z-10 w-[27.9375rem] overflow-visible lg:-right-20 lg:-top-24"
                                                            >
                                                                <rect
                                                                    className="hidden fill-gray-50 lg:block"
                                                                    width="547"
                                                                    height="387"
                                                                    x="-100"
                                                                ></rect>
                                                                <rect
                                                                    width="230.5"
                                                                    height="150.5"
                                                                    x="1.75"
                                                                    y="61.127"
                                                                    stroke="url(#nav-docs-bg-b)"
                                                                    strokeWidth="1.5"
                                                                    opacity=".16"
                                                                    rx="16"
                                                                ></rect>
                                                                <rect
                                                                    width="230.5"
                                                                    height="150.5"
                                                                    stroke="url(#nav-docs-bg-c)"
                                                                    strokeWidth="1.5"
                                                                    opacity=".16"
                                                                    rx="16"
                                                                    transform="matrix(1 0 0 -1 1.75 386.627)"
                                                                ></rect>
                                                                <path
                                                                    stroke="url(#nav-docs-bg-d)"
                                                                    strokeOpacity=".8"
                                                                    strokeWidth="1.5"
                                                                    d="M316.664 271.377c-.445 0-.89-.086-1.32-.243a3.712 3.712 0 0 1-2.052-1.955l-21.436-49.311-26.672 24.941c-1.062.999-2.626 1.256-3.974.685a3.66 3.66 0 0 1-2.21-3.355V121.531c0-1.456.861-2.77 2.21-3.355a3.705 3.705 0 0 1 3.974.685l88.152 81.862a3.65 3.65 0 0 1 .962 3.869 3.672 3.672 0 0 1-3.157 2.455l-37.404 3.198 22.425 48.654a3.64 3.64 0 0 1 .101 2.799 3.619 3.619 0 0 1-1.909 2.041l-16.17 7.31c-.487.214-.99.328-1.52.328Z"
                                                                    opacity=".26"
                                                                ></path>
                                                                <path
                                                                    stroke="url(#nav-docs-bg-e)"
                                                                    strokeWidth="1.5"
                                                                    d="M446.489 245.584 182.031 0"
                                                                    opacity=".1"
                                                                    className="hidden lg:block"
                                                                ></path>
                                                                <g
                                                                    filter="url(#nav-docs-bg-f)"
                                                                    opacity=".2"
                                                                    className="hidden lg:block"
                                                                    style={{ mixBlendMode: "hard-light" }}
                                                                >
                                                                    <ellipse
                                                                        cx="217"
                                                                        cy="139.377"
                                                                        fill="url(#nav-docs-bg-g)"
                                                                        rx="217"
                                                                        ry="48.5"
                                                                    ></ellipse>
                                                                </g>
                                                                <defs>
                                                                    <linearGradient
                                                                        id="nav-docs-bg-b"
                                                                        x1="224"
                                                                        x2="173.683"
                                                                        y1="211.877"
                                                                        y2="91.627"
                                                                        gradientUnits="userSpaceOnUse"
                                                                    >
                                                                        <stop stopColor="#5E5F6E"></stop>
                                                                        <stop offset=".88" stopColor="#5E5F6E" stopOpacity="0"></stop>
                                                                    </linearGradient>
                                                                    <linearGradient
                                                                        id="nav-docs-bg-c"
                                                                        x1="223.25"
                                                                        x2="184.25"
                                                                        y1="157.75"
                                                                        y2="79.75"
                                                                        gradientUnits="userSpaceOnUse"
                                                                    >
                                                                        <stop stopColor="#5E5F6E"></stop>
                                                                        <stop offset=".869" stopColor="#5E5F6E" stopOpacity="0"></stop>
                                                                    </linearGradient>
                                                                    <linearGradient
                                                                        id="nav-docs-bg-e"
                                                                        x1="285"
                                                                        x2="383.5"
                                                                        y1="90.877"
                                                                        y2="221.877"
                                                                        gradientUnits="userSpaceOnUse"
                                                                    >
                                                                        <stop stopColor="#5E5F6E"></stop>
                                                                        <stop offset=".869" stopColor="#5E5F6E" stopOpacity="0"></stop>
                                                                    </linearGradient>
                                                                    <linearGradient
                                                                        id="nav-docs-bg-g"
                                                                        x1="0"
                                                                        x2="434"
                                                                        y1="139.377"
                                                                        y2="139.377"
                                                                        gradientUnits="userSpaceOnUse"
                                                                    >
                                                                        <stop stopColor="#6C47FF"></stop>
                                                                        <stop offset="1" stopColor="#61DAFB"></stop>
                                                                    </linearGradient>
                                                                    <radialGradient
                                                                        id="nav-docs-bg-d"
                                                                        cx="0"
                                                                        cy="0"
                                                                        r="1"
                                                                        gradientTransform="matrix(0 77.25 -99.75 0 306.75 194.627)"
                                                                        gradientUnits="userSpaceOnUse"
                                                                    >
                                                                        <stop stopColor="#5E5F6E"></stop>
                                                                        <stop offset="1" stopColor="#C3C4D0"></stop>
                                                                    </radialGradient>
                                                                    <filter
                                                                        id="nav-docs-bg-f"
                                                                        width="586"
                                                                        height="249"
                                                                        x="-76"
                                                                        y="14.877"
                                                                        colorInterpolationFilters="sRGB"
                                                                        filterUnits="userSpaceOnUse"
                                                                    >
                                                                        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                                                        <feBlend
                                                                            in="SourceGraphic"
                                                                            in2="BackgroundImageFix"
                                                                            result="shape"
                                                                        ></feBlend>
                                                                        <feGaussianBlur
                                                                            result="effect1_foregroundBlur_1_14902"
                                                                            stdDeviation="38"
                                                                        ></feGaussianBlur>
                                                                    </filter>
                                                                </defs>
                                                            </svg>
                                                            <svg
                                                                viewBox="0 0 434 97"
                                                                fill="none"
                                                                aria-hidden="true"
                                                                className="absolute -bottom-4 -right-14 -z-10 hidden w-[27.125rem] overflow-visible mix-blend-hard-light lg:block"
                                                            >
                                                                <g filter="url(#nav-docs-glow-b)" opacity=".2">
                                                                    <ellipse
                                                                        cx="217"
                                                                        cy="48.5"
                                                                        fill="url(#nav-docs-glow-c)"
                                                                        rx="217"
                                                                        ry="48.5"
                                                                    ></ellipse>
                                                                </g>
                                                                <defs>
                                                                    <linearGradient
                                                                        id="nav-docs-glow-c"
                                                                        x1="0"
                                                                        x2="434"
                                                                        y1="48.5"
                                                                        y2="48.5"
                                                                        gradientUnits="userSpaceOnUse"
                                                                    >
                                                                        <stop stopColor="#6C47FF"></stop>
                                                                        <stop offset="1" stopColor="#61DAFB"></stop>
                                                                    </linearGradient>
                                                                    <filter
                                                                        id="nav-docs-glow-b"
                                                                        width="586"
                                                                        height="249"
                                                                        x="-76"
                                                                        y="-76"
                                                                        colorInterpolationFilters="sRGB"
                                                                        filterUnits="userSpaceOnUse"
                                                                    >
                                                                        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                                                        <feBlend
                                                                            in="SourceGraphic"
                                                                            in2="BackgroundImageFix"
                                                                            result="shape"
                                                                        ></feBlend>
                                                                        <feGaussianBlur
                                                                            result="effect1_foregroundBlur_1_14904"
                                                                            stdDeviation="38"
                                                                        ></feGaussianBlur>
                                                                    </filter>
                                                                </defs>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>)}
                                    </li>
                                    {/* Pricing */}
                                    <li className="flex cursor-pointer">
                                        <a
                                            className="group/link flex px-1 cursor-pointer"
                                            data-radix-collection-item=""
                                            href="/pricing"
                                        >
                                            <span className="rounded-md px-2 py-0.5 text-sm font-medium transition-colors group-hover/link:bg-gray-950/5 dark:group-hover/link:bg-white/10">
                                                Pricing
                                            </span>
                                        </a>
                                    </li>

                                    {/* Company */}
                                    <li className="relative flex" onMouseEnter={() => setIsCompanyHovered(true)}
                                        onMouseLeave={() => setIsCompanyHovered(false)}
                                    >
                                        <button
                                            id="radix-_R_eiveivb_-trigger-Company"
                                            data-state={isCompanyHovered ? 'open' : 'closed'}
                                            aria-expanded={isCompanyHovered}
                                            aria-controls="radix-_R_eiveivb_-content-Company"
                                            className=" cursor-pointer group flex px-1 data-[state=open]:after:absolute data-[state=open]:after:top-full data-[state=open]:after:h-4 data-[state=open]:after:w-full"
                                            data-radix-collection-item=""
                                        >
                                            <span className="flex items-center gap-x-2 rounded-md px-2 py-0.5 text-sm font-medium transition-colors group-hover:bg-gray-950/5 dark:group-hover:bg-white/10">
                                                Company
                                                <svg
                                                    aria-hidden="true"
                                                    viewBox="0 0 10 10"
                                                    fill="none"
                                                    className="size-2.5 flex-none text-gray-400 transition-colors group-data-[state=open]:text-[var(--light,theme(colors.gray.600))_var(--dark,theme(colors.gray.200))]"
                                                >
                                                    <path
                                                        d="M1.75 3.75L5 7.25L8.25 3.75"
                                                        stroke="currentColor"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </span>
                                        </button>
                                        {
                                            isCompanyHovered && (

                                                <><span
                                                    aria-hidden="true"
                                                    tabIndex="0"
                                                    style={{
                                                        position: "absolute",
                                                        border: "0px",
                                                        width: "1px",
                                                        height: "1px",
                                                        padding: "0px",
                                                        margin: "-1px",
                                                        overflow: "hidden",
                                                        clip: "rect(0px, 0px, 0px, 0px)",
                                                        whiteSpace: "nowrap",
                                                        overflowWrap: "normal",
                                                    }} /><div
                                                        className="absolute top-full mt-2.5 -left-3"
                                                        id="radix-_R_eiveivb_-content-Company"
                                                        aria-labelledby="radix-_R_eiveivb_-trigger-Company"
                                                        data-orientation="horizontal"
                                                        data-state="open"
                                                        dir="ltr"
                                                        style={{ opacity: 1, transform: "translateY(0px)" }}
                                                    >
                                                        <div
                                                            className="rounded-xl bg-gray-50 p-1 text-gray-950"
                                                            style={{
                                                                boxShadow: "rgba(25, 28, 33, 0.06) 0px 0px 0px 1px, rgba(25, 28, 33, 0.2) 0px 16px 36px -6px, rgba(0, 0, 0, 0.08) 0px 8px 16px -3px",
                                                            }}
                                                        >
                                                            <ul
                                                                className="w-max max-w-xl rounded-lg bg-white p-3"
                                                                style={{
                                                                    boxShadow: "rgba(25, 28, 33, 0.06) 0px 0px 0px 1px, rgba(106, 115, 133, 0.12) 0px 5px 10px -2px, rgba(0, 0, 0, 0.12) 0px 2px 6px -2px",
                                                                }}
                                                            >
                                                                <li>
                                                                    <a
                                                                        className="group block py-2.5 lg:p-1"
                                                                        data-radix-collection-item=""
                                                                        href="/company"
                                                                    >
                                                                        <div className="rounded-lg transition-colors lg:p-2 lg:group-hover:bg-gray-50">
                                                                            <div className="flex items-center gap-x-1.5">
                                                                                <svg
                                                                                    viewBox="0 0 20 20"
                                                                                    fill="none"
                                                                                    className="size-5 flex-none"
                                                                                    aria-hidden="true"
                                                                                >
                                                                                    <circle
                                                                                        cx="8.5"
                                                                                        cy="6.5"
                                                                                        r="1.75"
                                                                                        stroke="#5F5F6F"
                                                                                        strokeWidth="1.5"
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round" />
                                                                                    <path
                                                                                        d="M12.4023 8C12.9106 7.69378 13.2504 7.13658 13.2504 6.5C13.2504 5.86342 12.9106 5.30622 12.4023 5"
                                                                                        stroke="#5F5F6F"
                                                                                        strokeWidth="1.5"
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round" />
                                                                                    <path
                                                                                        d="M4.9775 13.4345L4.76939 14.3242C4.65827 14.7993 5.03879 15.25 5.55105 15.25H11.4489C11.9612 15.25 12.3417 14.7993 12.2306 14.3242L12.0225 13.4345C11.6556 11.866 10.1913 10.75 8.5 10.75C6.80874 10.75 5.34439 11.866 4.9775 13.4345Z"
                                                                                        stroke="#5F5F6F"
                                                                                        strokeWidth="1.5"
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round" />
                                                                                    <path
                                                                                        d="M11.5 15.25H14.4489C14.9612 15.25 15.3417 14.7993 15.2306 14.3242L15.0225 13.4345C14.8385 12.6479 14.3786 11.9752 13.7524 11.4999"
                                                                                        stroke="#5F5F6F"
                                                                                        strokeWidth="1.5"
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round" />
                                                                                </svg>
                                                                                <div className="text-[0.875rem]/5 font-medium text-gray-950">
                                                                                    About
                                                                                </div>
                                                                            </div>
                                                                            <div className="mt-1 text-xs text-gray-600">
                                                                                Everything you need to know about Clerk
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="group block py-2.5 lg:p-1"
                                                                        data-radix-collection-item=""
                                                                        href="/creators"
                                                                    >
                                                                        <div className="rounded-lg transition-colors lg:p-2 lg:group-hover:bg-gray-50">
                                                                            <div className="flex items-center gap-x-1.5">
                                                                                <svg
                                                                                    viewBox="0 0 20 20"
                                                                                    fill="none"
                                                                                    className="size-5 flex-none"
                                                                                    aria-hidden="true"
                                                                                >
                                                                                    <path
                                                                                        d="M9.25388 5.32819C7.63398 4.5831 6.1471 4.52855 5.33783 5.33783C4.00601 6.66965 5.01369 9.83664 7.58853 12.4115C10.1634 14.9864 13.3304 15.994 14.6622 14.6622C15.4701 13.8542 15.4171 12.3709 14.6754 10.7541"
                                                                                        stroke="#5F5F6F"
                                                                                        strokeWidth="1.5"
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round" />
                                                                                    <path
                                                                                        d="M12.357 6.35704L13 4.75L13.6428 6.35699L15.25 6.99989L13.643 7.64274L13 9.25L12.357 7.64273L10.75 6.99989L12.357 6.35704Z"
                                                                                        stroke="#5F5F6F"
                                                                                        strokeWidth="1.5"
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round" />
                                                                                </svg>
                                                                                <div className="text-[0.875rem]/5 font-medium text-gray-950">
                                                                                    Partnership Program
                                                                                </div>
                                                                            </div>
                                                                            <div className="mt-1 text-xs text-gray-600">
                                                                                Apply for the partnership program
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="group block py-2.5 lg:p-1"
                                                                        data-radix-collection-item=""
                                                                        href="/blog"
                                                                    >
                                                                        <div className="rounded-lg transition-colors lg:p-2 lg:group-hover:bg-gray-50">
                                                                            <div className="flex items-center gap-x-1.5">
                                                                                <svg
                                                                                    viewBox="0 0 20 20"
                                                                                    fill="none"
                                                                                    className="size-5 flex-none"
                                                                                    aria-hidden="true"
                                                                                >
                                                                                    <path
                                                                                        d="M6.75 15.25V12.25M6.75 12.25V4.75H15.25V14C15.25 14.6904 14.6904 15.25 14 15.25H6C5.30964 15.25 4.75 14.6904 4.75 14V12.25H6.75Z"
                                                                                        stroke="#5F5F6F"
                                                                                        strokeWidth="1.5"
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round" />
                                                                                    <path
                                                                                        d="M9.75 7.75H12.25"
                                                                                        stroke="#5F5F6F"
                                                                                        strokeWidth="1.5"
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round" />
                                                                                    <path
                                                                                        d="M9.75 10.75H12.25"
                                                                                        stroke="#5F5F6F"
                                                                                        strokeWidth="1.5"
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round" />
                                                                                </svg>
                                                                                <div className="text-[0.875rem]/5 font-medium text-gray-950">
                                                                                    Blog
                                                                                </div>
                                                                            </div>
                                                                            <div className="mt-1 text-xs text-gray-600">
                                                                                All the latest news and updates
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="group block py-2.5 lg:p-1"
                                                                        data-radix-collection-item=""
                                                                        href="/careers"
                                                                    >
                                                                        <div className="rounded-lg transition-colors lg:p-2 lg:group-hover:bg-gray-50">
                                                                            <div className="flex items-center gap-x-1.5">
                                                                                <svg
                                                                                    viewBox="0 0 20 20"
                                                                                    fill="none"
                                                                                    className="size-5 flex-none"
                                                                                    aria-hidden="true"
                                                                                >
                                                                                    <path
                                                                                        d="M7.75 7.25H5.75C5.19772 7.25 4.75 7.69772 4.75 8.25V14.25C4.75 14.8023 5.19772 15.25 5.75 15.25H14.25C14.8023 15.25 15.25 14.8023 15.25 14.25V8.25C15.25 7.69772 14.8023 7.25 14.25 7.25H12.25M7.75 7.25V5.75C7.75 5.19772 8.19772 4.75 8.75 4.75H11.25C11.8023 4.75 12.25 5.19772 12.25 5.75V7.25M7.75 7.25H12.25"
                                                                                        stroke="#5E5F6E"
                                                                                        strokeWidth="1.5"
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round" />
                                                                                </svg>
                                                                                <div className="text-[0.875rem]/5 font-medium text-gray-950">
                                                                                    Careers
                                                                                </div>
                                                                            </div>
                                                                            <div className="mt-1 text-xs text-gray-600">
                                                                                Your next opportunity starts here
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="group block py-2.5 lg:p-1"
                                                                        data-radix-collection-item=""
                                                                        href="/contact"
                                                                    >
                                                                        <div className="rounded-lg transition-colors lg:p-2 lg:group-hover:bg-gray-50">
                                                                            <div className="flex items-center gap-x-1.5">
                                                                                <svg
                                                                                    viewBox="0 0 20 20"
                                                                                    fill="none"
                                                                                    className="size-5 flex-none"
                                                                                    aria-hidden="true"
                                                                                >
                                                                                    <path
                                                                                        d="M10 14.25C12.8995 14.25 15.25 12.1234 15.25 9.5C15.25 6.87665 12.8995 4.75 10 4.75C7.10051 4.75 4.75 6.87665 4.75 9.5C4.75 10.481 5.07872 11.3926 5.64195 12.1495C5.59056 13.4286 5.29325 14.7218 4.75 15.25C5.98973 15.1352 7.33401 14.7494 8.22735 13.9724C8.7811 14.1521 9.37791 14.25 10 14.25Z"
                                                                                        stroke="#5F5F6F"
                                                                                        strokeWidth="1.5"
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round" />
                                                                                </svg>
                                                                                <div className="text-[0.875rem]/5 font-medium text-gray-950">
                                                                                    Contact
                                                                                </div>
                                                                            </div>
                                                                            <div className="mt-1 text-xs text-gray-600">
                                                                                Connect with Sales or Support
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <div className="ml-auto flex items-center gap-6 font-medium [@media(width<22.5rem)]:hidden">
                            <div data-auth="" data-signed-out="" className="contents" data-visible="">
                                <div className="flex items-center gap-2.5 sm:gap-3">
                                    <button className="group flex px-1 text-sm font-medium text-[var(--light,theme(colors.gray.950))_var(--dark,theme(colors.white))] transition-colors">
                                        <span className="rounded-md px-2 py-0.5 transition-colors group-hover:bg-gray-950/5 dark:group-hover:bg-white/10">
                                            Sign in
                                        </span>
                                    </button>

                                    <div className="sm:hidden">
                                        <div className="[display:var(--light,block)_var(--dark,none)]">
                                            <a
                                                href="https://clerk.com/docs/quickstart"
                                                className="group relative isolate inline-flex items-center justify-center overflow-hidden text-left font-medium transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)] before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)] before:transtion-opacity rounded-md shadow-[0_1px_theme(colors.white/0.07)_inset,0_1px_3px_theme(colors.gray.900/0.2)] before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-md before:bg-gradient-to-b before:from-white/20 before:opacity-50 hover:before:opacity-100 after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:rounded-md after:bg-gradient-to-b after:from-white/10 after:from-[46%] after:to-[54%] after:mix-blend-overlay text-sm h-[1.875rem] px-3 ring-1 bg-gray-900 text-white ring-gray-900"
                                                target="_blank"
                                            >
                                                Start building
                                            </a>
                                        </div>
                                    </div>

                                    <div className="hidden sm:contents">
                                        <div className="[display:var(--light,block)_var(--dark,none)]">
                                            <a
                                                href="https://clerk.com/docs/quickstart"
                                                className="group relative isolate inline-flex items-center justify-center overflow-hidden text-left font-medium transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)] before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)] before:transtion-opacity rounded-md shadow-[0_1px_theme(colors.white/0.07)_inset,0_1px_3px_theme(colors.gray.900/0.2)] before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-md before:bg-gradient-to-b before:from-white/20 before:opacity-50 hover:before:opacity-100 after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:rounded-md after:bg-gradient-to-b after:from-white/10 after:from-[46%] after:to-[54%] after:mix-blend-overlay text-sm h-[1.875rem] px-3 ring-1 bg-gray-900 text-white ring-gray-900"
                                                target="_blank"
                                            >
                                                Start building
                                                <svg viewBox="0 0 10 10" aria-hidden="true" className="ml-2 h-2.5 w-2.5 flex-none opacity-60 group-hover:translate-x-6 group-hover:opacity-0 transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)] before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)] before:transtion-opacity">
                                                    <path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7.25 5-3.5-2.25v4.5L7.25 5Z"></path>
                                                </svg>
                                                <svg viewBox="0 0 10 10" aria-hidden="true" className="-ml-2.5 h-2.5 w-2.5 flex-none -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)] before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)] before:transtion-opacity">
                                                    <path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7.25 5-3.5-2.25v4.5L7.25 5Z"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            type="button"
                            tabIndex={0}
                            aria-expanded={isOpen}
                            onClick={toggleMenu}
                            id="react-aria-_R_2iiveivbH1_"
                            data-react-aria-pressable="true"
                            aria-label="Open navigation"
                            className="focus:outline-none focus-visible:outline-2 -mr-3 ml-auto rounded-full p-3  lg:hidden" data-rac=""
                            data-pressed="true"
                            aria-controls="react-aria-_R_2iiveivb_"
                        >
                            <svg
                                viewBox="0 0 20 20"
                                fill="none"
                                aria-hidden="true"
                                className="size-5 stroke-gray-950 dark:stroke-white"                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="M14.25 6.75h-8.5m8.5 6.5h-8.5"
                                />
                            </svg>
                        </button>
                        {isOpen && (
                            <div
                                className="lg:hidden"
                                data-rac
                                style={{ '--visual-viewport-height': '348px' }}
                            >
                                <div
                                    className="light fixed left-0 top-0 isolate h-[--visual-viewport-height] w-screen overflow-auto bg-gray-50/[0.92] outline-none backdrop-blur-[18px] [scrollbar-gutter:stable]"
                                    data-rac
                                >
                                    <section
                                        id="react-aria-_R_2iiveivb_"
                                        aria-labelledby="react-aria-_R_2iiveivbH1_"
                                        role="dialog"
                                        tabIndex={-1}
                                        className="react-aria-Dialog"
                                        data-rac
                                    >

                                        <div className="sticky top-0 isolate z-50 flex h-16 items-center pl-6 pr-[calc(theme(spacing.6)+var(--scrollbar-offset))]">
                                            <div
                                                className="absolute inset-0 -z-10 bg-gray-50/80 backdrop-blur-sm transition duration-300"
                                                style={{ opacity: 0 }}
                                            ></div>

                                            <button
                                                type="button"
                                                tabIndex={0}
                                                data-react-aria-pressable="true"
                                                aria-label="Close navigation"
                                                className="data-[focus-visible]:outline-focus order-last mr-[20px] ml-[1.125rem] grid size-6 place-content-center rounded-full bg-gray-400/20 text-gray-950 outline-none"
                                                data-rac=""
                                                onClick={toggleMenu}
                                                id="react-aria8307733133-_r_3d_"
                                                slot="close"
                                            >
                                                <svg
                                                    viewBox="0 0 10 10"
                                                    aria-hidden="true"
                                                    className="size-2.5"
                                                    fill="none"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="1.5"
                                                        d="m2 2 6 6m0-6L2 8"
                                                    />
                                                </svg>
                                            </button>
                                            <svg viewBox="0 0 62 18" fill="none" aria-hidden="true" className="mr-auto h-[1.125rem] text-gray-950">
                                                <ellipse cx="8.99999" cy="9" rx="2.81249" ry="2.8125" className="fill-current"></ellipse>
                                                <path d="M14.0674 15.6591C14.3067 15.8984 14.2827 16.2945 14.0015 16.4829C12.571 17.4411 10.8504 17.9999 8.9993 17.9999C7.14818 17.9999 5.42758 17.4411 3.99704 16.4829C3.71589 16.2945 3.69186 15.8984 3.93115 15.6591L5.98648 13.6037C6.17225 13.418 6.46042 13.3886 6.69424 13.5084C7.3856 13.8626 8.16911 14.0624 8.9993 14.0624C9.82948 14.0624 10.613 13.8626 11.3044 13.5084C11.5382 13.3886 11.8263 13.418 12.0121 13.6037L14.0674 15.6591Z" className="fill-current"></path>
                                                <path d="M14.0022 1.51706C14.2834 1.70539 14.3074 2.10155 14.0681 2.34084L12.0128 4.39619C11.827 4.58195 11.5388 4.61129 11.305 4.49151C10.6136 4.13733 9.83014 3.9375 8.99996 3.9375C6.20403 3.9375 3.93748 6.20406 3.93748 9C3.93748 9.83018 4.13731 10.6137 4.49149 11.3051C4.61127 11.5389 4.58193 11.827 4.39617 12.0128L2.34083 14.0682C2.10154 14.3074 1.70538 14.2834 1.51705 14.0023C0.558857 12.5717 0 10.8511 0 9C0 4.02944 4.02942 0 8.99996 0C10.8511 0 12.5717 0.55886 14.0022 1.51706Z" fillOpacity="0.5" className="fill-current"></path>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M29.3906 1.82813C29.3906 1.75046 29.4535 1.6875 29.5312 1.6875H31.6406C31.7182 1.6875 31.7812 1.75046 31.7812 1.82813V16.1719C31.7812 16.2495 31.7182 16.3125 31.6406 16.3125H29.5312C29.4535 16.3125 29.3906 16.2495 29.3906 16.1719V1.82813ZM26.4137 13.2701C26.3577 13.2217 26.2739 13.2253 26.2201 13.2761C25.8913 13.5864 25.5063 13.8347 25.0843 14.0078C24.6215 14.1979 24.1239 14.2936 23.622 14.2891C23.1982 14.3016 22.7762 14.2291 22.3821 14.076C21.988 13.9229 21.63 13.6925 21.3303 13.3989C20.7859 12.8431 20.4726 12.0496 20.4726 11.1037C20.4726 9.2101 21.7324 7.91491 23.622 7.91491C24.1289 7.90793 24.631 8.01058 25.0926 8.21543C25.5111 8.40122 25.8869 8.66683 26.1982 8.99629C26.2514 9.05264 26.3398 9.05916 26.3985 9.00842L27.8225 7.7762C27.8807 7.72586 27.8877 7.63797 27.8364 7.58065C26.7653 6.38368 25.0872 5.76563 23.4914 5.76563C20.2783 5.76563 18 7.93299 18 11.1217C18 12.6988 18.5662 14.0268 19.5211 14.9645C20.476 15.9023 21.8363 16.4531 23.4059 16.4531C25.3741 16.4531 26.9582 15.6984 27.8869 14.7302C27.9414 14.6734 27.9354 14.583 27.8758 14.5315L26.4137 13.2701ZM43.401 11.8056C43.3931 11.876 43.3332 11.9287 43.2623 11.9287H35.8731C35.7833 11.9287 35.7164 12.012 35.7398 12.0986C36.1074 13.4614 37.2035 14.286 38.6995 14.286C39.2038 14.2966 39.7037 14.1928 40.1605 13.9827C40.5862 13.787 40.9639 13.5038 41.2682 13.1528C41.305 13.1104 41.3691 13.1041 41.4122 13.1401L42.8978 14.4335C42.9547 14.483 42.9626 14.5687 42.9138 14.6262C42.0169 15.6843 40.5637 16.4531 38.5695 16.4531C35.5016 16.4531 33.1874 14.3286 33.1874 11.1009C33.1874 9.51732 33.7326 8.18944 34.6412 7.25179C35.1209 6.76963 35.6959 6.38911 36.3307 6.13368C36.9656 5.87826 37.6469 5.75332 38.3327 5.76658C41.4422 5.76658 43.453 7.95343 43.453 10.973C43.4491 11.2512 43.4317 11.5291 43.401 11.8056ZM35.7842 9.84589C35.7581 9.93268 35.8251 10.0172 35.9158 10.0172H40.829C40.9198 10.0172 40.9869 9.93217 40.9617 9.84491C40.6268 8.68592 39.7772 7.91244 38.4577 7.91244C38.0696 7.90013 37.6834 7.97039 37.3254 8.11832C36.9675 8.26633 36.6462 8.48856 36.3836 8.76977C36.1075 9.08283 35.9034 9.44988 35.7842 9.84589ZM50.7639 5.76717C50.8422 5.76632 50.9061 5.82952 50.9061 5.90779V8.26951C50.9061 8.35135 50.8365 8.41586 50.7548 8.40981C50.5269 8.39291 50.3114 8.37856 50.1701 8.37856C48.3301 8.37856 47.2499 9.67359 47.2499 11.3735V16.1719C47.2499 16.2495 47.1869 16.3125 47.1092 16.3125H44.9999C44.9222 16.3125 44.8592 16.2495 44.8592 16.1719V6.05379C44.8592 5.97613 44.9222 5.91317 44.9999 5.91317H47.1092C47.1869 5.91317 47.2499 5.97613 47.2499 6.05379V7.47394C47.2499 7.48196 47.2563 7.48845 47.2644 7.48845C47.2689 7.48845 47.2733 7.48627 47.276 7.48261C48.1006 6.38146 49.3176 5.76892 50.6033 5.76892L50.7639 5.76717ZM56.4778 11.9525C56.4864 11.9432 56.4985 11.938 56.5112 11.938C56.5269 11.938 56.5415 11.9461 56.5498 11.9595L59.217 16.2462C59.2426 16.2874 59.2878 16.3125 59.3364 16.3125L61.7342 16.3125C61.8445 16.3125 61.9118 16.1915 61.8538 16.0978L58.1947 10.1939C58.1616 10.1406 58.1679 10.0719 58.21 10.0254L61.7355 6.13573C61.8174 6.04534 61.7533 5.90066 61.6313 5.90066H59.1298C59.0904 5.90066 59.0528 5.91719 59.0261 5.94622L54.9472 10.3925C54.8605 10.487 54.7029 10.4257 54.7029 10.2974V1.82812C54.7029 1.75046 54.64 1.6875 54.5623 1.6875H52.453C52.3753 1.6875 52.3123 1.75046 52.3123 1.82812V16.1719C52.3123 16.2495 52.3753 16.3125 52.453 16.3125L54.5623 16.3125C54.64 16.3125 54.7029 16.2495 54.7029 16.1719V13.9147C54.7029 13.8792 54.7164 13.8449 54.7406 13.8189L56.4778 11.9525Z" className="fill-current"></path>
                                            </svg>

                                            <button className="max-[374px]:hidden lg:hidden group flex px-1 text-sm font-medium text-[var(--light,theme(colors.gray.950))_var(--dark,theme(colors.white))] transition-colors">
                                                <span className="rounded-md px-2 py-0.5 transition-colors group-hover:bg-gray-950/5 dark:group-hover:bg-white/10">
                                                    Sign in
                                                </span>
                                            </button>
                                            <a
                                                href="https://clerk.com/docs/quickstart"
                                                className=" max-[374px]:hidden lg:hidden group relative isolate inline-flex items-center justify-center overflow-hidden text-left font-medium transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)] before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)] before:transtion-opacity rounded-md shadow-[0_1px_theme(colors.white/0.07)_inset,0_1px_3px_theme(colors.gray.900/0.2)] before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-md before:bg-gradient-to-b before:from-white/20 before:opacity-50 hover:before:opacity-100 after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:rounded-md after:bg-gradient-to-b after:from-white/10 after:from-[46%] after:to-[54%] after:mix-blend-overlay text-sm h-[1.875rem] px-3 ring-1 bg-gray-900 text-white ring-gray-900"
                                                target="_blank"
                                            >
                                                Start building
                                            </a>

                                        </div>

                                        <div className="overflow-hidden pb-10 pl-6 pr-[calc(theme(spacing.6)+var(--scrollbar-offset))]">
                                            <nav className="mb-8 mt-3">
                                                <ul role="list">
                                                    {/* Product Section */}
                                                    <li className="group/item">
                                                        <button
                                                            type="button"
                                                            tabIndex="0"
                                                            data-react-aria-pressable="true"
                                                            aria-expanded={isProductExpanded}
                                                            aria-controls="product-menu"
                                                            className="data-[focus-visible]:outline-focus group flex w-full items-center justify-between border-t border-gray-400/10 py-2 pr-[1.8125rem] text-[1.0625rem]/6 font-bold text-gray-950 outline-none group-first/item:border-t-0"
                                                            onClick={() => setIsProductExpanded(!isProductExpanded)}
                                                        >
                                                            Product
                                                            <svg
                                                                viewBox="0 0 10 10"
                                                                aria-hidden="true"
                                                                fill="none"
                                                                className="size-2.5 transition-transform duration-200"
                                                                style={{ transform: isProductExpanded ? "rotate(180deg)" : "rotate(0deg)" }}
                                                            >
                                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1.75 3.75 5 7.25l3.25-3.5"></path>
                                                            </svg>
                                                        </button>
                                                        <div id="product-menu" hidden={!isProductExpanded}>
                                                            <ul role="list" className="mb-3.5 mt-1.5">
                                                                <li>
                                                                    <a className="group block py-2.5 lg:p-1" href="/user-authentication">
                                                                        <div className="rounded-lg transition-colors lg:p-2 lg:group-hover:bg-gray-50">
                                                                            <div className="flex gap-x-4">
                                                                                <div className="size-10 flex-none overflow-hidden rounded bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                                                                                    <svg viewBox="0 0 40 40" fill="none" className="size-10" aria-hidden="true">
                                                                                        <g filter="url(#UserAuthenticationIcon-b)">
                                                                                            <rect width="14" height="16" x="13" y="12" fill="#fff" rx="2"></rect>
                                                                                            <rect width="15.5" height="17.5" x="12.25" y="11.25" stroke="#9394A1" strokeWidth="1.5" rx="2.75"></rect>
                                                                                        </g>
                                                                                    </svg>
                                                                                </div>
                                                                                <div>
                                                                                    <div className="flex items-center gap-1.5">
                                                                                        <div className="text-[0.875rem]/5 font-medium text-gray-950">User Authentication</div>
                                                                                    </div>
                                                                                    <div className="mt-1 text-xs text-gray-600">Powerful options to securely authenticate and manage your users</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="group block py-2.5 lg:p-1" href="/b2b-saas-suite">
                                                                        <div className="rounded-lg transition-colors lg:p-2 lg:group-hover:bg-gray-50">
                                                                            <div className="flex gap-x-4">
                                                                                <div className="size-10 flex-none overflow-hidden rounded bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                                                                                    {/* Icon for B2B SaaS Suite */}
                                                                                </div>
                                                                                <div>
                                                                                    <div className="flex items-center gap-1.5">
                                                                                        <div className="text-[0.875rem]/5 font-medium text-gray-950">B2B SaaS Suite</div>
                                                                                    </div>
                                                                                    <div className="mt-1 text-xs text-gray-600">Add-on features built specifically for B2B applications</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="group block py-2.5 lg:p-1" href="/billing">
                                                                        <div className="rounded-lg transition-colors lg:p-2 lg:group-hover:bg-gray-50">
                                                                            <div className="flex gap-x-4">
                                                                                <div className="size-10 flex-none overflow-hidden rounded bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                                                                                    {/* Icon for Billing */}
                                                                                </div>
                                                                                <div>
                                                                                    <div className="flex items-center gap-1.5">
                                                                                        <div className="text-[0.875rem]/5 font-medium text-gray-950">Billing | Beta</div>
                                                                                    </div>
                                                                                    <div className="mt-1 text-xs text-gray-600">The easiest way to implement subscriptions for applications</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className="group/item">
                                                        <button
                                                            type="button"
                                                            tabIndex="0"
                                                            data-react-aria-pressable="true"
                                                            aria-expanded={isSolutionsExpanded}
                                                            onClick={() => setIsSolutionsExpanded(!isSolutionsExpanded)}
                                                            aria-controls="solutions-menu"
                                                            className="data-[focus-visible]:outline-focus group flex w-full items-center justify-between border-t border-gray-400/10 pl-0 py-2 pr-[1.8125rem] text-[1.0625rem]/6 font-bold text-gray-950 outline-none group-first/item:border-t-0"
                                                        >
                                                            Solutions
                                                            <svg
                                                                viewBox="0 0 10 10"
                                                                aria-hidden="true"
                                                                fill="none"
                                                                className="size-2.5 transition-transform duration-200"
                                                                style={{ transform: isSolutionsExpanded ? "rotate(180deg)" : "rotate(0deg)" }}
                                                            >
                                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1.75 3.75 5 7.25l3.25-3.5"></path>
                                                            </svg>
                                                        </button>
                                                        <div id="solutions-menu" hidden={!isSolutionsExpanded}>
                                                            <ul role="list" className="mb-3.5 mt-1.5">
                                                                <li>
                                                                    <a className="group block py-2.5 lg:p-1" href="/react-components">
                                                                        <div className="rounded-lg transition-colors lg:p-2 lg:group-hover:bg-gray-50">
                                                                            <div className="flex gap-x-4">
                                                                                <div className="size-10 flex-none overflow-hidden rounded bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                                                                                    <svg viewBox="0 0 40 40" className="size-10" aria-hidden="true">
                                                                                        <svg width="24" height="24" x="8" y="8" viewBox="-10.5 -9.45 21 18.9">
                                                                                            <circle cx="0" cy="0" r="2" fill="#087EA4"></circle>
                                                                                            <g stroke="#087EA4" strokeWidth="1" fill="none">
                                                                                                <ellipse rx="10" ry="4.5"></ellipse>
                                                                                                <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
                                                                                                <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
                                                                                            </g>
                                                                                        </svg>
                                                                                    </svg>
                                                                                </div>
                                                                                <div>
                                                                                    <div className="flex items-center gap-1.5">
                                                                                        <div className="text-[0.875rem]/5 font-medium text-gray-950">React Components</div>
                                                                                    </div>
                                                                                    <div className="mt-1 text-xs text-gray-600">Embeddable prebuilt UI components for quick and seamless integrations</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="group block py-2.5 lg:p-1" href="/nextjs-authentication">
                                                                        <div className="rounded-lg transition-colors lg:p-2 lg:group-hover:bg-gray-50">
                                                                            <div className="flex gap-x-4">
                                                                                <div className="size-10 flex-none overflow-hidden rounded bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                                                                                    <svg viewBox="0 0 40 40" fill="none" className="size-10" aria-hidden="true">
                                                                                        <path d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20Z" fill="#000"></path>
                                                                                        <path d="M20 5c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15 0-8.284 6.716-15 15-15Z" fill="#fff"></path>
                                                                                        <path d="M12.5 12.5h15v15h-15v-15Z" fill="#000"></path>
                                                                                    </svg>
                                                                                </div>
                                                                                <div>
                                                                                    <div className="flex items-center gap-1.5">
                                                                                        <div className="text-[0.875rem]/5 font-medium text-gray-950">Next.js Authentication</div>
                                                                                    </div>
                                                                                    <div className="mt-1 text-xs text-gray-600">The fastest and most seamless authentication solution for Next.js</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="group block py-2.5 lg:p-1" href="/expo">
                                                                        <div className="rounded-lg transition-colors lg:p-2 lg:group-hover:bg-gray-50">
                                                                            <div className="flex gap-x-4">
                                                                                <div className="size-10 flex-none overflow-hidden rounded bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                                                                                    <svg viewBox="0 0 40 40" fill="none" className="size-10" aria-hidden="true">
                                                                                        <path d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20Z" fill="#000"></path>
                                                                                        <path d="M20 5c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15 0-8.284 6.716-15 15-15Z" fill="#fff"></path>
                                                                                        <path d="M20 12.5a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15Z" fill="#000"></path>
                                                                                    </svg>
                                                                                </div>
                                                                                <div>
                                                                                    <div className="flex items-center gap-1.5">
                                                                                        <div className="text-[0.875rem]/5 font-medium text-gray-950">Expo</div>
                                                                                    </div>
                                                                                    <div className="mt-1 text-xs text-gray-600">Implement cross-platform authentication the React way</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="group block py-2.5 lg:p-1" href="/ai-authentication">
                                                                        <div className="rounded-lg transition-colors lg:p-2 lg:group-hover:bg-gray-50">
                                                                            <div className="flex gap-x-4">
                                                                                <div className="size-10 flex-none overflow-hidden rounded bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                                                                                    <svg viewBox="0 0 40 40" fill="none" className="size-10" aria-hidden="true">
                                                                                        {/* AI icon - you can replace this with your preferred AI icon */}
                                                                                        <path d="M20 5c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15 0-8.284 6.716-15 15-15Z" fill="#000"></path>
                                                                                        <path d="M15 15h10v10H15z" fill="#fff"></path>
                                                                                    </svg>
                                                                                </div>
                                                                                <div>
                                                                                    <div className="flex items-center gap-1.5">
                                                                                        <div className="text-[0.875rem]/5 font-medium text-gray-950">Authentication for AI</div>
                                                                                    </div>
                                                                                    <div className="mt-1 text-xs text-gray-600">Authentication and abuse protection tailored to AI applications</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className="group/item relative">
                                                        <button
                                                            type="button"
                                                            tabIndex="0"
                                                            aria-expanded={isDocsExpanded}
                                                            onClick={() => setIsDocsExpanded(!isDocsExpanded)}
                                                            aria-controls="docs-dropdown"
                                                            className="data-[focus-visible]:outline-focus group flex w-full items-center justify-between border-t border-gray-400/10 py-2 pr-[1.8125rem] text-[1.0625rem]/6 font-bold text-gray-950 outline-none group-first/item:border-t-0"
                                                        >
                                                            Docs
                                                            <svg
                                                                viewBox="0 0 10 10"
                                                                aria-hidden="true"
                                                                fill="none" className="size-2.5 transition-transform duration-200"

                                                                style={{ transform: isDocsExpanded ? "rotate(180deg)" : "rotate(0deg)" }}
                                                            >
                                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1.75 3.75 5 7.25l3.25-3.5"></path>
                                                            </svg>
                                                        </button>
                                                        <div id="_r_7r_" hidden={!isDocsExpanded}>
                                                            <div className="light isolate mb-4 mt-4 md:mb-6 md:grid md:grid-cols-2 lg:mt-0 lg:w-[42rem] lg:overflow-hidden lg:rounded-xl lg:bg-gray-50 lg:shadow-[0_0_0_1px_rgba(25,28,33,0.06),0_16px_36px_-6px_rgba(25,28,33,0.2),0_8px_16px_-3px_rgba(0,0,0,0.08)]">
                                                                <div className="flex flex-col items-start md:pr-6 lg:my-1 lg:ml-1 lg:rounded-lg lg:bg-white lg:p-6 lg:shadow-[0_0_0_1px_rgba(25,28,33,0.06),0_5px_10px_-2px_rgba(106,115,133,0.12),0_2px_6px_-2px_rgba(0,0,0,0.12)]">
                                                                    <div className="text-xs font-medium text-gray-600">Top SDKs</div>
                                                                    <div className="my-3 grid w-full grid-cols-2 text-[0.875rem]/5 font-medium text-gray-950 lg:text-[0.875rem]/5">
                                                                        <div>
                                                                            <a className="group flex py-3 pr-3" href="/docs/quickstarts/nextjs">
                                                                                <span className="mr-3 flex-none [&>img]:size-5 [&>svg]:size-5">
                                                                                    <svg viewBox="0 0 180 180">
                                                                                        <mask height="180" id="_r_7u_-mask" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style={{ maskType: 'alpha' }}>
                                                                                            <circle cx="90" cy="90" r="90" style={{ fill: 'var(--light, black) var(--dark, white)' }}></circle>
                                                                                        </mask>
                                                                                        <g mask="url(#_r_7u_-mask)">
                                                                                            <circle cx="90" cy="90" r="90" style={{ fill: 'var(--light, black) var(--dark, white)' }}></circle>
                                                                                            <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#_r_7u_-gradient-1)"></path>
                                                                                            <rect fill="url(#_r_7u_-gradient-2)" height="72" width="12" x="115" y="54"></rect>
                                                                                        </g>
                                                                                        <defs>
                                                                                            <linearGradient gradientUnits="userSpaceOnUse" id="_r_7u_-gradient-1" x1="109" x2="144.5" y1="116.5" y2="160.5">
                                                                                                <stop style={{ stopColor: 'var(--light, white) var(--dark, black)' }}></stop>
                                                                                                <stop offset="1" stopOpacity="0" style={{ stopColor: 'var(--light, white) var(--dark, black)' }}></stop>
                                                                                            </linearGradient>
                                                                                            <linearGradient gradientUnits="userSpaceOnUse" id="_r_7u_-gradient-2" x1="121" x2="120.799" y1="54" y2="106.875">
                                                                                                <stop style={{ stopColor: 'var(--light, white) var(--dark, black)' }}></stop>
                                                                                                <stop offset="1" stopOpacity="0" style={{ stopColor: 'var(--light, white) var(--dark, black)' }}></stop>
                                                                                            </linearGradient>
                                                                                        </defs>
                                                                                    </svg>
                                                                                </span>
                                                                                Next.js
                                                                                <span className="relative">
                                                                                    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="absolute left-0.5 top-[0.1875rem] size-4 -translate-x-2 stroke-gray-400 opacity-0 transition duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:translate-x-0 group-hover:stroke-gray-950 group-hover:opacity-100">
                                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.75 4.75 10.25 8l-3.5 3.25"></path>
                                                                                    </svg>
                                                                                </span>
                                                                            </a>
                                                                        </div>
                                                                        <div>
                                                                            <a className="group flex py-3 pl-3" href="/docs/quickstarts/react">
                                                                                <span className="mr-3 flex-none [&>img]:size-5 [&>svg]:size-5">
                                                                                    <svg viewBox="0 0 22 20" fill="none">
                                                                                        <path d="M11 11.91a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" style={{ fill: 'var(--light, #087EA4) var(--dark, #58C4DC)' }}></path>
                                                                                        <g style={{ stroke: 'var(--light, #087EA4) var(--dark, #58C4DC)' }}>
                                                                                            <path d="M11 14.41c5.523 0 10-2.014 10-4.5 0-2.485-4.477-4.5-10-4.5S1 7.425 1 9.91c0 2.486 4.477 4.5 10 4.5Z"></path>
                                                                                            <path d="M7.102 12.16c2.762 4.783 6.745 7.653 8.897 6.41 2.153-1.242 1.659-6.127-1.103-10.91C12.136 2.877 8.152.007 6 1.25 3.847 2.493 4.341 7.377 7.102 12.16Z"></path>
                                                                                            <path d="M7.102 7.66C4.341 12.443 3.847 17.328 6 18.57c2.153 1.243 6.136-1.627 8.898-6.41 2.76-4.783 3.255-9.667 1.102-10.91C13.847.007 9.864 2.877 7.102 7.66Z"></path>
                                                                                        </g>
                                                                                    </svg>
                                                                                </span>
                                                                                React
                                                                                <span className="relative">
                                                                                    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="absolute left-0.5 top-[0.1875rem] size-4 -translate-x-2 stroke-gray-400 opacity-0 transition duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:translate-x-0 group-hover:stroke-gray-950 group-hover:opacity-100">
                                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.75 4.75 10.25 8l-3.5 3.25"></path>
                                                                                    </svg>
                                                                                </span>
                                                                            </a>
                                                                        </div>
                                                                        <div>
                                                                            <a className="group flex py-3 pr-3" href="/docs/quickstarts/expo">
                                                                                <span className="mr-3 flex-none [&>img]:size-5 [&>svg]:size-5">
                                                                                    <svg viewBox="0 0 32 32" style={{ fill: 'var(--light, #000020) var(--dark, white)' }}>
                                                                                        <path d="M0 26.778c.057.707.307 1.417.957 2.37.774 1.133 2.102 1.754 3.071.757.653-.674 7.725-13.035 11.133-17.72a1.016 1.016 0 0 1 1.664 0c3.408 4.685 10.48 17.046 11.134 17.72.969.997 2.297.376 3.07-.756.76-1.114.971-1.894.971-2.728 0-.568-11.013-21.064-12.123-22.77-1.066-1.64-1.392-1.998-3.196-2.057h-1.376c-1.804.059-2.129.415-3.197 2.056C11.023 5.32.44 25.01 0 26.36v.418Z"></path>
                                                                                    </svg>
                                                                                </span>
                                                                                Expo
                                                                                <span className="relative">
                                                                                    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="absolute left-0.5 top-[0.1875rem] size-4 -translate-x-2 stroke-gray-400 opacity-0 transition duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:translate-x-0 group-hover:stroke-gray-950 group-hover:opacity-100">
                                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.75 4.75 10.25 8l-3.5 3.25"></path>
                                                                                    </svg>
                                                                                </span>
                                                                            </a>
                                                                        </div>
                                                                        <div>
                                                                            <a className="group flex py-3 pl-3" href="/docs/quickstarts/react-router">
                                                                                <span className="mr-3 flex-none [&>img]:size-5 [&>svg]:size-5">
                                                                                    <svg viewBox="0 0 32 32">
                                                                                        <path fill="#F44250" d="M25.6 15.568a3.196 3.196 0 0 1-3.2 3.19 3.193 3.193 0 0 0-3.2 3.189 3.196 3.196 0 0 1-3.2 3.19 3.193 3.193 0 0 1-2.263-.935 3.172 3.172 0 0 1-.937-2.255 3.193 3.193 0 0 1 3.2-3.19 3.196 3.196 0 0 0 3.2-3.189 3.194 3.194 0 0 0-3.2-3.19 3.193 3.193 0 0 1-3.2-3.189A3.193 3.193 0 0 1 16 6c1.767.001 3.2 1.429 3.2 3.19a3.193 3.193 0 0 0 3.2 3.19c1.768 0 3.2 1.427 3.2 3.19Z"></path>
                                                                                        <path d="M12.8 15.568a3.195 3.195 0 0 0-3.2-3.19 3.195 3.195 0 0 0-3.2 3.19 3.195 3.195 0 0 0 3.2 3.19c1.767 0 3.2-1.428 3.2-3.19ZM6.4 21.947a3.195 3.195 0 0 0-3.2-3.19 3.195 3.195 0 0 0-3.2 3.19 3.195 3.195 0 0 0 3.2 3.19c1.767 0 3.2-1.429 3.2-3.19ZM32 21.947a3.195 3.195 0 0 0-3.2-3.19 3.195 3.195 0 0 0-3.2 3.19 3.195 3.195 0 0 0 3.2 3.19c1.767 0 3.2-1.429 3.2-3.19Z" style={{ fill: 'var(--light, #121212) var(--dark, #fff)' }}></path>
                                                                                    </svg>
                                                                                </span>
                                                                                React Router
                                                                                <span className="relative">
                                                                                    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="absolute left-0.5 top-[0.1875rem] size-4 -translate-x-2 stroke-gray-400 opacity-0 transition duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:translate-x-0 group-hover:stroke-gray-950 group-hover:opacity-100">
                                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.75 4.75 10.25 8l-3.5 3.25"></path>
                                                                                    </svg>
                                                                                </span>
                                                                            </a>
                                                                        </div>
                                                                        <div>
                                                                            <a className="group flex py-3 pr-3" href="/docs/quickstarts/tanstack-react-start">
                                                                                <span className="mr-3 flex-none [&>img]:size-5 [&>svg]:size-5">
                                                                                    <img alt="" src="data:image/webp;base64,UklGRu4JAABXRUJQVlA4TOEJAAAvP8APEM8Hu9r2tM0n/1KSMjNze8UzdNWu0duOwMzMlfXTGnBt204b3SczDjPU0+Vr5j+nnZ6Zp2dm0vjJ0oUc2bZqZZ1z3rX/cXcdQphEQgoWB0TgMHOHa3JEASCA6mXbtl1bY02NHcC+gJtq6gS2j+Aa/Sf7/8nY7ADw+MR//od0UAdVqEIUojCFeOEKdZ2TC6d7an1+DTIlHUShDur0v2kPEIX1/ZF5rZCuYct/87xXJc3Jdcw4BHhRxdJqF9PdrdRpi51GGXWq0NbpSINW7nVWUXczcgDDExNiEfXqZnAy7g9PvOkcndL6ndA2FYTZ0e8waiGBcsekHQvyZJbM2C5dIKjFQE9hqRgZowLYZ5RSB00iBaNgKQx8DtQvIjlPAAWYEBECKCAEwEeBpigqfJvUv+k1pq4ajyduRLjbAe2/hCJ8eA5ejtzrLD3L+S1LJiwHtfy3qRsMF6O5Zs3w+OdGQFuYDmjCTUfIq2jCRruMVca0QtDGxEN73TM9m9mVTwTQlWqXKebbnReuFRAsKaMztr8sBDF4XQiCZf2gyhm+evx475T/bMXkJ/P/bH7sn4/fpvxg5xfdVOv/C1DP+5nOBtpF8V51yL7Hp19nN/1fWo2BdPkhPBQTrqPW+58ZI04aj9D8dcriIDYfPs2PeQKY0xtmlRvzW5u3wjVx+VkW8V3c9Bcz/d68ppcUT7NN5BwXMtrfxltpLS6TnfpxZ65i9Jva4/F09xKHDn33UUc9g2Lsa8dmfGDtesPbS7Q+O2PMJOiThnjBUOGBPkhPBomjsrRXRWakM5V5K+byF0kO8uIPPOcl/mupUf4X+Q+g+66zmdB050bbJVvZst3+2OJJd7s3ax939pabr/0Tagr9c9w69ufp30Cs+xcogWqHv6AEedBreClwp6kGmkJSOyjPr6vh72iOy4jMPEacH9WAtuOxwWx1qDE9nwH2MhCgNB9uLeTdml/ZZaWrxv9MWjrSMfjLmHJTb50zARERTEvbtrVt5K0IDGF0mDkb6FLaMDPYwxBmzmBRmSF84GFmxkj25WOBISv4v++T/j+i/w7ctnGk0FOwe8XvoKz9f2KnO/V25pQexx1WfZ5zGTjUXY7U3ff4yh32haU7VwF/vYjCtrJNMplMryD55Zckov8O3LaNpCiDFTqX926/4ElBrkDDz3//8+8P//OfGOfufyB+tjW6CgJR/PyL+yNLgruEZqMrucV//eF7w3cAQEAE1gbEyP01jijSv/3Gv2XfGFgyv//B+Lc/ijQvAtH9/esUfXtzaDDyx7d4/TCdCLz/w1dp+OP2PH69dgMO3k81AvHpl19A6swHADs3AFJ9KBAffJGW2wYhzAHYSyUC8eHn6fjs9tAg9t51jekAgv3kEYiP7qXpjutyxnagw9BJKQQfPk7ujutychsdZEvS88GTZJ65eeGBlzCh4vVteLLaQV2dln0v4SHw6bOkCqcHNJb3nCewMBRZPOfUsdtlc5ggAu8/fyEgscIBSVX080RFRLDMrHax02GZXk7X3090PT6yOS8qFHRE57rq55oeBsgWF0cWL4BOVstAdOz2EhmL6CDRsxOr82x9gLFozkV+LCDrpDkO9bNw0dEJceK8OjK4ekTLRmzsj+KnljkqGuhXfRy4CAOXomAhc43lW2qdRZaA86PTnS5r+qgnbj1LmU2BpgRcvw+0qOPoIKk+4LLkAyNmqyDnfHX59Mzp4sbNZP6gwHjxmQ0rDutS1HHIccghcjQ1gwdc7teLmdkKoHZwGRis7hoXU3fcI4zzLAgIAAiYP6MTWUIagaQ5ks8fyMi8RLMUQs3Q4hmUrYJY2d7t6OKduGUeJUGbsqwBDXSIEtGUI5MGROCE2LTUz4IW5Y1BxMh2EM+wfNVQVpLrwY0yu5wBVdZIlzSASUGcy6BwKbxWDmtQZhFEgc2D1cHyZUBERCE2PFgKAAIAxFpUVTQOQEAwNQ6aD7jE/f3ZZQazmtXgkhArfasClpkAKPVgBQBUAwDkxHySynVFBseY0dmYP+AzHvfPW2ox29QygKUIAOtbAQaVuFHFbEKXPsUvayoRl6bGJt7M7g9kuH7uDVfb1TCryFI5w8FFxljVxmaNzfqMP+CqUcUncZ80Ozbxek228GZkci7mMak6RKyNLFYj4uZWrRXOSYEM7/SM4pOBzbwxOgaNNfOhmHHxf4y1KWkk01Z9nRXNaZl+fT7k9cmBy9DCKIyL2jp3/mNNuZypS0d9A1q5c3IgOoezXp/qxt5EY94y2+DC3MchB9PQ0NZk1TgX1eewKeTN4P7pBecTGPvQVgiddGBba7PNnO40ue7HxsTecJo/HBv9xL0SrS227XNCCPeNy8zA9EJL82tjI6PXWq7E+RDc85Ny89mZ8+7F7Zvw5AzuBmcvhNCtT9+9YC2SuvUUbXQunj13yYVw7+oL55wl5f5TNIGLyLleFUL/83tKKXWx69ZNp+TFS5d7VERMX/9lPrIbtNZadt10N2696ZeP/5f9OhJ9r6+E0YIUptxHjfhFP+7HCLS8ftUiBnY5Y8x/rdaihqEWi4hWkFfrbVKIdqZuPW6xHZ++wOiQbR8wLUL52tZjvZrQQdFcHtNyT3TH56+a9M9f8i8YYFKFxOyNQd8gYuc3SicSOphQbJmPPU+s1mTXwJD9+QuMaTeDITH7YrD+YwN/L68AKIP4g6YhNfD45gd8p5Qf9wD+MR+6Oj6rTmMGyLEhMddjkF9b5bLyW30bHAD5PJ1giFP8BuV96BmAwW8/zAo/5Vo+5uDP8tLC/NyshCWnFB3YePlPMmWtTZDr1RMUWvQUmJcbdGRZLTkm5sKS+hPLO9geHpGlotYoZWFybml1ZSubTslkvKGuprrKVZoK42Sd56PCnZXVpbnJAifm8HaMPkzNzrO4mYmC2mpOp5QkVotYA9V0oIIg633Pvd0qjE/McGJOsROH7cUFHg+zGZ1OeA2q3tUZRqqYw7WW3hsFD7gRF7cD85bpmUmKMXPzD7LGpMlNUEzq7BvVPD83E4g5HZw4uXKRUsLC/Zy16WQC4wJSSQV80oUSMjHLvGnf9gTLndw+myFXEJDqgEj/jdccCEnPgeAQUw/3AWQzaRVFKhynmTFOjxXHC4/2IykjInXGBD8CRlofHxbGC2OxMHTJHNhPOmdtNsMXjxXOhwgTfuJRKXTLA5Tv7GcaSAclEZR6nlTWJ/x7ZaGJ/7EDxvCFDoqJ9BN7BBceRw6pEEkLCzYJL3yOHhKWuPV5guJLNwfvD4eLFvgQNXLWbYKDB4OyT+yAhjd0NOK69UgkedvEzHQBosphjoR8DBuJQX531u3vjx0+yBcy0Nj0Ps/aLjQT7v3RI+RQt3+f2yuPHbHv6T4nsgEA" /></span>
                                                                                TanStack
                                                                                <span className="relative">
                                                                                    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="absolute left-0.5 top-[0.1875rem] size-4 -translate-x-2 stroke-gray-400 opacity-0 transition duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:translate-x-0 group-hover:stroke-gray-950 group-hover:opacity-100">
                                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.75 4.75 10.25 8l-3.5 3.25"></path>
                                                                                    </svg>
                                                                                </span>
                                                                            </a>
                                                                        </div>
                                                                        <div>
                                                                            <a className="group flex py-3 pl-3" href="/docs/quickstarts/astro">
                                                                                <span className="mr-3 flex-none [&>img]:size-5 [&>svg]:size-5">
                                                                                    <svg viewBox="0 0 95 107">
                                                                                        <path fill="url(#_r_7v_)" d="M32.589 91.136c-4.834-4.418-6.245-13.703-4.231-20.429 3.492 4.24 8.33 5.584 13.342 6.343 7.737 1.17 15.335.732 22.523-2.804.822-.405 1.582-.944 2.48-1.489.675 1.957.85 3.932.615 5.942-.573 4.897-3.01 8.679-6.885 11.546-1.55 1.146-3.19 2.171-4.79 3.253-4.917 3.323-6.248 7.22-4.4 12.888.044.139.083.277.183.614-2.51-1.124-4.345-2.76-5.742-4.911-1.476-2.27-2.178-4.781-2.215-7.498-.018-1.323-.018-2.657-.196-3.96-.434-3.178-1.926-4.602-4.737-4.683-2.885-.085-5.166 1.699-5.772 4.507-.046.216-.113.428-.18.679l.005.002Z"></path>
                                                                                        <path d="M5 69.587s14.314-6.973 28.668-6.973L44.49 29.12c.405-1.62 1.588-2.72 2.924-2.72 1.335 0 2.518 1.1 2.924 2.72L61.16 62.614c17 0 28.668 6.973 28.668 6.973S65.514 3.352 65.467 3.219C64.769 1.261 63.591 0 62.003 0H32.827c-1.588 0-2.718 1.261-3.464 3.22C29.311 3.35 5 69.586 5 69.586Z" style={{ fill: 'var(--light, #17191E) var(--dark, white)' }}></path>
                                                                                        <defs>
                                                                                            <linearGradient id="_r_7v_" x1="27.47" x2="74.145" y1="107" y2="84.947" gradientUnits="userSpaceOnUse">
                                                                                                <stop stopColor="#D83333"></stop>
                                                                                                <stop offset="1" stopColor="#F041FF"></stop>
                                                                                            </linearGradient>
                                                                                        </defs>
                                                                                    </svg>
                                                                                </span>
                                                                                Astro
                                                                                <span className="relative">
                                                                                    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="absolute left-0.5 top-[0.1875rem] size-4 -translate-x-2 stroke-gray-400 opacity-0 transition duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:translate-x-0 group-hover:stroke-gray-950 group-hover:opacity-100">
                                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.75 4.75 10.25 8l-3.5 3.25"></path>
                                                                                    </svg>
                                                                                </span>
                                                                            </a>
                                                                        </div>
                                                                        <div>
                                                                            <a className="group flex py-3 pr-3" href="/docs/quickstarts/chrome-extension">
                                                                                <span className="mr-3 flex-none [&>img]:size-5 [&>svg]:size-5">
                                                                                    <svg viewBox="0 0 63 63" fill="none">
                                                                                        <linearGradient id="_r_80_-a" x1="34.909" x2="7.632" y1="61.029" y2="13.785" gradientUnits="userSpaceOnUse">
                                                                                            <stop offset="0" stopColor="#1e8e3e"></stop>
                                                                                            <stop offset="1" stopColor="#34a853"></stop>
                                                                                        </linearGradient>
                                                                                        <linearGradient id="_r_80_-b" x1="26.904" x2="54.181" y1="63.079" y2="15.835" gradientUnits="userSpaceOnUse">
                                                                                            <stop offset="0" stopColor="#fcc934"></stop>
                                                                                            <stop offset="1" stopColor="#fbbc04"></stop>
                                                                                        </linearGradient>
                                                                                        <linearGradient id="_r_80_-c" x1="4.221" x2="58.775" y1="19.688" y2="19.688" gradientUnits="userSpaceOnUse">
                                                                                            <stop offset="0" stopColor="#d93025"></stop>
                                                                                            <stop offset="1" stopColor="#ea4335"></stop>
                                                                                        </linearGradient>
                                                                                        <path fill="#fff" d="M31.499 47.247c8.698 0 15.75-7.052 15.75-15.75s-7.052-15.75-15.75-15.75-15.75 7.051-15.75 15.75 7.051 15.75 15.75 15.75z"></path>
                                                                                        <path fill="url(#_r_80_-a)" d="M17.86 39.375 4.22 15.754a31.492 31.492 0 0 0 27.28 47.242l13.638-23.62v-.005a15.746 15.746 0 0 1-27.28.004z"></path>
                                                                                        <path fill="url(#_r_80_-b)" d="M45.138 39.374 31.5 62.995A31.491 31.491 0 0 0 58.773 15.75H31.498l-.003.002a15.747 15.747 0 0 1 13.643 23.623z"></path>
                                                                                        <path fill="#1a73e8" d="M31.499 43.969c6.886 0 12.469-5.583 12.469-12.469s-5.583-12.469-12.469-12.469S19.03 24.614 19.03 31.5 24.613 43.969 31.5 43.969z"></path>
                                                                                        <path fill="url(#_r_80_-c)" d="M31.5 15.75h27.274a31.493 31.493 0 0 0-54.553.004L17.86 39.375l.004.002A15.747 15.747 0 0 1 31.499 15.75z"></path>
                                                                                    </svg>
                                                                                </span>
                                                                                Chrome
                                                                                <span className="relative">
                                                                                    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="absolute left-0.5 top-[0.1875rem] size-4 -translate-x-2 stroke-gray-400 opacity-0 transition duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:translate-x-0 group-hover:stroke-gray-950 group-hover:opacity-100">
                                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.75 4.75 10.25 8l-3.5 3.25"></path>
                                                                                    </svg>
                                                                                </span>
                                                                            </a>
                                                                        </div>
                                                                        <div>
                                                                            <a className="group flex py-3 pl-3" href="/docs/quickstarts/express">
                                                                                <span className="mr-3 flex-none [&>img]:size-5 [&>svg]:size-5">
                                                                                    <svg viewBox="0 0 20 20" style={{ fill: 'var(--light, black) var(--dark, white)' }}>
                                                                                        <path d="M6.504 7.181c1.47 0 1.812 1.29 1.812 2.108H4.5c.103-.906.683-2.108 2.004-2.108Z"></path>
                                                                                        <path fillRule="evenodd" d="M10 20a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm-3.05-7.291c-1.321 0-2.438-.728-2.464-2.492l5.032.013c.04-.2.062-.405.058-.61 0-1.32-.621-3.37-2.955-3.37-2.109 0-3.385 1.737-3.385 3.875 0 2.137 1.328 3.625 3.535 3.625a5.738 5.738 0 0 0 2.39-.475l-.223-.938a4.65 4.65 0 0 1-1.988.372Zm5.833-4.78L11.759 6.4h-1.455l2.437 3.505-2.555 3.666h1.439l1.04-1.604a26.7 26.7 0 0 1 .261-.425c.171-.274.336-.538.494-.837h.031l.023.037c.245.413.479.807.75 1.225l1.067 1.604h1.471L14.238 9.86l2.45-3.46h-1.425l-.995 1.514c-.096.157-.194.312-.293.47-.146.231-.294.465-.435.704h-.03l-.165-.273c-.176-.291-.35-.58-.563-.887Z"></path>
                                                                                    </svg>
                                                                                </span>
                                                                                Express
                                                                                <span className="relative">
                                                                                    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="absolute left-0.5 top-[0.1875rem] size-4 -translate-x-2 stroke-gray-400 opacity-0 transition duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:translate-x-0 group-hover:stroke-gray-950 group-hover:opacity-100">
                                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.75 4.75 10.25 8l-3.5 3.25"></path>
                                                                                    </svg>
                                                                                </span>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mt-auto w-full lg:grid lg:grid-cols-1">
                                                                        <a className="group relative isolate inline-flex items-center justify-center overflow-hidden text-left font-medium transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)] before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)] before:transtion-opacity rounded-md shadow-[0_1px_theme(colors.white/0.07)_inset,0_1px_3px_theme(colors.gray.900/0.2)] before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-md before:bg-gradient-to-b before:from-white/20 before:opacity-50 hover:before:opacity-100 after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:rounded-md after:bg-gradient-to-b after:from-white/10 after:from-[46%] after:to-[54%] after:mix-blend-overlay text-sm h-[1.875rem] px-3 ring-1 bg-white text-gray-950 ring-[#191C21]/[8%]" target="" href="/docs">
                                                                            Go to Docs
                                                                            <svg viewBox="0 0 10 10" aria-hidden="true" className="ml-2 h-2.5 w-2.5 flex-none opacity-60 group-hover:translate-x-6 group-hover:opacity-0 transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)] before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)] before:transtion-opacity">
                                                                                <path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7.25 5-3.5-2.25v4.5L7.25 5Z"></path>
                                                                            </svg>
                                                                            <svg viewBox="0 0 10 10" aria-hidden="true" className="-ml-2.5 h-2.5 w-2.5 flex-none -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)] before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)] before:transtion-opacity">
                                                                                <path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7.25 5-3.5-2.25v4.5L7.25 5Z"></path>
                                                                            </svg>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="relative mt-6 border-t border-gray-400/15 pt-6 md:mt-0 md:border-t-0 md:pb-[2.875rem] md:pl-6 md:pt-0 lg:px-6 lg:py-7">
                                                                    <div className="absolute bottom-[3.375rem] left-0 top-0 hidden w-px bg-gray-400/15 md:block lg:hidden"></div>
                                                                    <div className="flex justify-between text-xs font-medium">
                                                                        <div className="text-gray-600">Changelog</div>
                                                                        <a className="text-gray-950 transition hover:opacity-80" href="/changelog">View all</a>
                                                                    </div>
                                                                    <ul role="list" className="mt-4">
                                                                        <li className="relative flex flex-col-reverse gap-y-1 py-2 lg:rounded-lg lg:px-2 lg:transition lg:hover:bg-gray-950/[0.04] lg:hover:backdrop-blur-[2.5px]">
                                                                            <a className="block truncate text-[0.875rem]/5 font-medium text-gray-950" href="/changelog/2025-07-15-clerk-css-variables-support">
                                                                                Clerk CSS variables support
                                                                                <span className="absolute inset-0 lg:-inset-y-1"></span>
                                                                            </a>
                                                                            <div className="flex items-baseline justify-between">
                                                                                <time dateTime="2025-07-15" className="text-xs text-gray-600">Jul 15, 2025</time>
                                                                                <div className="rounded-full bg-gray-950 px-2 py-1 text-2xs/[0.875rem] font-medium text-white">Product</div>
                                                                            </div>
                                                                        </li>
                                                                        <li className="relative flex flex-col-reverse gap-y-1 py-2 lg:rounded-lg lg:px-2 lg:transition lg:hover:bg-gray-950/[0.04] lg:hover:backdrop-blur-[2.5px] lg:mt-2">
                                                                            <a className="block truncate text-[0.875rem]/5 font-medium text-gray-950" href="/changelog/2025-07-14-vercel-marketplace-integration">
                                                                                Clerk is now available on the Vercel Marketplace
                                                                                <span className="absolute inset-0 lg:-inset-y-1"></span>
                                                                            </a>
                                                                            <div className="flex items-baseline justify-between">
                                                                                <time dateTime="2025-07-14" className="text-xs text-gray-600">Jul 14, 2025</time>
                                                                                <div className="rounded-full bg-gray-950 px-2 py-1 text-2xs/[0.875rem] font-medium text-white">Integrations</div>
                                                                            </div>
                                                                        </li>
                                                                        <li className="relative flex flex-col-reverse gap-y-1 py-2 lg:rounded-lg lg:px-2 lg:transition lg:hover:bg-gray-950/[0.04] lg:hover:backdrop-blur-[2.5px] lg:mt-2">
                                                                            <a className="block truncate text-[0.875rem]/5 font-medium text-gray-950" href="/changelog/2025-07-11-org-invitation-sorting">
                                                                                Organization Invitation Sorting
                                                                                <span className="absolute inset-0 lg:-inset-y-1"></span>
                                                                            </a>
                                                                            <div className="flex items-baseline justify-between">
                                                                                <time dateTime="2025-07-11" className="text-xs text-gray-600">Jul 11, 2025</time>
                                                                                <div className="rounded-full bg-gray-950 px-2 py-1 text-2xs/[0.875rem] font-medium text-white">API</div>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                    <svg viewBox="0 0 447 387" fill="none" aria-hidden="true" className="absolute -right-14 -top-16 -z-10 w-[27.9375rem] overflow-visible lg:-right-20 lg:-top-24">
                                                                        <rect className="hidden fill-gray-50 lg:block" width="547" height="387" x="-100"></rect>
                                                                        <rect width="230.5" height="150.5" x="1.75" y="61.127" stroke="url(#nav-docs-bg-b)" strokeWidth="1.5" opacity=".16" rx="16"></rect>
                                                                        <rect width="230.5" height="150.5" stroke="url(#nav-docs-bg-c)" strokeWidth="1.5" opacity=".16" rx="16" transform="matrix(1 0 0 -1 1.75 386.627)"></rect>
                                                                        <path stroke="url(#nav-docs-bg-d)" strokeOpacity=".8" strokeWidth="1.5" d="M316.664 271.377c-.445 0-.89-.086-1.32-.243a3.712 3.712 0 0 1-2.052-1.955l-21.436-49.311-26.672 24.941c-1.062.999-2.626 1.256-3.974.685a3.66 3.66 0 0 1-2.21-3.355V121.531c0-1.456.861-2.77 2.21-3.355a3.705 3.705 0 0 1 3.974.685l88.152 81.862a3.65 3.65 0 0 1 .962 3.869 3.672 3.672 0 0 1-3.157 2.455l-37.404 3.198 22.425 48.654a3.64 3.64 0 0 1 .101 2.799 3.619 3.619 0 0 1-1.909 2.041l-16.17 7.31c-.487.214-.99.328-1.52.328Z" opacity=".26"></path>
                                                                        <path stroke="url(#nav-docs-bg-e)" strokeWidth="1.5" d="M446.489 245.584 182.031 0" opacity=".1" className="hidden lg:block"></path>
                                                                        <g filter="url(#nav-docs-bg-f)" opacity=".2" className="hidden lg:block" style={{ mixBlendMode: 'hard-light' }}>
                                                                            <ellipse cx="217" cy="139.377" fill="url(#nav-docs-bg-g)" rx="217" ry="48.5"></ellipse>
                                                                        </g>
                                                                        <defs>
                                                                            <linearGradient id="nav-docs-bg-b" x1="224" x2="173.683" y1="211.877" y2="91.627" gradientUnits="userSpaceOnUse">
                                                                                <stop stopColor="#5E5F6E"></stop>
                                                                                <stop offset=".88" stopColor="#5E5F6E" stopOpacity="0"></stop>
                                                                            </linearGradient>
                                                                            <linearGradient id="nav-docs-bg-c" x1="223.25" x2="184.25" y1="157.75" y2="79.75" gradientUnits="userSpaceOnUse">
                                                                                <stop stopColor="#5E5F6E"></stop>
                                                                                <stop offset=".869" stopColor="#5E5F6E" stopOpacity="0"></stop>
                                                                            </linearGradient>
                                                                            <linearGradient id="nav-docs-bg-e" x1="285" x2="383.5" y1="90.877" y2="221.877" gradientUnits="userSpaceOnUse">
                                                                                <stop stopColor="#5E5F6E"></stop>
                                                                                <stop offset=".869" stopColor="#5E5F6E" stopOpacity="0"></stop>
                                                                            </linearGradient>
                                                                            <linearGradient id="nav-docs-bg-g" x1="0" x2="434" y1="139.377" y2="139.377" gradientUnits="userSpaceOnUse">
                                                                                <stop stopColor="#6C47FF"></stop>
                                                                                <stop offset="1" stopColor="#61DAFB"></stop>
                                                                            </linearGradient>
                                                                            <radialGradient id="nav-docs-bg-d" cx="0" cy="0" r="1" gradientTransform="matrix(0 77.25 -99.75 0 306.75 194.627)" gradientUnits="userSpaceOnUse">
                                                                                <stop stopColor="#5E5F6E"></stop>
                                                                                <stop offset="1" stopColor="#C3C4D0"></stop>
                                                                            </radialGradient>
                                                                            <filter id="nav-docs-bg-f" width="586" height="249" x="-76" y="14.877" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                                                                                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                                                                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                                                                                <feGaussianBlur result="effect1_foregroundBlur_1_14902" stdDeviation="38"></feGaussianBlur>
                                                                            </filter>
                                                                        </defs>
                                                                    </svg>
                                                                    <svg viewBox="0 0 434 97" fill="none" aria-hidden="true" className="absolute -bottom-4 -right-14 -z-10 hidden w-[27.125rem] overflow-visible mix-blend-hard-light lg:block">
                                                                        <g filter="url(#nav-docs-glow-b)" opacity=".2">
                                                                            <ellipse cx="217" cy="48.5" fill="url(#nav-docs-glow-c)" rx="217" ry="48.5"></ellipse>
                                                                        </g>
                                                                        <defs>
                                                                            <linearGradient id="nav-docs-glow-c" x1="0" x2="434" y1="48.5" y2="48.5" gradientUnits="userSpaceOnUse">
                                                                                <stop stopColor="#6C47FF"></stop>
                                                                                <stop offset="1" stopColor="#61DAFB"></stop>
                                                                            </linearGradient>
                                                                            <filter id="nav-docs-glow-b" width="586" height="249" x="-76" y="-76" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                                                                                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                                                                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                                                                                <feGaussianBlur result="effect1_foregroundBlur_1_14904" stdDeviation="38"></feGaussianBlur>
                                                                            </filter>
                                                                        </defs>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </li>

                                                    <li className="group/item">
                                                        <a className="block border-t border-gray-400/10 py-2 text-[1.0625rem]/6 font-bold text-gray-950 group-first/item:border-t-0" href="/pricing">
                                                            Pricing
                                                        </a>
                                                    </li>

                                                    <li className="group/item">
                                                        <button
                                                            type="button"
                                                            tabIndex="0"
                                                            data-react-aria-pressable="true"
                                                            aria-expanded={isCompanyExpanded}
                                                            onClick={() => setIsCompanyExpanded(!isCompanyExpanded)}
                                                            aria-controls="_r_5k_"
                                                            className="data-[focus-visible]:outline-focus group flex w-full items-center justify-between border-t border-gray-400/10 py-2 pr-[1.8125rem] text-[1.0625rem]/6 font-bold text-gray-950 outline-none group-first/item:border-t-0"
                                                            data-rac=""
                                                            id="react-aria8307733133-_r_5l_"
                                                        >
                                                            Company
                                                            <svg viewBox="0 0 10 10" aria-hidden="true" fill="none" className="size-2.5 transition-transform duration-200"
                                                                style={{ transform: isCompanyExpanded ? "rotate(180deg)" : "rotate(0deg)" }}
                                                            >
                                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1.75 3.75 5 7.25l3.25-3.5"></path>
                                                            </svg>
                                                        </button>
                                                        <div id="_r_9b_" hidden={!isCompanyExpanded}>
                                                            <ul role="list" className="mb-3.5 mt-1.5">
                                                                <li>
                                                                    <a className="group block py-2.5 lg:p-1" href="/company">
                                                                        <div className="rounded-lg transition-colors lg:p-2 lg:group-hover:bg-gray-50">
                                                                            <div className="flex items-center gap-x-1.5">
                                                                                <svg viewBox="0 0 20 20" fill="none" className="size-5 flex-none" aria-hidden="true">
                                                                                    <circle cx="8.5" cy="6.5" r="1.75" stroke="#5F5F6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle>
                                                                                    <path d="M12.4023 8C12.9106 7.69378 13.2504 7.13658 13.2504 6.5C13.2504 5.86342 12.9106 5.30622 12.4023 5" stroke="#5F5F6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                                    <path d="M4.9775 13.4345L4.76939 14.3242C4.65827 14.7993 5.03879 15.25 5.55105 15.25H11.4489C11.9612 15.25 12.3417 14.7993 12.2306 14.3242L12.0225 13.4345C11.6556 11.866 10.1913 10.75 8.5 10.75C6.80874 10.75 5.34439 11.866 4.9775 13.4345Z" stroke="#5F5F6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                                    <path d="M11.5 15.25H14.4489C14.9612 15.25 15.3417 14.7993 15.2306 14.3242L15.0225 13.4345C14.8385 12.6479 14.3786 11.9752 13.7524 11.4999" stroke="#5F5F6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                                </svg>
                                                                                <div className="text-[0.875rem]/5 font-medium text-gray-950">About</div>
                                                                            </div>
                                                                            <div className="mt-1 text-xs text-gray-600">Everything you need to know about Clerk</div>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="group block py-2.5 lg:p-1" href="/creators">
                                                                        <div className="rounded-lg transition-colors lg:p-2 lg:group-hover:bg-gray-50">
                                                                            <div className="flex items-center gap-x-1.5">
                                                                                <svg viewBox="0 0 20 20" fill="none" className="size-5 flex-none" aria-hidden="true">
                                                                                    <path d="M9.25388 5.32819C7.63398 4.5831 6.1471 4.52855 5.33783 5.33783C4.00601 6.66965 5.01369 9.83664 7.58853 12.4115C10.1634 14.9864 13.3304 15.994 14.6622 14.6622C15.4701 13.8542 15.4171 12.3709 14.6754 10.7541" stroke="#5F5F6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                                    <path d="M12.357 6.35704L13 4.75L13.6428 6.35699L15.25 6.99989L13.643 7.64274L13 9.25L12.357 7.64273L10.75 6.99989L12.357 6.35704Z" stroke="#5F5F6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                                </svg>
                                                                                <div className="text-[0.875rem]/5 font-medium text-gray-950">Partnership Program</div>
                                                                            </div>
                                                                            <div className="mt-1 text-xs text-gray-600">Apply for the partnership program</div>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="group block py-2.5 lg:p-1" href="/blog">
                                                                        <div className="rounded-lg transition-colors lg:p-2 lg:group-hover:bg-gray-50">
                                                                            <div className="flex items-center gap-x-1.5">
                                                                                <svg viewBox="0 0 20 20" fill="none" className="size-5 flex-none" aria-hidden="true">
                                                                                    <path d="M6.75 15.25V12.25M6.75 12.25V4.75H15.25V14C15.25 14.6904 14.6904 15.25 14 15.25H6C5.30964 15.25 4.75 14.6904 4.75 14V12.25H6.75Z" stroke="#5F5F6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                                    <path d="M9.75 7.75H12.25" stroke="#5F5F6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                                    <path d="M9.75 10.75H12.25" stroke="#5F5F6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                                </svg>
                                                                                <div className="text-[0.875rem]/5 font-medium text-gray-950">Blog</div>
                                                                            </div>
                                                                            <div className="mt-1 text-xs text-gray-600">All the latest news and updates</div>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="group block py-2.5 lg:p-1" href="/careers">
                                                                        <div className="rounded-lg transition-colors lg:p-2 lg:group-hover:bg-gray-50">
                                                                            <div className="flex items-center gap-x-1.5">
                                                                                <svg viewBox="0 0 20 20" fill="none" className="size-5 flex-none" aria-hidden="true">
                                                                                    <path d="M7.75 7.25H5.75C5.19772 7.25 4.75 7.69772 4.75 8.25V14.25C4.75 14.8023 5.19772 15.25 5.75 15.25H14.25C14.8023 15.25 15.25 14.8023 15.25 14.25V8.25C15.25 7.69772 14.8023 7.25 14.25 7.25H12.25M7.75 7.25V5.75C7.75 5.19772 8.19772 4.75 8.75 4.75H11.25C11.8023 4.75 12.25 5.19772 12.25 5.75V7.25M7.75 7.25H12.25" stroke="#5E5F6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                                </svg>
                                                                                <div className="text-[0.875rem]/5 font-medium text-gray-950">Careers</div>
                                                                            </div>
                                                                            <div className="mt-1 text-xs text-gray-600">Your next opportunity starts here</div>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="group block py-2.5 lg:p-1" href="/contact">
                                                                        <div className="rounded-lg transition-colors lg:p-2 lg:group-hover:bg-gray-50">
                                                                            <div className="flex items-center gap-x-1.5">
                                                                                <svg viewBox="0 0 20 20" fill="none" className="size-5 flex-none" aria-hidden="true">
                                                                                    <path d="M10 14.25C12.8995 14.25 15.25 12.1234 15.25 9.5C15.25 6.87665 12.8995 4.75 10 4.75C7.10051 4.75 4.75 6.87665 4.75 9.5C4.75 10.481 5.07872 11.3926 5.64195 12.1495C5.59056 13.4286 5.29325 14.7218 4.75 15.25C5.98973 15.1352 7.33401 14.7494 8.22735 13.9724C8.7811 14.1521 9.37791 14.25 10 14.25Z" stroke="#5F5F6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                                </svg>
                                                                                <div className="text-[0.875rem]/5 font-medium text-gray-950">Contact</div>
                                                                            </div>
                                                                            <div className="mt-1 text-xs text-gray-600">Connect with Sales or Support</div>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </nav>
                                            <div className="contents [@media(width>=22.5rem)]:hidden">
                                                <div data-auth="" data-signed-out="" data-visible="" className="contents">
                                                    <div className="grid w-full grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                                                        <button className="group relative isolate inline-flex items-center justify-center overflow-hidden text-sm font-medium rounded-md px-3 py-[0.1875rem] shadow-[0_1px_theme(colors.white/0.07)_inset,0_1px_3px_theme(colors.gray.900/0.2)]  ring-1 before:pointer-events-none  before:absolute before:inset-0 mr-6 before:-z-10 before:rounded-md before:bg-gradient-to-b before:from-white/20 before:opacity-50 hover:before:opacity-100 after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:rounded-md after:bg-gradient-to-b after:from-white/10 after:from-[46%] after:to-[54%] after:mix-blend-overlay bg-white text-gray-950 ring-[#191C21]/[8%]">
                                                            Sign in
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </section>
                                </div>

                            </div>
                        )}
                    </div>

                </div>
            </header>

        </>
    )
}
export default Header;