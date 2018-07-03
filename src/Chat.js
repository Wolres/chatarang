import React, { Component } from 'react'

import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

class Chat extends Component {
    constructor() {
        super()

        this.state = {
            messages: [
                { id: 1, userName: 'dstrus', body: 'A giant chatter box, am I!' },
                { id: 2, userName: 'dpalazzo', body: 'Hello there!' },
            ],
        }
    }

    addMessage = () => {
        const messages = [...this.state.messages]
        const userName = 'BobaChatt'
        
        messages.push({
            id: `${userName}-${Date.now()}`,
            username: userName,
            body: "I want them alive, no disintegration."
        })

        this.setState({ messages: messages })
    }

    render() {
        return (
            <div className="Chat">
                <ChatHeader />
                <MessageList messages={this.state.messages} />
                <MessageForm addMessage={this.addMessage} />
            </div>
        )
    }
}

export default Chat