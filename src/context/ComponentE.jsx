import React, { Component } from 'react'
import ComponentF from './ComponentF';
import UserContext from './UserContext';
export class ComponentE extends Component {
    render() {
        console.log(this.context)
        return (
            <div>

                <ComponentF />
            </div>
        )
    }
}
ComponentE.contextType = UserContext;
export default ComponentE
