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
    const alert = {
        '.alert': {
            padding: theme('padding.3'),
            position: 'relative',
            width: '100%',
            borderRadius: theme('borderRadius.default')
        }
    }

    const alertColors = {
        // key: className
        'red': '.alert-danger',
        'yellow': '.alert-warning',
        'gray': '.alert-secondary',
        'blue': '.alert-primary',
        'teal': '.alert-info',
        'green': '.alert-success',
    }

    // light
    alert['.alert-light'] = {
        backgroundColor: lightColor,
        color: theme('colors.gray.700'),
        fontSize: theme('fontSize.sm'),
        fontWeight: theme('fontWeight.medium'),
        '.alert-link': {
            color: theme(`colors.gray.600`),
            fontWeight: theme('fontWeight.bold'),
            '&:hover': {
                textDecoration: 'underline',
            },
            cursor: 'pointer',
        },
        '.alert-heading': {
            color: theme(`colors.gray.600`),
            display: 'block',
            fontSize: theme('fontSize.3xl'),
            fontWeight: theme('fontWeight.semibold')
        },
        'hr': {
            marginTop: theme('margin.3'),
            marginBottom: theme('margin.3'),
        }
    }

    // dark
    alert['.alert-dark'] = {
        backgroundColor: theme(`backgroundColor.gray.700`),
        color: theme('colors.white'),
        fontSize: theme('fontSize.sm'),
        fontWeight: theme('fontWeight.medium'),
        '.alert-link': {
            color: theme(`colors.white`),
            fontWeight: theme('fontWeight.bold'),
            '&:hover': {
                textDecoration: 'underline',
            },
            cursor: 'pointer',
        },
        '.alert-heading': {
            color: theme(`colors.white`),
            display: 'block',
            fontSize: theme('fontSize.3xl'),
            fontWeight: theme('fontWeight.semibold')
        },
        'hr': {
            marginTop: theme('margin.3'),
            marginBottom: theme('margin.3'),
        }
    }

    for (alertColor in alertColors) {
        alert[`.alert${alertColors[alertColor]}`] = {
            backgroundColor: theme(`backgroundColor.${alertColor}.200`),
            borderRadius: theme('borderRadius.default'),
            fontSize: theme('fontSize.sm'),
            fontWeight: theme('fontWeight.medium'),
            color: theme(`colors.${alertColor}.600`),
            '.alert-link': {
                color: theme(`colors.${alertColor}.600`),
                fontWeight: theme('fontWeight.bold'),
                '&:hover': {
                    textDecoration: 'underline',
                },
                cursor: 'pointer',
            },
            '.alert-heading': {
                color: theme(`colors.${alertColor}.600`),
                display: 'block',
                fontSize: theme('fontSize.3xl'),
                fontWeight: theme('fontWeight.semibold')
            },
            'hr': {
                marginTop: theme('margin.3'),
                marginBottom: theme('margin.3'),
            }
        }
    }
    addComponents(alert)
}