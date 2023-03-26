import React from 'react'


const Blog = () => {
    return (
        <div>
            <h1>My blogs</h1>
            <p>
                Hello blogging world!
                <br />
                This is my first blog. I created this website using reactjs and a plethora of other js libraries. I've hosted this site on google cloud through gcp app engine and its pretty interesting how seamless gcp works for hosting simple websites. I first designed this website on figma which can be viewed <a href="https://www.figma.com/file/F7G9cXPABDG57ljwfqIko4/SlickPixels.com?node-id=1%3A2&t=BIkQv2z36M33iP35-1" target="_blank" rel="noopener noreferrer">here</a>.
                <br />
                My subsequent project is to create a gltfdebugger which allows users to pick apart a gltf model and be able to modify its properties to visualize the different results. This will be using threeJS to begin with but may later on use a homegrown renderer!
                <br />
                Stay tuned!   
            </p>
        </div>
    )
}

export default Blog