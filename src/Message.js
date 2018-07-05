import React from 'react'

import Metadata from './Metadata'
import Body from './Body'

const Message = (props) => {
    return (
        <div className="Message" style={styles.message}>
            <div className="Avatar"></div>
            <div className="details" style={styles.details}>
                <Metadata name={props.message.user.displayName}/>
                <Body body={props.message.body}/>
            </div>
            
        </div>
    )
}

const styles = {
    message: {
        display: 'flex',
        marginTop: '1rem',
        padding: '0 1rem',
    },

    details: {
        //for the timestamps
        flex: 1,
        paddingLeft: '0.5rem',
    }
}

export default Message