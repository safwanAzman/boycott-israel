"use client"

import React, { useState, useEffect} from 'react';
import Image from 'next/image'
import Container from '@/components/layouts/container'
import LogoImg from '../../../public/logo.png'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { RotateCcw} from "lucide-react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {getBoycottList} from '@/data'
import {categoriesList} from '@/shared/categories'
import {Link} from '../../navigation';
import { useTranslations } from "next-intl";


export default function Home() {
  const form = useTranslations("Form");
  const boycottData = getBoycottList();
  const categories = categoriesList();

  const [data, setData] = useState<any[]>([])
  const [searchData, setSearchData] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(form("categories.all"));

  const handleSearchChange = (e:any) => {
    setSearchData(e.target.value);
  };
  
  const handleCategoryChange = (value:any) => {
    setSelectedCategory(value);
  };

  useEffect(() => {
    const filteredData = boycottData.filter((item) => {
      const matchesCategory = selectedCategory === form("categories.all")|| item.categories.includes(selectedCategory);
      const matchesSearch = item.name.toLowerCase().includes(searchData.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    setData(filteredData);
  }, [searchData, selectedCategory]);

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
              <Select 
                key={selectedCategory} 
                onValueChange={handleCategoryChange} 
                defaultValue={selectedCategory}
              >
                <SelectTrigger className="w-full md:w-[280px]">
                  <SelectValue placeholder="Select a timezone" />
                </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                    {categories?.map((item) => (
                      <SelectItem key={item.id} value={item.value}>{item.label}</SelectItem>
                    ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Button size="sm" className="text-xs w-full md:w-32" onClick={() =>{
                  setSearchData('')
                  setSelectedCategory(form("categories.all"))
                  }}>
                    <RotateCcw className="mr-2 h-4 w-4" />
                    <p>{form("formSection.reset")}</p>
                </Button>
          </div>
        }
      >
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {data?.map((item) => (
              <div 
                key={item.id} 
                className="group/why bg-white dark:bg-gray-900 shadow-sm p-4 border-[0.5px] rounded-lg relative">
                <Link href={`/why/${item.id}`}>
                  <div className="flex items-center flex-col justify-center">
                    <Image
                      src={LogoImg}
                      alt="Logo"
                      className="w-32 h-32 object-contain bg-white rounded-md"
                      width={100}
                      height={100}
                      priority
                  />
                  <p className="pt-2 font-medium">{item.name}</p>
                  </div>
                  <div>
                    <div className="hidden group-hover/why:block ">
                      <div className="absolute inset-0 rounded-lg flex items-center justify-center bg-black/60 backdrop-blur-sm ">
                        <Button size="sm" className=" bg-transparent border border-white hover:bg-transparent">
                          <p className="text-[10px] lg:text-sm dark:text-white">Why Boycott {item.name} ?</p>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
    </Container>
  )
}
