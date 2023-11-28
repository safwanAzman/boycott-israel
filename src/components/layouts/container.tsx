"use client"

import React,{ReactNode} from 'react'
import Navbar from '@/components/layouts/navbar'
import Image from 'next/image' 
import MainBg from '../../../public/MainBg.webp'
import { useTranslations } from "next-intl";
import { useMobileNavbar } from '@/context/MobileNavbarContext';
interface ContainerProps {
    children?: ReactNode,
    section?: ReactNode,
}

const Container = ({children,section}:ContainerProps) => {
    const t = useTranslations("Container");
    const { showNavbar } = useMobileNavbar();
    return (
        <>
            <Navbar/>
            <div className={showNavbar ? 'hidden' : 'block'}>
                <div className="relative h-96 bg-black">
                    <Image
                        src={MainBg}
                        quality={75}
                        alt={'main-img'}
                        fill
                        style={{objectFit:"cover"}}
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-red-800/80 via-black/80 to-green-500/80">
                        <div className="flex items-center justify-center h-96">
                            <div className="text-white text-center space-y-2 flex flex-col items-center justify-center px-2 -mt-20 lg:-mt-8">
                                <h1 className="text-xl lg:text-5xl font-bold">
                                    {t("IntroSection.title")}
                                </h1>
                                <h4 className="text-xs lg:text-sm font-light max-w-xl leading-5 px-5 lg:px-0">
                                    {t("IntroSection.description")}
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="absolute w-full top-56 lg:top-72">
                        <div className="bg-white mx-2 lg:mx-8 shadow-lg rounded-lg mb-20 lg:mb-0">
                            {section}
                            <div className="p-4">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Container