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
    const table = {
        '.table': {
            width: '100%',
            textAlign: 'left',
            borderRadius: theme('borderRadius.default'),
            borderCollapse: 'collapse',
            caption: {
                color: theme('colors.gray.800'),
            },
            'thead,tfoot': {
                tr: {
                    color: theme('colors.gray.800'),
                    borderWidth: '1px',
                    borderBottomWidth: '0',
                    'th,td': {
                        paddingTop: theme('padding.3'),
                        paddingRight: theme('padding.4'),
                        paddingBottom: theme('padding.3'),
                        paddingLeft: theme('padding.4'),
                    }
                },
            },
            'tbody': {
                tr: {
                    borderWidth: '1px',
                    color: theme('colors.gray.700'),
                    fontSize: theme('fontSize.light'),
                    whiteSpace: 'nowrap',
                    width: '100%',
                    'th,td': {
                        padding: theme('padding.4')
                    }
                }
            },
        }
    }

    const tableColor = {
        '.table.table-dark': {
            tr: {
                backgroundColor: theme('colors.gray.800'),
                color: theme('colors.gray.300'),
                'th,td': {
                    borderColor: '#454d55'
                }
            }
        }
    }
    const tableHeaderFooterColor = {
        '.table thead, .table tfoot': {
            '&.thead-dark,&.tfoot-dark': {
                tr: {
                    backgroundColor: theme('colors.gray.800'),
                    color: theme('colors.gray.300'),
                    'th,td': {
                        borderColor: '#454d55'
                    }
                }
            },
            '&.thead-light,&.tfoot-light': {
                tr: {
                    backgroundColor: theme('colors.gray.300'),
                    color: theme('colors.gray.800'),
                }
            }
        }
    }

    const tableResponsive = {
        '.table-responsive': {
            display: 'block',
            overflowX: 'auto',
        },
        '.table-bordered': {
            'th,td': {
                borderWidth: '1px',
            }
        },
        '.table-borderless': {
            'th,td': {
                borderWidth: '0',
            }
        }
    }

    addComponents([table, tableColor, tableHeaderFooterColor])
    addUtilities(tableResponsive, ['responsive'])
}