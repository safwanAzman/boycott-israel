"use client"

import React, { useState, useEffect,ChangeEvent} from 'react';
import Container from '@/components/layouts/container'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { RotateCcw} from "lucide-react"
import {BoycottList} from '@/types'
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
import { useTranslations } from "next-intl";
import BoycottCard from '@/components/molecules/boycott-card';


export default function Home() {
  const form = useTranslations("Form");
  const boycottData = getBoycottList();
  const categories = categoriesList();

  const [data, setData] = useState<BoycottList[]>([])
  const [searchData, setSearchData] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(form("categories.all"));

  const handleSearchChange = (e:ChangeEvent<HTMLInputElement>) => {
    setSearchData(e.target.value);
  };
  
  const handleCategoryChange = (value:string) => {
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
          <div className="search-container flex-col md:flex-row justify-center items-center">
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
                      <SelectItem 
                        key={item.id} 
                        value={item.value}>
                          {item.label}
                      </SelectItem>
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
              <BoycottCard
                  key={item.id} 
                  img={item.img_url}
                  href={`/why/${item.id}`}
                  productName={item.name}
              />
            ))}
        </div>
    </Container>
  )
}
