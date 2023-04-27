const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {    
    eleventyConfig.addPassthroughCopy('./src/assets/');
    eleventyConfig.addPlugin(syntaxHighlight);

    eleventyConfig.addFilter("asPostDate", (dateObj) => {
      return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);  
       
    });

    return {
        dir: {
          input: "src",
          output: "dist",
          includes: "_includes",
          layouts: "_layouts"
        },
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk"
    };
};