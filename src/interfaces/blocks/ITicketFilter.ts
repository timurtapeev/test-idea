import {ICheckbox} from "../UI/ICheckbox";
import {ITab, ITabCurrency} from "../UI/ITab";
import {ITicket} from "../service/ITicket";

export interface ITicketFilter {
    checkboxes: ICheckbox[],
    tabs: ITabCurrency[],
    data: ITicket[]
}