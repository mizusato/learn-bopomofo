import { assert } from './utility'


function normalize_table (table) {
    assert(table instanceof Object)
    let to_camel_case = prop => {
        return prop.replace(/([a-zA-Z])-([a-zA-Z])/, (_, p1, p2) => {
            return `${p1}${p2.toUpperCase()}`
        })
    }
    let four_columns = prefix => value => {
        let [top, right, bottom, left] = value.split(' ')
        assert(top)
        return {
            [`${prefix}-top`]: Number(top),
            [`${prefix}-right`]: Number(right || top),
            [`${prefix}-bottom`]: Number(bottom || top),
            [`${prefix}-left`]: Number(left || right || top)
        }
    }
    let rules = {
        padding: four_columns('padding'),
        margin: four_columns('margin')
    }
    let normalized = {}
    for (let selector of Object.keys(table)) {
        let classes = selector.split(' ')
        for (let class_ of classes) {
            if (!normalized[class_]) { normalized[class_] = {} }
            for (let prop of Object.keys(table[selector])) {
                let value = table[selector][prop]
                if (rules[prop]) {
                    let delta = rules[prop](value)
                    for (let p of Object.keys(delta)) {
                        normalized[class_][to_camel_case(p)] = delta[p]
                    }
                } else {
                    normalized[class_][to_camel_case(prop)] = value
                }
            }
        }
    }
    return normalized
}


function get_style (table, class_list) {
    assert(table instanceof Object)
    assert(class_list instanceof Array)
    let style = {}
    for (let class_ of class_list) {
        assert(table[class_])
        let rule = table[class_]
        assert(rule instanceof Object)
        Object.assign(style, rule)
    }
    return style
}


function create_sheet (table) {
    assert(table instanceof Object)
    table = normalize_table(table)
    let inflate = (...class_list) => {
        return get_style(table, class_list)
    }
    inflate.__table = table
    return inflate
}


function merge_style (style, props) {
    return Object.assign({}, style, props.style || {})
}


export { create_sheet, merge_style }
