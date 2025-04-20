import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  render() {
    console.log("Pure Component Render")
    return (
      <div> I am Pure Component {this.props.name} </div>
    )
  }
}

export default PureComp
