import React, { Component } from 'react'

import './App.css'
import Main from './Main'

class App extends Component {
  constructor() {
    super()


    //user login page will modify this
    this.state = {
      user: {
        uid: 'someNumberHere',
        displayName: 'inVader',
        email: 'rshuey@iu.edu',
        pic: './vader.jpg'
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Main user={this.state.user} />
      </div>
    )
  }
}

export default App
