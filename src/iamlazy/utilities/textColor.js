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
        /**
         * .{text-color}
         */
        colors[textColor[icolor]] = {
            color: theme(`colors.${icolor}`)
        }
    }


    addUtilities([colors], ['responsive', 'hover', 'focus'])
}