import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

function handleDelete(id){
  const confirm = window.confirm('Would you like to delete this?')
  if(confirm){ 
    axios.delete(`http://localhost:3000/users/${id}`).then((res)=>{
      location.reload()
    })
  }
  
}
  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
      <h1>List of Users</h1>
      <div className="w-75 rounded bg-white border shadow p-4">
        <div className="d-flex justify-content-end">
          <Link to={"/create"}>
            <button className="btn btn-small bg-success text-light">
              Add +
            </button>
          </Link>
        </div>
        <table className="table table-striped rounded">
          <thead>
            <tr>
              <th>S/N</th>
              <th>ID</th>
              <th>Names</th>
              <th>User</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.username}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>
                  <Link to={`/read/${data.id}`} className="btn btn-small btn-info me-2">Read</Link>
                 <Link to={`/update/${data.id}`} className="btn btn-small btn-primary me-2">Edit</Link>
                  <button onClick={()=> handleDelete(data.id)} className="btn btn-small btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Home;
