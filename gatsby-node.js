/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreateNode = ({ node }) => {
    if (node.internal.type === `MarkdownRemark`) {
        console.log('MarkdownRemark happened')
        console.log(`Node created of type:`, node.internal.type)
    }
}

const fs = require('fs')
const yaml = require('js-yaml')

exports.createPages = ({ actions }) => {
    const { createPage } = actions
    const ymlDoc = yaml.load(
        fs.readFileSync('./yaml-content/yaml-pages/index.yaml', 'utf-8')
    )

    ymlDoc.forEach((element) => {
        createPage({
            path: element.path,
            component: require.resolve('./src/templates/basicTemplate.js'),
            context: {
                pageContent: element.content,
                links: element.links,
            },
        })
    })
}
