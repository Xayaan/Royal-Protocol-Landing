import * as React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import metaImage from '../images/seo-image.png'

function Seo({ description, lang, meta, title }) {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        image
                        url
                    }
                }
            }
        `
    )

    const siteUrl = site.siteMetadata.url

    // const templink =
    //   "https://www.gardeningknowhow.com/wp-content/uploads/2019/08/flower-color-400x267.jpg";
    // const imageLink = templink;

    // const grapghImage = site.siteMetadata.image;
    // const imageLink = templink;
    const imageLink = siteUrl + metaImage
    const metaDescription = description || site.siteMetadata.description
    const defaultTitle = site.siteMetadata?.title

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:image`,
                    content: imageLink,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:image`,
                    content: imageLink,
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata?.author || ``,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
                {
                    'http-equiv': 'Cache-control',
                    content: 'no-cache, no-store, must-revalidate',
                },
                {
                    'http-equiv': 'Pragma',
                    content: 'no-cache',
                },
            ].concat(meta)}
        >
            <script
                defer
                data-domain="royalprotocol.io"
                src="https://plausible.io/js/plausible.js"
            ></script>
        </Helmet>
    )
}

Seo.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
    image: null,
}

Seo.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
}

export default Seo
