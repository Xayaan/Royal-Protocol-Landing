import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

const DynamicYAMLLinks = () => {
    // grabbing dynamic pages from mdx-pages folder
    const pageData = useStaticQuery(graphql`
        query {
            allIndexYaml {
                edges {
                    node {
                        path
                        title
                        id
                    }
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
            {pageData.allIndexYaml.edges.map(({ node }) => {
                return (
                    <div className="btn btn-green" key={node.id}>
                        <Link to={`${node.path}`}>{node.title}</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default DynamicYAMLLinks
