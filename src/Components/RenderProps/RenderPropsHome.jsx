import React from 'react'
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';
import Users from './User';
import Counter from './Counter';
class RenderPropsHome extends React.Component {
    render() {
        return (
            <div>
                <h5>Render Props</h5>
                <Counter render={(count, incrementCount) => <ClickCounter count={count} incrementCount={incrementCount} />} />
                <Counter render={(count, incrementCount) => <HoverCounter count={count} incrementCount={incrementCount} />} />
                <Users name={(isLoggedIn) => isLoggedIn ? 'Karan' : 'Guest'} />
            </div >
        )
    }
}

export default RenderPropsHome
