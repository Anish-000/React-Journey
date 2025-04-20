import React, { Component } from 'react'
import PureComp from './PureComp';
import RegularComp from './RegularComp';

export class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "SimpleLearn"
      }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: "SimpleLearn"
            });
        }, 3000);
    }
    
  render() {
    console.log("Parent Component Render")
    return (
      <div> I am Parent Component
        <RegularComp name={this.state.name} />
        <PureComp name = {this.state.name} />
      </div>
    )
  }
}

export default ParentComp
