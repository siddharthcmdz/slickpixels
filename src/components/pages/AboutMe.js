import React from 'react'
import headshot from './img/headshot.jpeg'
import galimg1 from './img/aboutmeimg1.png'
import galimg2 from './img/aboutmeimg2.png'
import galimg3 from './img/aboutmeimg3.png'
import galimg4 from './img/aboutmeimg4.png'
import galimg5 from './img/aboutmeimg5.png'
import galimg6 from './img/aboutmeimg6.png'
import './pagestyles.css'

const getAboutMe = () => {
    return (
        <div>
            <div id="headshot">
                <img src={headshot} alt="headshot" width="200px" />
                <p>
                    <br />
                    Hello!
                    <br /> <br />
                    Thank you for visiting my site! My name is Siddharth Palaniappan and I hope you have a fun time exploring my site. I’ve created this site to journal my experiences and hobbies that might be useful for folks with similar interests. If you have some suggestions on improving this site, please feel free to contact me!
                </p>
            </div>
            <p>
                My journey into 3D computer graphics began at a very young age. I remember first learning DOS to play games on my 486DX2 PC. One game in particular that  proved to defined my future was a game called “Prince of persia’. This is a 2D side scroller game that was conceptualized and created developed by a programmer named Jordan Mechner. He  used a technique called “Rotoscoping” by tracing his younger brothers movements from video capture. This is the first time I had seen such realism in animation.
            </p>
            <p>
                Surprisingly, I hadn’t seen a  lot of retro games that actually made use of rotoscoping.
            </p>
            <p>
                But this paved way for my thirst in computer graphics and when I was in high school, I got my hands on modelling, animation and texturing using 3ds max and photoshop. Back then, access to internet was expensive and it was a luxury. Most of my knowledge were from software manuals and training material. I soon started creating short animation reels and created a local rendering farm at my friend’s cyber café. This helped me understand a lot of concepts in 3D computer graphics.
            </p>
            <p>
                You can find some of my artwork here and they are just some experimentations that I did combining one or more 3D packages and combining the clips with Adobe premiere and after effects. These are not perfect by any means but they were created in an era where it would take days to render a clip which can easily be rendered in realtime these days.
            </p>
            <div>
                <table>
                    <tr>
                        <td>
                            <img src={galimg1} alt="gallery 1" width="200px" />
                        </td>
                        <td><a href="https://youtu.be/erT8NbpkjJw" target="_blank" rel="noopener noreferrer">
                            <img src={galimg2} alt="gallery 2" width="200px" />
                        </a>
                        </td>
                        <td>
                            <a href="https://youtu.be/53bpbhZNEvQ" target="_blank" rel="noopener noreferrer">
                                <img src={galimg3} alt="gallery 3" width="200px" />
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td><img src={galimg4} alt="gallery 4" width="200px" /></td>
                        <td>
                            <a href="https://youtu.be/d3E1st8lNcU" target="_blank" rel="noopener noreferrer">
                                <img src={galimg5} alt="gallery 5" width="200px" />
                            </a>
                        </td>
                        <td>
                            <a href="https://youtu.be/_ihxopTLNNY" target="_blank" rel="noopener noreferrer">
                                <img src={galimg6} alt="gallery 6" width="200px" />
                            </a>
                        </td>
                    </tr>
                </table>
            </div>

            <p>
                Soon my interest  in using 3D packages diverted to actually implementing tools that produced these awesome graphics rather than using them. That was when I first got into C++ and OpenGL 2.1.
            </p>

            <p>
                My first usage of OpenGL was in a school project where I had implemented a surgical simulator that allowed you to load a model of a human heart. The model was stored in memory using half edge data structures and the per vertex attributes passed down to the GPU in immediate mode of rendering (ugh). I also implemented a ray intersection test that allowed me to simulate a blade able to split the mesh simulating surgical operation on the human model.
            </p>
            <p>
                After school, I had the opportunity to work in diverse industries and domains that I talk about in more detail in my “work experience” section.
            </p>

            <p>
                At every turn in my journey with 3D graphics and rendering, it has only wowed me and I’m so excited to see how this field is maturing so rapidly now a days.
            </p>
        </div>
    )
}

const AboutMe = () => {
    return (
        <div>{getAboutMe()}</div>
    )
}

export default AboutMe