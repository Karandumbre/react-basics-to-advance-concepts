
import React, { Component } from 'react'

export class HoverCounter extends Component {
    render() {
        return (
            <div>
                <h2 onMouseOver={this.props.incrementCount}>Howered {this.props.count} times</h2>
            </div>
        )
    }
}

export default HoverCounter
