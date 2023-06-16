import React from "react";
import NavBar from "../Components/Layouts/Header/NavBar";
import PageHeader from "../Components/Layouts/Header/PageHeader";
import Slogan from "../Components/Layouts/Main/Slogan";
import MissionVision from "../Components/Layouts/Main/MissionVision";
import Footer from "../Components/Layouts/Footer/Footer";

function Us() {
    return (
        <div>
            <div className="usPage">
                <NavBar/>
                <PageHeader/>
                <div><Slogan/></div>
                <div><MissionVision/></div>
                <div><Footer/></div>
            </div>
        </div>
    )
}

export default Us;