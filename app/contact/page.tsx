"use client"

import { useState } from "react";

import Image from "next/image";

import bullet1 from "@/public/svg/bullet1.svg"
import instaicon from "@/public/svg/instaicon.svg"

import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const subjectOptions = ["Website Application", "UI/UX Design", "Landing Page", "Tech Workshop", "Mobile Development", "Other"];

    const [loading, setLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState("");
    const [responseStatus, setResponseStatus] = useState(200);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const data = await res.json();
        setResponseMessage(data.message);
        setResponseStatus(res.status);
        setLoading(false);

        if (res.ok) setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    };
    return (
        <>
            <div className="lg:max-w-7xl lg:mx-auto pt-5 mb-20 mx-6">
                <div className="lg:flex lg:mt-12 mt-6 lg:space-x-20 items-center">
                    <div className="lg:w-1/2">
                        <p className="font-sans text-base text-[#183B56] mb-2 leading-relaxed text-center lg:text-left">- Get in touch -</p>
                        <h1 className="font-grotesk font-bold text-[#183B56] lg:text-5xl text-3xl lg:leading-tight leading-tight mb-6 text-center lg:text-left">We are always ready to help you and answer your questions</h1>
                        <p className="font-sans text-base text-[#5A7184] lg:mb-20 mb-12 leading-relaxed text-center lg:text-left">Our team is always ready to provide fast, reliable, and personalized assistance, ensuring you get the support and answers you need.</p>

                        <div className="lg:block hidden">
                            <div className="lg:flex lg:space-x-4">
                                <div className="lg:w-1/2">
                                    <h1 className="font-bold text-[#183B56] text-lg mb-3">Call Center</h1>
                                    <p className="font-sans text-base text-[#5A7184] mb-14 leading-relaxed">+62 859-2895-3264</p>
                                </div>

                                <div className="lg:w-1/2">
                                    <h1 className="font-bold text-[#183B56] text-lg mb-3">Our Location</h1>
                                    <p className="font-sans text-base text-[#5A7184] mb-14 leading-relaxed">Emerald Garden Residential No.B5, North Sumatra 20234</p>
                                </div>
                            </div>

                            <div className="lg:flex lg:space-x-4">
                                <div className="lg:w-1/2">
                                    <h1 className="font-bold text-[#183B56] text-lg mb-3">Email</h1>
                                    <p className="font-sans text-base text-[#5A7184] leading-relaxed">lumibyte.mdn@gmail.com</p>
                                </div>

                                <div className="w-1/2">
                                    <h1 className="font-bold text-[#183B56] text-lg mb-3">Social Network</h1>
                                    <div className="flex items-center">
                                        <Image
                                            src={instaicon}
                                            alt=""
                                            className="me-2"
                                        />
                                        <p className="font-sans text-base text-[#5A7184] leading-relaxed">@lumibyte.id</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="lg:w-3/5 bg-[#0a0cc3] lg:px-16 lg:py-16 px-6 py-10 relative rounded-2xl">
                        <Image
                            src={bullet1}
                            alt=""
                            className="absolute top-0 right-0 z-0"
                        />
                        <div>
                            <h1 className="font-grotesk text-4xl font-bold text-white leading-tight mb-3 z-40">Get in Touch</h1>
                            <p className="text-base text-white leading-relaxed z-40">Fill up the form our team will get back to you within 24 Hours</p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="mt-6">
                                <p className="text-white font-grotesk mb-2 text-lg">Full Name</p>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    className="w-full px-4 py-2 rounded-md z-10 relative"
                                    required
                                />
                            </div>

                            <div className="lg:flex lg:justify-between mt-6 lg:space-x-6">
                                <div className="lg:w-1/2">
                                    <p className="text-white font-grotesk mb-2 text-lg">Email Address</p>
                                    <input
                                        type="text"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        className="w-full px-4 py-2 rounded-md"
                                        required
                                    />
                                </div>

                                <div className="lg:w-1/2">
                                    <p className="text-white font-grotesk mb-2 mt-6 lg:mt-0 text-lg">Phone Number</p>
                                    <input
                                        type="number"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Enter your phone number"
                                        className="w-full px-4 py-2 rounded-md appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mt-6">
                                <p className="text-white font-grotesk mb-2 text-lg">Subject</p>
                                <div className="flex flex-wrap gap-4">
                                    {subjectOptions.map((option) => (
                                        <label key={option} className="flex items-center space-x-2 text-white">
                                            <input
                                                type="radio"
                                                name="subject"
                                                value={option}
                                                checked={formData.subject === option}
                                                onChange={handleChange}
                                                className="w-4 h-4 text-white "
                                                required
                                            />
                                            <span>{option}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-6">
                                <p className="text-white font-grotesk mb-2 text-lg">Messages</p>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Enter your message"
                                    className="w-full px-4 py-2 rounded-md h-32"
                                    required
                                >
                                </textarea>
                            </div>
                            {responseMessage && (
                                <p className={`mt-2 ${responseStatus === 200 ? "text-green-400" : "text-red-400"}`}>
                                    {responseMessage}
                                </p>
                            )}

                            <div className="mt-8">
                                <button
                                    type="submit"
                                    className="text-white hover:bg-blue-700 border-2 px-12 py-2 rounded-md"
                                >
                                    {loading ? "Sending..." : "Send message"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="lg:hidden">
                    <div className="lg:flex lg:space-x-4 mt-10">
                        <div className="lg:w-1/2">
                            <h1 className="font-bold text-[#183B56] text-lg mb-3">Call Center</h1>
                            <p className="font-sans text-base text-[#5A7184] mb-14 leading-relaxed">+62 859-2895-3264</p>
                        </div>

                        <div className="lg:w-1/2">
                            <h1 className="font-bold text-[#183B56] text-lg mb-3">Our Location</h1>
                            <p className="font-sans text-base text-[#5A7184] mb-14 leading-relaxed">Emerald Garden Residential No.B5, North Sumatra 20234</p>
                        </div>
                    </div>

                    <div className="lg:flex lg:space-x-4">
                        <div className="lg:w-1/2">
                            <h1 className="font-bold text-[#183B56] text-lg mb-3">Email</h1>
                            <p className="font-sans text-base text-[#5A7184] leading-relaxed">lumibyte.mdn@gmail.com</p>
                        </div>

                        <div className="w-1/2">
                            <h1 className="font-bold text-[#183B56] text-lg mb-3">Social Network</h1>
                            <div className="flex items-center">
                                <Image
                                    src={instaicon}
                                    alt=""
                                    className="me-2"
                                />
                                <p className="font-sans text-base text-[#5A7184] leading-relaxed">@lumibyte.id</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <section>
                <div className="lg:max-w-7xl lg:mx-auto lg:mb-20 mb-16 mx-6">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1964.5591156918176!2d98.66955729873803!3d3.593487539791212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131e86a35c9d1%3A0xfe313a1caad2ef17!2sKomplek%20Emerald%20Garden!5e0!3m2!1sid!2sid!4v1740498930952!5m2!1sid!2sid"
                        className="w-full h-96"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    >
                    </iframe>
                </div>
            </section>

            <FloatingWhatsApp
                phoneNumber="6285928953264"
                accountName={"Lumibyte"}
                avatar="/png/avatar.png"
                allowEsc
            />
        </>
    );
}
