import * as React from 'react'
import Crown from '../svg/crown.svg'

const BackgroundCrown = () => {
    return (
        <div
            className={
                'h-screen bg-gradient-radial from-royalBlue-500 to-royalDarkBlue-500 flex justify-center p-8'
            }
        >
            <Crown />
        </div>
    )
}

export default BackgroundCrown
