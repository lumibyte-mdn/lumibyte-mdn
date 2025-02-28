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
                    <div className="lg:max-w-7xl lg:mx-auto mx-6">
                        <div className="lg:flex lg:items-center lg:space-x-4">
                            <div className="lg:w-2/5 text-center lg:text-left">
                                <div>
                                    <h1 className="font-grotesk font-bold text-[#183B56] lg:text-5xl text-4xl lg:mb-4 mb-6 lg:leading-tight leading-tight lg:pt-0 pt-8">
                                        Empowering Your Business with Digital Solutions
                                    </h1>
                                    <p className="font-sans text-base text-[#5A7184] lg:mb-14 mb-14 lg:leading-relaxed leading-relaxed">We build high-performance websites, custom web applications, and mobile apps to enhance user experience and drive growth.</p>
                                    <Link
                                        href={"/project"}
                                        className="font-bold bg-[#0a0cc3] text-white px-10 py-4 rounded-lg text-lg hover:bg-blue-950"
                                    >
                                        See Our Portfolio
                                    </Link>
                                </div>
                                <div className="hidden lg:block">
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
                            </div>
                            <div className="lg:w-3/5 lg:flex lg:justify-end lg:mt-0 mt-10">
                                <LottieNoSSR
                                    animationData={ani1}
                                    autoplay
                                    className="lg:w-[620px] lg:scale-110"
                                />
                            </div>

                            <div className="lg:hidden">
                                <div className="flex space-x-10 pb-12 items-center justify-center mt-4">
                                    <div className="flex items-center">
                                        <h1 className="font-ubuntu text-[#183B56] font-bold text-5xl me-4 counter" data-value="8">0</h1>
                                        <p className="font-ubuntu text-[#5A7184] text-sm">Clients</p>
                                    </div>
                                    <div className="w-0.5 h-10 bg-[#183B56] lg:block md:block"></div>
                                    <div className="flex items-center">
                                        <h1 className="font-ubuntu text-[#183B56] font-bold text-5xl me-4 counter flex" data-value="10">0</h1>
                                        <p className="font-ubuntu text-[#5A7184] text-sm">Website<br />Created</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="lg:max-w-7xl lg:mx-auto lg:py-20 mx-6 py-16">
                    <div className="text-center lg:text-left">
                        <div>
                            <h1 className="text-[#0a0cc3] font-semibold mb-8 tracking-widest text-sm lg:text-base">OUR PARTNER</h1>
                        </div>
                        <div className="lg:flex lg:items-center">
                            <div className="lg:w-1/2">
                                <h1 className="font-grotesk lg:text-4xl text-3xl font-bold text-[#183B56] lg:w-2/3 leading-tight mb-8 lg:mb-0">We&rsquo;ve Worked with them, We Trust Each Other</h1>
                            </div>
                            <div className="lg:w-1/2">
                                <p className="text-base text-[#5A7184] lg:w-2/3 leading-relaxed mb-12 lg:mb-0">Our team has built high-performing websites, scalable web applications, and mobile apps for businesses across various industries.</p>
                            </div>
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
                    <div className="lg:max-w-7xl lg:mx-auto lg:py-20 py-16 mx-6">
                        <div className="text-center lg:text-left">
                            <div className="lg:flex lg:items-center">
                                <div className="lg:w-1/2">
                                    <h1 className="font-grotesk lg:text-4xl text-3xl font-bold text-[#183B56] lg:w-2/3 leading-tight mb-5 lg:mb-0">What We Do</h1>
                                </div>
                                <div className="lg:w-1/2">
                                    <p className="text-base text-[#5A7184] leading-relaxed">We work together with our client to execute impactful product.</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:grid lg:grid-cols-3 lg:mt-14 mt-12 lg:gap-8 space-y-6 lg:space-y-0">
                            <div className="bg-white border-2 rounded-lg border-[#E5EAF4] py-6 px-6">
                                <div className="lg:flex lg:space-x-4">
                                    <Image
                                        src={branding}
                                        alt=""
                                        className="border-2 border-dashed w-12 h-12 mb-6 lg:mb-0"
                                    />
                                    <div>
                                        <h1 className="font-grotesk text-2xl font-bold text-[#183B56] leading-tight mb-3">SEO</h1>
                                        <p className="text-base text-[#5A7184] leading-relaxed">Optimizing websites to rank higher on search engines.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white border-2 rounded-lg border-[#E5EAF4] py-6 px-6">
                                <div className="lg:flex lg:space-x-4">
                                    <Image
                                        src={webs}
                                        alt=""
                                        className="border-2 border-dashed w-12 h-12 mb-6 lg:mb-0"
                                    />
                                    <div>
                                        <h1 className="font-grotesk text-2xl font-bold text-[#183B56] leading-tight mb-3">Website Application</h1>
                                        <p className="text-base text-[#5A7184] leading-relaxed">Developing functional and responsive web applications.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white border-2 rounded-lg border-[#E5EAF4] py-6 px-6">
                                <div className="lg:flex lg:space-x-4">
                                    <Image
                                        src={uiux}
                                        alt=""
                                        className="border-2 border-dashed w-12 h-12 mb-6 lg:mb-0"
                                    />
                                    <div>
                                        <h1 className="font-grotesk text-2xl font-bold text-[#183B56] leading-tight mb-3">UI/UX Design</h1>
                                        <p className="text-base text-[#5A7184] leading-relaxed">Creating engaging interfaces and optimal user experiences.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white border-2 rounded-lg border-[#E5EAF4] py-6 px-6">
                                <div className="lg:flex lg:space-x-4">
                                    <Image
                                        src={mobile}
                                        alt=""
                                        className="border-2 border-dashed w-12 h-12 mb-6 lg:mb-0"
                                    />
                                    <div>
                                        <h1 className="font-grotesk text-2xl font-bold text-[#183B56] leading-tight mb-3">Mobile Development</h1>
                                        <p className="text-base text-[#5A7184] leading-relaxed">Building mobile applications for Android and iOS.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white border-2 rounded-lg border-[#E5EAF4] py-6 px-6">
                                <div className="lg:flex lg:space-x-4">
                                    <Image
                                        src={landingpage}
                                        alt=""
                                        className="border-2 border-dashed w-12 h-12 mb-6 lg:mb-0"
                                    />
                                    <div>
                                        <h1 className="font-grotesk text-2xl font-bold text-[#183B56] leading-tight mb-3">Landing Page</h1>
                                        <p className="text-base text-[#5A7184] leading-relaxed">High-converting pages to boost your business.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white border-2 rounded-lg border-[#E5EAF4] py-6 px-6">
                                <div className="lg:flex lg:space-x-4">
                                    <Image
                                        src={workshop}
                                        alt=""
                                        className="border-2 border-dashed w-12 h-12 mb-6 lg:mb-0"
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
                <div className="lg:max-w-7xl lg:mx-auto lg:py-20 mx-6 py-16">
                    <div className="text-center lg:text-left">
                        <div>
                            <h1 className="text-[#0a0cc3] font-semibold lg:mb-8 mb-6 tracking-widest text-sm lg:text-base">PORTFOLIO</h1>
                        </div>
                        <div className="lg:flex items-center">
                            <div className="lg:w-1/2">
                                <h1 className="font-grotesk lg:text-4xl text-3xl font-bold text-[#183B56] lg:w-2/3 leading-tight">Our Projects</h1>
                            </div>
                            <div className="lg:w-1/2 lg:text-right lg:block hidden">
                                <Link
                                    href={"/project"}
                                    className="border-2 py-2 px-4 rounded-md border-[#0a0cc3] text-[#0a0cc3] hover:bg-blue-50"
                                >
                                    See More
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="lg:grid lg:grid-cols-3 lg:gap-6 lg:mt-12 mt-10 lg:space-y-0 space-y-6">
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
                                        <div className="lg:px-10 px-4 lg:py-6 py-4">
                                            <p className="text-[#183B56] lg:text-2xl text-2xl font-bold lg:mb-1 mb-2 font-grotesk">{project.title}</p>
                                            <p className="mb-2 lg:text-lg text-sm text-[#888888]">{project.country}</p>
                                            <Link href={project.link} className="text-[#0a0cc3] lg:text-lg text-base hover:text-[#183B56]">Visit site &rarr;</Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div className="lg:w-1/2 lg:text-right lg:hidden mt-14 text-center">
                        <Link
                            href={""}
                            className="border-2 py-2 px-6 rounded-md border-[#0a0cc3] text-[#0a0cc3] hover:bg-blue-50"
                        >
                            See More
                        </Link>
                    </div>
                </div>
            </section>

            <section>
                <div className="lg:max-w-7xl lg:mx-auto lg:pt-10 lg:pb-20 pt-6 pb-10 mx-6">
                    <div className="lg:text-left text-center">
                        <h1 className="text-[#0a0cc3] font-semibold lg:mb-8 mb-6 lg:text-base text-sm tracking-widest">TESTIMONIAL</h1>
                        <h1 className="font-grotesk lg:text-4xl text-3xl font-bold text-[#183B56] lg:w-2/3 w-5/6 leading-tight mx-auto lg:mx-0">What People Say About Us</h1>
                    </div>

                    <div className="mt-10 mb-5">
                        <Swiper
                            modules={[Pagination]}
                            spaceBetween={30}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            breakpoints={{
                                768: {
                                    slidesPerView: 2, // Saat lebar layar >= 768px, tampilkan 2 slide
                                },
                            }}
                        >
                            {testimonials.map((testimonial) => (
                                <SwiperSlide key={testimonial.id}>
                                    <div className="lg:mb-20 mb-12 border-2 rounded-lg border-[#E5EAF4] lg:py-10 lg:px-12 py-8 px-8 lg:min-h-[300px] lg:max-h-[350px] max-h-[600px] min-h-[450px] lg:justify-between flex flex-col text-center lg:text-left">
                                        <div className="lg:flex-row lg:items-center flex flex-col items-center">
                                            <Image
                                                src={testimonial.avatar}
                                                alt={testimonial.name}
                                                className="rounded-full border-gray-300 lg:me-6 lg:w-20 w-24"
                                            />
                                            <div>
                                                <p className="text-2xl font-bold font-grotesk text-[#183B56] mb-1 mt-6 lg:mt-0">{testimonial.name}</p>
                                                <p className="text-[#5A7184]">{testimonial.work}</p>
                                            </div>
                                        </div>
                                        <div className="mt-6 flex-grow">
                                            <p className="text-[#5A7184] lg:text-lg text-base">{testimonial.text}</p>
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
                    <div className="lg:max-w-7xl lg:mx-auto mx-6 py-16 flex flex-col justify-center items-center">
                        <h1 className="text-white font-grotesk lg:text-5xl text-4xl font-bold lg:mb-8 mb-6 z-40 text-center leading-normal">We&apos;re Ready for a Challenging Project</h1>
                        <p className="text-white lg:text-lg text-base text-center">Send us your brief and tell your project too. We are ready to help all you need</p>
                        <Link
                            href={"https://wa.me/6285928953264"}
                            className="font-bold bg-white text-[#0a0cc3] px-10 py-3 rounded-lg text-lg lg:mt-16 mt-12 z-50"
                        >
                            Let&apos;s Discuss it!
                        </Link>
                    </div>
                    <div>
                        <Image
                            src={bullet1}
                            alt=""
                            className="absolute top-0 right-0 z-0"
                        />
                    </div>
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
                className={`fixed z-50 bottom-28 right-10 bg-slate-800 text-white flex justify-center items-center w-12 h-12 shadow-lg transition-opacity rounded-full duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
            >
                <p className="text-xl mb-2">↑</p>
            </button>
        </>
    );
}
