export function addSpacesToNumber(v: number | string): string {
    let locValue

    if (typeof v === 'number') {
        v = Math.round(v)
    }
    v = String(v)
    locValue = v.split('').reverse().map((item, i) => i % 3 == 0 ? item + ' ' : item)

    return locValue.reverse().join('')
}
