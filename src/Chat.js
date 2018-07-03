import React, { Component } from 'react'

import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

class Chat extends Component {
    constructor() {
        super()

        this.state = {
            messages: [
                { id: 1, userName: 'yodo_or_do_not', body: 'A giant chatter box, am I!' },
                { id: 2, userName: 'brobi_wan_kenobi', body: 'Hello there!' },
            ],
        }
    }

    addMessage = (body) => {
        const messages = [...this.state.messages]
        const userName = 'inVader'
        
        messages.push({
            id: `${userName}-${Date.now()}`,
            userName,
            body,
        })

        this.setState({ messages })
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