import React from 'react';

import './styles.css';

function Navbar ({ btnText, onClick }) {
    return(
        <div className='dashbord-header-container'>
            {btnText && 
                <button className='dashbord-header-btn' onClick={onClick}>{btnText}</button>
            }

            <div className='dashbord-header-right'>
                
                <img alt='notification-header' className='dashbord-header-avatar'/>
            </div>
        </div>
    )
}

export default Navbar;