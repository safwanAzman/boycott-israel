"use client"
import React, { useState, useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from "@/components/ui/badge"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Container from '@/components/layouts/container'
import {useBoycottList} from '@/data'
import {BoycottList} from '@/types'
import { Link as LinkIcon} from "lucide-react"
import { useTranslations } from "next-intl";
import BackBtn from '@/components/molecules/back-btn';

const Why = ({ params }: { params: { id: string } }) => {
    const t = useTranslations("Why");
    const boycottData = useBoycottList();
    const [data, setData] = useState<BoycottList | undefined>(undefined)

    useEffect(() => {
        const convertId = Number(params.id);
        const item = boycottData.find(item => item.id === convertId);
        setData(item)
    }, [params.id]); 

    return (
        <Container
            section={
                <div className="search-container justify-between items-center">
                    <BackBtn title={data?.name} />
                </div>
                }
            >
            {data ? (
                <div className="grid grid-cols-12 gap-6">
                    <div className="relative col-span-12 lg:col-span-4 bg-gray-50 dark:bg-gray-900 rounded-lg flex justify-center item-center p-10">
                        <AspectRatio ratio={10 / 9} className="bg-white">
                            <Image
                                src={data.img_url}
                                quality={75}
                                alt={data.name}
                                fill
                                className="rounded-md object-contain"
                                priority
                            />
                        </AspectRatio>
                    </div>
                    <div className="col-span-12 lg:col-span-8">
                        <div className="space-y-2">
                            <div className="border-b py-4">
                                <h1 className="text-4xl font-semibold">{data.name}</h1>
                            </div>
                            <div className="space-y-2 pt-2">
                                <div className="flex items-center justify-between">
                                    <h1 className="text-lg text-gray-400">
                                        {t("WhySection.why")}
                                    </h1>
                                </div>
                                <p className="text-base text-left lg:text-justify max-w-3xl leading-7">
                                    {data.desc}
                                </p>
                            </div>
                            <div className="space-y-2 pt-2">
                                <div className="flex items-center justify-between">
                                    <h1 className="text-lg text-gray-400">
                                        {t("WhySection.categories")}
                                    </h1>
                                </div>
                                <div className="flex items-center flex-wrap">
                                    {data.categories.map((category, index) => (
                                        <div key={index}>
                                            <Badge variant="outline" className="border-red-500 bg-red-50 text-red-500 my-1 mr-2">
                                            {category}
                                            </Badge>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-2 pt-2">
                                <div className="flex items-center justify-between">
                                    <h1 className="text-lg text-gray-400">
                                        {t("WhySection.alternatives")}
                                    </h1>
                                </div>
                                <div className="flex items-center flex-wrap">
                                    {data.alternatives.map((alternative, index) => (
                                        <div key={index}>
                                            <Badge variant="outline" className="border-green-500 bg-green-50 text-green-500 my-1 mr-2">
                                            {alternative}
                                            </Badge>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-2 pt-2">
                                <div className="flex items-center justify-between">
                                    <h1 className="text-lg text-gray-400">
                                    {t("WhySection.proofLink")}
                                    </h1>
                                </div>
                                <div className="w-full md:w-40 pb-6">
                                    <Link href={data.proof_link} target='_blank' className="bg-black dark:bg-gray-900 px-4 py-4 lg:py-2 hover:bg-gray-800 rounded-xl text-xs border flex items-center justify-center text-white">
                                        <LinkIcon className="mr-2 h-3 w-3" />
                                        <p>{t("WhySection.bntProof")}</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p>No data found</p>
            )}
        </Container>
    )
}

export default Why