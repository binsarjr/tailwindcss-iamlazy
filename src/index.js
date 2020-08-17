const path = require('path');
const fs = require('fs');


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

    /* Load Components */
    try {
        let componentsPath = path.join(__dirname, "iamlazy/components/")
        let files = fs.readdirSync(componentsPath)

        files.forEach(function(file) {
            let componentPath = `${componentsPath}${file}`
            require(componentPath)({
                addUtilities,
                addComponents,
                addBase,
                addVariant,
                e,
                prefix,
                theme,
                variants,
                config
            })
        });
    } catch (error) {
        throw new Error(error)
    }

    /* Load Utilities */
    try {
        let utilitiesPath = path.join(__dirname, "iamlazy/utilities/")
        let files = fs.readdirSync(utilitiesPath)
        files.forEach(function(file) {
            let utilityPath = `${utilitiesPath}${file}`
            require(utilityPath)({
                addUtilities,
                addComponents,
                addBase,
                addVariant,
                e,
                prefix,
                theme,
                variants,
                config
            })
        });
    } catch (error) {
        throw new Error(error)
    }
}