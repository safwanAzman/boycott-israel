'use client'
import React , {useState} from "react";
import Logo from "@/components/ui/logo";
import { Menu , X ,Globe ,Search,BookCopy ,ExternalLink ,LayoutDashboard} from "lucide-react"
import { useLocale } from "next-intl";
import { ThemeSwitcher } from "@/components/molecules/theme-switcher";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { useMobileNavbar } from '@/context/MobileNavbarContext';
import {Link ,usePathname} from '../../navigation';
import { useTranslations } from "next-intl";

const Navbar = ({})=> {
    const { showNavbar, setShowNavbar } = useMobileNavbar();
    const [openDropdown , setOpenDropdown] = useState(false)
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
        // {
        //     title:`${t("HeaderSection.donate")}`,
        //     href:`/go-die` ,
        //     icon: <div className="text-2xl -mt-1">🗣️</div>,
        //     newTab:false
        // },
        {
            title:`${t("HeaderSection.reference")}`,
            icon: <BookCopy className="w-5 h-5" />,
            dropdown: [
                { 
                    title: "boycott.thewitness.news", 
                    href: "https://boycott.thewitness.news/" 
                },
                { 
                    title: "nurzariniismail.com", 
                    href: "https://www.nurzariniismail.com/2023/11/senarai-produk-makanan-barangan-israel-untuk-boikot.html" 
                },
                { 
                    title: "mayniaga.com", 
                    href: "https://www.mayniaga.com/companies-supporting-israel/" 
                },
                { 
                    title: "shafiqolbu.wordpress.com", 
                    href: "https://shafiqolbu.wordpress.com/2014/08/09/apakah-senarai-produk-barangan-israelamerika-yang-perlu-di-boikot/" 
                },
                { 
                    title: "nextstepmalaysia.com", 
                    href: "https://www.nextstepmalaysia.com/israel-cukup-takut-dengan-tindakan-ini-senarai-produk-israel-wajib-diboikot/" 
                },
                { 
                    title: "theblushinggiraffe.com", 
                    href: "https://www.theblushinggiraffe.com/p/ethical-beauty.html" 
                },
            ]
        },
    ]

    return(
        <>
            {/* desktop view */}
            <div className="hidden lg:block fixed w-full top-0 z-50">
                <nav className="bg-white/80 backdrop-blur-xl px-2 w-full  dark:bg-gray-900/80">
                    <div className="flex flex-1 flex-row justify-between items-center">
                        <Logo/>
                        <div className="flex items-center">
                        {navItem.map((item, index) => (
                            <div key={index}>
                                {!item.dropdown ? (
                                    <Link
                                        {...(item.newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                        href={item.href}
                                        className={`text-sm px-3 font-semibold w-full flex items-center space-x-2 hover:scale-110  transition duration-300 ease-in-out ${pathname === item.href ? 'text-red-500' : ''}`}>
                                        {item.icon}
                                        <p>{item.title}</p>
                                    </Link>
                                ) : (
                                    <NavigationMenu>
                                        <NavigationMenuList>
                                            <NavigationMenuItem>
                                                <NavigationMenuTrigger>
                                                    <div className="text-sm font-semibold w-full flex items-center space-x-2 cursor-pointer hover:scale-110 transition duration-300 ease-in-out">
                                                        {item.icon}
                                                        <p>{item.title}</p>
                                                    </div>
                                                </NavigationMenuTrigger>
                                                <NavigationMenuContent>
                                                {item.dropdown.map((dropdownItem, dropdownIndex) => (
                                                    <NavigationMenuLink  key={dropdownIndex}>
                                                        <div className="px-6 py-2 hover:bg-red-50 hover:text-red-500 ">
                                                            <Link className="flex items-center space-x-2" href={dropdownItem.href} target="_blank">
                                                                <ExternalLink className="w-4 h-4" />
                                                                <p>{dropdownItem.title}</p>
                                                            </Link>
                                                        </div>
                                                    </NavigationMenuLink>
                                                ))}
                                                </NavigationMenuContent>
                                            </NavigationMenuItem>
                                        </NavigationMenuList>
                                    </NavigationMenu>
                                )}
                            </div>
                        ))}
                        </div>
                        <div className="flex items-center">
                            <ThemeSwitcher/>
                            {locale !== "en" ? (
                                <div onClick={()=> setShowNavbar(false)}>
                                    <Link href={generateLocaleUrl()}  className={`text-sm font-semibold px-5 py-5 w-full flex items-center space-x-2  hover:scale-110 transition duration-300 ease-in-out `} locale="en">
                                        <Globe className="w-5 h-5" />
                                        <p>English</p>
                                    </Link>
                                </div>
                                ) : (
                                <div onClick={()=> setShowNavbar(false)}>
                                    <Link href={generateLocaleUrl()}  className={`text-sm font-semibold px-5 py-5 w-full flex items-center space-x-2  hover:scale-110 transition duration-300 ease-in-out`}  locale="my">
                                        <Globe className="w-5 h-5" />
                                        <p>Malay</p>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </nav>
            </div>

            {/* mobile view */}
            <div className="block lg:hidden fixed w-full z-50">
                <nav className="w-full shadow-md">
                    <div className="flex justify-between items-center bg-white/80 backdrop-blur-xl w-full px-2  dark:bg-gray-900/80">
                        <Logo/>
                        <div className="flex items-center space-x-5">
                            <ThemeSwitcher/>
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
                    <div className="fixed inset-0 z-50 top-[6%] w-full bg-white dark:bg-background">
                        <div>
                            {navItem.map((item, index) => (
                            <div 
                                className="border-b px-5 py-5" 
                                key={index}
                                >
                                {!item.dropdown ? (
                                    <Link 
                                        onClick={()=> setShowNavbar(false)}
                                        href={item.href} 
                                        {...(item.newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                        className={`text-sm font-semibold  w-full flex items-center space-x-2 
                                        ${pathname === item.href ? 'text-red-500 font-semibold' : ''}`}>
                                        {item.icon}
                                        <p>{item.title}</p>
                                    </Link>
                                ) : (
                                    <div>
                                        <div>
                                            <button
                                                onClick={()=> setOpenDropdown(!openDropdown)}
                                                className="text-sm font-semibold  w-full flex items-center space-x-2">
                                                {item.icon}
                                                <p>{item.title}</p>
                                            </button>
                                        </div>
                                        {openDropdown ?
                                        <div className="mt-2 bg-gray-50 dark:bg-gray-900 px-4 py-5 rounded-lg">
                                            {item.dropdown.map((dropdownItem, dropdownIndex) => (
                                                <Link key={dropdownIndex} className="flex items-center space-x-2 pb-4" href={dropdownItem.href} target="_blank">
                                                    <ExternalLink className="w-4 h-4" />
                                                    <p>{dropdownItem.title}</p>
                                                </Link>
                                            ))}
                                        </div>
                                        :null}
                                    </div>
                                )}
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