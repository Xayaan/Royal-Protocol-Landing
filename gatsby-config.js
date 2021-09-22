module.exports = {
    siteMetadata: {
        title: `Royal Protocol`,
        description: `Royal Protocol is a community Defi token, ushering in the next generation of gaming. With an nuanced ecosystem, Royal Protocol truly is Gaming Evolved.`,
        author: `@ProtocolRoyal`,
        url: `https://royalprotocol.io`,
        image: '/images/seo-image.png',
        twitterUsername: '@ProtocolRoyal',
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `Royal Protocol`,
                start_url: `/`,
                background_color: `#03101E`,
                theme_color: `#03101E`,
                display: `minimal-ui`,
                icon: `src/images/logo.png`, // This path is relative to the root of the site.
            },
        },
        // `gatsby-plugin-gatsby-cloud`, // this (optional) plugin enables Progressive Web App + Offline functionality https://gatsby.dev/offline
        `gatsby-plugin-postcss`,
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: `mdx-component-content`,
                path: `${__dirname}/mdx-content/mdx-component-content`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: `mdx-pages`,
                path: `${__dirname}/mdx-content/mdx-pages`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: `mdx-careers`,
                path: `${__dirname}/mdx-content/mdx-pages/careers`,
            },
        },
        `gatsby-transformer-yaml`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `./yaml-content/yaml-pages/`,
            },
        },
        'gatsby-plugin-mdx',
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /svg/,
                    omitKeys: ['maskType'], // used to remove unrecognised properties inside svg file
                },
            },
        },
    ],
}
