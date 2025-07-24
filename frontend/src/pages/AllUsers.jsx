import React, { useEffect } from 'react'
import { useContext } from 'react'
import { Appcontext } from '../context/AppContext'

const AllUsers = () => {

  const { isLoading, users, fetchUsers } = useContext(Appcontext);

  useEffect(() => {
    fetchUsers()
  }, [])


  return (
    <div>
      {isLoading && (<p>Loading..</p>)}
      {users.length > 0 ? (
        <div className='flex justify-center items-center w-full'>
          {users.map(user => (
            <div className='flex py-5 border rounded' >
              <div className='flex' >
                <img src={user.profileImage} width='50px' alt="" srcset="" />
              </div>
              <div>
                <h2>{user.name}</h2>
                <h2>{user.email}</h2>
                <h2>{user.address}</h2>
                <h2>{user.contact}</h2>
                <h2>{user.website}</h2>

              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>No users Found</div>
      )}
    </div>
  )
}

export default AllUsers