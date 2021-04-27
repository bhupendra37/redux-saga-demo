import logo from './logo.svg';
import './App.css';
import {increment,asyncIncrement,callFakeApi} from './action'
import { connect } from "react-redux";
import React ,{Component} from "react";


class App extends Component {
  constructor(props) {
    super(props)
    
    this.handleAsyncIncrement = this.handleAsyncIncrement.bind(this)
  }
  handleAsyncIncrement(seconds) {
     this.props.asyncIncrement(seconds)
  }
  render() {
    const { count, increment, callFakeApi, user } = this.props
    return (
      <div>
        <div className="count">{count}</div>
        <button onClick={increment}>
          Synchronous Increment
        </button>
        <button onClick={() => {this.handleAsyncIncrement(3)}}>
          Increment After 3 seconds
        </button>
        <button onClick={() => {this.handleAsyncIncrement(5)}}>
          Increment After 5 seconds
        </button>
        <button onClick={callFakeApi}>Call Fake Api</button>
        {user && <div className="user">{user}</div>}
      </div>
     )
  } 
}

const mapStateToProps = state => ({
  count: state.count,
  user: state.user
})
const mapDispatchToProps = ({
  increment,
  asyncIncrement,
  callFakeApi
})
export default  connect(mapStateToProps, mapDispatchToProps)(App)
