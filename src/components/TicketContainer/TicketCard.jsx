import React from 'react';
import { FaCalendar } from 'react-icons/fa';
import ellipse from '../../assets/Ellipse 22.png'

const TicketCard = ({ ticket }) => {

    const { id, title, description, customer, priority, status, createdAt } = ticket
    return (
        <div className='py-4 bg-white text-black w-[510px] ps-2 rounded-xl'>
            <div className='flex gap-4'>
                <h3 className='font-semibold'>Login Issues - {title}</h3>

                    <div className={status === 'Open' || status === "Resolved" ? 'badge badge-success my-1.5' : 'badge badge-warning my-1.5'}>                        <img src={ellipse} className='w-5 rounded-b-full' alt="" />
                        {status}
                    </div>

            </div>
            <p className='py-2'>{description}</p>

            <div className='flex gap-12'>
                <div className='flex gap-2'>
                    <p># {id}</p>
                    <p>{priority}</p>
                </div>
                <div className='flex gap-5'>
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

