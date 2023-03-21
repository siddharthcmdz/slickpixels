import React from 'react'
import "./pagestyles.css"
import YoutubeEmbed from './YoutubeEmbed'

const wrapYT = (embedId) => {
    return (
        <div className="myytwrapper">
            <br />
            <YoutubeEmbed embedId={embedId} />
            <br />
        </div>
    )
}

const getHomePage = () => {
    return (
        <p>
            <b>Hello! My name is Sid.</b><br />
            Nice to e-meet you. Please feel free to look around and contact me if you want to say hello or just wanna talk about tech!
            <br /><br />
            My passion lies in computer graphics and visualization with OpenGL, Vulkan, GPGPU in computer vision, and human computer interaction. I have lead teams in scientific visualization for over a decade with experience in Oil & Gas industry, Computer Aided Design, Augmented Reality and Virtual Reality.
            <br /><br />
            Below are some of the innovations that I have brought to our customers:
            <section>
                <article>
                    Announcing VR technology in SOLIDWORKS at SOLIDWORKS World Keynote:
                    {wrapYT("QYzBVjPvohI")}
                </article>
                <article>
                    Presenting key improvements in rendering performance at seminar held in SOLIDWORKS world
                    <br />
                    {wrapYT("h3SqMTEYFpg")}
                </article>
                <article>
                    Presenting VR implementation in SOLIDWORKS booth with collaboration between HTC Vive and nVidia
                    <br />
                    {wrapYT("azjvqsoVx0Q")}
                </article>
                <article>
                    Presenting Selecting hardware for SOLIDWORKS at 3Dexperience World 2020
                    <br />
                    {wrapYT("8Kd1LMnZYZw")}
                </article>
            </section>
        </p>
    )
}

const HomePage = (props) => {
    return (
        <div className="sptext">
            {getHomePage()}
        </div>
    )
}

export default HomePage