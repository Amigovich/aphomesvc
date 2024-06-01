import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Header2 = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://calendar.google.com/calendar/scheduling-button-script.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <header className="header2">
            <a className="left">Call Us: 612-208-7271</a>
            <NavLink to="/estimate" className="middle">
                Click Here to Get A Free Quote
            </NavLink>
            <a className="right">We Accept Credit Card</a>
            <div className="right">
                <link href="https://calendar.google.com/calendar/scheduling-button-script.css" rel="stylesheet" />
                <div data-calendar-url="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3bqkNTtzvixRQT-1wc9pMhiAM5lBQMs8XUDpCX_W0ngQe1DCAH0lY67VyQGK5mwvcGr11vW7Vg?gv=true" 
                     data-calendar-color="#D50000" 
                     data-calendar-label="Book Free Consultation Today!"></div>
            </div>
        </header>
    );
};

export default Header2;

