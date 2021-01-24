import React, { useState } from 'react'
import Card from './card/Card'
import Navbar from './Navbar'
import facebookImage from '../images/Facebook_Logo.png'
import Buttons from './card/Buttons'

function Main() {
    const [ currentCard, setCurrentCard ] = useState(1)
    const [ userId, setUserId ] = useState(0)

    const fetchPostings = async () => {
        const data = await fetch('')
        const postings = await data.json();
        console.log(postings);
    }

    const handleNotInterested = () => {
        // remove posting from list of data DELETE
        console.log("Not interested")
    }

    const handleBookmark = () => {
        // add posting to bookmarks POST
        console.log("Bookmark")
    }

    const handleApply = () => {
        // add posting to applied list/database POST
        console.log("Apply")
    }

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    }
    return (
        <div className="body">
            <Card key="1"
                jobTitle={"Full-Stack Developer"}
                location={"New York, NY"}
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in luctus elit, non efficitur leo. Vestibulum ultricies id turpis sed gravida. Curabitur eget tempus sapien, sit amet vulputate ante. Nam nec quam eget sapien fermentum porttitor. Integer aliquam accumsan semper. Fusce eget est sed nunc mattis sollicitudin. In sed dignissim nisl. In vel ullamcorper purus."}
                companyName={"Facebook"}
                tags={["Algorithms", "C++", "React", "JS", "HTML", "CSS"]}
                image={facebookImage}
            />
            <Buttons />
        </div>
    )
}

export default Main