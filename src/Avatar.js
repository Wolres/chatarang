import React from 'react'

const Avatar = (props) => {
    return (
        <div 
            className="Avatar" 
            style={{
                ...styles,
                backgroundImage: props.user.pic
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