import React from 'react';

const Scroll = (props) => {
    console.log(props.children);
    return (
        <div style={{overflowY: 'scroll', borderTop: '2px solid black', overflow: 'hidden'}}>
            {props.children}
        </div>
    );
}


export default Scroll;