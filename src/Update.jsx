import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

function Update(){
  const [value, setValue]= useState({
    name:'',
    username:'',
    email:'',
    phone:''
  })
  const {id} = useParams()
  
  useEffect(()=>{
axios.get(`http://localhost:3000/users/${id}`).then((res)=>{setValue(res.data)}).catch((err)=>console.log(err)
)
  },[])
const navigate = useNavigate()
  function handleUpdate(event){
    event.preventDefault()
    axios.put(`http://localhost:3000/users/${id}`,value).then(((res)=>{
      console.log(res);
      navigate('/')
      
    }))
    
  }

  

    return (
      <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
          <h1>Update User</h1>
          <form onSubmit={handleUpdate}>
            <div className='mb-2'>
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" className='form-control' placeholder='Enter Name' value={value.name} onChange={(event)=>{
  
              setValue({...value,name:event.target.value})}} />
            </div>
            <div className='mb-2'>
              <label htmlFor="email">Username:</label>
              <input type="text" name="name" className='form-control' placeholder='Username' value={value.username} onChange={(event)=>{
                setValue({...value, username:event.target.value})
              }} />
            </div>
            <div className='mb-2'>
              <label htmlFor="email">Email:</label>
              <input type="email" name="name" className='form-control' placeholder='Email' value={value.email} onChange={(event)=>{
                setValue({...value, email:event.target.value})
              }} />
            </div>
            <div className='mb-3'>
              <label htmlFor="phone">Phone:</label>
              <input type="text" name="name" className='form-control' placeholder='Phone Number' value={value.phone} onChange={(event)=>{
                setValue({...value,phone:event.target.value})
              }} />
            </div>
            <button className="btn btn-small bg-success me-2 text-light">Submit</button>
            <Link to={'/'}><button className="btn btn-small bg-primary text-light">Back</button></Link>
          </form>
        </div>
      </div>
    )
  
}
export default Update;
