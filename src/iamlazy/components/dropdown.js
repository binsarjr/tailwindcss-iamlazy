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
    const dropdown = {
        '.dropdown': {
            display: 'inline-block',
            position: 'relative',
            '&:hover,&.show': {
                '.dropdown-menu': {
                    display: 'block',
                }
            },
            '.dropdown-toggle': {
                display: 'inline-flex',
                alignItems: 'center',
            },
            '.dropdown-toggle::after': {
                display: 'inline-block',
                marginLeft: '.255em',
                verticalAlign: '.255em',
                content: '""',
                borderTop: ".3em solid",
                borderRight: ".3em solid transparent",
                borderBottom: '0',
                borderLeft: '.3em solid transparent'
            },
            '.dropdown-menu': {
                position: 'absolute',
                display: 'none',
                backgroundColor: theme('backgroundColor.white'),
                borderWidth: theme('borderWidth.default'),
                borderColor: theme('borderColor.gray.300'),
                borderRadius: theme('borderRadius.default'),
                zIndex: '10000',
                minWidth: '10rem',
                '.dropdown-item': {
                    paddingTop: theme('padding.2'),
                    paddingRight: theme('padding.4'),
                    paddingBottom: theme('padding.2'),
                    paddingLeft: theme('padding.4'),
                    display: 'block',
                    width: '100%',
                    whiteSpace: 'nowrap',
                    '&:hover': {
                        backgroundColor: theme('backgroundColor.gray.200')
                    }
                }
            },
            '.dropdown-menu-right': {
                right: '0'
            }
        }
    }

    addComponents(dropdown)
}