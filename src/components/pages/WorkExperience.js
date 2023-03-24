import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import React from 'react'
import dsd from './img/dsd.jpg'
import swx19 from './img/swx2019.jpg'
import edxvr from './img/edxVR.jpg'
import gml1 from './img/gml1.png'
import gml2 from './img/gml2.png'
import gml3 from './img/gml3.png'
import gml4 from './img/gml4.png'
import './pagestyles.css'

const getWorkExperience = () => {
    return (
        <div className="workexp">
            <h2 id="workexp_header">Work Experience</h2>

            <Accordion >
                <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: "#EAEAEA" }}>
                    <Typography>
                        <table>
                            <tr><b>Halliburton - Landmark Graphics Corporation</b></tr>
                            <tr>(2008-2014)</tr>
                            <tr>Principle Engineer</tr>
                        </table>
                    </Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <Typography>
                        <p>
                            <b>Landmark Graphics Corporation</b> specialized in Oil & gas applications to assist geophysicists to analyze and interpret large volumetric data (gigabytes to terabytes in size). These included seismic, horizons, faults, GIS and well-data. The product I worked on was called DecisionSpace Desktop (precursor to <a href="https://www.landmark.solutions/ds365">DecisionSpace 365</a>).
                        </p>
                        <div id="imgcenter">
                            <img alt="decisionspace desktop" src={dsd} width="400px" />
                        </div>
                        <p>
                            Prior to using our software solution, geophysicists used paper and pen to analyze compositions of earth crust to maximize possibility of hitting oil. The decisions made by the scientists have huge cost risks towards drilling operations. So accuracy and efficiency of rendering large volumetric data for users interpretation is of utmost importance.
                        </p>
                    </Typography>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: "#EAEAEA" }}>
                            <Typography>
                                <b>Features engineered</b>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <ul>
                                    <b>Indirect Volume Rendering</b>
                                    <li>Engineered and implemented indirect volume rendering where a polygon (slice) can display projected volumetric samples and freely roam within the volume.</li>
                                    <li>For a better user experience, we wanted proper clipping of polygon slice within the bounds of the volume. I implemented a CPU based clipping solution based on <a href="https://en.wikipedia.org/wiki/Cohen%E2%80%93Sutherland_algorithm">Cohen Sutherland algorithm</a>.</li>
                                    <li>Implemented bump mapping on volume slice that accentuated high frequency signals to help users make better decisions.
                                    </li>
                                    <li>Implemented asynchronous sampling of volumetric data on CPU for very large volume slices that rendered progressively and this avoid stalls in rendering on the GPU.  </li>
                                </ul>

                                <ul>
                                    <b>UI framework</b>
                                    <li>Conceptualized and implemented OpenGL based HUD (Heads Up Display) within the 3D canvas.</li>
                                    <li>Established an extendable framework for the team to create widget components for different behavior (Ex- toolbar, buttons, navigation menu, context menu etc)</li>
                                </ul>

                                <ul><b>Contour projection</b>
                                    <li>Our users work with GIS data and we needed to render high resolution contours overlaid on the terrain.</li>
                                    <li>I implemented a technique called <a href="https://www.semanticscholar.org/paper/Projective-texture-mapping-Everitt/ea67b54160c42ab7ada736736b7df6321258c88a">projection mapping</a> that projected a GPU texture constructed on the fly.</li>
                                    <li>Profiled and fixed any bottlenecks on the GPU and CPU.</li>
                                </ul>
                                <ul>
                                    <b>Rendering of Multi-resolution tiles</b>
                                    <li>Researched a prominent rendering library “Open Inventor” by FEI/VSG and quickly became subject expert.</li>
                                    <li>Implemented interop between our native graphics renderer and the thirdparty Open Inventor.</li>
                                    <li>Implement google map like functionality for multi resolution tiled images for GIS shape data that were being served by ESRI an online server.</li>
                                </ul>
                                <ul>
                                    <b>Augmented Reality</b>
                                    <li>Introduced Augmented Reality technology as an innovative way of visualizing and maneuvering data within DecisionSpace Desktop
                                    </li>
                                    <li>Implemented various hand gesture recognition that translated to events within the renderer.
                                    </li>
                                    <li>Implemented head tracking that enabled asymmetric viewing frustrum that provided a better depth perception
                                    </li>
                                    <li>Utilized Microsoft Kinect to retrieve depth images and hand gesture events.
                                    </li>
                                    <li>
                                        Implemented algorithm using OpenCV to detect finger detection in screen space for finer controls in DecisionSpace Desktop.</li>
                                </ul>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: "#EAEAEA" }}>
                            <Typography>
                                <b>Leadership excellence</b>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <ul>
                                    <li>Was <b>promoted to principle engineer</b> and team tech lead to handle a team of seven</li>
                                    <li>Played <b>scrum master</b> for daily standup and managed projects in agile methodology which included iteration planning, backlog grooming, QA strategies</li>
                                    <li>Held external relations to third-party vendors like VSG (<b>OpenInventor</b>), <b>nVidia</b>,  <b>ESRi</b> (<b>ArcGIS</b>)</li>
                                    <li>Awarded patent for AR usage in DecisionSpace Desktop (Methods and Systems for Gesture based Petrotechnical Application Control (<b>US 2014/0157129 A1</b>))</li>
                                    <li>Presented strategy of innovations using better human computer interactions with CTO and CEO of Halliburton.</li>
                                </ul>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: "#EAEAEA" }}>
                            <Typography>
                                <b>Technical skills</b>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <ul>
                                    <li>Expertise in Java, JVM internals, JNI, JOGL, C, C++, C#, OpenGL, nVidia Cg, CUDA, OpenCV</li>
                                    <li>IDEs used were Netbeans, Eclipse, Visual Studio 2015</li>
                                    <li>SCM used were SVN and CVS</li>
                                </ul>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>


                </AccordionDetails>

            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: "#EAEAEA" }}>
                    <Typography>
                        <table>
                            <tr><b>Dassault Systemes - SOLIDWORKS</b></tr>
                            <tr>(2014-2021)</tr>
                            <tr>Director of Graphics and Advanced visualizing</tr>
                        </table>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <b>SOLIDWORKS</b> is a world renowned software and company in design and manufacture industry. With over 6 million users, the software is used in a over 80,000 companies including aerospace, medical device manufacturing, embedded system chipsets and circuitry etc. I was responsible for building a modern renderer based on modern OpenGL and managing 3D rendering and visualization for a portfolio of products.
                        <div id="imgrow">
                            <img src={swx19} alt="Solidworks 2019" width="400px" />
                            <img src={edxvr} alt="eDrawings VR 2019" width="400px" />
                        </div>
                    </Typography>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: "#EAEAEA" }}>
                            <Typography><b>Features engineered</b></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <ul><b>SOLIDWORKS rendering engine</b>
                                    <li>I lead a team of seven implementing a new rendering engine that I conceived,  that is data centric and GPU driven and operates in retained mode of rendering. This improved performance by 500% at a minimum.
                                    </li>
                                    <li>Implemented GPU based occlusion culling using a technique called temporal coherence that enabled rendering only visible mesh exactly once per frame. This dramatically improved performance especially since CAD products have a lot of geometry mesh data.</li>
                                    <li>Implemented physically based rendering for materials defined by  specification set by Dassault Systemes PBR model. This unified look and feel and consistence of rendering between multiple products in SOLIDWORK’s portfolio.</li>
                                    <li>Implemented screen space silhouette edges that improved performance. One of the CPU bottlenecks SOLIDWORKS had was calculation of silhouette edges on every frame of render. We solved this bottleneck by implementing a shader based solution freeing up CPU cycles.</li>
                                    <li>Implemented support for VR within the new rendering engine with support for enterprise VR headsets - HTC vive, HTC vive pro, HP Reverb, HP Reverb G2 etc.</li>
                                    <li>Unified rendering engine across multiple products to utilize the newly architected rendering engine. This saved costs in maintenance and adding features.</li>
                                </ul>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: "#EAEAEA" }}>
                            <Typography><b>Leadership  excellence</b></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <ul>
                                    <li>
                                        Staff, mentor and develop talent to perform to potential, and deliver against program and business objectives</li>
                                    <li>Cultivate a culture of cross-functional collaboration between adjacent departments and brands, to deliver innovations in performance and stability as well as improved adoption (e.g, QA, Documentation, Sales, Technical Support, Product Management, Product Definition, Customers and Resellers)</li>
                                    <li>Recognized for delivering strategies that enable company growth targets</li>
                                    <li>Delivered savings of $100K+ to customers by introducing XR strategies for large design reviews and training and paving a pathway for a new SOLIDWORKS service offering</li>
                                    <li>Partner with dev tech groups and alliance managers with hardware vendors like nVidia, AMD and INTEL, as well as OEMs like Lenovo, Dell, MSI, HP, HTC and Varjo to bring industry innovations to our products</li>
                                    <li>Introduced cutting edge technologies like GPU based occlusion culling, screen space silhouette edges, HBAO, OIT along with many other modern OpenGL uses for performance and image quality</li>
                                </ul>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: "#EAEAEA" }}>
                            <Typography><b>Technical skills</b></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <ul>
                                    <li>Expertise in C++, OpenGL 4.x, GLSL</li>
                                    <li>SCM used were GIT and TFS</li>
                                    <li>Tools used were Visual Studio, VScode, nVidia nSight, RenderDoc, Intel parallel studio</li>
                                </ul>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>


                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: "#EAEAEA" }}>
                    <Typography>
                        <table>
                            <tr><b>IKEA - Geomagical Labs</b></tr>
                            <tr>(2021-2023)</tr>
                            <tr>Head of Graphics Engineering</tr>
                        </table>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <p>
                            IKEA Geomagical Labs is forefront in the industry of home furnishing business, enabling customers to decorate their personal space with IKEA furniture. This is e-commerce solution is brought to masses by combining bleeding edge technologies in computer vision, machine learning, cloud computing and 3D rendering.
                        </p>
                    </Typography>
                    <div id="imgrow">
                        <img src={gml1} alt="ikea akreativ office1" width="200px" />
                        <img src={gml2} alt="ikea akreativ office2" width="200px" />
                        <img src={gml3} alt="ikea akreativ livingroom" width="200px" />
                        <img src={gml4} alt="ikea akreativ bedroom" width="200px" />
                    </div>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: "#EAEAEA" }}>
                            <Typography>
                                <b>Leadership excellence</b>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ul>
                                <li>Launched IKEA Kreativ <a href="https://www.ikea.com/us/en/home-design/">https://www.ikea.com/us/en/home-design/</a>, a mixed reality indoor
                                    personalization of home furnishing in multiple markets including US, UK and Canada with daily active
                                    users of more than 2 million.</li>

                                <li>
                                    Conceived and drove cross functional collaboration between platform, design, product and ML teams
                                    towards architectural unification strategies accelerating delivery and efficiency of our product.
                                </li>
                                <li>
                                    Headed and grew multiple teams responsible for back-end processing of 3D commerce compliant assets
                                    and AR based viewer technology for multiple platforms in both USA and globally
                                </li>
                                <li>Built and managed technical and business strategies towards releasing IKEA Kreativ in the fast-moving
                                    mixed reality marketplace</li>
                                <li>Managed roadmaps, priorities and sprint plans in an agile manner</li>
                                <li>Engineered and drove realism employing physically based rendering techniques improving customer
                                    satisfaction</li>
                            </ul>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: "#EAEAEA" }}>
                            <Typography>
                                <b>Technical skills</b>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ul>
                                <li>Hands on experience with Javascript, Typescript, ThreeJS, React, Material UI and Python</li>
                                <li>IDE and tools used were VScode, Docker, GCP, Github, SpectorJS
                                    3D packages used were Blender and 3D studio max</li>
                                <li>Experience with team management and communication tools like JIRA\JQL, Confluence and Figma</li>
                                <li>Experience with analytical tools like DOMO, Mixpanel, Google Spreadsheet APIs</li>
                            </ul>
                        </AccordionDetails>
                    </Accordion>
                </AccordionDetails>
            </Accordion>

        </div>
    )
}

const WorkExperience = () => {
    <div>hello</div>
    return getWorkExperience()
}

export default WorkExperience