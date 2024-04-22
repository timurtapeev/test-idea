export interface ICheckbox {
    text: string,
    value: string,
}

export interface ICheckboxProps extends ICheckbox {
    checked: boolean,
    change: (value: string) => void,
}