import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Header2 = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://calendar.google.com/calendar/scheduling-button-script.js';
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            const target = document.getElementById('calendar-scheduling-button');
            window.calendar.schedulingButton.load({
                url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3bqkNTtzvixRQT-1wc9pMhiAM5lBQMs8XUDpCX_W0ngQe1DCAH0lY67VyQGK5mwvcGr11vW7Vg?gv=true',
                color: '#AD1457',
                label: 'Book an appointment',
                target,
            });
        };
    }, []);

    return (
        <header className="header2">
            <div className="left">
                <span>Call Us: 612-208-7271</span>
                <div id="calendar-scheduling-button" style={{ display: 'inline-block', marginLeft: '10px' }}></div>
            </div>
            <NavLink to="/estimate" className="middle">
                Click Here to Get A Free Quote
            </NavLink>
            <div className="right">We Accept Credit Card</div>
        </header>
    );
}

export default Header2;
