import React,{ReactNode} from 'react'
import Navbar from '@/components/molecules/navbar'


interface ContainerProps {
    children?: ReactNode,
}

const Container = ({children}:ContainerProps) => {
    return (
        <div>
            <Navbar/>
            <div className="container mx-auto px-4 mt-6">
                {children}
            </div>
        </div>
    )
}

export default Container