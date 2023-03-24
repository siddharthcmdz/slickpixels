import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faYoutube, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"

const SpFooter = () => {
    return (
        <div className="spfooter" key="spfooter">
            <a href="https://www.youtube.com/channel/UCRCdAP4boepyS5Y7i3uKY1Q"
                className="youtube social">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>

            <a href="https://twitter.com/siddharthcmdz"
                className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>

            <a href="https://www.instagram.com/siddharth.cmdz/"
                className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
        </div>
    )
}

export default SpFooter