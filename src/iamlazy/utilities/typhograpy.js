module.exports = function({ addUtilities, addComponents, theme }) {
    const typography = {
        'h1,h2,h3,h4,h5,h6': {
            fontWeight: theme('fontWeight.normal'),
            lineHeight: theme('lineHeight.normal'),
            marginTop: theme('margin.0'),
            marginBottom: theme('margin.2'),
        },
        'h1': { fontSize: theme('fontSize.6xl'), },
        'h2': { fontSize: theme('fontSize.5xl'), },
        'h3': { fontSize: theme('fontSize.4xl'), },
        'h4': { fontSize: theme('fontSize.3xl'), },
        'h5': { fontSize: theme('fontSize.2xl'), },
        'h6': { fontSize: theme('fontSize.1xl'), }
    }



    addUtilities(typography)
}