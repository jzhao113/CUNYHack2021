import React, { useState } from 'react'

function Tag(props) {
    const [ tag, setTag ] = useState(props.tag)
    const tagClassName = "border-4 border-gray-300 rounded-lg bg-gray-300 px-1 mr-2 inline-block mb-2 shadow-sm"
    return (
        <>
        
            <span className={tagClassName}>{tag}</span>
        </>
    )
}

export default Tag