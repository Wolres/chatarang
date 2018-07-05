import React from 'react'

import Message from './Message'
import RoomAnnouncement from './RoomAnnouncement'

const MessageList = (props) => {
    return (
        <div className="MessageList" style={styles.messageList}>
            <RoomAnnouncement />
            {props.messages.map(msg => 
                    (<Message message={msg} key={msg.id} />)
                )
            }
        </div>
    )
}

const styles = {
    messageList: {
        backgroundColor: 'white',
        flex: 1,
        paddingBottom: '1rem',
        overflowY: 'scroll',
    }
}

export default MessageList