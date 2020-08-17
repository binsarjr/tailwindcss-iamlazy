module.exports = {
    purge: [
        './src/resources/*',
        './public/**/*.html',
    ],
    theme: {
        extend: {},
    },
    variants: {},
    plugins: [
        require('./src/index.js')
    ],
}