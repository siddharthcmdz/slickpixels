import React from "react"

const handleClick = (evt) => {
    console.log(evt)
}

const SpSidebarItem = (props) => {
    return (
        <div>
            <button onClick={handleClick}>{props.name}</button>
        </div>
    )
}

export default SpSidebarItem
