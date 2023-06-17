import React from 'react';
import Navbar from "../Components/Layouts/Header/NavBar";
import PageGymHeader from '../Components/Layouts/Header/PageGymHeader';
import DataGym from '../Components/Data/DataGyms';
import Footer from "../Components/Layouts/Footer/Footer";

function Gyms() {
    return (
        <div>
            <div className='gymPage'>
                <Navbar/>
                <PageGymHeader/>
            </div>
            <div className='dataGyms'><DataGym/></div>
            <div><Footer/></div>
        </div>
    )
}

export default Gyms;