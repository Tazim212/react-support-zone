import React, { useState } from 'react';
import TicketCard from './TicketCard';
import { toast } from 'react-toastify';

const TicketContainer = ({ ticketData }) => {

    const [taskStatus, setTaskStatus] = useState([])
    const [status, setStatus] = useState(true)

    const loadData = ticketData;
    // console.log(taskStatus)

    const clickComplete = () => {
        toast("Completed Successfully")
    }
    return (
        <div>
            <h1 className='font-bold text-2xl mt-4 ms-5'>Customer Tickets</h1>
            <div className='flex flex-wrap md:flex-nowrap gap-3 justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
                    {
                        loadData.map(ticket => <TicketCard key={ticket.id} ticket={ticket} setStatus={setStatus} taskStatus={taskStatus} setTaskStatus={setTaskStatus}></TicketCard>)
                    }
                </div>
                <div>
                    <h2>Task Status</h2>

                    {
                        status ?
                            "Select a ticket to add to Task Status"
                            :
                            taskStatus.map(task => <div className='text-black px-3 py-2 mt-3'>
                                <h2>{task.title}</h2>
                                <button onClick={clickComplete} className='btn btn-success w-48 mt-2'>Complete</button>
                            </div>)
                    }
                    <h2 className='mt-4'>Resolved Task</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </div>
    );
};

export default TicketContainer;