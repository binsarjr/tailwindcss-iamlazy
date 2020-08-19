module.exports = {
    // purge: [
    //     './src/resources/*',
    //     './public/**/*.html',
    // ],
    purge: false,
    theme: {
        extend: {},
    },
    variants: {},
    plugins: [
        require('./src/index.js')
    ],
}