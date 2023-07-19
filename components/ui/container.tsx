import React from 'react'

interface ContainerProps {
    children: React.ReactNode
}


const ContainerLarge: React.FC<ContainerProps> = ({ children }) => {
    return (
        <div className='mx-auto max-w-[95rem]'>
            {children}
        </div>
    )
}

const ContainerMedium: React.FC<ContainerProps> = ({ children }) => {
    return (
        <div className='mx-auto max-w-5xl'>
            {children}
        </div>
    )
}

export {
    ContainerLarge, ContainerMedium
}