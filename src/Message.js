import React from 'react'

const Message = (props) => {
    return (
        <div className="Message" style={styles.message}>
            {props.message.user.displayName}: {props.message.body}
        </div>
    )
}

const styles = {
    message: {
        display: 'flex',
        marginTop: '1rem',
        padding: '0 1rem',
        // was in another style tag, not sure what these do
        flex: 1,
        paddingLeft: '0.5rem',
    }
}

export default Message