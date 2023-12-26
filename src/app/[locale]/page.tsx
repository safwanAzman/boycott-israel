"use client"

import { useRouter ,useSearchParams} from 'next/navigation';
import React, { useState, useEffect,ChangeEvent,useRef,useMemo} from 'react';
import Container from '@/components/layouts/container'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { RotateCcw ,ChevronLeft ,ChevronRight} from "lucide-react"
import {useBoycottList} from '@/data'
import {useCategoriesList} from '@/shared/categories'
import { useTranslations } from "next-intl";
import BoycottCard from '@/components/molecules/boycott-card';
import CategoryCard from '@/components/molecules/category-card';
import { scroll ,scrollToCategory} from '@/utils/scroll-horinzontal';
import Empty from '@/components/molecules/empty';



export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const form = useTranslations("Form");
  const boycottData = useBoycottList();
  const categories = useCategoriesList();
  const categoryRefs = useRef<Array<HTMLDivElement | null>>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const [searchData, setSearchData] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(form("categories.all"));

  const handleSearchChange = (e:ChangeEvent<HTMLInputElement>) => {
    setSearchData(e.target.value);
  };

  const handleCategoryChange = (value:string) => {
    setSelectedCategory(value);
    router.push(`/?categories=${value}`)
    window.scrollTo({top: 0, behavior: 'smooth'})
  };

  const handleReset = () =>{
    setSearchData('')
    router.push(`/?categories=${form("categories.all")}`)
  }

  const filteredData = useMemo(() => {
    return boycottData.filter((item) => {
      const matchesCategory = selectedCategory === form("categories.all") || 
      item.categories.includes(selectedCategory);
      const matchesSearch = item.name.toLowerCase().includes(searchData.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchData, selectedCategory, boycottData]);

  useEffect(() => {
    const params = searchParams.get('categories');
    if (params) {
      setSelectedCategory(params);
    }
    categoryRefs.current = categoryRefs.current.slice(0, categories.length);

    scrollToCategory(categoryRefs, selectedCategory, categories, scrollRef);

  }, [searchParams, categories, selectedCategory, setSelectedCategory]);

  return (
    <Container>
        <div>
          <div className="bg-gray-100/80 dark:bg-gray-900/80 backdrop-blur-xl p-4 sticky top-14 rounded-l-lg z-40">
            <div className="flex flex-col lg:flex-row items-center justify-center mb-4 space-x-0 space-y-2 lg:space-y-0 lg:space-x-2">
              <Input 
                placeholder={form("formSection.search")}
                className="text-xs w-full lg:w-96"
                value={searchData}
                onChange={handleSearchChange}
              />
              <Button 
                size="sm" 
                className="text-xs w-full lg:w-32 dark:bg-gray-700 dark:text-white" 
                onClick={() => handleReset() }
              >
                <RotateCcw className="m-2 h-4 w-4" />
                <p>{form("formSection.reset")}</p>
              </Button>
            </div>
            <div className="px-6">
              <div ref={scrollRef} className="flex snap-x flex-shrink-0  space-x-1.5 overflow-x-auto no-scrollbar">
                {categories?.map((item , index) => (
                  <div ref={el => categoryRefs.current[index] = el} key={item.id}>
                    <CategoryCard
                        value={item.value}
                        selected={selectedCategory.includes(item.value)}
                        selectedColor={item.selectedColor}
                        label={item.label}
                        icon={item.icon}
                        onClick={handleCategoryChange}
                        data-value={item.value}
                    />
                    </div>
                ))}
              </div>
            </div>
            <div>
              <div className="container-btn-scroll right-0 ">
                <button className='btn-scroll' onClick={() => scroll(scrollRef,200)}>
                  <ChevronRight className="w-4 h-4"/>
                </button>
              </div>
              <div className="container-btn-scroll left-0">
                <button className='btn-scroll' onClick={() => scroll(scrollRef, -200)}>
                  <ChevronLeft className="w-4 h-4"/>
                </button>
              </div>
            </div>
          </div>
          <div>
            {
              filteredData && filteredData.length > 0 ? 
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-5 gap-2 p-4">
                {filteredData.map((item) => (
                  <BoycottCard
                    key={item.id} 
                    img={item.img_url}
                    href={`/why/${item.id}`}
                    productName={item.name}
                    desc={item.desc}
                    categories={item.categories.map((category, index) => (
                      <div key={index}>
                        <Badge 
                          variant="outline" 
                          className="border-red-500 bg-red-50 text-red-500 my-1 mr-2"
                        >
                          {category}
                        </Badge>
                      </div>
                    ))}
                  />
                ))}
              </div> 
              : 
              <Empty/>
            }
          </div>
        </div>
    </Container>
  )
}
