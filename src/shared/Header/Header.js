import React, { useState, useEffect } from 'react';
// import { renderIntoDocument } from 'react-dom/test-utils';
import { FaBars, FaUser, FaTimes, FaHome, FaChartLine } from 'react-icons/fa';
import Logo from '../../assets/images/logo.png';
import '../../assets/styles/common.scss';
import '../Header/Header.scss';

const Header = () => {
    const [isOpen, setIsopen] = useState(false);
    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
        console.log(isOpen);
    };

    const headerLinks = {
        links: [
            'Buy',
            'Rent',
            'Sold',
            'New Developments',
            'Price Estimator',
            'Find Agents',
            'Auction Results',
            'Advice',
            'News',
            'Our Network',
            'Loans',
            'Conveyancing',
        ],
        services: ['Buy', 'Rent', 'Sold', 'New Developments'],
        price: 'Price Estimate',
        others: [
            'Businesses',
            'Rural',
            'Holiday Rentals',
            'Find Agents',
            'Auction Results',
            'Advice',
            'News',
            'Loans',
            'Conveyancing',
            'About Us',
            'Contact Us',
            'Terms of Use',
            'Privacy Policy',
        ],
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        // isOpen && document.body.style.overflow = 'hidden';
        // !isOpen && document.body.style.overflow = 'unset';
    }, [isOpen]);

    return (
        <div className='main'>
            <div className='header flex'>
                <div className='inner-header'>
                    <div
                        className={`${isOpen == true ? 'humburg-menu' : ''}`}
                        onClick={ToggleSidebar}>
                        {/* {isOpen == true ? (
                            <FaTimes className='close-btn' />
                        ) : (
                            <FaBars />
                        )} */}
                        <FaBars className='humburg-menu' />
                    </div>
                    <div className='logo'>
                        <img
                            src={Logo}
                            className='logo-img'
                            alt='realestate logo'></img>
                    </div>
                    <div className='navbar'>
                        <ul className='nav-links'>
                            {headerLinks.links.map((link, key) => (
                                <li
                                    className='li--style-none navigation-links'
                                    key={link}>
                                    {link}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <FaUser className='profile-icon' />
                    <div className='sign-in'>
                        <p className='text'>Sign In</p>
                    </div>
                </div>
            </div>
            <div className={`sidebar ${isOpen == true ? 'active' : ''}`}>
                <div className='inner-header'>
                    <div className='btn btn-primary' onClick={ToggleSidebar}>
                        <FaTimes
                            className='close-btn'
                            onClick={ToggleSidebar}
                        />
                    </div>

                    <div className='logo'>
                        <img
                            src={Logo}
                            className='logo-img'
                            alt='realestate logo'></img>
                    </div>
                    <FaUser className='profile-icon' />
                </div>
                <div className='services'>
                    <div className='services-list'>
                        {headerLinks.services.map((service) => (
                            <div className='link--list' key={service}>
                                <div className='home-icon'>
                                    <FaHome />
                                </div>
                                <div className='service-name'>{service}</div>
                            </div>
                        ))}
                    </div>
                    <div className='link--list'>
                        <div className='home-icon'>
                            <FaChartLine />
                        </div>
                        <div className='service-name'>{headerLinks.price}</div>
                    </div>
                </div>
                <div className='others'>
                    {headerLinks.others.map((other) => (
                        <div className='other-links' key={other}>
                            {other}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Header;
