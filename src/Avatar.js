import React from 'react'
import vader from './vader.jpg'

const Avatar = (props) => {
    return (
        <div 
            className="Avatar" 
            style={{
                ...styles,
                image: vader
         }}
        ></div>
    )
}

const styles = {
        marginRight: '.5rem',
        height: '40px',
        width: '40px',
        fontSize: '1rem',
        borderRadius: '20px',
}

export default Avatar