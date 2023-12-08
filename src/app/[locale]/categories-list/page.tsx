"use client"
import React, { useState, useEffect,ChangeEvent } from 'react';
import Container from '@/components/layouts/container';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RotateCcw} from "lucide-react";
import { useCategoriesList } from '@/shared/categories';
import { useBoycottList } from '@/data';
import {CategoriesList} from '@/types'
import BoycottCard from '@/components/molecules/boycott-card';
import BackBtn from '@/components/molecules/back-btn';
import { 
    Dialog, 
    DialogContent, 
    DialogHeader, 
    DialogClose, 
    DialogTrigger
} from "@/components/ui/dialog";
import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge"

const CategoriesList = () => {
    const form = useTranslations("Form");
    const t = useTranslations("Header");
    const categories = useCategoriesList();
    const boycottData = useBoycottList();
    const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
    const [data, setData] = useState<CategoriesList[]>([]);
    const [searchData, setSearchData] = useState('');

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchData(e.target.value);
    };

    const handleDialogTriggerClick = (itemId: number) => {
        setSelectedItemId(itemId);
    };

    const selectedItem = data.find(item => item.id === selectedItemId);
    const filteredBoycottData = selectedItem ? boycottData.filter(boycottItem =>
        boycottItem.categories.includes(selectedItem.label)
    ) : [];

    useEffect(() => {
        const filteredData = categories.filter((item) => {
            return item.id !== 1 && item.label.toLowerCase().includes(searchData.toLowerCase());
        });
        setData(filteredData);
    }, [searchData]);

    return (
        <Container
            section={
            <div className="search-container relative flex-col md:flex-row ">
                <div className=' flex justify-start w-full sm:w-1/4 pb-4 sm:pb-0'>
                    <BackBtn title={`${t("HeaderSection.browse")}`} />
                </div>
                <div className='flex flex-col md:flex-row space-x-0 space-y-2 md:space-y-0 md:space-x-2  justify-center items-center'>
                    <Input
                        placeholder={form("formSection.search")}
                        className="text-xs w-full md:w-96"
                        value={searchData}
                        onChange={handleSearchChange}
                    />
                    <Button size="sm" className="text-xs w-full md:w-32" onClick={() => {
                        setSearchData('')
                    }}>
                        <RotateCcw className="mr-2 h-4 w-4" />
                        <p>{form("formSection.reset")}</p>
                    </Button>
                </div>
            </div>
            }
        >
            <Dialog>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {data.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white dark:bg-gray-900 shadow-sm p-4 border-[0.5px] rounded-lg relative hover:scale-100 md:hover:scale-110">
                            <DialogTrigger asChild className="cursor-pointer" onClick={() => handleDialogTriggerClick(item.id)}>
                                <div className="flex items-center flex-row space-x-2 ">
                                    <div className="w-11 h-11 bg-gray-50 dark:bg-gray-800 rounded-lg flex justify-center items-center">
                                        {item.icon}
                                    </div>
                                    <p className="font-medium text-xs capitalize">{item.label}</p>
                                </div>
                            </DialogTrigger>
                        </div>
                    ))}
                </div>
                <DialogContent className='min-w-full h-[100vh] overflow-auto p-0 top-[90%] sm:top-[50%]'>
                    <DialogHeader className=' pb-96 md:pb-0'>
                        <div className='sticky -top-1 z-50 bg-white dark:bg-gray-900 p-4 border-b'>
                            <div className='flex items-center justify-between font-semibold capitalize'>
                                <p>{selectedItem ? `${selectedItem.label}` : ''}</p>
                                <div>
                                    <DialogClose asChild>
                                        <button type="button" className='text-xs w-6 h-6 text-white bg-red-500 rounded-md focus:outline-none'>
                                            X
                                        </button>
                                    </DialogClose>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 items-center p-4">
                            {filteredBoycottData.map((boycottItem) => (
                                <BoycottCard
                                    key={boycottItem.id}
                                    img={boycottItem.img_url}
                                    href={`/why/${boycottItem.id}`}
                                    productName={boycottItem.name}
                                    desc={boycottItem.desc}
                                    categories={boycottItem.categories.map((category, index) => (
                                        <div key={index}>
                                            <Badge variant="outline" className="border-red-500 bg-red-50 text-red-500 my-1 mr-2">
                                            {category}
                                            </Badge>
                                        </div>
                                    ))}
                                />
                            ))}
                        </div>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </Container>
    )
}

export default CategoriesList;
