"use client"

import Link from "next/link";
import Image from "next/image";

import { project } from "@/libs/project";
import { useEffect, useState } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function Project() {
    const projects = project

    const [isVisible, setIsVisible] = useState(false);

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
            <div className="max-w-7xl mx-auto pt-10 pb-24">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="font-grotesk text-4xl font-bold text-[#183B56] leading-tight mb-4">Our Projects</h1>
                    <p className="text-base text-[#5A7184] leading-relaxed">These are some of the projects that we did for our clients.</p>
                </div>

                <div className="lg:grid lg:grid-cols-3 lg:gap-6 grid grid-cols-2 gap-4 mt-16">
                    {
                        projects.map((project: any) => (
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

            <FloatingWhatsApp
                phoneNumber="6285928953264"
                accountName={"Lumibyte"}
                avatar="/png/avatar.png"
                allowEsc
            />

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
