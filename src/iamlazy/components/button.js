const { lightColor } = require('./../variables');
module.exports = function({
    addUtilities,
    addComponents,
    theme,
}) {
    const button = {
        '.btn': {
            display: 'inline-block',
            fontWeight: '400',
            textAlign: 'center',
            verticalAlign: 'middle',
            userSelect: 'none',
            backgroundColor: 'transparent',
            border: '1px solid transparent',
            padding: '.375rem .75rem',
            fontSize: '1rem',
            lineHeight: '1.5',
            borderRadius: '.25rem',
            transition: 'color 0.15s, background-color 0.15s, border-color 0.15s, box-shadow 0.15s',
            '&:hover': {
                textDecoration: 'none'
            },
            '&:focus,&.focus': {
                outline: '0',
                boxShadow: 'none'
            },
            '&.disabled,&:disabled': {
                opacity: '.65',
                cursor: 'not-allowed',
            },
            '&:not(:disabled):not(.disabled)': {
                cursor: 'pointer',
            }
        },
        'a.btn.disabled,fieldset:disabled a.btn': {
            pointerEvents: 'none',
        },
        '.btn-block': {
            display: 'block',
            width: '100%'
        },
        '.btn-pill': {
            borderRadius: theme('borderRadius.full')
        }
    }

    // ##################################
    /**
     * 
     * Button Solid
     * 
     */

    const buttonColors = {
        // key: className
        'gray': '.btn-gray,.btn-secondary',
        'blue': '.btn-blue,.btn-primary',
        'indigo': '.btn-indigo',
        'purple': '.btn-purple',
        'pink': '.btn-pink'
    }

    for (buttonColor in buttonColors) {
        button[buttonColors[buttonColor]] = {
            backgroundColor: theme(`colors.${buttonColor}.600`),
            color: theme('colors.gray.200'),
            '&:hover:not(.disabled):not(.btn-no-hover):not(:disabled)': {
                backgroundColor: theme(`colors.${buttonColor}.500`),
            },
            '&.btn-bordered': {
                borderWidth: '1px',
                borderColor: theme(`colors.${buttonColor}.500`)
            },
            '&:focus:not(.disabled):not(:disabled)': {
                boxShadow: '0 0 3pt 2pt ' + theme(`colors.${buttonColor}.500`),
                outline: '0',
            }
        }
    }

    // danger
    button['.btn-danger,.btn-red'] = {
        backgroundColor: theme('colors.red.500'),
        color: theme('colors.gray.200'),
        '&:hover:not(.disabled):not(.btn-no-hover):not(:disabled)': {
            backgroundColor: theme(`colors.red.400`),
        },
        '&:focus:not(.disabled):not(:disabled)': {
            boxShadow: '0 0 3pt 2pt ' + theme(`colors.red.400`),
            outline: '0'
        }
    }

    // success
    button['.btn-success,.btn-green'] = {
        backgroundColor: theme('colors.green.500'),
        color: theme('colors.gray.200'),
        '&:hover:not(.disabled):not(.btn-no-hover):not(:disabled)': {
            backgroundColor: theme(`colors.green.400`),
        },
        '&:focus:not(.disabled):not(:disabled)': {
            boxShadow: '0 0 3pt 2pt ' + theme(`colors.green.400`),
            outline: '0'
        }
    }

    // info
    button['.btn-info,.btn-teal'] = {
        backgroundColor: theme('colors.teal.500'),
        color: theme('colors.gray.200'),
        '&:hover:not(.disabled):not(.btn-no-hover):not(:disabled)': {
            backgroundColor: theme(`colors.teal.400`),
        },
        '&:focus:not(.disabled):not(:disabled)': {
            boxShadow: '0 0 3pt 2pt ' + theme(`colors.teal.400`),
            outline: '0'
        }
    }

    // warning
    button['.btn-warning,.btn-yellow'] = {
        backgroundColor: theme('colors.yellow.400'),
        color: theme('colors.gray.800'),
        '&:hover:not(.disabled):not(.btn-no-hover):not(:disabled)': {
            backgroundColor: theme(`colors.yellow.300`),
        },
        '&:focus:not(.disabled):not(:disabled)': {
            boxShadow: '0 0 3pt 2pt ' + theme(`colors.yellow.300`),
            outline: '0'
        }
    }

    // orange
    button['.btn-orange'] = {
        backgroundColor: theme('colors.orange.400'),
        color: theme('colors.gray.800'),
        '&:hover:not(.disabled):not(.btn-no-hover):not(:disabled)': {
            backgroundColor: theme(`colors.orange.300`),
        },
        '&:focus:not(.disabled):not(:disabled)': {
            boxShadow: '0 0 3pt 2pt ' + theme(`colors.orange.300`),
            outline: '0'
        }
    }

    // light
    button['.btn-light'] = {
        backgroundColor: theme('colors.gray.300'),
        color: theme('colors.gray.900'),
        '&:hover:not(.disabled):not(.btn-no-hover):not(:disabled)': {
            backgroundColor: theme(`colors.gray.200`),
        },
        '&:focus:not(.disabled):not(:disabled)': {
            boxShadow: '0 0 3pt 2pt ' + theme(`colors.gray.200`),
            outline: '0'
        }
    }

    // dark
    button['.btn-dark'] = {
        backgroundColor: theme(`colors.gray.900`),
        color: theme('colors.gray.100'),
        '&:hover:not(.disabled):not(.btn-no-hover):not(:disabled)': {
            backgroundColor: theme(`colors.gray.800`),
        },
        '&:focus:not(.disabled):not(:disabled)': {
            boxShadow: '0 0 3pt 2pt ' + theme(`colors.gray.700`),
            outline: '0'
        }
    }

    // ####################################################
    /**
     * 
     * Button Outline
     * 
     */

    const buttonOutlineColors = {
        // key: className
        'gray': '.btn-outline-gray,.btn-outline-secondary',
        'blue': '.btn-outline-blue,.btn-outline-primary',
        'indigo': '.btn-outline-indigo',
        'purple': '.btn-outline-purple',
        'pink': '.btn-outline-pink'
    }


    for (buttonOutlineColor in buttonOutlineColors) {
        button[buttonOutlineColors[buttonOutlineColor]] = {
            borderWidth: '1px',
            borderColor: theme(`colors.${buttonOutlineColor}.600`),
            color: theme(`colors.${buttonOutlineColor}.600`),
            '&:hover:not(.disabled):not(.btn-no-hover):not(:disabled)': {
                color: theme(`colors.gray.200`),
                backgroundColor: theme(`colors.${buttonOutlineColor}.600`),
            },
            '&:focus:not(.disabled):not(:disabled)': {
                boxShadow: '0 0 3pt 2pt ' + theme(`colors.${buttonOutlineColor}.500`),
                outline: '0'
            }
        }
    }

    // danger
    button['.btn-outline-danger,.btn-outline-red'] = {
        borderWidth: '1px',
        borderColor: theme('colors.red.500'),
        color: theme('colors.red.500'),
        '&:hover:not(.disabled):not(.btn-no-hover):not(:disabled)': {
            color: theme('colors.gray.200'),
            backgroundColor: theme('colors.red.500'),
        },
        '&:focus:not(.disabled):not(:disabled)': {
            boxShadow: '0 0 3pt 2pt ' + theme('colors.red.400'),
            outline: '0'
        }
    }

    // success
    button['.btn-outline-success,.btn-outline-green'] = {
        borderWidth: '1px',
        borderColor: theme('colors.green.500'),
        color: theme('colors.green.500'),
        '&:hover:not(.disabled):not(.btn-no-hover):not(:disabled)': {
            color: theme('colors.gray.200'),
            backgroundColor: theme('colors.green.500'),
        },
        '&:focus:not(.disabled):not(:disabled)': {
            boxShadow: '0 0 3pt 2pt ' + theme('colors.green.400'),
            outline: '0'
        }
    }

    // info
    button['.btn-outline-info,.btn-outline-teal'] = {
        borderWidth: '1px',
        borderColor: theme('colors.teal.500'),
        color: theme('colors.teal.500'),
        '&:hover:not(.disabled):not(.btn-no-hover):not(:disabled)': {
            color: theme('colors.gray.200'),
            backgroundColor: theme('colors.teal.500'),
        },
        '&:focus:not(.disabled):not(:disabled)': {
            boxShadow: '0 0 3pt 2pt ' + theme('colors.teal.400'),
            outline: '0'
        }
    }

    // warning
    button['.btn-outline-warning,.btn-outline-yellow'] = {
        borderWidth: '1px',
        borderColor: theme('colors.yellow.400'),
        color: theme('colors.yellow.400'),
        '&:hover:not(.disabled):not(.btn-no-hover):not(:disabled)': {
            color: theme('colors.gray.800'),
            backgroundColor: theme('colors.yellow.400'),
        },
        '&:focus:not(.disabled):not(:disabled)': {
            boxShadow: '0 0 3pt 2pt ' + theme('colors.yellow.300'),
            outline: '0'
        }
    }

    // orange
    button['.btn-outline-orange'] = {
        borderWidth: '1px',
        borderColor: theme('colors.orange.400'),
        color: theme('colors.orange.400'),
        '&:hover:not(.disabled):not(.btn-no-hover):not(:disabled)': {
            color: theme('colors.gray.800'),
            backgroundColor: theme('colors.orange.400'),
        },
        '&:focus:not(.disabled):not(:disabled)': {
            boxShadow: '0 0 3pt 2pt ' + theme('colors.orange.300'),
            outline: '0'
        }
    }

    // light
    button['.btn-outline-light'] = {
        borderWidth: '1px',
        borderColor: theme('colors.gray.300'),
        color: theme('colors.gray.500'),
        '&:hover:not(.disabled):not(.btn-no-hover):not(:disabled)': {
            color: theme('colors.gray.900'),
            backgroundColor: theme('colors.gray.300'),
        },
        '&:focus:not(.disabled):not(:disabled)': {
            boxShadow: '0 0 3pt 2pt ' + theme('colors.gray.200'),
            outline: '0'
        }
    }

    // dark
    button['.btn-outline-dark'] = {
        borderWidth: '1px',
        borderColor: theme(`colors.gray.900`),
        color: theme(`colors.gray.900`),
        '&:hover:not(.disabled):not(.btn-no-hover):not(:disabled)': {
            color: theme('colors.gray.100'),
            backgroundColor: theme(`colors.gray.900`),
        },
        '&:focus:not(.disabled):not(:disabled)': {
            boxShadow: '0 0 3pt 2pt ' + theme(`colors.gray.800`),
            outline: '0'
        }
    }

    // ##########################################

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
        '.btn.btn-small': {
            fontSize: theme('fontSize.xs'),
            paddingTop: theme('padding.2'),
            paddingRight: theme('padding.4'),
            paddingBottom: theme('padding.2'),
            paddingLeft: theme('padding.4'),
        },
        '.btn.btn-large': {
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