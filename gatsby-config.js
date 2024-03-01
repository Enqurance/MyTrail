/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        title: `MySite`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                icon: `src/images/KazuhaAvatar.png`,
            }
        }
    ],
}
