import React from 'react'

 const UserList = ({post}) => {

    return (
      <ul className="list-group">
        {post.map((post)=>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            {post.title}
            <input type="checkbox" checked={post.completed} />
          </li>)}
      </ul>
    )
  }

export default UserList
