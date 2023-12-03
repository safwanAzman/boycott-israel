"use client"
import React, { useState, useEffect} from 'react';
import Container from '@/components/layouts/container'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { RotateCcw} from "lucide-react"
import {categoriesList} from '@/shared/categories'
import {Link} from '../../../navigation';
import { useTranslations } from "next-intl";

const CategoriesList = () => {
    const form = useTranslations("Form");
    const categories = categoriesList();
    const [data, setData] = useState<any[]>([])
    const [searchData, setSearchData] = useState('');

    const handleSearchChange = (e:any) => {
        setSearchData(e.target.value);
    };

    useEffect(() => {
        const filteredData = categories.filter((item) => {
        const matchesSearch = item.id !== 1 && item.label.toLowerCase().includes(searchData.toLowerCase());
        return matchesSearch;
        });
        setData(filteredData);
    }, [searchData]);

    return (
        <Container 
                section={
                <div className="search-container">
                    <Input 
                        placeholder={form("formSection.search")}
                        className="text-xs w-full md:w-96"
                        value={searchData}
                        onChange={handleSearchChange}
                    />
                    <Button size="sm" className="text-xs w-full md:w-32" onClick={() =>{
                        setSearchData('')
                        }}>
                        <RotateCcw className="mr-2 h-4 w-4" />
                        <p>{form("formSection.reset")}</p>
                    </Button>
                </div>
            }
            >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {data?.map((item) => (
                    <div 
                    key={item.id} 
                    className="bg-white dark:bg-gray-900 shadow-sm p-4 border-[0.5px] rounded-lg relative hover:scale-100 md:hover:scale-110">
                    <Link href={`/why/${item.id}`}>
                        <div className="flex items-center flex-row space-x-2 ">
                            <div className="w-11 h-11 bg-gray-50 dark:bg-gray-800 rounded-lg flex justify-center items-center">
                                {item.icon}
                            </div>
                            <p className="font-medium text-xs">{item.label}</p>
                        </div>
                    </Link>
                    </div>
                ))}
            </div>
        </Container>
    )
}

    export default CategoriesList