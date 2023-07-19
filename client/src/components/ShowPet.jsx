import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
// import LikeButton from './LikeButton'
const ShowPet = () => {
  const [pet, setPet] = useState({})
  const { id } = useParams();
  const [like, setLike] = useState(0)
  const incrementLikes = () => {
    setLike(like + 1)
  }
  useEffect(() => {
    axios.get('http://localhost:8000/api/pets/' + id)
      .then(res => {
        console.log(res.data);
        setPet(res.data)
      })
      .catch(err => console.error(err));
  }, [id, setPet]);
  const Navigate = useNavigate()
  const AdoptPet = (id) => {
    axios.delete("http://localhost:8000/api/pets/" + id)
      .then((res) => {
        Navigate("/")
        console.log(res, "success pet adopted")
      })
      .catch((err) => {
        console.log(err)
      })
  }


  return (
    <div className='container'>
      <div >
        <h1>Pet Shelter</h1>
        <p>Details about : {pet.name}</p></div>
      <div>
        <Link to={`/`}> Back to Home </Link>
      </div>
      <div>
        <button onClick={() => { AdoptPet(`${pet._id}`) }}>Adopt {pet.name} </button>
      </div>
      <div>
        <h5>pet type :</h5>{pet.type}
        <h5>Description :</h5> {pet.description}
        <h5>Skills:</h5>
        {pet.skills && pet.skills.length > 0 ? (
          <ul>
            {pet.skills.map((skill, index) => {
              return skill ? <li key={index}>{skill}</li> : "";
            })}
          </ul>
        ) : (
          <p>No skills available</p>
        )}

       
      </div>
      <div>
        <button onClick={incrementLikes}>{like} Like</button>
        {/* <LikeButton/> */}
  
        </div>
    </div>
  )
}

export default ShowPet