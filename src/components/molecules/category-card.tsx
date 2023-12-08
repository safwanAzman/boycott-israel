import React from 'react';

interface CategoryCardProps {
    value: string;
    selected: boolean;
    selectedColor?: string;
    label: string;
    icon: JSX.Element;
    onClick: (value: string) => void;
}

const CategoryCard = ({
    value,
    selected,
    selectedColor,
    label,
    icon,
    onClick,
}: CategoryCardProps) => {
    return (
        <div
            onClick={() => onClick(value)} 
            className={`${selected ? selectedColor : 'bg-white dark:bg-gray-800 hover:scale-90'} 
            shadow-sm px-4  py-2 border-[0.5px] rounded-lg cursor-pointer snap-center`}>
            <div className="flex flex-col w-16 items-center justify-start lg:justify-center  text-center ">
                <div className="flex justify-center items-center">
                    {icon}
                </div>
                <p className="font-medium text-[0.65rem] capitalize pt-2">{label}</p>
            </div>
        </div>
    );
}

export default CategoryCard;
