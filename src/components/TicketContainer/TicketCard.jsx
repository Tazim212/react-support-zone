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
        <div onClick={()=> taskFunc(ticket)} className='py-4 bg-gray-200 text-black w-[470px] px-3 mx-3 md:mx-0 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95'>
            <div className='flex gap-4'>
                <h3 className='font-semibold'>Login Issues - {title}</h3>

                    <div className={status === 'Open' || status === "Resolved" ? 'badge badge-success my-1.5' : 'badge badge-warning my-1.5'}>                        <img src={ellipse} className='w-5 rounded-b-full' alt="" />
                        {status}
                    </div>

            </div>
            <p className='py-2'>{description}</p>

            <div className='flex gap-7 justify-center items-center'>
                <div className='flex gap-2'>
                    <p># {id}</p>
                    <p>{priority}</p>
                </div>
                <div className='flex gap-2'>
                    <p>{customer}</p>
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

