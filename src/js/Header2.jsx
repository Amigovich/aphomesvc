import React from 'react';
import { NavLink } from 'react-router-dom';

const Header2 = () => {
    const openGoogleCalendar = () => {
        const url = 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3bqkNTtzvixRQT-1wc9pMhiAM5lBQMs8XUDpCX_W0ngQe1DCAH0lY67VyQGK5mwvcGr11vW7Vg?gv=true';
        const width = 600;
        const height = 600;
        const left = (window.screen.width / 2) - (width / 2);
        const top = (window.screen.height / 2) - (height / 2);

        window.open(url, 'GoogleCalendar', `width=${width},height=${height},top=${top},left=${left},scrollbars=yes`);
    };

    return (
        <header className="header2">
            <div className="left">
                <span>Call Us: 612-208-7271</span>
                <button 
                    onClick={openGoogleCalendar} 
                    style={{
                        marginLeft: '10px', 
                        backgroundColor: '#AD1457', 
                        color: 'white', 
                        border: 'none', 
                        padding: '5px 10px', 
                        borderRadius: '5px', 
                        cursor: 'pointer'
                    }}
                >
                    Book Free Consultation
                </button>
            </div>
            <NavLink to="/estimate" className="middle">
                Click Here to Get A Free Quote
            </NavLink>
        </header>
    );
}

export default Header2;
