import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link} from 'react-router-dom'

const ListPets = () => {
    const [pets, setPets] = useState([])
    useEffect(() => {
      axios.get("http://localhost:8000/api/pets")
        .then(res => {
          console.log(res.data)
          setPets(res.data)
        })
        .catch(err => console.log(err))
    }, [])
  return (
    <div className="container">
      
      <div >
        <h1>Pet Shelter</h1>
        <p>These pets are looking for a good home</p></div>
      <div>
        <Link to={`/pets/new`}>Add a pet </Link>
      </div>
      
      <div>
        <table className="table">
          <thead>
            <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Actions</th></tr>
          </thead>
          <tbody>
            {pets.map((onepet) => {
              return (
                <tr key={onepet._id}>
                  <td>{onepet.name}</td>
                  <td>{onepet.type}</td>
                  <td><Link to={`/pets/${onepet._id}`}>Details </Link>|<Link to={`/pets/${onepet._id}/edit`}>Edit </Link> </td>
                </tr>
              )
            })}
          </tbody>

        </table>
      </div>


    </div>
  )
}

export default ListPets