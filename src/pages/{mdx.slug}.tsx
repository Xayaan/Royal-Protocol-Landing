import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx' // highlight-line
import Layout from '../components/layout'
import { Header } from '../components/header'
import Seo from '../components/seo'
import { MDXProvider } from '@mdx-js/react'

import { ReadMore, ApplyForm, PdfLitepaper, GoBack, PrevNextButtons } from '../components/shortcodes'

const shortcodes = { ReadMore, ApplyForm, PdfLitepaper, GoBack, PrevNextButtons }

const DynamicPages = ({ data }) => {
  return (
    <Layout>
      <Seo title={data.mdx.frontmatter.title} />
      <Header />
      <div className="bg-white w-full">
        <h2 className="bg-royalBlue-500 text-white mb-8 header">
          <div className="mx-auto max-w-5xl py-8">
            <h2 className="text-5xl mx-4 ProximaNovaBlack">
              {data.mdx.frontmatter.title}
            </h2>
            <p className="pt-2 mx-4 max-w-prose">
              {data.mdx.frontmatter.subtitle}
            </p>
          </div>
        </h2>
        <div className="mx-auto px-4 max-w-5xl markdown mb-20">
          <div className="max-w-prose">
            <MDXProvider components={shortcodes}>
              <MDXRenderer>{data.mdx.body}</MDXRenderer>
            </MDXProvider>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
    query MyQuery($id: String) {
        mdx(id: { eq: $id }) {
            frontmatter {
                title
                subtitle
            }
            body
        }
    }
`
export default DynamicPages
