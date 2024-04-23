import {ITicket} from "../service/ITicket";
import {ICurrency} from "../service/ICurrency";

export interface ITicketProps {
    ticket: ITicket,
    activeCurrency: ICurrency,
}