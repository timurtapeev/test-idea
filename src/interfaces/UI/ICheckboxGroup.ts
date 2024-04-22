import {ICheckbox} from "./ICheckbox";

export interface ICheckboxGroup {
    checkboxes: ICheckbox[],
    activeCheckboxes: string[],
    changeValue: (value: (((prevState: string[]) => string[]) | string[])) => void
}