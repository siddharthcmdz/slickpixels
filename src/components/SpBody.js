import React from "react";
import "./componentstyles.css"

import SpSideBar from "./SpSideBar";
import AboutMe from "./pages/AboutMe";
import Blog from "./pages/Blog";
import WorkExperience from "./pages/WorkExperience";
import ContactMe from "./pages/ContactMe";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Hobbies from "./pages/Hobbies";

const SpBody = () => {
    return (
        <div className="spbody">
            <SpSideBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/Home" element={<HomePage />} />
                <Route path="/About me" element={<AboutMe />} />
                <Route path="/Work Experiences" element={<WorkExperience />} />
                <Route path="/Hobbies" element={<Hobbies />} />
                <Route path="/Blog" element={<Blog />} />
                <Route path="/Contact me" element={<ContactMe />} />
            </Routes>
        </div>
    )
}

export default SpBody