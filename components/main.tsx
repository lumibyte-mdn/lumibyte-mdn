"use client"

import Image from "next/image";
import Link from "next/link";
import dynamic from 'next/dynamic';

import branding from "@/public/svg/branding.svg"
import uiux from "@/public/svg/uiux.svg"
import mobile from "@/public/svg/mobile.svg"
import workshop from "@/public/svg/workshop.svg"
import landingpage from "@/public/svg/landingpage.svg"
import webs from "@/public/svg/website.svg"
import bullet1 from "@/public/svg/bullet1.svg"
import ani1 from "@/public/lottie/ani1.json"

import 'swiper/css';
import 'swiper/css/pagination';

import { partner } from "@/libs/partners";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { project } from "@/libs/project";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { testimoni } from "@/libs/testimoni";
import { gsap } from 'gsap';
import { useEffect, useState } from "react";

const LottieNoSSR = dynamic(() => import('lottie-react'), {
    ssr: false, // Disable server-side rendering for this component
});

export default function Content() {
    const partners = partner
    const projects = project
    const testimonials = testimoni

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const counters = document.querySelectorAll('.counter');
        counters.forEach((counter) => {
            // Persempit tipe elemen menjadi HTMLElement
            const element = counter as HTMLElement;

            const endValue = parseInt(element.dataset.value || '0', 10);

            gsap.fromTo(
                element,
                { innerText: 0 },
                {
                    innerText: endValue,
                    duration: 2, // durasi animasi (detik)
                    ease: 'power2.out',
                    snap: { innerText: 1 },
                    onUpdate: function () {
                        element.innerText = Math.ceil(parseFloat(element.innerText || '0')).toString(); // Menampilkan angka bulat
                    },
                }
            );
        });
    }, []);

    // Handle scroll event
    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);  // Show button when scrolling more than 300px
        } else {
            setIsVisible(false); // Hide button when at the top
        }
    };

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scrolling
        });
    };

    // Add event listener on component mount
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <section>
                <div className="bg-[#FAFDFF]">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center space-x-4">
                            <div className="w-2/5">
                                <h1 className="font-grotesk font-bold text-[#183B56] text-5xl mb-8 leading-tight">
                                    Empowering Your Business with Digital Solutions
                                </h1>
                                <p className="font-sans text-base text-[#5A7184] mb-10 leading-relaxed">We build high-performance websites, custom web applications, and mobile apps to enhance user experience and drive growth.</p>
                                <Link
                                    href={""}
                                    className="font-bold bg-[#0a0cc3] text-white px-10 py-4 rounded-lg text-lg hover:bg-blue-950"
                                >
                                    See Our Portfolio
                                </Link>
                                <div className="flex mt-14 space-x-12 items-center">
                                    <div className="flex items-center">
                                        <h1 className="font-ubuntu text-[#183B56] font-bold text-6xl me-4 counter" data-value="8">0</h1>
                                        <p className="font-ubuntu text-[#5A7184] text-base">Clients</p>
                                    </div>
                                    <div className="w-0.5 h-10 bg-[#183B56] hidden lg:block md:block"></div>
                                    <div className="flex items-center">
                                        <h1 className="font-ubuntu text-[#183B56] font-bold text-6xl me-4 counter flex" data-value="10">0</h1>
                                        <p className="font-ubuntu text-[#5A7184] text-base">Website<br />Created</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-3/5 flex justify-end">
                                <LottieNoSSR
                                    animationData={ani1}
                                    autoplay
                                    className="w-[620px] scale-110"
                                />
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
                            <p className="text-base text-[#5A7184] w-2/3 leading-relaxed">Our team has built high-performing websites, scalable web applications, and mobile apps for businesses across various industries.</p>
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
                                        <p className="text-base text-[#5A7184] leading-relaxed">Optimizing websites to rank higher on search engines.</p>
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
                                        <p className="text-base text-[#5A7184] leading-relaxed">Developing functional and responsive web applications.</p>
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
                                        <p className="text-base text-[#5A7184] leading-relaxed">Creating engaging interfaces and optimal user experiences.</p>
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
                                        <p className="text-base text-[#5A7184] leading-relaxed">Building mobile applications for Android and iOS.</p>
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
                                        <p className="text-base text-[#5A7184] leading-relaxed">High-converting pages to boost your business.</p>
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
                                        <p className="text-base text-[#5A7184] leading-relaxed">Training and workshops to enhance digital skills.</p>
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

                    <div className="lg:grid lg:grid-cols-3 lg:gap-6 grid grid-cols-2 gap-4 mt-12">
                        {
                            projects.slice(0, 6).map((project: any) => (
                                <div key={project.id} className="flex flex-col h-full border-2 rounded-xl">
                                    <div>
                                        <Image
                                            src={project.src}
                                            alt={`job ${project.id}`}
                                            width={0}
                                            height={0}
                                            className="rounded-t-xl"
                                            quality={10}
                                        />
                                        <div className="px-10 py-6">
                                            <p className="text-[#183B56] lg:text-2xl text-sm font-bold mb-1 font-grotesk">{project.title}</p>
                                            <p className="mb-2 lg:text-lg text-xs text-[#888888]">{project.country}</p>
                                            <Link href={project.link} className="text-[#0a0cc3] text-lg hover:text-[#183B56]">Visit site &rarr;</Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

            <section>
                <div className="max-w-7xl mx-auto pt-10 pb-20">
                    <div>
                        <h1 className="text-[#0a0cc3] font-semibold mb-8 tracking-widest">TESTIMONIAL</h1>
                        <h1 className="font-grotesk text-4xl font-bold text-[#183B56] w-2/3 leading-tight">What People Say About Us</h1>
                    </div>

                    <div className="mt-10 mb-5">
                        <Swiper
                            modules={[Pagination]}
                            spaceBetween={30}
                            slidesPerView={2}
                            pagination={{ clickable: true }}
                        >
                            {testimonials.map((testimonial) => (
                                <SwiperSlide key={testimonial.id}>
                                    <div className="mb-20 border-2 rounded-lg border-[#E5EAF4] py-10 px-12 min-h-[300px] justify-between">
                                        <div className="flex items-center">
                                            <Image
                                                src={testimonial.avatar}
                                                alt={testimonial.name}
                                                className="rounded-full border-gray-300 me-6"
                                                width={80}
                                                height={80}
                                            />
                                            <div>
                                                <p className="text-2xl font-bold font-grotesk text-[#183B56] mb-1">{testimonial.name}</p>
                                                <p className="text-[#5A7184]">{testimonial.work}</p>
                                            </div>
                                        </div>
                                        <div className="mt-6">
                                            <p className="text-[#5A7184] text-lg">{testimonial.text}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>

            <section>
                <div className="bg-[#0a0cc3] relative">
                    <div className="max-w-7xl mx-auto py-16 flex flex-col justify-center items-center">
                        <h1 className="text-white font-grotesk text-5xl font-bold mb-8 z-40">We&apos;re Ready for a Challenging Project</h1>
                        <p className="text-white text-lg">Send us your brief and tell your project too. We are ready to help all you need</p>
                        <Link
                            href={""}
                            className="font-bold bg-white text-[#0a0cc3] px-10 py-3 rounded-lg text-lg mt-16 z-50"
                        >
                            Let&apos;s Discuss it!
                        </Link>
                    </div>
                    <Image
                        src={bullet1}
                        alt=""
                        className="absolute top-0 right-0 z-0"
                    />
                </div>
            </section>

            <FloatingWhatsApp
                phoneNumber="6285928953264"
                accountName={"Lumibyte"}
                avatar="/png/avatar.png"
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

            <button
                onClick={scrollToTop}
                className={`fixed bottom-28 right-10 bg-slate-800 text-white flex justify-center items-center w-12 h-12 shadow-lg transition-opacity rounded-full duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
            >
                <p className="text-xl mb-2">↑</p>
            </button>
        </>
    );
}
