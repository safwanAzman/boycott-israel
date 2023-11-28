import Image from 'next/image'
import LogoImg from '../../../public/logo.png'
import { useTranslations } from "next-intl";
const Logo = ({}) =>{
    const t = useTranslations("Logo");
    return(
        <div className="flex items-center">
            <Image
                src={LogoImg}
                alt="Logo"
                className="w-auto h-12 md:h-16"
                width={100}
                height={24}
                priority
            />
            <p className="text-xs md:text-sm font-semibold">
            {t("LogoSection.title")} <span>Israel</span>
            </p>
        </div>
    )
}

export default Logo