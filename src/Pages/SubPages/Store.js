import React from 'react';
import Navbar from '../../Components/Layouts/Header/NavBar'
import PageStoreHeader from '../../Components/Layouts/Header/SubHeader/PageStoreHeader';
import MainStore from '../../Components/Layouts/Main/SubMenu/MainStore';
import Footer from '../../Components/Layouts/Footer/Footer'

function Store() {
    return (
        <div>
            <div className='storePage'>
                <Navbar/>
                <PageStoreHeader/>
                <MainStore/>
                <Footer/>
            </div>
        </div>
    )
}

export default Store;