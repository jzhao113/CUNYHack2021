import React, { useState } from 'react'
import Tag from './Tag'
function Card(props) {
    const [ jobTitle, setJobTitle ] = useState(props.jobTitle)
    const [ location, setLocation ] = useState(props.location)
    const [ description, setDescription ] = useState(props.description)
    const [ datePosted, setDatePosted ] = useState(props.datePosted)
    const [ tags, setTags ] = useState(props.tags)

    return (
        <div className="card">
            <img className="logo" src="" alt="" /> {/* Make alt the first name of company name*/}
            <div className="jobTitle">{jobTitle}</div>
            <div className="location">{location}</div>
            <div className="description">{description}</div>
            <div className="datePosted">{datePosted}</div>
            <a href="#">Read More</a>
            <div className="tags">{tags.map(
                (val) => {
                    return <Tag tag={val}/>
                }
            )}</div>
        </div>
    )
}

export default Card