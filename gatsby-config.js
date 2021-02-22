module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/`,
      },
    },
    "gatsby-transformer-remark",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}

// gatsby-source-filesystem
/*
 * A Gatsby source plugin for sourcing data into your Gatsby application
 * from your local filesystem.
 *
 * The plugin creates File nodes from files. The various “transformer”
 * plugins can transform File nodes into various other types of data
 */

// gatsby-plugin-emotion
/* 

*/

// gatsby-transformer-sharp
/* 

*/

// gatsby-plugin-sharp
/* 

*/

// gatsby-plugin-typography
/* 

*/
