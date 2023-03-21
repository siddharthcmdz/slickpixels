import React from "react";
import "./componentstyles.css"

import SpSideBar from "./SpSideBar";
import SpContent from "./SpContent";
import SpSidebarItem from "./SpSidebarItem";

const SpBody = () => {
    const sidebarItems = [
        'About me',
        'Work Experiences',
        'Hobbies',
        'Blog',
        'Contact me'
    ]
    return (
        <div className="spbody">
            <SpSideBar>
                {
                    sidebarItems.map((elem) => <SpSidebarItem name={elem} />)
                }
            </SpSideBar>
            <SpContent></SpContent>
        </div>
    )
}

export default SpBody