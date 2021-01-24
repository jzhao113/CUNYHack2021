import React, { useState } from 'react'

function Tag(props) {
    const [ tag, setTag ] = useState(props.tag)
    return (
        <>
            {tag}
        </>
    )
}

export default Tag