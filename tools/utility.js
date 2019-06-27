function assert (value) {
    if (value) {
        return value
    } else {
        throw Error('Assertion Failed')
    }
}


function shuffle (iterable) {
    let array = Array.from(iterable)
    array.sort((a, b) => (Math.random() < 0.5)? 1: -1)
    return array
}


function choose (collection) {
    if (typeof collection == 'string')
    collection = Array.from(collection)
    assert(collection instanceof Array)
    return collection[Math.floor(collection.length * Math.random())]
}


export { assert, shuffle, choose }
