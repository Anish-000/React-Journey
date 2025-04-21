import React, { Component } from 'react';
import bell1 from './Bell1.png';
import bell2 from './Bell2.png';

class NewComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Subscribe to My Channel",
         sub : "Subscribe",
         imageURL : bell1
      };
    }

    styles = {
        fontStyle : "italic",
        color : "teal"
      };

      ButtonChange = () => {
        this.setState({
            message: "Thanks for Subscribing",
            sub : "Subscribed"
        });
      };

      imageChange = () => {
        this.setState({
            imageURL : bell2,
            message : " Thank You for clicking on Bell Icon! "
        })
      }
    
  render() {
    return (
      <div className='App'>
        <h3 style = {this.styles} > {this.state.message}</h3>
        <button onClick={this.ButtonChange}> {this.state.sub} </button>
        <p/>
        <img 
            style = {{ width: "30px", height: "30px"}} 
            src={this.state.imageURL}
            onClick={this.imageChange}
            alt=""/>
      </div>
    );
  }
}

export default NewComp
