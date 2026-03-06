import React, { useState } from 'react';
import TicketCard from './TicketCard';
import { toast } from 'react-toastify';

const TicketContainer = ({ ticketData, progress, setProgress, setResolved }) => {

    const [taskStatus, setTaskStatus] = useState([])
    const [status, setStatus] = useState(true)

    const loadData = ticketData;
    // console.log()

    const clickComplete = (task) => {

        const updatedTaskStatus = taskStatus.filter(item => item.id !== task.id);
        setTaskStatus(updatedTaskStatus);

        const updatedProgress = progress.filter(prog => prog.id !== task.id);
        setProgress(updatedProgress);


        setResolved(prev => prev + 1);

        toast("Completed Successfully")
    }
    return (
        <div>
            <h1 className='font-bold text-2xl mt-4 ms-5'>Customer Tickets</h1>
            <div className='flex flex-wrap md:flex-nowrap gap-3 justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 mx-4 md:mx-0'>
                    {
                        loadData.map(ticket => <TicketCard
                            key={ticket.id}
                            ticket={ticket}
                            setStatus={setStatus} taskStatus={taskStatus}
                            setTaskStatus={setTaskStatus}
                            progress={progress}
                            setProgress={setProgress}>
                        </TicketCard>)
                    }
                </div>
                <div>
                    <h2 className='font-bold'>Task Status</h2>

                    {
                        status ?
                            <p>Select a ticket to add to Task Status</p>
                            :
                            taskStatus.length === 0? 
                            <p>Select a ticket to add to Task Status</p>
                            :
                            taskStatus.map(task => <div key={task.id} className='text-black px-3 py-2 mt-3'>
                                <h2>{task.title}</h2>
                                <button onClick={() => clickComplete(task)} className='btn btn-success w-48 mt-2'>Complete</button>
                            </div>)                   
                        }
                    <h2 className='mt-4 font-bold'>Resolved Task</h2>
                    <p>No resolved tasks yet</p>
                </div>
            </div>
        </div>
    );
};

export default TicketContainer;