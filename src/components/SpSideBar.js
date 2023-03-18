import React from "react";
const SpSideBar = (props) => {
    return (
        <div className="spsidebar">
            {
                props.children
                // sidebarItems.map((elem) => <SpSidebarItem name={elem} />)
            }
        </div>
    )
}

export default SpSideBar