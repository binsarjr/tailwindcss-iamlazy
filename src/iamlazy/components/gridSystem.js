module.exports = function({ addUtilities, addComponents, e, prefix, config, theme }) {

    columns = {
        '.col': {
            gridColumn: 'auto',
        }
    }

    // col 1-12
    for (let i = 1; i <= 12; i++) {
        // className =  style
        columns[`.col-${i}`] = {
            gridColumn: theme(`gridColumn.span-${i}`)
        }
    }
    const grid12 = {
        '.row': {
            display: 'grid',
            gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
            gridGap: '1rem',
            gap: '1rem',
            ...columns
        }
    }

    columnsResponsive = {}
    for (column in columns) {
        // className =  style
        columnsResponsive[`.row ${column}`] = columns[column]
    }
    addComponents(grid12)
    addUtilities(columnsResponsive, ['responsive'])
}