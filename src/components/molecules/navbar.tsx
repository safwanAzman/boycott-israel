'use client'
import Logo from "@/components/atoms/logo";
import Link from "next/link";
import { usePathname } from 'next/navigation'
const Navbar = ({})=> {
    const pathname = usePathname()
    return(
        <header className="bg-white px-2 w-full shadow-md">
            <div className="flex justify-between items-center">
                <Logo/>
                <div className="flex items-center space-x-6">
                    <Link 
                        href="/" 
                        className={`text-sm ${pathname === '/' ? 'text-primary-500 font-semibold' : ''}`}>
                        Search All
                    </Link>
                    <Link 
                        href="/categories-list" 
                        className={`text-sm ${pathname === '/categories-list' ? 'text-primary-500 font-semibold' : ''}`}>
                        Browse Categories
                    </Link>
                    <Link 
                        href="https://matwproject.org.uk/crisis-and-emergencies/palestine" 
                        target="_blank" 
                        className="text-sm">
                        Donate With MATW
                    </Link>
                </div>
                <div className="flex items-center space-x-2">
                    <p className="text-sm">
                        light mode
                    </p>
                    <p className="text-sm">
                        Bahasa
                    </p>
                </div>
            </div>
        </header>
    )
}

export default Navbar;