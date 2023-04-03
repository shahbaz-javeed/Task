import React from 'react';
import Button from '@mui/material/Button';


const NavBer = () => {
  return (
    <div className='navbar'>
        <div className="Top">
        <h1 className='logo'>LODGN</h1>
            <ul className="navbar_UL">
                <li style={{color: "#72AA83"}}>Current Requests</li>
                <li>Ongoing Stays</li>
                <li>Previous Stays</li>
                <li>Reports</li>
            </ul>
        </div>
        <div className="navbar_Bottom_Container">
        <Button variant="contained" className='navbar_button'>Log-Out</Button>
            <p>Help Desk:</p>
            <p>786-674 9988</p>
        </div>
    </div>
  )
}

export default NavBer