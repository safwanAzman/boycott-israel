"use client"
import React  from 'react'
import { useTranslations } from "next-intl";
import Link from 'next/link';
import Image from 'next/image';

const Empty = ({})  => {
    const t = useTranslations("Empty");
    return(
        <div className='flex items-center justify-center p-10 text-center flex-col space-y-4'>
            <Image
                src={'https://cdn3d.iconscout.com/3d/premium/thumb/sorry-face-9435902-7705057.png'}
                width={100}
                height={100}
                alt='Sorry'
                className='w-32 h-32'
            />
            <p>{t("EmptySection.title")}</p>
            <Link 
                href="mailto:safwanazman017@gmail.com?subject=Boycott Suggestion&body=Company Name:%0D%0ACompany Website:%0D%0AAlternative Options:%0D%0AReason for Boycott:%0D%0AProof URL:" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 py-2 dark:bg-gray-700 dark:text-white rounded-lg text-sm px-6"> 
                {t("EmptySection.btnTitle")}
            </Link>
        </div>
    )
}

export default Empty;