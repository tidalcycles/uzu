module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/style.css");
};

module.exports.config = {
    dir: {
        input: "src"
    }
};

