import React from 'react'

const UserList = (props) => {
  return (
    <ul>
        {props.name} - {props.email}
    </ul>
  )
}

export default UserList;