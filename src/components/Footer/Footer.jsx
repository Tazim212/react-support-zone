import React from 'react';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer>
            <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-10 bg-black mt-5 text-neutral-content p-10">
                <div className='w-full md:w-1/3'>
                    <h1 className='font-bold text-2xl pb-3'>CS - TIcket System</h1>
                    <p>Our dedicated CS Ticket System ensures your technical queries and concerns are addressed promptly.
                        Raise a ticket anytime to track your request status and get expert assistance from our support team 24/7.</p>
                </div>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <div className='flex flex-col'>
                        <a className="link link-hover">About Us</a>
                        <a className="link link-hover">Our Mission</a>
                        <a className="link link-hover">Contact Saled</a>
                    </div>
                </nav>

                <nav>
                    <h6 className="footer-title">Services</h6>
                    <div className='flex flex-col'>
                        <a className="link link-hover">Products & Services</a>
                        <a className="link link-hover">Customer Stories</a>
                        <a className="link link-hover">Download Apps</a>
                    </div>
                </nav>

                <nav>
                    <h6 className="footer-title">Information</h6>
                    <div className='flex flex-col'>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Join Us</a>
                    </div>
                </nav>

                <nav>
                    <h6 className="footer-title pt-0 md:pt-5">Social Links</h6>
                    <div className='flex flex-col'>
                        <a className="link link-hover"><span className='flex justify-center items-center gap-2'><FaTwitter className='bg-amber-50 text-black rounded-full p-0.5'></FaTwitter>@CS — Ticket System</span> </a>
                        <a className="link link-hover"><span className='flex justify-center items-center gap-2'><FaLinkedin className='bg-amber-50 text-black rounded-full p-0.5'></FaLinkedin>@CS — Ticket System</span></a>
                        <a className="link link-hover"><span className='flex justify-center items-center gap-2'><FaFacebook className='bg-amber-50 text-black rounded-full p-0.5'></FaFacebook> @CS — Ticket System</span></a>
                        <a className="link link-hover"><span className='flex justify-center items-center gap-2'><FaYoutube className='bg-amber-50 text-black rounded-full p-0.5'></FaYoutube> @CS — Ticket System</span></a>
                    </div>
                </nav>
            </div>
            <footer className="py-6 bg-black  text-neutral-content">
            <div className='divider'></div>
                <aside className="text-center">
                    <p>© 2026 CS — Ticket System. All rights reserved</p>
                </aside>

            </footer>
        </footer>

    );
};

export default Footer;