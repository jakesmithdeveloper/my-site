module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
};

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
