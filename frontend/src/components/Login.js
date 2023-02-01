import React,{useRef, useState} from 'react'
import './Login.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const [date, setDate] = useState('');
  const navigate = useNavigate();
  const dateInputRef = useRef(null);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    number: ""
    // dob:''
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const dateChangeHandler = (e) =>{
    setDate(e.target.value);
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/submit", {
        name: inputs.name,
        email: inputs.email,
        number: inputs.number
        // dob: date
      })
      .then(() => navigate("/all"))
      .catch((err) => console.log(err));

    const data = res.data;
    // console.log(data);
    return data;
  };

  return (
    <div className='login'>
        <div className='container'>
          <form onSubmit={handleSubmit} className='login_container'>
            <h1>Login</h1>
            <label>Name</label>
            <input type='text' onChange={handleChange} value={inputs.name} placeholder='Enter Your Name' name="name"></input>
            <label>Email</label>
            <input type='text' onChange={handleChange} value={inputs.email} placeholder='Enter Your Email' name="email"></input>
            <label>Phone Number</label>
            <input type='text' onChange={handleChange} value={inputs.number} placeholder='Enter Your Number' name="number"></input>
            <label>Date of Birth</label>
            <input type='date' onChange={dateChangeHandler} ref={dateInputRef}></input>

            <button>Submit</button>
          </form>
        </div>
    </div>
  )
}

export default Login;