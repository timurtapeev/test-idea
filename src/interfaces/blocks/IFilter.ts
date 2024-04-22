import {ITab} from "../UI/ITab";
import {ICheckbox} from "../UI/ICheckbox";

export interface IFilterFieldCheckboxGroup {
    name: string,
    type: 'checkboxGroup'
    value: string[],
    fields: ICheckbox[]
    change: (value: (((prevState: string[]) => string[]) | string[])) => void,
}
export interface IFilterFieldTabs {
    name: string,
    type: 'tabs',
    value: string,
    fields: ITab[],
    change: (value: (((prevState: string) => string) | string)) => void,
}
export interface IFilter {
    fields: (IFilterFieldTabs | IFilterFieldCheckboxGroup)[],
}