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
    const badge = {
        '.badge': {
            padding: '.25em .4em',
            fontSize: '75%',
            fontWeight: theme('fontWeight.bold'),
            borderRadius: theme('borderRadius.default'),
            textAlign: 'center',
            lineHeight: '1',
            whiteSpace: 'nowrap',
            verticalAlign: 'baseline',
            display: 'inline-block',
        }
    }

    const badgeColors = {
        // key: className
        'gray': '.badge-gray,.badge-secondary',
        'red': '.badge-red,.badge-danger',
        'orange': '.badge-orange',
        'yellow': '.badge-yellow,.badge-warning',
        'green': '.badge-green,.badge-success',
        'teal': '.badge-teal,.badge-info',
        'blue': '.badge-blue,.badge-primary',
        'indigo': '.badge-indigo',
        'purple': '.badge-purple',
        'pink': '.badge-pink'
    }
    for (badgeColor in badgeColors) {
        badge[badgeColors[badgeColor]] = {
            backgroundColor: theme(`backgroundColor.${badgeColor}.500`),
            color: theme('colors.white'),
            '&:hover:not(.badge-no-hover)': {
                backgroundColor: theme(`backgroundColor.${badgeColor}.600`),
            }
        }
    }
    addComponents([badge])
}