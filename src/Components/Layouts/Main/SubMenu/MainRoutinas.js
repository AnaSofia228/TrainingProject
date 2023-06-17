import React from "react";
import DataRoutine from "../../../Data/DataRoutinas";
// import RoutineFacture from '../../../Data/RoutineFacture';

function MainRotinas() {
    return (
        <div className="mainRoutines">
            {/* <RoutineFacture/> */}
            <DataRoutine/>
        </div>
    )
}

export default MainRotinas;