"use client"
import { useTranslations } from "next-intl";
import { 
    ClipboardList,
    Car,
    HelpingHand,
    Shirt,
    Coffee,
    Briefcase,
    UserSquare,
    CupSoda,
    Film,
    Wallet,
    UtensilsCrossed,
    ActivitySquare,
    PlaneLanding,
    Home,
    Sparkle,
    GemIcon,
    Factory,
    PawPrint,
    HeartPulse,
    Bot,
    ShoppingBasket,
    Rocket,
    PlaneTakeoff,
} from "lucide-react"
export function useCategoriesList() {
const form = useTranslations("Form");
const categories = [
    {
        id:1,
        value: form("categories.all"),
        label: form("categories.all"),
        icon: <ClipboardList className="h-6 w-6 text-red-500" />,
    },
    {
        id:2,
        value: form("categories.car"),
        label: form("categories.car"),
        icon: <Car className="h-6 w-6 text-orange-500" />,
    },
    {
        id:3,
        value: form("categories.charity"),
        label: form("categories.charity"),
        icon: <HelpingHand className="h-6 w-6 text-sky-500" />,
    },
    {
        id:4,
        value: form("categories.clothing"),
        label: form("categories.clothing"),
        icon: <Shirt className="h-6 w-6 text-lime-500" />,
    },
    {
        id:5,
        value: form("categories.coffee"),
        label: form("categories.coffee"),
        icon: <Coffee className="h-6 w-6 text-rose-500" />,
    },
    {
        id:6,
        value: form("categories.contractor"),
        label: form("categories.contractor"),
        icon: <Briefcase className="h-6 w-6 text-yellow-500" />,
    },
    {
        id:7,
        value: form("categories.cosmetics"),
        label: form("categories.cosmetics"),
        icon: <UserSquare className="h-6 w-6 text-green-500" />,
    },
    {
        id:8,
        value: form("categories.drinks"),
        label: form("categories.drinks"),
        icon: <CupSoda className="h-6 w-6 text-teal-500" />,
    },
    {
        id:9,
        value: form("categories.entertainment"),
        label: form("categories.entertainment"),
        icon: <Film className="h-6 w-6 text-cyan-500" />,
    },
    {
        id:10,
        value: form("categories.fashion"),
        label: form("categories.fashion"),
        icon: <PlaneLanding className="h-6 w-6 text-amber-500" />,
    },
    {
        id:11,
        value: form("categories.finance"),
        label: form("categories.finance"),
        icon: <Wallet className="h-6 w-6 text-pink-500" />,
    },
    {
        id:12,
        value: form("categories.food"),
        label: form("categories.food"),
        icon: <UtensilsCrossed className="h-6 w-6 text-lime-500" />,
    },
    {
        id:13,
        value: form("categories.healthcare"),
        label: form("categories.healthcare"),
        icon: <Sparkle className="h-6 w-6 text-emerald-500" />,
    },
    {
        id:14,
        value: form("categories.household"),
        label: form("categories.household"),
        icon: <Home className="h-6 w-6 text-blue-500" />,
    },
    {
        id:15,
        value: form("categories.insurance"),
        label: form("categories.insurance"),
        icon: <ActivitySquare className="h-6 w-6 text-indigo-500" />,
    },
    {
        id:16,
        value: form("categories.luxury"),
        label: form("categories.luxury"),
        icon: <GemIcon className="h-6 w-6 text-pink-500" />,
    },
    {
        id:17,
        value: form("categories.manufacturer"),
        label: form("categories.manufacturer"),
        icon: <Factory className="h-6 w-6 text-stone-500" />,
    },
    {
        id:18,
        value: form("categories.petcare"),
        label: form("categories.petcare"),
        icon: <PawPrint className="h-6 w-6 text-fuchsia-500" />,
    },
    {
        id:19,
        value: form("categories.pharmaceuticals"),
        label: form("categories.pharmaceuticals"),
        icon: <HeartPulse className="h-6 w-6 text-red-500" />,
    },
    {
        id:20,
        value: form("categories.politics"),
        label: form("categories.politics"),
        icon: <Bot className="h-6 w-6 text-red-500" />,
    },
    {
        id:21,
        value: form("categories.supermarket"),
        label: form("categories.supermarket"),
        icon: <ShoppingBasket className="h-6 w-6 text-zinc-500" />,
    },
    {
        id:22,
        value: form("categories.technology"),
        label: form("categories.technology"),
        icon: <Rocket className="h-6 w-6 text-purple-500" />,
    },
    {
        id:23,
        value: form("categories.travel"),
        label: form("categories.travel"),
        icon: <PlaneTakeoff className="h-6 w-6 text-lime-500" />,
    },
]

return categories;
}