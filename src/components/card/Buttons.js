import React from 'react'
import bookmarkImage from '../../images/Bookmark.png'

function Buttons() {
    const buttonStyle = "buttons inline-grid grid-cols-3 justify-items-center w-120 mx-auto mt-10"

    const notInterestedBtnClassName = "notInterestedBtn flex items-center justify-center bg-red-500 hover:bg-red-600 py-2 px-4 w-20 h-20 text-center font-bold text-4xl rounded-full text-white shadow-lg focus:outline-none"
    const bookmarkBtnClassName = "bookmarkBtn flex items-center justify-center bg-gray-100 hover:bg-gray-200 w-20 h-20 text-center font-bold text-4xl rounded-full shadow-lg focus:outline-none"
    const applyBtnClassName = "applyBtn flex items-center justify-center bg-green-500 hover:bg-green-600 py-2 px-4 w-20 h-20 text-center font-bold text-4xl rounded-full text-white shadow-lg focus:outline-none"
    const imgClassName = "w-6"
    const fontFamilyStyle = {fontFamily: "'Rancho', cursive"}

    return (
        <>
            <div className={buttonStyle}>
                <button className={notInterestedBtnClassName} style={fontFamilyStyle}>X</button>
                <button className={bookmarkBtnClassName} style={fontFamilyStyle}>
                    <img className={imgClassName} src={bookmarkImage} alt="bookmark" />
                </button>
                <button className={applyBtnClassName} style={fontFamilyStyle}>✓</button>
            </div>
        </>
    )
}

export default Buttons