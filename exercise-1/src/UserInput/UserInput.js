import React from 'react';

const UserInput = (props) => {
    const labelStyle = {
        fontFamily: 'Helvetica',
        fontSize: '12px',
        color: 'red'
    };

    return (
        <div>
            <label style={labelStyle}>Type anything: </label>
            <input type="text" onChange={props.changeName} value={props.username} />
        </div>
    );
}

export default UserInput;