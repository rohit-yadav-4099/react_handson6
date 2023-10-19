
import React from "react";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Store from "./StoreData";
import Student from "./Student";


function EditStudent(){
    const editData = useContext(Store)
    
    const index = useParams().id;
    console.log(editData);
    console.log(index);
    console.log(editData.data[index]);


    const updateData = {
        name: editData.data[index].name,
        age:editData.data[index].age,
        course:editData.data[index].course,
        batch:editData.data[index].batch
    }
    const handleChange =(e) =>{
        updateData [e.target.name] = e.target.value;
    }
    const Navi = useNavigate();
    const handleSubmit = () =>{
        console.log(updateData);
        editData.data[index] = updateData;
        Navi('/student')
    }
    return(
        <>
        <h1 className="edit">Edit student</h1>
            <div className="newstudent">    
                <label>Name:</label>
                <input className="name2" type="text" placeholder={editData.data[index].name} name="name" onChange={handleChange}></input>
                <label>Age:</label>
                <input className="age2" type="number" placeholder={editData.data[index].age} name="age" onChange={handleChange}></input><br></br>
                <label>Course:</label>
                <input className="course2" type="text" placeholder={editData.data[index].course} name="course" onChange={handleChange}></input>
                <label>Batch:</label>
                <input className="batch2" type="text" placeholder={editData.data[index].batch} name="batch" onChange={handleChange}></input><br></br>
            </div>
            <div className="button">
                <button className="cancle" onClick={() => Navi('/student')}>Cancle</button>
                <button className="Submit" onClick={ handleSubmit}>Update</button>
            </div>
        </>
    )
}
export default EditStudent;