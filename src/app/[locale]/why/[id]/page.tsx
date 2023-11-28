"use client"
import React, { useState, useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LogoImg from '../../../../../public/logo.png'
import { Badge } from "@/components/ui/badge"
import Container from '@/components/layouts/container'
import {getBoycottList} from '@/data'
import {BoycottList} from '@/types'
import { Link as LinkIcon} from "lucide-react"

const Why = ({ params }: { params: { id: string } }) => {
    const boycottData = getBoycottList();
    const [data, setData] = useState<BoycottList | undefined>(undefined)

    useEffect(() => {
        const convertId = Number(params.id);
        const item = boycottData.find(item => item.id === convertId);
        setData(item)
        
    }, [params.id]); 

    return (
        <Container>
            {data ? (
                <div className="grid grid-cols-12 gap-6">
                    <div className="relative col-span-12 lg:col-span-4 bg-gray-50 h-52 lg:h-full rounded-lg">
                        <Image
                            src={data.img_url}
                            quality={75}
                            alt={'main-img'}
                            fill
                            style={{objectFit:"contain"}}
                            className='p-4'
                            priority
                        />
                    </div>
                    <div className="col-span-12 lg:col-span-8">
                        <div className="space-y-2">
                            <div className="border-b pb-4">
                                <h1 className="text-4xl font-semibold">{data.name}</h1>
                            </div>
                            <div className="space-y-2 pt-2">
                                <div className="flex items-center justify-between">
                                    <h1 className="text-lg text-gray-400">
                                        Why boycott this product?
                                    </h1>
                                </div>
                                <p className="text-sm">
                                    {data.desc}
                                </p>
                            </div>
                            <div className="space-y-2 pt-2">
                                <div className="flex items-center justify-between">
                                    <h1 className="text-lg text-gray-400">
                                        Categories
                                    </h1>
                                </div>
                                <div className="flex items-center flex-wrap">
                                    {data.categories.map((category, index) => (
                                        <div key={index}>
                                            <Badge variant="outline" className="border-green-500 bg-green-50 text-green-500 my-1 mr-2">
                                            {category}
                                            </Badge>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-2 pt-2">
                                <div className="flex items-center justify-between">
                                    <h1 className="text-lg text-gray-400">
                                        Alternatives
                                    </h1>
                                </div>
                                <div className="flex items-center flex-wrap">
                                    {data.alternatives.map((alternative, index) => (
                                        <div key={index}>
                                            <Badge variant="outline" className="border-red-500 bg-red-50 text-red-500 my-1 mr-2">
                                            {alternative}
                                            </Badge>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-2 pt-2">
                                <div className="flex items-center justify-between">
                                    <h1 className="text-lg text-gray-400">
                                        Proof Links
                                    </h1>
                                </div>
                                <div className="w-full md:w-40 pb-6">
                                    <Link href={data.proof_link} className="bg-black px-4 py-4 lg:py-2 hover:bg-gray-800 rounded-xl text-xs border flex items-center justify-center text-white">
                                        <LinkIcon className="mr-2 h-3 w-3" />
                                        <p>Proof</p>
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