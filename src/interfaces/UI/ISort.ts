type ISortValue = 'increase' | 'decrease'

export interface ISortProps {
    text: string,
    value: ISortValue
    change: (value: (((prevState: ISortValue) => ISortValue) | ISortValue)) => void
}