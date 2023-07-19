import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const NewPet = () => {
    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [description, setDescription] = useState("")
    const [skills, setSkills] = useState([])
    const [errors, setErrors] = useState([])
    const [errorObject, setErrorObject] = useState({})
    const nav = useNavigate()
    const handleSkillChange = (e, index) => {
        const newSkills = [...skills];
        newSkills[index] = e.target.value;
        setSkills(newSkills);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const newPet = {
            name: name,
            type: type,
            description: description,
            skills: [skills[0], skills[1], skills[2]]
        };
        axios.post("http://localhost:8000/api/pets/new", newPet)
            .then((res) => {
                console.log(res, "success pet add")
                console.log(newPet)
                nav("/")
            })
            .catch((err) => {
                console.log(err)
                console.log(err.response.data)
                setErrorObject(err.response.data.errors)
                // const errorResponse = err.response.data.errors
                const errorArr =[]
                 for (const key of Object.keys(err.response.data.errors)) {
                  errorArr.push(err.response.data.errors[key].message)
                 }
                console.log("==============",errorArr)
                setErrors(errorArr)
            })
        // Reset the form fields
        setName('');
        setType('');
        setDescription('');
        setSkills(['', '', '']);
    }




    return (
        <div className='container'>
            <div >
                <h1>Pet Shelter</h1>
                <p>Know a pet needing a home?</p></div>
            <div>
                <Link to={`/`}> Back to Home </Link>
            </div>
            <form onSubmit={handleSubmit} >
                <div className="mb-3">
                    <label className='form-label'>Pet Name :</label>
                    <input type="text" onChange={(e) => { setName(e.target.value) }} value={name} />
                    {errorObject.name?<p className='text-danger'>{errorObject.name.message}</p>:""}
                </div>
                <div className="mb-3">
                    <label className='form-label'>Pet Type :</label>
                    <input type="text" onChange={(e) => { setType(e.target.value) }} value={type} />
                    {errorObject.type?<p className='text-danger'>{errorObject.type.message}</p>:""}
                </div>


                <div className="mb-3">
                    <label className="form-label">Description :</label>
                    <textarea className="form-control" rows="2" onChange={(e) => { setDescription(e.target.value) }} value={description}></textarea>
                    {errorObject.description?<p className='text-danger'>{errorObject.description.message}</p>:""}
                </div>
                <div className="mb-3" style={{ display: 'flex', flexDirection: 'column' }}>
                    <label className='form-label'>Skills (Optional) :</label>
                    <label> Skill 1:</label>
                    <input type="text" name="skills[0]" onChange={(e) => handleSkillChange(e, 0)} value={skills[0]} />
                    <label> Skill 2:</label>
                    <input type="text" name="skills[1]" onChange={(e) => handleSkillChange(e, 1)} value={skills[1]} />
                    <label> Skill 3:</label>
                    <input type="text" name="skills[2]" onChange={(e) => handleSkillChange(e, 2)} value={skills[2]} />
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary">Add Pet</button>
                </div>

            </form>
        </div>
    )
}

export default NewPet