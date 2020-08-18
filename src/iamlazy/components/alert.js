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
            padding: theme('padding.5'),
            width: '100%',
        }
    }

    const alertColors = {
        // key: className
        'red': '.alert-danger',
        'yellow': '.alert-warning',
        'blue': '.alert-primary',
        'teal': '.alert-info',
        'green': '.alert-success',
    }

    for (alertColor in alertColors) {
        alert[`.alert${alertColors[alertColor]}`] = {
            backgroundColor: theme(`backgroundColor.${alertColor}.100`),
            borderRadius: theme('borderRadius.default'),
            fontSize: theme('fontSize.sm'),
            fontWeight: theme('fontWeight.medium'),
            color: theme(`colors.${alertColor}.600`),
            '.alert-link': {
                fontWeight: theme('fontWeight.bold'),
                '&:hover': {
                    textDecoration: 'underline',
                }
            },
            '.alert-heading': {
                display: 'block',
                fontSize: theme('fontSize.2xl'),
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