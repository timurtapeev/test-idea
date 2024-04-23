import React, {FC} from 'react';
import './TicketCard.css'
import {ITicketProps} from "../../../interfaces/blocks/ITicket";
import getNoun from "../../../service/helpers/getNon";
import Button from "../../UI/Button/Button";
import {addSpacesToNumber} from "../../../service/helpers/addSpacesToNumber";

const TicketCard: FC<ITicketProps> = ({ticket, activeCurrency}) => {
    return (
        <div className="Ticket">
            <div className="Ticket__left-col">
                {ticket.carrier}

                <Button>
                    Купить <br/>
                    за {`${addSpacesToNumber(ticket.price / activeCurrency.cost)} ${activeCurrency.symbol}`}
                </Button>
            </div>
            <div className="Ticket__right-col">
                <div className="Ticket__time">
                    {ticket.departure_time}
                </div>
                <div className="Ticket__stops">
                    {!ticket.stops ? 'без пересадок' : `${ticket.stops} ${getNoun(ticket.stops, 'пересадка', 'пересадки', 'пересадок',)}`}
                </div>
                <div className="Ticket__time">
                    {ticket.arrival_time}
                </div>

                <div className="Ticket__airport-info">
                    <span className="Ticket__city">{`${ticket.origin}, ${ticket.origin_name}`}</span>
                    <span className="Ticket__date">{ticket.departure_date}</span>
                </div>

                <div className="Ticket__airport-info">
                    <span className="Ticket__city">{`${ticket.destination_name}, ${ticket.destination}`}</span>
                    <span className="Ticket__date">{ticket.arrival_date}</span>
                </div>
            </div>
        </div>
    );
};

export default TicketCard;