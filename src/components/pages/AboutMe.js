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

const getAboutMe = () => {
    return (
        <p>
            <b>Hello! My name is Sid.</b><br />
            Nice to e-meet you. Please feel free to look around and contact me if you want to say hello or if you have any suggestions!
            <br /><br />
            My passion lies in computer graphics and visualization with OpenGL, Vulkan, GPGPU in computer vision, and human computer interaction. I have lead teams in scientific visualization for over a decade with experience in Oil & Gas industry, Computer Aided Design, Augmented Reality and Virtual Reality.
            <br /><br />
            Below are some of the innovations that I have brought to our customers:
            <section>
                <article>
                    Announcing VR technology in SOLIDWORKS at SOLIDWORKS World Keynote:
                    {wrapYT()}
                </article>
                <article>
                    Presenting key improvements in rendering performance at seminar held in SOLIDWORKS world
                    <br />
                    {wrapYT()}
                </article>
                <article>
                    Presenting VR implementation in SOLIDWORKS booth with collaboration between HTC Vive and nVidia
                    <br />
                    {wrapYT("azjvqsoVx0Q")}
                </article>
                <article>
                    Presenting the awesome work the graphics team did at GTC: (Session ID)
                    <br />
                    {wrapYT()}
                </article>
            </section>
        </p>
    )
}

const AboutMe = (props) => {
    return (
        <div className="sptext">
            {getAboutMe()}
        </div>
    )
}

export default AboutMe