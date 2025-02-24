import logo from "@/public/svg/logo.svg"

import Image from "next/image";
import Link from "next/link";

export default function Navigationbar() {
    return (
        <>
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
                            <Link href={""} className="text-[#183B56] font-semibold font-sans">Services</Link>
                            <Link href={""} className="text-[#183B56] font-semibold font-sans">Contact</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}