import React from 'react';
const Dummy = (props) => {
    return (
        <>
            <p style={{ fontSize: "30px", marginTop: "200px", textAlign: "center" }}>Welcome John Doe</p>
            <button onClick={props.handleLogout}
                style={{
                    marginBottom: "200px",
                    width: "100%",
                    textAlign: "center",
                }}
            >Log Out</button>
        </>
    )
}
export default Dummy;