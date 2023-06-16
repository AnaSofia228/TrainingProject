import React from "react";
import Navbar from "../Components/Layouts/Header/NavBar";
import PageServicesHeader from "../Components/Layouts/Header/PageServicesHeader";
import ServiceDetails from "../Components/Layouts/Main/ServiceDetails";
import Footer from "../Components/Layouts/Footer/Footer";

function Services() {
    return (
        <div>
            <div className="servicePage">
                <Navbar/>
                <PageServicesHeader/>
                <ServiceDetails/>
                <Footer/>
            </div>
        </div>
    )
}

export default Services;