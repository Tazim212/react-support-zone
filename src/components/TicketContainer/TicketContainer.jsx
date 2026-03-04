import React from 'react';
import TicketCard from './TicketCard';

const TicketContainer = ({ ticketData }) => {

    const loadData = ticketData;

    return (
        <div>
            <h1 className='font-bold text-2xl mt-4 ms-4'>Customer Tickets</h1>
            <div className='flex justify-around items-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
                    {
                        loadData.map(ticket =><TicketCard key={ticket.id} ticket={ticket}></TicketCard>)
                    }
                </div>
                <h2>not okk</h2>
            </div>
        </div>
    );
};

export default TicketContainer;