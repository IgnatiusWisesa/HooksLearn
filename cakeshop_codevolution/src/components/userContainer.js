import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './../redux'

function UserContainer() {
    const userData = useSelector( state => state.users )
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchUsers())
    }, [])

    return userData.loading? (
        <h4>Loading</h4>
    ) : userData.error? (
    <h5>{userData.error}</h5>
    ) : (
        <div>
            <h4>Users List</h4>
            <div>
                {
                    userData.users.map((val) => 
                        <p>{val.name}</p>
                    )
                }
            </div>
        </div>
    )
}

export default UserContainer
