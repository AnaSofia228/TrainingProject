import React from 'react';
import Navbar from '../../Components/Layouts/Header/NavBar'
import PageHeaderSmartPowerG from '../../Components/Layouts/Header/SubHeader/PageHeaderSmartPowerG';

function SmartPG() {
    return (
        <div>
            <div className='smartPage'>
                <Navbar/>
                <PageHeaderSmartPowerG/>
            </div>
        </div>
    )
}

export default SmartPG;