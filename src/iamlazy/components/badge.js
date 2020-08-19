const { lightColor } = require('./../variables');
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

    // light
    badge['.badge-light'] = {
        backgroundColor: lightColor,
        color: theme('colors.gray.700')
    }
    badge['a.badge-light:hover'] = {
        backgroundColor: theme('backgroundColor.gray.200'),
    }

    // dark
    badge['.badge-dark'] = {
        backgroundColor: theme(`backgroundColor.gray.700`),
        color: theme('colors.white')
    }
    badge['a.badge-dark:hover'] = {
        backgroundColor: theme(`backgroundColor.black`),
    }
    for (badgeColor in badgeColors) {
        badge[badgeColors[badgeColor]] = {
            backgroundColor: theme(`backgroundColor.${badgeColor}.500`),
            color: theme('colors.white')
        }
        badge[`a${badgeColors[badgeColor].split(',').join(',a')}:hover`] = {
            backgroundColor: theme(`backgroundColor.${badgeColor}.600`),
        }
    }
    addComponents([badge])
}