import React from 'react'
import ReactDom from 'react-dom';

function portalDemo() {
    return ReactDom.createPortal(
        <div>
            <h1>Portals Demo</h1>
        </div>
        , document.getElementById('portal-root'))

    // https://codesandbox.io/s/00254q4n6p : Portal Example
}

export default portalDemo
