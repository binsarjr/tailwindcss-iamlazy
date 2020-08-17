module.exports = function({ addUtilities, addComponents, theme }) {

    addUtilities([{
        '.text-muted': {
            color: theme('colors.gray.600')
        }
    }])
}