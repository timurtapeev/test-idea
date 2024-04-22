import React, {FC} from 'react';
import './TicketFilter.css'
import Filter from "../Filter/Filter";
import TicketList from "../TicketList/TicketList";
import {ITicketFilter} from "../../../interfaces/blocks/ITicketFilter";

const TicketFilter: FC<ITicketFilter> = ({tabs, checkboxes, data}) => {
    return (
        <div className="TicketFilter">
            <Filter
                tabs={tabs}
                checkboxes={checkboxes}
            />

            <TicketList
                ticketList={data}
            />
        </div>
    );
};

export default TicketFilter;