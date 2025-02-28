"use client"

import logo from "@/public/svg/logo.svg"

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

export default function Navigationbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <>
            <div className="hidden lg:block">
                <div className="bg-[#FAFDFF]">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex py-8 items-center justify-between">
                            <div>
                                <Image
                                    src={logo}
                                    alt=""
                                    className="w-44"
                                />
                            </div>
                            <div className="space-x-10">
                                <Link href={"/"} className="text-[#183B56] font-semibold font-sans">Home</Link>
                                <Link href={"/project"} className="text-[#183B56] font-semibold font-sans">Project</Link>
                                <Link href={"/contact"} className="text-[#183B56] font-semibold font-sans">Contact</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:hidden">
                <div className="py-4 md:py-8 relative flex justify-between items-center pe-3 ps-4 bg-[#FAFDFF] md:mx-6 ">
                    <Link href={"/"}><Image src={logo} alt="Logo Lumibyte" width={140} className="ms-2 md:w-48" loading="lazy"/></Link>

                    {/* Hamburger button */}
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="inline-flex items-center justify-center p-2 text-white"
                        aria-controls="mobile-menu"
                        aria-expanded={isOpen ? "true" : "false"}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="block h-6 w-6 text-[#183B56]"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>

                {/* Mobile menu */}
                <div className={`${isOpen ? "block" : "hidden"}`} id="mobile-menu">
                    <div className="space-y-1 px-6 py-5 bg-[#183B56]">
                        <Link
                            href="/"
                            onClick={() => setIsOpen(false)}
                            className="text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium z-50 relative cursor-pointer"
                        >
                            Home
                        </Link>
                        <Link
                            href="/project"
                            onClick={() => setIsOpen(false)}
                            className="text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Project
                        </Link>
                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}