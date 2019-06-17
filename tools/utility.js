function assert (value) {
    if (value) {
        return value
    } else {
        throw Error('Assertion Failed')
    }
}


export { assert }
