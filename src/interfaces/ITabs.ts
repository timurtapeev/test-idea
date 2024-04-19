export interface ITab {
    text: string,
    value: string,
}
export interface ITabs {
    tabs: ITab[],
    value: string,
    change: (value: (((prevState: string) => string) | string)) => void,
}
