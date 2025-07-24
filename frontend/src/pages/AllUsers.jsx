import React, { useEffect } from 'react'
import { useContext } from 'react'
import { Appcontext } from '../context/AppContext'

const AllUsers = () => {

  const { isLoading, users, fetchUsers } = useContext(Appcontext);

  useEffect(() => {
    fetchUsers()
  }, [])


  return (
    <div className='p-8 bg-pink-50 min-h-screen w-full'>
      {isLoading && (<p>Loading..</p>)}
      {users.length > 0 ? (
        <div className="flex flex-wrap gap-6 justify-center items-center">
          {users.map(user => (
            <div key={user} className="flex w-[550px] bg-white shadow-lg rounded-xl overflow-hidden" >
              <div className="flex items-center justify-center bg-gradient-to-br from-pink-300 to-pink-100 w-1/3 p-4">
                <img src={user.profileImage} className="rounded-full w-20 h-20 object-cover" alt="" srcset="" />
              </div>
              <div className="flex-1 p-4 relative">
                <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
                <button className="absolute top-4 right-4 text-blue-500">
                  
                </button>

                <div className="text-sm text-gray-600 mt-2 space-y-1">
                  <p className="flex items-center gap-2">
                    {user.email}
                  </p>
                  <p className="flex items-center gap-2">
                    {user.address}
                  </p>
                  <p className="flex items-center gap-2">
                    {user.contact}
                  </p>
                  <p className="flex items-center gap-2">
                    <a href={`https://${user.website}`} className="hover:underline">{user.website}</a>
                  </p>
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold text-pink-700">Feedspan</h3>
                  <p className="text-sm text-gray-500 truncate">Nisi excepteur ad conse...</p>
                </div>
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