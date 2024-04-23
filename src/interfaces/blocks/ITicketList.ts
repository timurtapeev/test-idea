import {ITicket} from "../service/ITicket";
import {ICurrency} from "../service/ICurrency";

export interface ITicketListProps {
    ticketList: ITicket[],
    activeCurrency: ICurrency
}