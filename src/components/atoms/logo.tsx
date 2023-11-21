import Image from 'next/image'
import LogoImg from '../../../public/logo.png'
const Logo = ({}) =>{
    return(
        <div className="flex items-center">
            <Image
                src={LogoImg}
                alt="Logo"
                className="w-auto h-16"
                width={100}
                height={24}
                priority
            />
            <p className="text-sm font-semibold">
                Boycott <span>Israel</span>
            </p>
        </div>
    )
}

export default Logo