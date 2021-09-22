import * as React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'

const NotFoundPage = () => (
    <Layout>
        <Seo title="404: Not found" />
        <div className="bg-royalBlue-500 text-white text-xl">
            <div className="w-prose text-center mx-auto mt-10">
                <h1 className="font-bold">404: Not Found</h1>
                <p>You just hit a route that doesn't exist... so sad.</p>
            </div>
        </div>
    </Layout>
)

export default NotFoundPage
