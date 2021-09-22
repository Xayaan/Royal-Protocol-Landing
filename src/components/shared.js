import * as React from 'react'
import CrownSVG from '../svg/crown.svg'

export const Center = ({ children }) => {
    return <div className={'m-auto'}>{children}</div>
}

export const BodyCopy = ({ YAMLData }) => {
    return (
        <div className={'copy text-xl px-2'}>
            <p>{YAMLData.content}</p>
        </div>
    )
}

export const Container = ({ children }) => {
    return (
        <div
            className={
                'h-full bg-gradient-radial from-royalBlue-500 to-royalDarkBlue-500 relative flex-grow'
            }
        >
            {children}
        </div>
    )
}

export const BackgroundCrown = () => {
    return (
        <div className={'flex justify-center pb-20'}>
            <CrownSVG />
        </div>
    )
}

export const AbsoluteContainer = ({ children }) => {
    return (
        <div
            className={
                'flex flex-col items-center align-middle absolute top-0 inset-0 '
            }
        >
            {children}
        </div>
    )
}
