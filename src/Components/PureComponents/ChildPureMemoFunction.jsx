import React from 'react'

function ChildPureMemoFunction(props) {
    console.log('/******************Pure Function Component*******************/')
    return (
        <div>
            <h1>{props.name}</h1>
        </div>
    )
}


export default React.memo(ChildPureMemoFunction);