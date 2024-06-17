import { useEffect, useState } from 'react';
import { getAllUsers } from '../../../services/apiServices';    
const TableUser = (props) => {

    const [listUsers, setListUsers] = useState([
        
    ]);
    
    useEffect( () => {
        fetchListUsers();
    }, [])

    const fetchListUsers = async () => {
        let res = await getAllUsers()
        if(res && res.EC === 0){
            setListUsers(res.DT)
        }
    }

    return(
        <>
<table className="table table-hover table-bordered">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Username</th>
      <th scope="col">email</th>
      <th scope="col">Role</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {listUsers && listUsers.length > 0 && 
    listUsers.map((item, index) => {
        return (
            <tr key={`table-users-${index}`}>
                <th>{index + 1}</th>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
                <td>
                    <button className='btn btn-secondary'>View</button>
                    <button className='btn btn-warning mx-3'>Update</button>
                    <button className='btn btn-danger'>Delete</button>
                </td>
            </tr>
        )
    })
    }
    
    {listUsers && listUsers.length === 0 &&
    <tr>
        <td colSpan="4">No data</td>
    </tr>
    }
  </tbody>
</table>
        </>
    )       
}

export default TableUser;