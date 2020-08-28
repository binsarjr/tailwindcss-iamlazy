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
            paddingTop: theme('padding.1'),
            paddingRight: theme('padding.2'),
            paddingBottom: theme('padding.1'),
            paddingLeft: theme('padding.2'),
            fontSize: theme('fontSize.xs'),
            borderRadius: theme('borderRadius.default'),
            textAlign: 'center',
            whiteSpace: 'nowrap',
            verticalAlign: 'baseline',
            display: 'inline-block',
            '&.badge-pill': {
                borderRadius: theme('borderRadius.full')
            }
        }
    }

    const badgeColors = {
        // key: className
        'blue': '.badge-blue,.badge-primary',
        'red': '.badge-red,.badge-danger',
        'indigo': '.badge-indigo',
        'purple': '.badge-purple',
        'pink': '.badge-pink'
    }


    for (badgeColor in badgeColors) {
        badge[badgeColors[badgeColor]] = {
            backgroundColor: theme(`backgroundColor.${badgeColor}.500`),
            color: theme('colors.gray.200')
        }
    }

    // secondary
    badge['.badge-secondary,.badge-gray'] = {
        backgroundColor: theme('colors.gray.600'),
        color: theme('colors.gray.100')
    }

    // info
    badge['.badge-info,.badge-teal'] = {
        backgroundColor: theme('colors.teal.400'),
        color: theme('colors.gray.100')
    }


    // success
    badge['.badge-success,.badge-green'] = {
        backgroundColor: theme('colors.green.400'),
        color: theme('colors.gray.100')
    }

    // warning
    badge['.badge-warning,.badge-yellow'] = {
        backgroundColor: theme('colors.yellow.400'),
        color: theme('colors.gray.800')
    }


    // orange
    badge['.badge-orange'] = {
        backgroundColor: theme('colors.orange.400'),
        color: theme('colors.gray.800')
    }

    // light
    badge['.badge-light'] = {
        backgroundColor: theme('colors.gray.100'),
        color: theme('colors.gray.900')
    }

    // dark
    badge['.badge-dark'] = {
        backgroundColor: theme(`colors.gray.900`),
        color: theme('colors.gray.100')
    }


    addComponents([badge])
}