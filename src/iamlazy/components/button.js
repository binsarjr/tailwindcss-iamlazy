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
            transition: 'all .20s ease',
        },
        '.btn-block': {
            display: 'block',
            width: '100%'
        },
        '.btn-pill': {
            borderRadius: theme('borderRadius.full')
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
        '&:hover:not(.btn-no-hover):not([disabled])': {
            backgroundColor: theme(`backgroundColor.gray.300`),
        },
        '&:focus': {
            boxShadow: '0 0 3pt 2pt ' + theme(`backgroundColor.gray.300`),
            outline: '0'
        }
    }

    // dark
    button['.btn-dark'] = {
        backgroundColor: theme(`backgroundColor.gray.700`),
        color: theme('colors.white'),
        '&:hover:not(.btn-no-hover):not([disabled])': {
            backgroundColor: theme(`backgroundColor.black`),
        },
        '&:focus': {
            boxShadow: '0 0 3pt 2pt ' + theme(`backgroundColor.gray.600`),
            outline: '0'
        }
    }
    for (buttonColor in buttonColors) {
        button[buttonColors[buttonColor]] = {
            backgroundColor: theme(`backgroundColor.${buttonColor}.500`),
            color: theme('colors.white'),
            '&:hover:not(.btn-no-hover):not([disabled])': {
                backgroundColor: theme(`backgroundColor.${buttonColor}.700`),
            },
            '&.btn-bordered': {
                borderWidth: '1px',
                borderColor: theme(`borderColor.${buttonColor}.700`)
            },
            '&:focus': {
                boxShadow: '0 0 3pt 2pt ' + theme(`backgroundColor.${buttonColor}.400`),
                outline: '0',
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
        '&:hover:not(.btn-no-hover):not([disabled])': {
            color: theme('colors.gray.700'),
            borderColor: lightColor,
            backgroundColor: lightColor,
        },
        '&:focus': {
            boxShadow: '0 0 3pt 2pt ' + theme('colors.gray.400'),
            outline: '0'
        }
    }

    // dark
    button['.btn-outline-dark'] = {
        borderWidth: '1px',
        borderColor: theme(`borderColor.gray.700`),
        color: theme(`colors.gray.700`),
        '&:hover:not(.btn-no-hover):not([disabled])': {
            color: theme('colors.white'),
            backgroundColor: theme(`backgroundColor.black`),
        },
        '&:focus': {
            boxShadow: '0 0 3pt 2pt ' + theme(`colors.gray.600`),
            outline: '0'
        }
    }

    for (buttonOutlineColor in buttonOutlineColors) {
        button[buttonOutlineColors[buttonOutlineColor]] = {
            borderWidth: '1px',
            borderColor: theme(`borderColor.${buttonOutlineColor}.500`),
            color: theme(`colors.${buttonOutlineColor}.500`),
            '&:hover:not(.btn-no-hover):not([disabled])': {
                color: theme(`colors.white`),
                backgroundColor: theme(`backgroundColor.${buttonOutlineColor}.500`),
            },
            '&:focus': {
                boxShadow: '0 0 3pt 2pt ' + theme(`backgroundColor.${buttonColor}.400`),
                outline: '0'
            }
        }
    }

    // Button disable
    button['.btn:disabled'] = {
        opacity: '0.5',
        cursor: 'not-allowed',
    }

    // Button Group
    button['.btn-group'] = {
        display: 'inline-flex',
        '.btn': {
            borderRadius: '0'
        },
        '.btn:first-child': {
            borderTopLeftRadius: theme('borderRadius.default'),
            borderBottomLeftRadius: theme('borderRadius.default')
        },
        '.btn:last-child': {
            borderTopRightRadius: theme('borderRadius.default'),
            borderBottomRightRadius: theme('borderRadius.default')
        }
    }



    // Button size
    const buttonSize = {
        '.btn.btn-sm': {
            fontSize: theme('fontSize.xs'),
            paddingTop: theme('padding.2'),
            paddingRight: theme('padding.4'),
            paddingBottom: theme('padding.2'),
            paddingLeft: theme('padding.4'),
        },
        '.btn.btn-md': {
            fontSize: theme('fontSize.sm'),
            paddingTop: theme('padding.3'),
            paddingRight: theme('padding.6'),
            paddingBottom: theme('padding.3'),
            paddingLeft: theme('padding.6'),
        },
        '.btn.btn-lg': {
            fontSize: theme('fontSize.base'),
            paddingTop: theme('padding.3'),
            paddingRight: theme('padding.8'),
            paddingBottom: theme('padding.3'),
            paddingLeft: theme('padding.8'),
        },
    }

    addComponents(button)
    addUtilities(buttonSize, ['responsive'])
}