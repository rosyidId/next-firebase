import React from 'react'
import { useUser } from '../../context/user'
import withProtected from '../../hoc/withProtected'


const Profile = () => {
    const user = useUser()
    return (
        <div>
            <p>Email  : <b>{user.email}</b></p><br />
            <p>UID  : <b>{user.uid}</b></p>
        </div>
    )
}

export default withProtected(Profile)