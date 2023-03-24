import { Button } from "@mui/material"
import React from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"

const SpSidebarItem = ({ to, children, ...props }) => {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    const path = window.location.pathname
    console.log(path)
    return (
        <div className={isActive ? "active-spsidebaritem" : "spsidebaritem"} key="spsidebaritem">
            <Button style={{ borderRadius: 7, backgroundColor: '#DDDDDD' }} variant="contained">
                <Link to={to} {...props}>
                    {children}
                </Link>
            </Button>
        </div>
    )
}

export default SpSidebarItem
