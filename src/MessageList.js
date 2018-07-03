import React from 'react'

import Message from './Message'

const MessageList = () => {
    const messages = [
        { id: 1, userName: 'dstrus', body: 'A giant chatter box, am I!' },
        { id: 2, userName: 'dpalazzo', body: 'Hello there!' },
    ]

    return (
        <div className="MessageList">
            { 
            messages.map(msg => (
                <Message message={msg} key={msg.id} />
            )) 
            }
        </div>
    )
}

export default MessageList