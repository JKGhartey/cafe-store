"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "../lib/utils"
import { Category } from "@/types"

interface MobileMainNavProps {
    data: Category[]
}

const MobileMainNav: React.FC<MobileMainNavProps> = ({
    data
}) => {

    const pathname = usePathname()

    const routes = data.map((route) => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathname === `/category/${route.id}`
    }))

    return (
        <nav className="mx-6 flex flex-col items-center justify-center space-x-4 lg:space-x-6 absolute top-[3rem] z-20 bg-white p-10 transition duration-300 ease-in-out">
            {routes.map((route) => (
                <Link key={route.href} href={route.href} className={cn(
                    "text-lg font-semibold transition-colors hover:text-black",
                    route.active ? "text-black" : "text-neutral-500"
                )}>
                    {route.label}
                </Link>
            ))}
        </nav>
    )
}

export default MobileMainNav