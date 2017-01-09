import React,{Component} from 'react';
import FriendsList from './FriendsList.js'
import '.././styles.css'
export default class App extends Component{
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <h1>The <strong>facebook</strong> Friend Machine</h1>
        <div className="friends">
        <FriendsList/>
        </div>
      </div>);
  }

};
