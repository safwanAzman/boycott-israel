"use client"
import { useTranslations } from "next-intl";
export function categoriesList() {
const form = useTranslations("Form");
const categories = [
    {
        id:1,
        value: "all",
        label: form("categories.all"),
    },
    {
        id:2,
        value: "car",
        label: form("categories.car"),
    },
    {
        id:3,
        value: "charity",
        label: form("categories.charity"),
    },
    {
        id:4,
        value: "clothing",
        label: form("categories.clothing"),
    },
    {
        id:5,
        value: "coffee",
        label: form("categories.coffee"),
    },
    {
        id:6,
        value: "contractor",
        label: form("categories.contractor"),
    },
    {
        id:7,
        value: "cosmetics",
        label: form("categories.cosmetics"),
    },
    {
        id:8,
        value: "drinks",
        label: form("categories.drinks"),
    },
    {
        id:9,
        value: "entertainment",
        label: form("categories.entertainment"),
    },
    {
        id:10,
        value: "fashion",
        label: form("categories.fashion"),
    },
    {
        id:11,
        value: "finance",
        label: form("categories.finance"),
    },
    {
        id:12,
        value: "food",
        label: form("categories.food"),
    },
    {
        id:13,
        value: "healthcare",
        label: form("categories.healthcare"),
    },
    {
        id:14,
        value: "household",
        label: form("categories.household"),
    },
    {
        id:15,
        value: "insurance",
        label: form("categories.insurance"),
    },
    {
        id:16,
        value: "luxury",
        label: form("categories.luxury"),
    },
    {
        id:17,
        value: "manufacturer",
        label: form("categories.manufacturer"),
    },
    {
        id:18,
        value: "petcare",
        label: form("categories.petcare"),
    },
    {
        id:19,
        value: "pharmaceuticals",
        label: form("categories.pharmaceuticals"),
    },
    {
        id:20,
        value: "politics",
        label: form("categories.politics"),
    },
    {
        id:21,
        value: "supermarket",
        label: form("categories.supermarket"),
    },
    {
        id:22,
        value: "technology",
        label: form("categories.technology"),
    },
]

return categories;
}