//lets create a page for displayin the user info from an endpoint using the JWT token from the context

import { useContext, useEffect, useState } from 'react'
import { userContext } from '../context/user'
import { User } from '../types/user'
import { getToken } from '../services/session'
import fetchWT from '../services/fetchWithToken'


export default function UserProfile() {
    const { userJWT, setUserJWT } = useContext(userContext)
    const [user, setUser] = useState({} as User)

    useEffect(() => {
        let uJWT = userJWT
        if (!uJWT) {
            uJWT = getToken() as string
            setUserJWT(uJWT)
        }
        const fetchUser = async () => {
            const response = await fetchWT(`users`, 'GET')
            const data = await response.json() as User
            setUser(data)
        }
        fetchUser()
    }, [setUserJWT, userJWT])

    return (
        <>
            <h1>User Info</h1>
            <p>First Name: {user.firstName}</p>
            <p>Last Name: {user.lastName}</p>
            <p>Email: {user.email}</p>
            <p>Admin: {user.isAdmin ? 'Yes' : 'No'}</p>
        </>
    )
}
// type User struct {
// 	ID               string `bson:"_id,omitempty" json:"id,omitempty"`
// 	Firstname        string `bson:"firstName" json:"firstName"`
// 	Lastname         string `bson:"lastName" json:"lastName"`
// 	Email            string `bson:"email" json:"email"`
// 	EncyptedPassword string `bson:"password" json:"-"`
// 	IsAdmin          bool   `bson:"isAdmin" json:"isAdmin"`
// }

