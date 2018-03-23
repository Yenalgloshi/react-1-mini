import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      friends: [],
      picture: '',
      name: ''
    }
  }

  updatePicture (e){
    this.setState({ picture: e.target.value })
  }

  updateName (e){
    this.setState({ name: e.target.value })
  }

  addFriend (){
    let friend= {
      name: this.state.name,
      picture: this.state.picture,
      // friends: this.state.friendsArr
    }

     let newFriends = this.state.friends.slice();
     newFriends.push( friend )
    
    this.setState({ 
      friends: newFriends,
      picture: '',
      name: '' })
  }

  render() {

    let friendsArr = this.state.friends.map((e, i) => {
      return (
        <div key={1}>
          <p>{ e.name }</p>
          <img src={ e.picture } alt="profile"/>
        </div>
      )
    })

    return (
      <div className="App">
        <p> Picture:</p>
        <input type="text" onChange={(e) => this.updatePicture(e)} value={ this.state.picture }/>
        <p> Name:</p>
        <input type="text" onChange={(e) => this.updateName(e)} value={ this.state.name }/>

        <button onClick={() => this.addFriend() }>Add Friend</button>
        { friendsArr }
      </div>
    )
  }
};
export default App;
