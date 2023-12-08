import { RefObject } from 'react';

export const scroll = (scrollRef: RefObject<HTMLDivElement>, scrollOffset: number) => {
    console.log(scrollOffset)
    if (scrollRef.current) {
    scrollRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    }
};

type Category = {
    value: string;
};

export const scrollToCategory = (
    categoryRefs: React.RefObject<(HTMLDivElement | null)[]>,
    selectedCategory: string,
    categories: Category[],
    scrollRef: React.RefObject<HTMLDivElement>
) => {
    if (scrollRef.current && categoryRefs.current && categoryRefs.current.length > 0) {
        const selectedIndex = categories.findIndex(cat => cat.value === selectedCategory);
        const selectedRef = categoryRefs.current[selectedIndex];

        if (selectedRef) {
            const scrollLeft = selectedRef.offsetLeft - 150;
            scrollRef.current.scrollTo({ left: scrollLeft, behavior: 'smooth' });
        }
    }
};