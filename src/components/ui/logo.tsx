import Image from 'next/image'
import LogoImg from '../../../public/logo.png'
import { useTranslations } from "next-intl";
import Link from 'next/link';
const Logo = ({}) =>{
    const t = useTranslations("Logo");
    return(
        <Link href="/" className="flex items-center space-x-2 py-3">
            <Image
                src={LogoImg}
                alt="Logo"
                className="w-auto h-8 lg:h-10"
                width={100}
                height={24}
                priority
            />
            <p className="text-xs md:text-sm font-semibold">
            {t("LogoSection.title")} <span>Israel</span>
            </p>
        </Link>
    )
}

export default Logo