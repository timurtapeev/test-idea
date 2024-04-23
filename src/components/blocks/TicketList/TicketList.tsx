import React, {FC} from 'react';
import './TicketList.css'
import {ITicketListProps} from "../../../interfaces/blocks/ITicketList";
import TicketCard from "../TicketCard/TicketCard";

const TicketList: FC<ITicketListProps> = ({ticketList, activeCurrency}) => {
    return (
        <div className="TicketList">
            {ticketList.map((el, i) => {
                return (
                    <TicketCard
                        key={i}
                        ticket={el}
                        activeCurrency={activeCurrency}
                    />
                )
            })}
        </div>
    );
};

export default TicketList;