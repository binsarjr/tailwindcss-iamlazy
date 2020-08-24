module.exports = function({ addUtilities, addComponents, theme }) {
    const colors = {}


    const textColor = {
        'gray.500': '.text-gray,.text-secondary',
        'gray.400': '.text-muted',
        'red.500': '.text-red,.text-danger',
        'orange.500': '.text-orange',
        'yellow.500': '.text-yellow,.text-warning',
        'green.500': '.text-green,.text-success',
        'teal.500': '.text-teal,.text-info',
        'blue.500': '.text-blue,.text-primary',
        'indigo.500': '.text-indigo',
        'purple.500': '.text-purple',
        'pink.500': '.text-pink'
    }

    for (icolor in textColor) {
        colors[textColor[icolor]] = {
            color: theme(`colors.${icolor}`)
        }
    }


    const bgColors = {
        'gray': '.bg-gray,.bg-secondary',
        'red': '.bg-red,.bg-danger',
        'orange': '.bg-orange',
        'yellow': '.bg-yellow,.bg-warning',
        'green': '.bg-green,.bg-success',
        'teal': '.bg-teal,.bg-info',
        'blue': '.bg-blue,.bg-primary',
        'indigo': '.bg-indigo',
        'purple': '.bg-purple',
        'pink': '.bg-pink'
    }
    for (bgColor in bgColors) {
        colors[bgColors[bgColor]] = {
            backgroundColor: theme(`colors.${bgColor}.500`)
        }
        colors[`a${bgColors[bgColor].split(',').join(',a')}:hover,a${bgColors[bgColor].split(',').join(',a')}:focus,button${bgColors[bgColor].split(',').join(',button')}:hover,button${bgColors[bgColor].split(',').join(',button')}:focus`] = {
            backgroundColor: theme(`colors.${bgColor}.600`)
        }
    }
    addUtilities([colors], ['responsive', 'hover', 'focus'])
}