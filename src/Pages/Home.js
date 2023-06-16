import React from "react";
import '../App.css'
import Navbar from "../Components/Layouts/Header/NavBar";
import CarouselComponent from "../Components/Layouts/Main/Carousel";
import ServiceArea from "../Components/Layouts/Main/ServiceArea";
import SugerettionArea from "../Components/Layouts/Main/SugerettionArea";
import Footer from "../Components/Layouts/Footer/Footer";

function Home() {
    return (
        <div>
            <div className="homePage">
                <Navbar/>
                <CarouselComponent/>
                <div className="homeMain">
                    <ServiceArea/>
                </div>
                <div className="sugerettionArea">
                    <SugerettionArea/>
                </div>
                <div className="footerHome">
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default Home;