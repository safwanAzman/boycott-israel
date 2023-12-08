import React, { useState ,MouseEvent,ReactNode} from 'react';
import { Link } from '../../navigation';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import LogoImg from '../../../public/logo.png'
import {usePathname} from '../../navigation';

interface BoycottCardProps {
    img: string;
    href: string;
    productName: string;
    desc?:string
    categories?:ReactNode;
}

const BoycottCard = ({ img, href, productName ,desc,categories}: BoycottCardProps) => {
    const t = useTranslations('BoycottCard');
    const pathname = usePathname()
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0, show: false });
    const handleMouseMove = (e:MouseEvent) => {
        if(pathname === '/'){
            setTooltipPosition({ x: e.pageX  - 250, y: e.pageY - 250, show: true });
        }else{
            setTooltipPosition({ x: e.pageX - 100, y: e.pageY -100, show: true });
        }
    };
    const handleMouseLeave = () => {
        setTooltipPosition({ x: 0, y: 0, show: false });
    };

    return (
        <>
            <Link
                href={href}
                className="group bg-white dark:bg-gray-900 shadow-sm p-4 border-[0.5px] rounded-lg hover:animate-slow-bounce"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
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
            </Link>
            {tooltipPosition.show && (
                <div
                    className={`absolute z-20 hidden lg:block `}
                    style={{
                        left: tooltipPosition.x,
                        top: tooltipPosition.y,
                    }}
                >
                    <div className="flex items-start space-x-4 rounded-lg bg-white dark:bg-gray-900 backdrop-blur-sm p-4 border  shadow-lg dark:border-gray-600"
                    >
                        <Image
                            src={img}
                            alt={productName}
                            className="w-16 h-16 object-contain bg-white rounded-md"
                            width={100}
                            height={100}
                            priority
                        />
                        <div className="space-y-1">
                            <p className="text-[10px] lg:text-base dark:text-white">
                                {t('BoycottCardSection.why')} {productName} ?
                            </p>
                            <p className="text-[10px] lg:text-sm dark:text-white max-w-sm text-gray-400">
                                {desc}
                            </p>
                            <div className='flex flex-wrap'>
                                {categories}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default BoycottCard;
