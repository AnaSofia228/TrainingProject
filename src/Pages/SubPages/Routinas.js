import React from 'react';
import Navbar from '../../Components/Layouts/Header/NavBar'
import PageRoutinasHeader from '../../Components/Layouts/Header/SubHeader/PageRoutinasHeader';
import MainRotinas from '../../Components/Layouts/Main/SubMenu/MainRoutinas';
import Footer from '../../Components/Layouts/Footer/Footer'

function Routinas() {
    return (
        <div>
            <div className='routinesPage'>
                <Navbar/>
                <PageRoutinasHeader/>
                <MainRotinas/>
                <Footer/>
            </div>
        </div>
    )
}

export default Routinas;