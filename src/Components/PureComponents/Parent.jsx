import React from 'react'
import ChildPureClass from './ChildPureClass';
import ChildNormalClass from './ChildNormalClass';
import ChildPureMemoFunction from './ChildPureMemoFunction';
class Parent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Karan'
        }
    }

    componentDidMount = () => {
        setInterval(() => {
            this.setState({
                name: 'Karan'
            })
        }, 2000);
    }
    render() {
        console.log('/******************Parent Component************************/')
        return (
            <div>
                <ChildPureClass name={this.state.name} />
                <ChildNormalClass name={this.state.name} />
                <ChildPureMemoFunction name={this.state.name}></ChildPureMemoFunction>
            </div>
        )
    }

}

export default Parent
