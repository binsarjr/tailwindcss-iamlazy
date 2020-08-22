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
    addComponents({
        '.form-group': {
            marginBottom: theme('margin.4'),
            'label': {
                display: 'block',
                color: theme('colors.gray.700'),
                fontSize: theme('fontSize.sm'),
                fontWeight: theme('fontWeight.bold'),
                marginBottom: theme('margin.2')
            }
        },
        '.form-inline-group': {
            display: 'flex',
            flexWrap: 'nowrap',
            alignItems: 'center',
            marginBottom: theme('margin.4'),
            'label': {
                marginLeft: theme('margin.2'),
                marginRight: theme('margin.2'),
            },
            'label,input': {
                display: 'inline-block',
            }
        },
        '.form-control': {
            boxShadow: theme('boxShadow.sm'),
            // borderWidth: theme('borderWidth.default'),
            borderRadius: theme('borderRadius.default'),
            width: '100%',
            paddingTop: theme('padding.2'),
            paddingBottom: theme('padding.2'),
            paddingLeft: theme('padding.3'),
            paddingRight: theme('padding.3'),
            color: theme('colors.gray.700'),
            lineHeight: 1.5,
            backgroundColor: theme('colors.gray.200'),
            '&:focus': {
                backgroundColor: theme('colors.white')
            }
        },
        'select.form-control': {
            backgroundColor: theme('backgroundColor.white'),
        },
        'input.form-control': {
            '-webkit-appearance': 'none',
            '-moz-appearance': 'none',
            'appearance': 'none',
            '&::placeholder': {
                color: theme('colors.gray.600')
            },
            '&:focus': {
                boxShadow: theme('boxShadow.outline'),
                outline: '0'
            }
        },
        'input:invalid': {
            borderWidth: theme('borderWidth.default'),
            borderColor: theme('borderColor.red.500')
        }
    })
}