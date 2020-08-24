module.exports = function({ addUtilities, addComponents, theme }) {
    const typography = {
        'h1,h2,h3,h4,h5,h6,small': {
            fontWeight: theme('fontWeight.normal'),
            lineHeight: theme('lineHeight.normal'),
            marginTop: theme('margin.0'),
            marginBottom: theme('margin.2'),
        },
        'small,p': { marginBottom: theme('margin.4') },
        'h1': { fontSize: theme('fontSize.6xl') },
        'h2': { fontSize: theme('fontSize.5xl') },
        'h3': { fontSize: theme('fontSize.4xl') },
        'h4': { fontSize: theme('fontSize.3xl') },
        'h5': { fontSize: theme('fontSize.2xl') },
        'h6': { fontSize: theme('fontSize.xl') },
        'p': {
            fontSize: theme('fontSize.base'),
            fontWeight: theme('fontWeight.light'),
            lineHeight: theme('lineHeight.relaxed')
        },
        'small': { fontWeight: theme('fontWeight.normal') },
    }



    addUtilities(typography)
}