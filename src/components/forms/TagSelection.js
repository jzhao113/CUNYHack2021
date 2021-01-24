import React from 'react'

function TagSelection(props) {
    const tagClassName = "border-2 border-gray-300 rounded-lg bg-gray-300 px-2 py-0.5 mr-2 inline-block my-3 pl-2 shadow-sm hover:bg-gray-300 hover:border-blue-400 focus:outline-none"
    return (
        <>
            <button className={tagClassName} onClick={props.handleClick}>{props.name}</button>
        </>
    )
}

export default TagSelection