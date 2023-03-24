import React from "react";
import SpSidebarItem from "./SpSidebarItem";

const SpSideBar = (props) => {
    const sidebarItems = [
        'Home',
        'About me',
        'Work Experience',
        'Hobbies',
        'Blog',
        'Contact me'
    ]

    return (
        <div className="spsidebar" key="spsidebar">
            <nav>
                {
                    sidebarItems.map((elem) => <SpSidebarItem to={elem}>{elem}</SpSidebarItem>)
                }
            </nav>
        </div>
    )
}

export default SpSideBar