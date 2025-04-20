import React, { Component } from 'react'
import UpdatedComp from './HigherOrder';

export class click extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        count: 0
      };
    }

    UpdateCick = () => {
        this.setState({count: this.state.count + 1});
    }
    
  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.UpdateCick}> {this.props.name} Clicked {count} Time</button>
      </div>
    )
  }
}

export default UpdatedComp(click);
