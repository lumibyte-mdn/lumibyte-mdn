"use client"

import { useState } from "react";

import Image from "next/image";

import bullet1 from "@/public/svg/bullet1.svg"
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
            <div className="max-w-7xl mx-auto pt-10 pb-24">
                <div className="flex mt-12">
                    <div className="w-2/5">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.87062613761134!2d98.67215961178336!3d3.603499104159093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131e86a35c9d1%3A0xfe313a1caad2ef17!2sKomplek%20Emerald%20Garden!5e0!3m2!1sid!2sid!4v1740435309889!5m2!1sid!2sid" className="w-full h-full rounded-l-xl" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="w-3/5 bg-[#0a0cc3] px-16 py-16 rounded-r-xl relative">
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

                            <div className="flex justify-between mt-6 space-x-6">
                                <div className="w-1/2">
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

                                <div className="w-1/2">
                                    <p className="text-white font-grotesk mb-2 text-lg">Phone Number</p>
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
            </div>

            <FloatingWhatsApp
                phoneNumber="6285928953264"
                accountName={"Lumibyte"}
                avatar="/png/avatar.png"
                allowEsc
            />
        </>
    );
}
