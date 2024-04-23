import {ICheckbox} from "../UI/ICheckbox";
import {ITabCurrency} from "../UI/ITab";
import {ITicket} from "../service/ITicket";

export interface ITicketFilter {
    checkboxes: ICheckbox[],
    tabs: ITabCurrency[],
    tickets: ITicket[]
}