import { RefObject } from 'react';

export const scroll = (scrollRef: RefObject<HTMLDivElement>, scrollOffset: number) => {
    if (scrollRef.current) {
    scrollRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    }
};