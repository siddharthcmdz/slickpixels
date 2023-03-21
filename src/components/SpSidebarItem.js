import React from "react"


const SpSidebarItem = (props) => {
    return (
        <div className="spsidebaritem">
            <li>
                <a href={props.name}>
                    {props.name}
                </a>
            </li>
        </div>
    )
}

export default SpSidebarItem
