"use client"
import React  from 'react'
import {ArrowLeft} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { useRouter } from 'next/navigation'
const BackBtn = () => {
    const t = useTranslations("Form");
    const router = useRouter();
    return(
        <Button size="sm" className="text-xs w-full md:w-32 bg-red-500 hover:bg-red-600 text-white" onClick={() => router.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            <p> {t("formSection.back")}</p>
        </Button>
    )
}

export default BackBtn;