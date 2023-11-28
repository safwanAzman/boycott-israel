"use client"

import React, { useState, useEffect } from 'react';
import {Check, ChevronsUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

type Category = {
    value: string;
    label: string;
};

type CategorySelectorProps = {
    categories: Category[];
    defaultValue?: string;
    onSelect?: (value: string) => void;
    placeholder?: string;
};

const Select = ({
    categories, 
    defaultValue, 
    onSelect, 
    placeholder}:
    CategorySelectorProps) => {
    const [value, setValue] = useState<string>(defaultValue || '');
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        if (defaultValue) {
            setValue(defaultValue);
        }
    }, [defaultValue]);

    const handleSelect = (currentValue: string) => {
        setValue(currentValue === value ? '' : currentValue);
        setOpen(false);
        if (onSelect) {
            onSelect(currentValue);
        }
    };
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between text-gray-400 font-normal text-xs"
                >
                    {value
                    ? categories.find((item) => item.value === value)?.label
                    : placeholder || "Select Categories..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
            <Command>
                <CommandInput placeholder="Search Categories..." />
                <CommandEmpty>No Categories found.</CommandEmpty>
                <CommandGroup>
                {categories.map((item) => (
                    <CommandItem
                    key={item.value}
                    value={item.value}
                    onSelect={() => handleSelect(item.value)}
                    >
                    <Check
                        className={`mr-2 h-4 w-4 ${value === item.value ? "opacity-100" : "opacity-0"}`}
                    />
                    {item.label}
                    </CommandItem>
                ))}
                </CommandGroup>
            </Command>
            </PopoverContent>
        </Popover>
    );
};

export default Select;
