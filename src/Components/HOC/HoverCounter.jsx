import React, { Component } from 'react'
import UpdatedComponent from './BASIC/withCounter';
export class HoverCounter extends Component {
    render() {
        return (
            <div>
                <h1 onMouseOver={this.props.incrementCount}> Howered {this.props.count} Timer</h1>
            </div>
        )
    }
}

export default UpdatedComponent(HoverCounter);
