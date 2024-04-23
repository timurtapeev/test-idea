import {ICurrency} from "../service/ICurrency";

export interface ITab {
    text: string,
    value: string,
}
export interface ITabCurrency extends ITab, ICurrency {}
export interface ITabProps extends ITab {
    isCurrent: boolean,
    tabsGroupId: string,
    change: (value: (((prevState: string) => string) | string)) => void
}