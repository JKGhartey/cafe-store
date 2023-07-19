"use client"

import { useState } from "react"
import Link from "next/link";

import MainNav from "@/components/main-nav";
import MobileMainNav from "@/components/mobile-main-nav";
import { ContainerLarge } from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import { ChevronDown } from "lucide-react"

import { Category } from "@/types"

interface NavbarProps {
    data: Category[]
}



const Navbar: React.FC<NavbarProps> = ({ data }) => {

    const [showMobileCategories, setShowMobileCategories] = useState(false)

    const showMobileNav = () => {
        setShowMobileCategories(!showMobileCategories)
    }

    return (
        <div className="border-b">
            <ContainerLarge>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
                    <div className="flex">
                        <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
                            <p className="font-bold text-xl">CAFE</p>
                        </Link>
                        <span className=" md:hidden" onClick={showMobileNav}> <ChevronDown /> </span>
                    </div>
                    <div className="hidden md:block">
                        <MainNav data={data} />
                    </div>
                    {showMobileCategories && (
                        <>
                            <MobileMainNav data={data} />
                        </>
                    )}
                    <NavbarActions />
                </div>
            </ContainerLarge>
        </div>
    );
};

export default Navbar;