import {ITab} from "./ITab";

export interface ITabsProps {
    tabs: ITab[],
    value: string,
    change: (value: (((prevState: string) => string) | string)) => void,
}
