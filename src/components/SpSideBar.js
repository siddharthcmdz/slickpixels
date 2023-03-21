import React from "react";
import SpSidebarItem from "./SpSidebarItem";

const SpSideBar = (props) => {
    const sidebarItems = [
        'Home',
        'About me',
        'Work Experiences',
        'Hobbies',
        'Blog',
        'Contact me'
    ]

    return (
        <div className="spsidebar">
            <nav>
                {
                    sidebarItems.map((elem) => <SpSidebarItem to={elem}>{elem}</SpSidebarItem>)
                }
            </nav>
        </div>
    )
}

export default SpSideBar