import * as React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'
import HomePage from '../components/homePage'

const IndexPage = () => {
    return (
        <Layout>
            <Seo title="Home" />
            <HomePage />
        </Layout>
    )
}
//
export default IndexPage
