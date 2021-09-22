import React from 'react'
import CrownSVG from '../svg/crown.svg'

const basicTemplate = (props) => {
    const { pageContext } = props
    const { pageContent } = pageContext

    return (
        <Container>
            <BackgroundCrown />
            <AbsoluteContainer>
                <Center>
                    {pageContent.map((data, index) => {
                        return (
                            <div key={`content_item_${index}`}>
                                <div
                                    className={
                                        'max-w-600 w-full m-auto pt-20px text-white text-1x3 font-thin leading-1x4 tracking-1px text-left font-body pb-20'
                                    }
                                >
                                    <p className={'font-semibold text-5xl'}>
                                        {data.title}
                                    </p>
                                    {data.item}
                                </div>
                            </div>
                        )
                    })}
                </Center>
            </AbsoluteContainer>
        </Container>
    )
}

const Container = ({ children }) => {
    return (
        <div
            className={
                'h-full bg-gradient-radial from-royalBlue-500 to-royalDarkBlue-500 relative'
            }
        >
            {children}
        </div>
    )
}

const BackgroundCrown = () => {
    return (
        <div className={'flex justify-center pb-20'}>
            <CrownSVG />
        </div>
    )
}

const AbsoluteContainer = ({ children }) => {
    return (
        <div
            className={
                'p-8 flex flex-col items-center align-middle absolute top-0 inset-0 '
            }
        >
            {children}
        </div>
    )
}

const Center = ({ children }) => {
    return <div className={'m-auto'}>{children}</div>
}

export default basicTemplate
