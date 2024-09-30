import axios from "axios";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Create = () => {
  const[values, setValues]=useState(
    {
      name:'',
      username:'',
      email:'',
      phone:''
  }
)
const navigate = useNavigate()
function handleSubmit(event){
  event.preventDefault()
  axios.post("http://localhost:3000/users",values).then((res)=>{
    navigate('/')
    
  }).catch((err)=>console.log(err))
}
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Add a User</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-2'>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" className='form-control' placeholder='Enter Name' onChange={(event)=>{

            setValues({...values,name:event.target.value})}} />
          </div>
          <div className='mb-2'>
            <label htmlFor="email">Username:</label>
            <input type="text" name="name" className='form-control' placeholder='Username' onChange={(event)=>{
              setValues({...values, username:event.target.value})
            }} />
          </div>
          <div className='mb-2'>
            <label htmlFor="email">Email:</label>
            <input type="email" name="name" className='form-control' placeholder='Email' onChange={(event)=>{
              setValues({...values, email:event.target.value})
            }} />
          </div>
          <div className='mb-3'>
            <label htmlFor="phone">Phone:</label>
            <input type="text" name="name" className='form-control' placeholder='Phone Number' onChange={(event)=>{
              setValues({...values,phone:event.target.value})
            }} />
          </div>
          <button className="btn btn-small bg-success me-2 text-light">Submit</button>
          <Link to={'/'}><button className="btn btn-small bg-primary text-light">Back</button></Link>
        </form>
      </div>
    </div>
  )
}
export default Create