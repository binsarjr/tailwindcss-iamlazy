module.exports = function({
    addUtilities,
    addComponents,
    addBase,
    addVariant,
    e,
    prefix,
    theme,
    variants,
    config
}) {
    const button = {
        '.btn': {
            fontWeight: theme('fontWeight.bold'),
            paddingTop: theme('padding.2'),
            paddingBottom: theme('padding.2'),
            paddingRight: theme('padding.4'),
            paddingLeft: theme('padding.4'),
            borderRadius: theme('borderRadius.default'),
            display: 'inline-block',
        },
        '.btn-block': {
            display: 'block',
            width: '100%'
        }
    }

    const buttonColors = {
        // key: className
        'gray': '.btn-gray,.btn-secondary',
        'red': '.btn-red,.btn-danger',
        'orange': '.btn-orange',
        'yellow': '.btn-yellow,.btn-warning',
        'green': '.btn-green,.btn-success',
        'teal': '.btn-teal,.btn-info',
        'blue': '.btn-blue,.btn-primary',
        'indigo': '.btn-indigo',
        'purple': '.btn-purple',
        'pink': '.btn-pink'
    }
    for (buttonColor in buttonColors) {
        button[buttonColors[buttonColor]] = {
            backgroundColor: theme(`backgroundColor.${buttonColor}.500`),
            color: theme('colors.white'),
            '&:hover:not(.btn-no-hover)': {
                backgroundColor: theme(`backgroundColor.${buttonColor}.600`),
            }
        }
    }
    addComponents([button])
}