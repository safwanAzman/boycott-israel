"use client"
import React  from 'react'
import { useTranslations } from "next-intl";
import Link from 'next/link';
import { Home} from "lucide-react";
interface BackBtnProps {
    title? :string,
}
const BackBtn = ({
    title,
}: BackBtnProps)  => {
    const t = useTranslations("Form");
    return(
        <div className="text-sm  font-medium mt-2 px-2 md:px-4 flex items-center space-x-1 capitalize">
            <Link href="/" className="hover:text-red-500 flex items-center space-x-1">
                <Home className="h-4 w-4" />
                <h1>{t("formSection.back")}</h1>
            </Link>
            <h1>{'>'} </h1>
            <h1>{title}</h1>
        </div>
    )
}

export default BackBtn;