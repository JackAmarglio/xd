import React from "react";
import "./index.css"
import Card from "./Card"

const Content = () => {
    const img = ["image1", "image2", "image3", "image4"];
    const title = ["Name LastName", "Name LastName", "Mihai Emilian Stoica", "Mihai Emilian Stoica"];
    const role = ["Role 1", "Role 2", "Constructor", "Mester"];
    const location = ["City", "City", "Bucuresti, Sector 2", "Bucuresti Sector 2"];
    const skillset = ["painting", "repairs", "roofing"]
    
    return(
        <div className="content">
            <span>453 freelancers after search</span>
            <Card img={img} title={title} role={role} location={location} skillset={skillset} />
        </div>
    )
}

export default Content