import React  from 'react'
import { Link } from '../../navigation';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

interface BoycottCardProps {
    img :string,
    href:string,
    productName:string
}
const BoycottCard = ({
    img,
    href,
    productName,
}: BoycottCardProps) => {
    const t = useTranslations("BoycottCard");
    return(
        <Link href={href} className="group/why bg-white dark:bg-gray-900 shadow-sm p-4 border-[0.5px] rounded-lg relative">
            <div className="flex items-center flex-col justify-center">
                <Image
                    src={img}
                    alt={productName}
                    className="w-32 h-32 object-contain bg-white rounded-md"
                    width={100}
                    height={100}
                    priority
                />
                <p className="pt-2 font-medium">{productName}</p>
            </div>
            <div>
                <div className="hidden group-hover/why:block ">
                <div className="absolute inset-0 rounded-lg flex items-center justify-center bg-black/60 backdrop-blur-sm ">
                    <Button size="sm" className=" bg-transparent border border-white hover:bg-transparent">
                        <p className="text-[10px] lg:text-xs dark:text-white">{t("BoycottCardSection.why")}{productName} ?</p>
                    </Button>
                </div>
                </div>
            </div>
        </Link>
    )
}

export default BoycottCard;