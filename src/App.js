import React, { Component } from 'react'

import './App.css'
import Main from './Main'
import SignIn from './SignIn'

class App extends Component {
  constructor() {
    super()


    //user login page will modify this
    this.state = {
      user: {}
    }
  }

  render() {
    return (
      <div className="App">
        {
          this.signedIn()
          ? <Main
              user={this.state.user}
              signOut={this.signOut}
            />
          : <SignIn handleAuth={this.handleAuth} />
        }
      </div>
    )
  }
}

export default App
