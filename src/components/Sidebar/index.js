import React from "react";
import "./index.css"

const Sidebar = () => {
    return(
        <div className="sidebar">
            <div className="search">
                <div className="search_title">Search by service</div>
            </div>
            <input type="text" placeholder="painting, repairs, roofing"/>
        </div>
    )
}

export default Sidebar