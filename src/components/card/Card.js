import React, { useState } from 'react'
import Tag from './Tag'
function Card(props) {
    const [ image ] = useState(props.image)
    const [ jobTitle, setJobTitle ] = useState(props.jobTitle)
    const [ location, setLocation ] = useState(props.location)
    const [ companyName ] = useState(props.companyName)
    const [ description, setDescription ] = useState(props.description)
    const [ datePosted, setDatePosted ] = useState(props.datePosted)
    const [ tags, setTags ] = useState(props.tags)


    // styles
    const cardClassName = "card container w-120 mx-auto px-4 border-4 border-white rounded-lg bg-white shadow-lg"
    const contentClassName = "content p-5"
    const logoClassName = "logo w-72 mx-auto p-5"
    const companyNameClassName = "companyName text-center font-bold text-xl"
    const jobTitleClassName = "jobTitle text-lg"
    const locationClassName = "location text-gray-500 text-sm mb-2"
    const descriptionClassName = "description text-sm mb-1"
    const datePostedClassName = "datePosted text-gray-500 mb-3 text-sm"
    const tagSpanClassName = "border-4 border-gray-300 rounded-lg bg-gray-300 px-1 mr-2 inline-block mb-2 shadow-sm"


    return (
        <div className={cardClassName}>
            <div className={contentClassName}>

                <div className={logoClassName}><img src={image} alt={companyName} /> {/* Make alt the first name of company name*/}</div>
                <div className={companyNameClassName}>{companyName}</div>
                <div className={jobTitleClassName}>{jobTitle}</div>
                <div className={locationClassName}>{location}</div>
                <div className={descriptionClassName}>{description}</div>
                <div className={datePostedClassName}>{datePosted}</div>
                <div className="tags">{tags.map(
                    (val) => {
                        return <Tag key={val} tag={val}/>
                    }
                )}</div>
            </div>
        </div>
    )
}

export default Card


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <link rel="preconnect" href="https://fonts.gstatic.com">
//     <link href="https://fonts.googleapis.com/css2?family=Rancho&display=swap" rel="stylesheet"> 
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Job Postings</title>
//     <link rel="stylesheet" href="card-styles.css">
//     <link rel="stylesheet" href="tailwind.css">
// </head>
// <body style="position:absolute; top:50%; left:50%; transform: translate(-50%, -50%);">
//     <div class="main">
//         <div class="card container w-120 mx-auto px-4 border-4 border-white rounded-lg bg-white shadow-lg">
//             <div class="content p-5">
//                 <div class="logo w-72 mx-auto p-5"><img src="/Images/Facebook_Logo.png"></div>
//                 <div class="companyName text-center font-bold text-xl">Facebook</div>
//                 <div class="jobTitle text-lg">Software Engineering Developer</div>
//                 <div class="location text-gray-500 text-sm mb-2">New York, NY</div>
//                 <div class="description text-sm mb-1">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in luctus elit, non efficitur leo. Vestibulum ultricies id turpis sed gravida. Curabitur eget tempus sapien, sit amet vulputate ante. Nam nec quam eget sapien fermentum porttitor. Integer aliquam accumsan semper. Fusce eget est sed nunc mattis sollicitudin. In sed dignissim nisl. In vel ullamcorper purus.
//                 </div>
//                 <div class="datePosted text-gray-500 mb-3 text-sm">5 days ago</div>
//                 <div class="tags">
//                     <span class="border-4 border-gray-300 rounded-lg bg-gray-300 px-1 mr-2 inline-block mb-2 shadow-sm">Python</span>
//                     <span class="border-4 border-gray-300 rounded-lg bg-gray-300 px-1 mr-2 inline-block mb-2 shadow-sm">Java</span>
//                 </div>
                
//             </div>
//         </div>

//         <div class="buttons inline-grid grid-cols-3 justify-items-center w-120 mx-auto mt-10">
//             <button class="notInterestedBtn flex items-center justify-center bg-red-500 hover:bg-red-600 py-2 px-4 w-20 h-20 text-center font-bold text-4xl rounded-full text-white shadow-lg focus:outline-none" style="font-family: 'Rancho', cursive;">X</button>

//             <button class="bookmarkBtn flex items-center justify-center bg-gray-100 hover:bg-gray-200 w-20 h-20 text-center font-bold text-4xl rounded-full shadow-lg focus:outline-none" style="font-family: 'Rancho', cursive;">
//                 <img class="w-6"src="Images/Bookmark.png">
//             </button>

//             <button class="applyBtn flex items-center justify-center bg-green-500 hover:bg-green-600 py-2 px-4 w-20 h-20 text-center font-bold text-4xl rounded-full text-white shadow-lg focus:outline-none" style="font-family: 'Rancho', cursive;">✓</button>
//         </div>
//     </div>
// </body>
// </html>