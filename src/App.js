import logo from './logo.svg';
import './App.css';
import React from 'react'
import List from './components/List'

class App extends React.Component {
  // tracking user input: using a form or an input field
  // onChange is probably needed
  // onSubmit is definitely needed
  // ill probably need a preventDefault


  // state just to keep my information the same and only change when I need it to change

  constructor(props){
    super(props)

    this.state = {
      noteText: '',
      notes:[]
    }
  }

  onChange = (event) => {
    this.setState({
      noteText:event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      noteText:'',
      notes:[...this.state.notes,this.state.noteText]
    })
    console.log(this.state.notes)
  }

  render() {
  return (
    <div>
<div className="header">
      <div className ="wrapper">
      <img src = "https://roadtohire.org/static/80b65f57d3d3886872d58a21bf7ac4be/r2h-icon.png" alt="R2H Logo" />
      <p className="title">Road To Hire</p>
      </div>
    </div>
    <div className="app">
      <div className="app-wrapper">
        <p className="app-title">To-Do List</p>
        <form className ="App" onSubmit = {this.onSubmit}>
          <input value = {this.state.noteText} onChange = {this.onChange} placeholder="Type here to add a task" type="text" id="box" />
          <br />
        </form>
        <br />
        <List notes = {this.state.notes} />
</div>
</div>
</div>
  );
}
}
export default App;
