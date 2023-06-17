import React from 'react';
import Navbar from '../../Components/Layouts/Header/NavBar'
import PageHeaderSmartPowerG from '../../Components/Layouts/Header/SubHeader/PageHeaderSmartPowerG';
import MainSmartPowerGym from '../../Components/Layouts/Main/SubMenu/MainSmartPowerGym';
import Footer from '../../Components/Layouts/Footer/Footer'

function SmartPG() {
    return (
        <div>
            <div className='smartPage'>
                <Navbar/>
                <PageHeaderSmartPowerG/>
                <div className='smart-data'>
                    <MainSmartPowerGym/>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default SmartPG;