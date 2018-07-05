import React from 'react'

const RoomList = () => {
    return (
        <nav className="RoomList">
            <h2 style={styles.h2}>Rooms</h2>
            <ul style={styles.ul}>
                <li style={styles.li}><a href="#" style={styles.a}># general</a></li>
                <li style={styles.li}><a href="#" style={styles.a}># random</a></li>
            </ul>
        </nav>
    )
}

const styles = {
    h2: {
        fontSize: '1rem',
    },

    ul: {
        listStyle: 'none',
        marginLeft: 0,
        paddingLeft: 0,
    },

    li: {
        marginBottom: '.5rem',
    },

    a: {
        diplay: 'block',
        color: 'whitesmoke',
        textDecoration: 'none',
    },

    //a:hover: {

    //}
}

export default RoomList