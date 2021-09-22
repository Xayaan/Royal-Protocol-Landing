import * as React from 'react'
import PropTypes from 'prop-types'

const Layout = ({ children }) => {
    return (
        <>
            <div className="flex flex-col min-h-screen">{children}</div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
