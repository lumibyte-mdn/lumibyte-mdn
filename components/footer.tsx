import white from "@/public/svg/white.svg"
import whatsapp from "@/public/svg/whatsapp.svg"
import instagram from "@/public/svg/instagram.svg"
import mail from "@/public/svg/mail.svg"

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <section>
                <div className="bg-[#0D2436]">
                    <div className="max-w-7xl mx-auto py-20">
                        <div className="grid grid-cols-4 space-x-16">
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
        </>
    );
}