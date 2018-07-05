import React from 'react'

const RoomAnnouncement = () => {
    return (
        <div className="roomAnnouncement" style={styles.roomAnnouncement}>
          <h3 style={styles.h3}>#general</h3>
          <p>This is the very beginning of the #general room.</p>
        </div>
    )
}

const styles = {
    roomAnnouncement: {
        padding: '2rem 1rem',
        diplay: 'block',
    },

    h3: {
        fontSize: '1.5rem',
    }
}

export default RoomAnnouncement