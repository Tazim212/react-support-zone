import React from 'react';

const Footer = () => {
    return (
        <footer className="flex justify-center items-center gap-10 bg-sky-800 mt-5 text-neutral-content p-10">
            <div className='w-1/3'>
                <h1 className='font-bold text-2xl'>CS - TIcket System</h1>
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
                <h6 className="footer-title">Social Links</h6>
                <div className='flex flex-col'>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Join Us</a>
                </div>
            </nav>


        </footer>
    );
};

export default Footer;