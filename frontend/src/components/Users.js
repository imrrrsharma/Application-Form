import React, {useState, useEffect} from 'react'
import axios from 'axios';
import UserList from './UserList';

const Users = () => {
    const [user, setUser] = useState([]);
    const sendRequest = async () => {
      console.log("retreive data from server")
        const res = await axios
          .get("http://localhost:5000/api/all")
          .catch((err) => console.log(err));
        const data = await res.data;
        if(data)setUser([...data.users]);
      };
      useEffect(() => {
        sendRequest();
      }, []);
      console.log(user);
      user.forEach(e=>{
        console.log(e);
      });
      let list="";
      if(user){
        user.forEach(each => {
          list+=<UserList
            id={each._id}
            name={each.name}
            email={each.email}
          />
        })
      }
      
  return (
    <div>
        {list};
    </div>
  )
}

export default Users;