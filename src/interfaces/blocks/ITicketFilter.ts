import {ICheckbox} from "../UI/ICheckbox";
import {ITab} from "../UI/ITab";
import {ITicket} from "../service/ITicket";

export interface ITicketFilter {
    checkboxes: ICheckbox[],
    tabs: ITab[],
    data: ITicket[]
}