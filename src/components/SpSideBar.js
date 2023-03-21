import React from "react";
const SpSideBar = (props) => {
    return (
        <div className="spsidebar">
            <ul>
                {
                    props.children
                }
            </ul>
        </div>
    )
}

export default SpSideBar