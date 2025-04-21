module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/style.css");
    eleventyConfig.addPassthroughCopy("src/static/images/uzu.png");
    eleventyConfig.addPassthroughCopy("src/CNAME");
};

module.exports.config = {
    dir: {
        input: "src"
    }
};

