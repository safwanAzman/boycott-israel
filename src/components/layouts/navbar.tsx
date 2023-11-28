'use client'
import Logo from "@/components/ui/logo";
import { Menu , X ,Globe ,Search,BookCopy,Sun} from "lucide-react"
import { useLocale } from "next-intl";
import { useMobileNavbar } from '@/context/MobileNavbarContext';
import {Link ,usePathname} from '../../navigation';
import { useTranslations } from "next-intl";

const Navbar = ({})=> {
    const { showNavbar, setShowNavbar } = useMobileNavbar();
    const t = useTranslations("Header");
    const locale = useLocale();
    const pathname = usePathname()

    const generateLocaleUrl = () => {
        const pathParts = pathname.split("/").filter(Boolean);
        if (pathParts[0] === 'en' || pathParts[0] === 'my') {
            pathParts.shift();
        }
        const newPath = `/${pathParts.join('/')}`;
        return newPath;
    };

    const navItem = [
        {
            title:`${t("HeaderSection.search")}`,
            href:"/",
            icon: <Search className="w-5 h-5" />
        },
        {
            title:`${t("HeaderSection.browse")}`,
            href:"/categories-list",
            icon: <BookCopy className="w-5 h-5" />
        },
        {
            title:`${t("HeaderSection.donate")}`,
            href:"https://matwproject.org.uk/crisis-and-emergencies/palestine",
            icon: <div className="text-xl">🇵🇸</div>
        },
    ]

    return(
        <>
            <div className="hidden lg:block">
                <nav className="bg-white px-2 w-full shadow-md">
                    <div className="flex flex-1 flex-row justify-between items-center">
                        <Logo/>
                        <div className="flex items-center space-x-1">
                        {navItem.map((item,index) => (
                            <div key={index}>
                                <Link 
                                    href={item.href} 
                                    className={
                                        `text-sm px-3 font-semibold py-5 w-full flex items-center space-x-2 
                                        ${pathname === item.href ? 'text-red-500' : ''}`}
                                    >
                                    {item.icon}
                                    <p>{item.title}</p>
                                </Link>
                            </div>
                        ))}
                        </div>
                        <div className="flex items-center space-x-2">
                            <button className="text-sm font-semibold flex items-center space-x-2">
                                <Sun className="w-5 h-5 text-orange-500" />
                                <p className="text-orange-500">Light</p>
                            </button>
                            {locale !== "en" ? (
                                <div onClick={()=> setShowNavbar(false)}>
                                    <Link href={generateLocaleUrl()}  className={`text-sm font-semibold px-5 py-5 w-full flex items-center space-x-2`} locale="en">
                                        <Globe className="w-5 h-5" />
                                        <p>English</p>
                                    </Link>
                                </div>
                                ) : (
                                <div onClick={()=> setShowNavbar(false)}>
                                    <Link href={generateLocaleUrl()}  className={`text-sm font-semibold px-5 py-5 w-full flex items-center space-x-2`}  locale="my">
                                        <Globe className="w-5 h-5" />
                                        <p>Malay</p>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </nav>
            </div>

            <div className="block lg:hidden fixed w-full  bg-white z-50">
                <nav className="bg-white px-2 w-full shadow-md">
                    <div className="flex justify-between items-center">
                        <Logo/>
                        <div className="flex items-center space-x-5">
                            <button className="text-sm font-semibold flex items-center space-x-2">
                                <Sun className="w-5 h-5 text-orange-500" />
                                <p className="text-orange-500">Light</p>
                            </button>
                            {!showNavbar ? 
                            <button 
                                type="button" 
                                className="bg-black p-1.5 text-white rounded-lg" 
                                onClick={()=> setShowNavbar(true)}
                            >
                                <Menu className="w-5 h-5" />
                            </button>
                            :
                            <button 
                                type="button" 
                                className="bg-black p-1.5 text-white rounded-lg" 
                                onClick={()=> setShowNavbar(false)}
                            >
                                <X className="w-5 h-5" />
                            </button>
                            }
                        </div>
                    </div>
                    {showNavbar ? 
                    <div className="fixed inset-0 z-50 top-[5%] w-full bg-white ">
                        <div className="mt-4 border-t">
                            {navItem.map((item,index) => (
                                <div key={index}
                                    onClick={()=> setShowNavbar(false)}
                                    className="border-b flex"
                                    >
                                    <Link 
                                        href={item.href} 
                                        className={`text-sm font-semibold px-5 py-5 w-full flex items-center space-x-2 
                                        ${pathname === item.href ? 'text-red-500 font-semibold' : ''}`}>
                                        {item.icon}
                                        <p>{item.title}</p>
                                    </Link>
                                </div>
                            ))}
                            <div>
                                {locale !== "en" ? (
                                    <div onClick={()=> setShowNavbar(false)} className="border-b ">
                                        <Link href={generateLocaleUrl()}  className={`text-sm font-semibold px-5 py-5 w-full flex items-center space-x-2`} locale="en">
                                            <Globe className="w-5 h-5" />
                                            <p>English</p>
                                        </Link>
                                    </div>
                                    ) : (
                                    <div onClick={()=> setShowNavbar(false)} className="border-b ">
                                        <Link href={generateLocaleUrl()}  className={`text-sm font-semibold px-5 py-5 w-full flex items-center space-x-2`}  locale="my">
                                            <Globe className="w-5 h-5" />
                                            <p>Malay</p>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                :null}
                </nav>
            </div>
        </>
    )
}

export default Navbar;