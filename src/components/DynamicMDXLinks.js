import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

const DynamicLinks = () => {
    // grabbing dynamic pages from mdx-pages folder
    const pageData = useStaticQuery(graphql`
        query {
            allMdx(
                filter: { fileAbsolutePath: { regex: "/mdx-pages/" } }
                sort: { fields: frontmatter___date, order: ASC }
            ) {
                nodes {
                    frontmatter {
                        date(formatString: "MMMM D, YYYY")
                        title
                    }
                    id
                    slug
                }
            }
        }
    `)

    return (
        <div
            className={
                'dynamic flex space-x-3  flex flex-1 flex-row justify-center '
            }
        >
            {pageData.allMdx.nodes.map((node) => {
                // slug is page location
                return (
                    <div className="btn btn-green" key={node.id}>
                        <Link to={`/${node.slug}`}>
                            {node.frontmatter.title}
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default DynamicLinks
