import React from 'react'

const Metadata = (props) => {
    return(
        <div className="Metadata" style={styles.metadata}>
            <div className="user" style={styles.user}>
                {props.name}
            </div>
            <div className="time" style={styles.time}>
                {new Intl.DateTimeFormat('en-US', {hour: '2-digit', 
                                                   minute: '2-digit', 
                                                   second: '2-digit'}).format(Date.now())}
            </div>
        </div>
    )
}

const styles = {
    metadata: {
        display: 'flex',
        alignItems: 'baseline',
    },

    user: {
        fontWeight: 'bold',
        marginRight: '0.5rem',
    },

    time: {
        color: '#999',
        fontSize: '.8rem'
    }
}

export default Metadata