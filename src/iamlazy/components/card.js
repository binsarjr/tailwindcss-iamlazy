module.exports = function({ addUtilities, addComponents, theme }) {
    const backgroundColor = theme('backgroundColor')
    const borderRadius = theme('borderRadius')
    const boxShadow = theme('boxShadow')

    const card = {
        '.card': {
            backgroundColor: backgroundColor['white'],
            maxWidth: theme('maxWidth.sm'),
            borderRadius: borderRadius['default'],
            boxShadow: boxShadow['lg'],
            '.card-thumb': {
                width: '100%',
                borderTopLeftRadius: borderRadius['default'],
                borderTopRightRadius: borderRadius['default'],
            },
            '.card-header,.card-footer': {
                backgroundColor: backgroundColor['gray']['100'],
                paddingTop: theme('padding.3'),
                paddingBottom: theme('padding.3'),
                paddingLeft: theme('padding.5'),
                paddingRight: theme('padding.5'),
            },
            '.card-body': {
                paddingTop: theme('padding.3'),
                paddingBottom: theme('padding.3'),
                paddingLeft: theme('padding.5'),
                paddingRight: theme('padding.5'),
                '.card-title': {
                    marginBottom: theme('margin.1'),
                    fontWeight: theme('fontWeight.semibold')
                },
                '.card-subtitle': {
                    fontSize: theme('fontSize.sm'),
                    color: theme('colors.gray.600'),
                    marginBottom: theme('margin.2'),
                },
                '.card-text': {
                    marginBottom: theme('margin.2')
                },
            },

        }
    }
    const cardHorizontal = {
        '.card-horizontal': {
            backgroundColor: backgroundColor['white'],
            maxWidth: '100%',
            borderWidth: theme('borderWidth.default'),
            borderColor: theme('borderColor.gray.400'),
            borderRadius: theme('borderRadius.default'),
            [`@media (min-width: ${theme('screens.md')})`]: {
                maxWidth: theme('maxWidth.xl'),
                display: 'flex',
            },
            '.card-left': {
                height: 'auto',
                borderTopLeftRadius: theme('borderRadius.default'),
                borderTopRightRadius: theme('borderRadius.default'),
                textAlign: 'center',
                overflow: 'hidden',
                objectFit: 'cover',
                flex: theme('flex.none'),
                'img.card-thumb': {
                    height: '100%',
                    width: '100%',
                },
                [`@media (min-width: ${theme('screens.md')})`]: {
                    borderTopRightRadius: theme('borderRadius.none'),
                    borderBottomLeftRadius: theme('borderRadius.default'),
                    width: theme('width.48'),
                }
            },
            '.card-right': {
                backgroundColor: backgroundColor['white'],
                borderBottomLeftRadius: theme('borderRadius.default'),
                borderBottomRightRadius: theme('borderRadius.default'),
                padding: theme('padding.4'),
                lineHeight: 1.5,
                [`@media (min-width: ${theme('screens.md')})`]: {
                    borderBottomLeftRadius: theme('borderRadius.none'),
                    borderTopRightRadius: theme('borderRadius.default'),
                },
                '.card-subtitle': {
                    fontSize: theme('fontSize.sm'),
                    color: theme('colors.gray.600'),
                    display: 'flex',
                    alignItems: 'center',
                },
                '.card-title': {
                    color: theme('colors.gray.900'),
                    fontSize: theme('fontSize.xl'),
                    fontWeight: theme('fontWeight.bold'),
                    marginBottom: theme('magin.2')
                },
                '.card-text': {
                    color: theme('colors.gray.700'),
                    fontSize: theme('fontSize.base'),
                },
            }
        }
    }
    const cardSize = {
        '.card-sm': {
            maxWidth: theme('maxWidth.sm')
        },
        '.card-md': {
            maxWidth: theme('maxWidth.md')
        },
        '.card-lg': {
            maxWidth: theme('maxWidth.lg')
        },
        '.card-xl': {
            maxWidth: theme('maxWidth.xl')
        },
    }
    const cardShadow = {
        '.card-no-shadow': {
            boxShadow: boxShadow['none']
        },
        '.card-shadow': {
            boxShadow: boxShadow['lg']
        },
        '.card-shadow-sm': {
            boxShadow: boxShadow['sm']
        },
        '.card-shadow-md': {
            boxShadow: boxShadow['md']
        },
        '.card-shadow-lg': {
            boxShadow: boxShadow['lg']
        },
        '.card-shadow-xl': {
            boxShadow: boxShadow['xl']
        }
    }
    const cardBordered = {
        '.card-bordered': {
            borderWidth: theme('borderWidth.default'),
            borderColor: theme('borderColor.gray.300'),
            '.card-header': {
                borderBottomWidth: theme('borderWidth.default'),
                borderColor: theme('borderColor.gray.300'),
            },
            '.card-footer': {
                borderTopWidth: theme('borderWidth.default'),
                borderColor: theme('borderColor.gray.300'),
            }
        }
    }

    addComponents([card, cardHorizontal])
    addUtilities([cardSize, cardShadow, cardBordered], ['responsive'])
}