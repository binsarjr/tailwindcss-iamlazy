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

    // light
    button['.btn-light'] = {
        backgroundColor: lightColor,
        color: theme('colors.gray.700'),
        '&:hover:not(.btn-no-hover)': {
            backgroundColor: theme(`backgroundColor.gray.200`),
        }
    }

    // dark
    button['.btn-dark'] = {
        backgroundColor: theme(`backgroundColor.gray.700`),
        color: theme('colors.white'),
        '&:hover:not(.btn-no-hover)': {
            backgroundColor: theme(`backgroundColor.black`),
        }
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

    const buttonOutlineColors = {
        // key: className
        'gray': '.btn-outline-gray,.btn-outline-secondary',
        'red': '.btn-outline-red,.btn-outline-danger',
        'orange': '.btn-outline-orange',
        'yellow': '.btn-outline-yellow,.btn-outline-warning',
        'green': '.btn-outline-green,.btn-outline-success',
        'teal': '.btn-outline-teal,.btn-outline-info',
        'blue': '.btn-outline-blue,.btn-outline-primary',
        'indigo': '.btn-outline-indigo',
        'purple': '.btn-outline-purple',
        'pink': '.btn-outline-pink'
    }

    // light
    button['.btn-outline-light'] = {
        borderWidth: '1px',
        borderColor: theme('borderColor.gray.400'),
        color: theme('colors.gray.400'),
        '&:hover:not(.btn-no-hover)': {
            color: theme('colors.gray.700'),
            borderColor: lightColor,
            backgroundColor: lightColor,
        }
    }

    // dark
    button['.btn-outline-dark'] = {
        borderWidth: '1px',
        borderColor: theme(`borderColor.gray.700`),
        color: theme(`colors.gray.700`),
        '&:hover:not(.btn-no-hover)': {
            color: theme('colors.white'),
            backgroundColor: theme(`backgroundColor.black`),
        }
    }

    for (buttonOutlineColor in buttonOutlineColors) {
        button[buttonOutlineColors[buttonOutlineColor]] = {
            borderWidth: '1px',
            borderColor: theme(`borderColor.${buttonOutlineColor}.500`),
            color: theme(`colors.${buttonOutlineColor}.500`),
            '&:hover:not(.btn-no-hover)': {
                color: theme(`colors.white`),
                backgroundColor: theme(`backgroundColor.${buttonOutlineColor}.500`),
            }
        }
    }
    addComponents([button])
}