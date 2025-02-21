"use client"

import Image from "next/image";
import Link from "next/link";
import Lottie from "lottie-react";

import down from "@/public/svg/downarrow.svg"
import branding from "@/public/svg/branding.svg"
import uiux from "@/public/svg/uiux.svg"
import mobile from "@/public/svg/mobile.svg"
import workshop from "@/public/svg/workshop.svg"
import landingpage from "@/public/svg/landingpage.svg"
import webs from "@/public/svg/website.svg"
import ani1 from "@/public/lottie/ani1.json"

import { partner } from "@/libs/partners";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { project } from "@/libs/project";

export default function Content() {
    const partners = partner
    const projects = project

    return (
        <>
            <section>
                <div className="bg-[#FAFDFF]">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center space-x-4">
                            <div className="w-2/5">
                                <h1 className="font-grotesk font-bold text-[#183B56] text-5xl mb-8 leading-tight">
                                    Number #1,<br />Southern Asia<br />Digital Product Agency
                                </h1>
                                <p className="font-sans text-base text-[#5A7184] mb-10 leading-relaxed">We bring the results while helping you achieve cost and time savings without taking on risk or management overhead.</p>
                                <Link
                                    href={""}
                                    className="font-bold bg-[#0a0cc3] text-white px-10 py-4 rounded-lg text-lg"
                                >
                                    See Our Portfolio
                                </Link>
                                <Link href={""}>
                                    <Image
                                        src={down}
                                        alt=""
                                        className="mt-16"
                                    />
                                </Link>
                            </div>
                            <div className="w-3/5 flex justify-end">
                                <Lottie
                                    animationData={ani1}
                                    autoplay
                                    className="w-[620px] scale-110"
                                >
                                </Lottie>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="max-w-7xl mx-auto py-20">
                    <div>
                        <h1 className="text-[#0a0cc3] font-semibold mb-8 tracking-widest">OUR PARTNER</h1>
                    </div>
                    <div className="flex items-center">
                        <div className="w-1/2">
                            <h1 className="font-grotesk text-4xl font-bold text-[#183B56] w-2/3 leading-tight">We&rsquo;ve Worked with them, We Trust Each Other</h1>
                        </div>
                        <div className="w-1/2">
                            <p className="text-base text-[#5A7184] w-2/3 leading-relaxed">Our team provides high-level creative education to a global audience of students, educators, and entrepreneurs all over the world</p>
                        </div>
                    </div>

                    <div className="overflow-hidden flex items-center lg:mt-10 mt-4">
                        <div
                            className="flex lg:space-x-20 space-x-16 items-center lg:py-4 py-2 animate-scroll scroll-wrapper"
                            style={{
                                display: 'flex',
                                whiteSpace: 'nowrap',
                                width: 'calc(100% * 3)'
                            }}
                        >
                            {[...partners, ...partners, ...partners].map((logo, index) => (
                                <div key={index} className="flex-shrink-0 hover:scale-105 transition-transform duration-300">
                                    <Image
                                        src={logo.src}
                                        alt={`Logo ${logo.id}`}
                                        height={0}
                                        className="grayscale hover:grayscale-0 transition-all duration-300 lg:w-[110px] w-[80px]"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="bg-[#F9FBFE]">
                    <div className="max-w-7xl mx-auto py-20">
                        <div className="flex items-center">
                            <div className="w-1/2">
                                <h1 className="font-grotesk text-4xl font-bold text-[#183B56] w-2/3 leading-tight">What We Do</h1>
                            </div>
                            <div className="w-1/2">
                                <p className="text-base text-[#5A7184] leading-relaxed">We work together with our client to execute impactful product.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 mt-14 gap-8">
                            <div className="bg-white border-2 rounded-lg border-[#E5EAF4] py-6 px-6">
                                <div className="flex space-x-4">
                                    <Image
                                        src={branding}
                                        alt=""
                                        className="border-2 border-dashed w-12 h-12"
                                    />
                                    <div>
                                        <h1 className="font-grotesk text-2xl font-bold text-[#183B56] leading-tight mb-3">SEO</h1>
                                        <p className="text-base text-[#5A7184] leading-relaxed">We make logo and concept for your brand needs.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white border-2 rounded-lg border-[#E5EAF4] py-6 px-6">
                                <div className="flex space-x-4">
                                    <Image
                                        src={webs}
                                        alt=""
                                        className="border-2 border-dashed w-12 h-12"
                                    />
                                    <div>
                                        <h1 className="font-grotesk text-2xl font-bold text-[#183B56] leading-tight mb-3">Website Application</h1>
                                        <p className="text-base text-[#5A7184] leading-relaxed">We make logo and concept for your brand needs.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white border-2 rounded-lg border-[#E5EAF4] py-6 px-6">
                                <div className="flex space-x-4">
                                    <Image
                                        src={uiux}
                                        alt=""
                                        className="border-2 border-dashed w-12 h-12"
                                    />
                                    <div>
                                        <h1 className="font-grotesk text-2xl font-bold text-[#183B56] leading-tight mb-3">UI/UX Design</h1>
                                        <p className="text-base text-[#5A7184] leading-relaxed">We make logo and concept for your brand needs.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white border-2 rounded-lg border-[#E5EAF4] py-6 px-6">
                                <div className="flex space-x-4">
                                    <Image
                                        src={mobile}
                                        alt=""
                                        className="border-2 border-dashed w-12 h-12"
                                    />
                                    <div>
                                        <h1 className="font-grotesk text-2xl font-bold text-[#183B56] leading-tight mb-3">Mobile Development</h1>
                                        <p className="text-base text-[#5A7184] leading-relaxed">We make logo and concept for your brand needs.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white border-2 rounded-lg border-[#E5EAF4] py-6 px-6">
                                <div className="flex space-x-4">
                                    <Image
                                        src={landingpage}
                                        alt=""
                                        className="border-2 border-dashed w-12 h-12"
                                    />
                                    <div>
                                        <h1 className="font-grotesk text-2xl font-bold text-[#183B56] leading-tight mb-3">Landing Page</h1>
                                        <p className="text-base text-[#5A7184] leading-relaxed">We make logo and concept for your brand needs.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white border-2 rounded-lg border-[#E5EAF4] py-6 px-6">
                                <div className="flex space-x-4">
                                    <Image
                                        src={workshop}
                                        alt=""
                                        className="border-2 border-dashed w-12 h-12"
                                    />
                                    <div>
                                        <h1 className="font-grotesk text-2xl font-bold text-[#183B56] leading-tight mb-3">Tech Workshop</h1>
                                        <p className="text-base text-[#5A7184] leading-relaxed">We make logo and concept for your brand needs.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="max-w-7xl mx-auto py-20">
                    <div>
                        <h1 className="text-[#0a0cc3] font-semibold mb-8 tracking-widest">PORTFOLIO</h1>
                    </div>
                    <div className="flex items-center">
                        <div className="w-1/2">
                            <h1 className="font-grotesk text-4xl font-bold text-[#183B56] w-2/3 leading-tight">Our Projects</h1>
                        </div>
                        <div className="w-1/2 flex justify-end">
                            <Link
                                href={""}
                                className="border-2 py-2 px-4 rounded-md border-[#0a0cc3] text-[#0a0cc3] hover:bg-blue-50"
                            >
                                See More
                            </Link>
                        </div>
                    </div>

                    <div className="lg:grid lg:grid-cols-3 lg:gap-6 grid grid-cols-2 gap-4">
                        {
                            projects.slice(0, 6).map((project: any) => (
                                <div key={project.id} className="flex flex-col h-full">
                                    <div className="bg-[#262626] lg:py-8 lg:px-8 py-4 px-3 lg:rounded-[30px] rounded-[20px] flex-1">
                                        <Image
                                            src={project.src}
                                            alt={`job ${project.id}`}
                                            width={0}
                                            height={0}
                                            className="mb-4 rounded-lg"
                                        />
                                        <p className="text-white lg:text-2xl text-sm font-medium mb-2">{project.title}</p>
                                        <p className="mb-1 lg:text-lg text-xs text-[#888888]">{project.country}</p>
                                        <Link href={project.link} className="text-[#65C8C1] lg:text-lg text-sm">Visit site</Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

            <FloatingWhatsApp
                phoneNumber="6285928953264"
                accountName={"Lumibyte"}
                avatar="/avatar.png"
                allowEsc
            />

            <style jsx>
                {`
                    @keyframes scroll {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-100%);
                        }
                    }

                    .animate-scroll {
                            animation: scroll 30s linear infinite;
                    }              
               `}
            </style>
        </>
    );
}
