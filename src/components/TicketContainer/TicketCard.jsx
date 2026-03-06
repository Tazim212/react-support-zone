import React from 'react';
import { FaCalendar } from 'react-icons/fa';
import ellipse from '../../assets/Ellipse 22.png'
import { toast } from 'react-toastify';

const TicketCard = ({ ticket, taskStatus, setTaskStatus, setStatus, setProgress, progress}) => {

    const { id, title, description, customer, priority, status, createdAt } = ticket

    const taskFunc = (data) =>{
        const newTask = [...taskStatus, data]
        setTaskStatus(newTask)
        const newProgress = [...progress, data]
        setProgress(newProgress)
        toast("Task has been addeded")
        setStatus(false)
    }

    return (
        <div onClick={()=> taskFunc(ticket)} className='py-4 bg-gray-200 text-black w-fit md:w-[470px] px-2 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95'>
            <div className='flex gap-4'>
                <h3 className='font-semibold'>Login Issues - {title}</h3>

                    <div className={status === 'Open' || status === "Resolved" ? 'badge badge-success w-2/4 md:w-28 my-1.5 py-3' : 'badge badge-warning my-1.5 w-3/4 md:w-32 py-3'}>
                        <img src={ellipse} className='w-5 rounded-full' alt="" />
                        {status}
                    </div>

            </div>
            <p className='py-2'>{description}</p>

            <div className='flex gap-2 md:gap-7 md:justify-center md:items-center'>
                <div className='flex gap-1 md:gap-2'>
                    <p># {id}</p>
                    <p>{priority}</p>
                </div>
                <div className='flex gap-2'>
                    <p className='ps-2 md:ps-0'>{customer}</p>
                    <div className='flex justify-center items-center gap-2'>
                        <span className='text-xl'><FaCalendar></FaCalendar></span>
                        <p>{createdAt}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketCard;

