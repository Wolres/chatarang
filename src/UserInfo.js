import React from 'react'

import Avatar from './Avatar'
import SignOutButton from './SignOutButton';

const UserInfo = (props) => {
    return (
        <div className="UserInfo" style={styles.userinfo}>
            <Avatar user={props.user} />
            <div className="user" style={styles.user}>
                {props.user.displayName}
            </div>
            <SignOutButton />
         </div>
    )
}

const styles = {
    userinfo: {
        padding: '0 1rem',
        marginBottom: '1rem',
        display: 'flex',
        alignItems: 'center',
    },

    user: {
        flex: 1,
    },

    a: {
        border: 0,
        padding: 0,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: '1.2rem',
        transition: 'color .25s easeOut',
    },

    //a:hover
}

export default UserInfo