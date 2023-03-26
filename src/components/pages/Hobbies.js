import React from 'react'
import { ImageGroup, Image } from 'react-fullscreen-image'
import img1 from './img/photography/20150624_184827.jpg'
import img4 from './img/photography/20210702_160332.jpg'
import img5 from './img/photography/20210702_161132.jpg'
import img6 from './img/photography/20210702_161142.jpg'
import img7 from './img/photography/20210702_161331.jpg'
import img8 from './img/photography/20210703_145841.jpg'
import img9 from './img/photography/20210703_173607.jpg'
import img10 from './img/photography/20210703_200332.jpg'
import img11 from './img/photography/20210703_201409.jpg'
import img12 from './img/photography/20210704_131156.jpg'
import img13 from './img/photography/20210705_072007.jpg'
import img14 from './img/photography/20220702_201708.jpg'
import img15 from './img/photography/20220702_205748.jpg'
import img16 from './img/photography/20220702_205807.jpg'
import img17 from './img/photography/20220703_201237.jpg'
import img18 from './img/photography/20220703_201332.jpg'
import img19 from './img/photography/20220703_201628.jpg'
import img20 from './img/photography/20220703_202528.jpg'
import img21 from './img/photography/IMG_1533.JPG'
import img22 from './img/photography/IMG_1535.JPG'
import img23 from './img/photography/IMG_1816.JPG'
import img24 from './img/photography/IMG_1829.JPG'
import img25 from './img/photography/IMG_1835.JPG'
import img26 from './img/photography/IMG_20180929_084623.jpg'
import img27 from './img/photography/IMG_20180929_091141.jpg'
import img28 from './img/photography/IMG_20180929_091547.jpg'
import img29 from './img/photography/IMG_20180930_114033.jpg'
import img30 from './img/photography/IMG_20180930_114049.jpg'
import img31 from './img/photography/IMG_20180930_125507.jpg'
import img32 from './img/photography/IMG_20180930_142501.jpg'
import img33 from './img/photography/IMG_20181001_110607.jpg'
import img34 from './img/photography/IMG_20190323_120311.jpg'
import img36 from './img/photography/IMG_20190323_125127.jpg'
import img37 from './img/photography/IMG_20190323_155731.jpg'
import img38 from './img/photography/IMG_20190323_155906.jpg'





const images = [
    img1, img4, img5, img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
    img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
    img31, img32, img33, img34, img36, img37, img38
]

const getPhotogallery = () => {
    return (
        <div className="container">
            <ImageGroup>
                <ul className="phimages">
                    {images.map(i => (
                        <li key={i}>
                            <Image src={i} alt="mountains" />
                        </li>
                    ))}
                </ul>
            </ImageGroup>
        </div>
    )
}


const Hobbies = () => {
    return (
        <div><h1>Photography</h1>
            {getPhotogallery()}
        </div>
    )
}

export default Hobbies