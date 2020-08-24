module.exports = function({ addUtilities, addComponents, theme }) {
    const colors = {
        '.bg-transparent': {
            background: 'transparent'
        }
    }

    // Background solid
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
        /**
         * .{bg-color}
         */
        colors[bgColors[bgColor]] = {
            backgroundColor: theme(`colors.${bgColor}.500`)
        }

        /**
         * a.{bg-color}:hover,
         * a.{bg-color}:focus,
         * button.{bg-color}:hover,
         * button.{bg-color}:focus
         * 
         */
        colors[`a${bgColors[bgColor].split(',').join(',a')}:hover,a${bgColors[bgColor].split(',').join(',a')}:focus,button${bgColors[bgColor].split(',').join(',button')}:hover,button${bgColors[bgColor].split(',').join(',button')}:focus`] = {
            backgroundColor: theme(`colors.${bgColor}.600`)
        }
    }


    // Background gradient
    const bgGradientColor = {
        '.bg-warm-flame': 'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)',
        '.bg-night-fade': 'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)',
        '.bg-sunny-morning': 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
        '.bg-tempting-azure': 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
        '.bg-amy-crisp': 'linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)',
        '.bg-heavy-rain': 'linear-gradient(to top, #cfd9df 0%, #e2ebf 100%)',
        '.bg-mean-fruit': 'linear-gradient(120deg, #fccb90 0%, #d57eeb 100%)',
        '.bg-malibu-beach': 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)',
        '.bg-deep-blue': 'linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)',
        '.bg-ripe-malin': 'linear-gradient(120deg, #f093fb 0%, #f5576c 100%)',
        '.bg-arielle-smile': 'radial-gradient(circle 248px at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%)',
        '.bg-plum-plate': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        '.bg-happy-fisher': 'linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)',
        '.bg-happy-itmeo': 'linear-gradient(180deg, #2af598 0%, #009efd 100%)',
        '.bg-mixed-hopes': 'linear-gradient(to top, #c471f5 0%, #fa71cd 100%)',
        '.bg-strong-bliss': 'linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%)',
        '.bg-grow-early': 'linear-gradient(to top, #0ba360 0%, #3cba92 100%)',
        '.bg-love-kiss': 'linear-gradient(to top, #ff0844 0%, #ffb199 100%)',
        '.bg-premium-dark': 'linear-gradient(to right, #434343 0%, black 100%)',
        '.bg-happy-green': 'linear-gradient(to bottom, #00b09b, #96c93d)',
        '.bg-vicious-stance': 'linear-gradient(60deg, #29323c 0%, #485563 100%)',
        '.bg-midnight-bloom': 'linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)',
        '.bg-night-sky': 'linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%)',
        '.bg-slick-carbon': 'linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255, 255, 255, 0.4) 0%, rgba(0, 0, 0, 0.25) 200%)',
        '.bg-royal': 'linear-gradient(to right, #141e30, #243b55)',
        '.bg-asteroid': 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',

    }
    colors['.bg-slick-carbon']['backgroundBlendMode'] = 'multiply'

    for (bgGradient in bgGradientColor) {
        /**
         * .bg-{color}
         */
        colors[bgGradient] = {
            backgroundImage: bgGradientColor[bgGradient]
        }
    }


    addUtilities([colors], ['responsive', 'hover', 'focus'])
}