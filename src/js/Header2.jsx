import React from 'react';
import { NavLink } from 'react-router-dom';

const Header2 = () => {
    return (
        <header className="header2">
            <a className="left">Call Us: 612-208-7271</a>
            <NavLink to="/estimate" className="middle">
                Click Here to Get A Free Quote
            </NavLink>
            <a className="right">We Accept Credit Card</a>
             <a className="right"><!-- Google Calendar Appointment Scheduling begin -->
<link href="https://calendar.google.com/calendar/scheduling-button-script.css" rel="stylesheet">
<script src="https://calendar.google.com/calendar/scheduling-button-script.js" async></script>
<script>
(function() {
  var target = document.currentScript;
  window.addEventListener('load', function() {
    calendar.schedulingButton.load({
      url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3bqkNTtzvixRQT-1wc9pMhiAM5lBQMs8XUDpCX_W0ngQe1DCAH0lY67VyQGK5mwvcGr11vW7Vg?gv=true',
      color: '#D50000',
      label: "Book Free Consulation Today!",
      target,
    });
  });
})();
</script>
<!-- end Google Calendar Appointment Scheduling --></a>

            
        </header>
    );
}

export default Header2;
