import React from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"

const SpSidebarItem = ({ to, children, ...props }) => {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    const path = window.location.pathname
    console.log(path)
    return (
        <div className={isActive ? "active-spsidebaritem" : "spsidebaritem"}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </div>
    )
}

export default SpSidebarItem
