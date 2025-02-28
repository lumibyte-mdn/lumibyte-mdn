import white from "@/public/svg/white.svg"
import whatsapp from "@/public/svg/whatsapp.svg"
import instagram from "@/public/svg/instagram.svg"
import mail from "@/public/svg/mail.svg"

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <section className="lg:block hidden">
                <div className="bg-[#0D2436]">
                    <div className="lg:max-w-7xl lg:mx-auto py-20 mx-6">
                        <div className="lg:grid lg:grid-cols-4 lg:space-x-16 grid grid-cols-2 gap-10">
                            <div>
                                <Image
                                    src={white}
                                    alt=""
                                    className="w-48"
                                />
                                <p className="mt-8 text-[#5A7184]">Emerald Garden Residential No.B5,
                                    Jln. Kwala Begumit, Medan Barat, Medan City, North Sumatra 20234</p>
                            </div>

                            <div>
                                <h1 className="font-bold text-lg text-[#5A7184] mb-10">Menu</h1>
                                <div className="flex flex-col space-y-5">
                                    <Link href={""} className="text-[#959EAD] hover:text-white">Home</Link>
                                    <Link href={""} className="text-[#959EAD] hover:text-white">Project</Link>
                                    <Link href={""} className="text-[#959EAD] hover:text-white">Services</Link>
                                    <Link href={""} className="text-[#959EAD] hover:text-white">Contact</Link>
                                </div>
                            </div>

                            <div>
                                <h1 className="font-bold text-lg text-[#5A7184] mb-10">Services</h1>
                                <div className="flex flex-col space-y-5">
                                    <Link href={""} className="text-[#959EAD] hover:text-white">SEO</Link>
                                    <Link href={""} className="text-[#959EAD] hover:text-white">Website Application</Link>
                                    <Link href={""} className="text-[#959EAD] hover:text-white">UI/UX Design</Link>
                                    <Link href={""} className="text-[#959EAD] hover:text-white">Mobile Development</Link>
                                    <Link href={""} className="text-[#959EAD] hover:text-white">Landing Page</Link>
                                    <Link href={""} className="text-[#959EAD] hover:text-white">Tech Workshop</Link>
                                </div>
                            </div>

                            <div>
                                <h1 className="font-bold text-lg text-[#5A7184] mb-10">Contact</h1>
                                <div className="flex flex-col space-y-5">
                                    <div className="flex">
                                        <Image
                                            src={instagram}
                                            alt=""
                                            className="me-2"
                                        />
                                        <Link href={""} className="text-[#959EAD] hover:text-white">@lumibyte.id</Link>
                                    </div>
                                    <div className="flex">
                                        <Image
                                            src={whatsapp}
                                            alt=""
                                            className="me-2"
                                        />
                                        <Link href={""} className="text-[#959EAD] hover:text-white">+62 859-2895-3264</Link>
                                    </div>
                                    <div className="flex">
                                        <Image
                                            src={mail}
                                            alt=""
                                            className="me-2"
                                        />
                                        <Link href={""} className="text-[#959EAD] hover:text-white">lumibyte.mdn@gmail.com</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="lg:hidden">
                <div className="bg-[#0D2436]">
                    <div className="py-16 mx-6">
                        <div className="">
                            <div>
                                <Image
                                    src={white}
                                    alt=""
                                    className="w-48"
                                />
                                <p className="mt-8 text-[#5A7184]">Emerald Garden Residential No.B5,
                                    Jln. Kwala Begumit, Medan Barat, Medan City, North Sumatra 20234</p>
                            </div>

                            <div className="flex space-x-16 mt-12">
                                <div>
                                    <h1 className="font-bold text-lg text-[#5A7184] mb-6">Menu</h1>
                                    <div className="flex flex-col space-y-5">
                                        <Link href={""} className="text-[#959EAD] hover:text-white">Home</Link>
                                        <Link href={""} className="text-[#959EAD] hover:text-white">Project</Link>
                                        <Link href={""} className="text-[#959EAD] hover:text-white">Services</Link>
                                        <Link href={""} className="text-[#959EAD] hover:text-white">Contact</Link>
                                    </div>
                                </div>

                                <div>
                                    <h1 className="font-bold text-lg text-[#5A7184] mb-6">Services</h1>
                                    <div className="flex flex-col space-y-5">
                                        <Link href={""} className="text-[#959EAD] hover:text-white">SEO</Link>
                                        <Link href={""} className="text-[#959EAD] hover:text-white">Website Application</Link>
                                        <Link href={""} className="text-[#959EAD] hover:text-white">UI/UX Design</Link>
                                        <Link href={""} className="text-[#959EAD] hover:text-white">Mobile Development</Link>
                                        <Link href={""} className="text-[#959EAD] hover:text-white">Landing Page</Link>
                                        <Link href={""} className="text-[#959EAD] hover:text-white">Tech Workshop</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12">
                                <h1 className="font-bold text-lg text-[#5A7184] mb-6">Contact</h1>
                                <div className="flex flex-col space-y-5">
                                    <div className="flex">
                                        <Image
                                            src={instagram}
                                            alt=""
                                            className="me-2"
                                        />
                                        <Link href={""} className="text-[#959EAD] hover:text-white">@lumibyte.id</Link>
                                    </div>
                                    <div className="flex">
                                        <Image
                                            src={whatsapp}
                                            alt=""
                                            className="me-2"
                                        />
                                        <Link href={""} className="text-[#959EAD] hover:text-white">+62 859-2895-3264</Link>
                                    </div>
                                    <div className="flex">
                                        <Image
                                            src={mail}
                                            alt=""
                                            className="me-2"
                                        />
                                        <Link href={""} className="text-[#959EAD] hover:text-white">lumibyte.mdn@gmail.com</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}