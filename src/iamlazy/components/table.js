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
                    borderWidth: '0',
                    'th,td': {
                        paddingTop: theme('padding.3'),
                        paddingRight: theme('padding.4'),
                        paddingBottom: theme('padding.3'),
                        paddingLeft: theme('padding.4'),
                    }
                },
            },
            thead: {
                borderBottomWidth: '2px',
            },
            tfoot: {
                borderTopWidth: '2px',
            },
            'tbody': {
                tr: {
                    borderWidth: '0',
                    borderBottomWidth: '1px',
                    color: theme('colors.gray.700'),
                    fontSize: theme('fontSize.light'),
                    whiteSpace: 'nowrap',
                    width: '100%',
                    'th,td': {
                        padding: theme('padding.4')
                    }
                },
            },
            '&.table-hover': {
                tbody: {
                    'tr:hover': {
                        backgroundColor: theme('colors.gray.200')
                    }
                }
            },
            '&.table-striped': {
                tbody: {
                    'tr:nth-child(odd)': {
                        backgroundColor: theme('colors.gray.200')
                    }
                }
            }
        }
    }



    const tableColor = {
        '.table': {
            '&.table-dark': {
                backgroundColor: theme('colors.gray.800'),
                tr: {
                    borderColor: '#454d55',
                    'th,td': {
                        color: theme('colors.gray.300'),
                        borderColor: '#454d55'
                    },
                },
                '&.table-hover': {
                    tbody: {
                        'tr:hover': {
                            backgroundColor: theme('colors.gray.700')
                        }
                    }
                },
                '&.table-striped': {
                    tbody: {
                        'tr:nth-child(odd)': {
                            backgroundColor: theme('colors.gray.700')
                        }
                    }
                }
            },
            '&.table-light': {
                backgroundColor: theme('colors.gray.300'),
                tr: {
                    borderColor: '#dee2e6',
                    'th,td': {
                        color: theme('colors.gray.800'),
                        borderColor: '#dee2e6'
                    },
                },
                '&.table-hover': {
                    tbody: {
                        'tr:hover': {
                            backgroundColor: theme('colors.gray.200')
                        }
                    }
                },
                '&.table-striped': {
                    tbody: {
                        'tr:nth-child(odd)': {
                            backgroundColor: theme('colors.gray.200')
                        }
                    }
                }
            }
        }
    }



    const tableColors = {
        'blue': '&.table-primary',
        'gray': '&.table-secondary',
        'green': '&.table-success',
        'orange': '&.table-orange',
        'yellow': '&.table-warning',
        'red': '&.table-danger',
        'teal': '&.table-info',
        'indigo': '&.table-indigo',
        'purple': '&.table-purple',
        'pink': '&.table-pink',
    }

    for (c in tableColors) {
        tableColor['.table'][tableColors[c]] = {
            backgroundColor: theme(`colors.${c}.500`),
            tr: {
                borderColor: '#dee2e6',
                'th,td': {
                    color: theme('colors.gray.100'),
                    borderColor: '#dee2e6'
                }
            },
            '&.table-hover': {
                tbody: {
                    'tr:hover': {
                        backgroundColor: theme(`colors.${c}.400`)
                    }
                }
            },
            '&.table-striped': {
                tbody: {
                    'tr:nth-child(odd)': {
                        backgroundColor: theme(`colors.${c}.400`)
                    }
                }
            }
        }
    }


    const tableHeaderFooterColor = {
        '.table': {
            'thead.thead-dark,tfoot.tfoot-dark': {
                backgroundColor: theme('colors.gray.800'),
                tr: {
                    borderColor: '#454d55',
                    'th,td': {
                        color: theme('colors.gray.300'),
                        borderColor: '#454d55'
                    }
                }
            },
            'thead.thead-light,tfoot.tfoot-light': {
                backgroundColor: theme('colors.gray.300'),
                tr: {
                    borderColor: '#dee2e6',
                    'th,td': {
                        color: theme('colors.gray.800'),
                        borderColor: '#dee2e6'
                    }
                }
            }
        }
    }


    const theadTfootColors = {
        'blue': 'thead.thead-primary,tfoot.tfoot-primary',
        'gray': 'thead.thead-secondary,tfoot.tfoot-secondary',
        'green': 'thead.thead-success,tfoot.tfoot-success',
        'orange': 'thead.thead-orange,tfoot.tfoot-orange',
        'yellow': 'thead.thead-warning,tfoot.tfoot-warning',
        'red': 'thead.thead-danger,tfoot.tfoot-danger',
        'teal': 'thead.thead-info,tfoot.tfoot-info',
        'indigo': 'thead.thead-indigo,tfoot.tfoot-indigo',
        'purple': 'thead.thead-purple,tfoot.tfoot-purple',
        'pink': 'thead.thead-pink,tfoot.tfoot-pink',
    }

    for (theadTfootColor in theadTfootColors) {
        tableHeaderFooterColor[theadTfootColors[theadTfootColor]] = {
            backgroundColor: theme(`colors.${theadTfootColor}.500`),
            tr: {
                borderColor: '#dee2e6',
                'th,td': {
                    color: theme('colors.gray.100'),
                    borderColor: '#dee2e6'
                }
            }
        }
    }

    tableHeaderFooterColor[theadTfootColors['orange']]['tr']['th,td']['color'] = theme('colors.gray.800')
    tableHeaderFooterColor[theadTfootColors['yellow']]['tr']['th,td']['color'] = theme('colors.gray.800')





    const tableResponsive = {
        '.table-responsive': {
            display: 'block',
            overflowX: 'auto',
        },
        'table.table-bordered': {
            'th,td': {
                borderWidth: '1px',
            }
        },
        'table.table-borderless': {
            tr: {
                borderWidth: '0',
                'th,td': {
                    borderWidth: '0',
                }
            }
        },
    }

    addComponents([table, tableColor, tableHeaderFooterColor])
    addUtilities(tableResponsive, ['responsive'])
}